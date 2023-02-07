import * as Core from "@actions/core"
import * as Dotenv from "dotenv"
import * as Gist from "./Gist"
import { GistDeploy, LiveGistDeploy } from "./GistDeploy"
import * as Git from "./Git"
import * as Github from "./Github"
import { nonEmptySecret, nonEmptyString } from "./utils/config"

Dotenv.config()

const GitLive = Git.makeLayer({
  userName: nonEmptyString("github_actor"),
  userEmail: nonEmptyString("github_actor").map(
    _ => `${_}@users.noreply.github.com`,
  ),
})

const GeneralGithubLive = Github.makeLayer(
  Config.struct({
    token: nonEmptySecret("github_token").orElse(nonEmptySecret("gist_token")),
  }).nested("input"),
)

const GistGithubLive = Github.makeLayer(
  Config.struct({
    token: nonEmptySecret("gist_token"),
  }).nested("input"),
)

const GistLive = (GitLive + GistGithubLive) >> Gist.GistLive

const EnvLive = (GeneralGithubLive + GistLive) >> LiveGistDeploy

const program = Do($ => {
  const deploy = $(GistDeploy.access)

  const { path, gistId } = $(
    Config.struct({
      gistId: nonEmptyString("gist_id").optional,
      path: nonEmptyString("path"),
    }).nested("input").config,
  )

  const [id, url] = $(deploy.upsert(path, gistId))

  console.log(`Gist URL: ${url}`)

  Core.setOutput("gist_id", id)
  Core.setOutput("gist_url", url)
})

program
  .provideLayer(EnvLive)
  .withConfigProvider(ConfigProvider.fromEnv().upperCase)
  .tapErrorCause(_ =>
    Effect(() => {
      console.error(_.squash)
    }),
  )
  .runMain()

import * as Core from "@actions/core"
import * as Dotenv from "dotenv"
import * as Gist from "./Gist"
import { GistDeploy, LiveGistDeploy } from "./GistDeploy"
import * as Git from "./Git"
import * as Github from "./Github"

Dotenv.config()

const GitLive = Git.makeLayer({
  userName: Config.string("github_actor"),
  userEmail: Config.string("github_actor").map(
    (_) => `${_}@users.noreply.github.com`,
  ),
})

const GeneralGithubLive = Github.makeLayer(
  Config.struct({
    token: Config.secret("github_token").orElse(Config.secret("gist_token")),
  }).nested("input"),
)

const GistGithubLive = Github.makeLayer(
  Config.struct({
    token: Config.secret("gist_token"),
  }).nested("input"),
)

const GistLive = (GitLive + GistGithubLive) >> Gist.GistLive

const EnvLive = (GeneralGithubLive + GistLive) >> LiveGistDeploy

const program = Do(($) => {
  const deploy = $(GistDeploy.access)

  const { path, gistId } = $(
    Config.struct({
      gistId: Config.string("gist_id").optional,
      path: Config.string("path"),
    }).nested("input").config,
  )
  console.log({ path, gistId })

  const [id, url] = $(deploy.upsert(path, gistId))

  console.log(`Gist URL: ${url}`)

  Core.setOutput("gist_id", id)
  Core.setOutput("gist_url", url)
})

program
  .provideLayer(EnvLive)
  .withConfigProvider(ConfigProvider.fromEnv().upperCase)
  .tapErrorCause((_) =>
    Effect(() => {
      console.error(_.squash)
    }),
  )
  .runMain()

import * as Core from "@actions/core"
import { runMain } from "@effect/node/Runtime"
import * as Dotenv from "dotenv"
import * as Gist from "./Gist"
import { GistDeploy, LiveGistDeploy } from "./GistDeploy"
import * as Git from "./Git"
import * as Github from "./Github"
import { input, inputSecret, nonEmptyString } from "./utils/config"

Dotenv.config()

const GitLive = Git.makeLayer({
  userName: nonEmptyString("github_actor"),
  userEmail: nonEmptyString("github_actor").map(
    _ => `${_}@users.noreply.github.com`,
  ),
})

const GeneralGithubLive = Github.makeLayer({
  token: inputSecret("github_token"),
})

const GistGithubLive = Github.makeLayer({
  token: inputSecret("gist_token"),
})

const GistLive = (GitLive + GistGithubLive) >> Gist.GistLive

const EnvLive = (GeneralGithubLive + GistLive) >> LiveGistDeploy

const program = Do($ => {
  const deploy = $(GistDeploy.access)

  const path = $(input("path").config)
  const gistId = $(input("gist_id").optional.config)

  const [id, url] = $(deploy.upsert(path, gistId))

  console.log(`Gist URL: ${url}`)

  Core.setOutput("gist_id", id)
  Core.setOutput("gist_url", url)
})

runMain(
  program
    .provideLayer(EnvLive)
    .withConfigProvider(ConfigProvider.fromEnv().upperCase)
    .tapErrorCause(_ =>
      Effect(() => {
        console.error(_.squash)
      }),
    ),
)

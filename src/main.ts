import { Gist, GistLive } from "./Gist"
import * as Git from "./Git"
import * as Github from "./Github"
import * as Dotenv from "dotenv"
import * as Core from "@actions/core"
import { runMain } from "@effect/node/Runtime"

Dotenv.config()

const GitLive = Git.makeLayer({
  userName: Config.string("github_actor"),
  userEmail: Config.string("github_actor").map(
    (_) => `${_}@users.noreply.github.com`,
  ),
  git: Config.succeed({}),
})

const GithubLive = Github.makeLayer(
  Config.struct({
    token: Config.secret("token"),
  }).nested("input"),
)

const EnvLive = (GitLive + GithubLive) >> GistLive

const program = Do(($) => {
  const gist = $(Gist.access)

  const { name, path, gistId } = $(
    Config.struct({
      gistId: Config.string("gist_id").optional,
      name: Config.string("name").optional,
      path: Config.string("path"),
    }).nested("input").config,
  )

  const info = $(
    gistId.match(
      () => gist.createAndAdd(path, name),
      (id) => gist.cloneAndAdd(id, path),
    ),
  )

  $(Effect.logInfo(`Gist URL: ${info.html_url}`))

  Core.setOutput("gist_id", info.id!)
  Core.setOutput("gist_url", info.html_url!)
})

runMain(
  program
    .provideLayer(EnvLive)
    .withConfigProvider(ConfigProvider.fromEnv().upperCase)
    .catchAllCause((_) =>
      Effect(() => {
        console.error(_.squash)
      }),
    ),
)

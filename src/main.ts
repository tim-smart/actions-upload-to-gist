import * as Dotenv from "dotenv"

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

const GistLive = (GitLive + GithubLive) >> Gist.GistLive

const program = Do(($) => {
  const gist = $(Gist.Gist.access)

  const { name, path } = $(
    Config.struct({
      name: Config.string("name").optional,
      path: Config.string("path"),
    }).nested("input").config,
  )

  const info = $(gist.createAndAdd(path, name.getOrUndefined))

  $(Effect.logInfo(`Created gist: ${info.html_url}`))
})

program
  .provideLayer(GistLive)
  .withConfigProvider(ConfigProvider.fromEnv().upperCase)
  .runCallback((exit) => {
    if (exit.isFailure()) {
      console.log(exit.cause.squash)
    }
  })

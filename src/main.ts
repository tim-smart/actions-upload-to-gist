import * as Dotenv from "dotenv"

Dotenv.config()

const GitLive = Git.makeLayer({
  userName: Config.string("github_actor"),
  userEmail: Config.string("github_actor").map(
    (_) => `${_}@users.noreply.github.com`,
  ),
})

const GithubLive = Github.makeLayer(
  Config.struct({
    token: Config.secret("token"),
  }).nested("input"),
)

const GistLive = (GitLive + GithubLive) >> Gist.GistLive

const program = Gist.Gist.accessWithEffect((_) => _.createAndAdd("tmp"))

program
  .provideLayer(GistLive)
  .withConfigProvider(ConfigProvider.fromEnv().upperCase)
  .runCallback((exit) => {
    if (exit.isFailure()) {
      console.log(exit.cause.squash)
    }
  })

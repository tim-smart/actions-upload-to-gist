import * as SG from "simple-git"

export class GitError {
  readonly _tag = "GitError"
  constructor(readonly error: SG.GitError) {}
}

export interface GitConfig extends Partial<SG.SimpleGitOptions> {
  git?: Partial<SG.SimpleGitOptions>
  userName: string
  userEmail: string
}

const make = ({ git: opts = {}, userName, userEmail }: GitConfig) =>
  Do(($) => {
    const git = SG.simpleGit(opts)

    const run = <A>(f: (git: SG.SimpleGit) => Promise<A>) =>
      Effect.tryCatchPromise(
        () => f(git),
        (error) => new GitError(error as any),
      )

    $(run((_) => _.addConfig("user.name", userName, false, "global")))
    $(run((_) => _.addConfig("user.email", userEmail, false, "global")))

    return { git, run }
  })

export interface Git extends Effect.Success<ReturnType<typeof make>> {}
export const Git = Tag<Git>()
export const makeLayer = (_: Config.Wrap<GitConfig>) =>
  Config.unwrap(_).config.flatMap(make).toLayer(Git)

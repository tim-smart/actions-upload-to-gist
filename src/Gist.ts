import { Github } from "./Github.js"
import { RunnerEnv, RunnerEnvLive } from "./Runner.js"

const make = Do(($) => {
  const github = $(Github.access)
  const git = $(Git.Git.access)
  const runner = $(RunnerEnv.access)
  const fs = $(Fs.Fs.access)

  const create = github.wrap((_) => _.gists.create)

  const createBlank = (name = "Z.EMPTY", isPublic = false) =>
    create({
      files: {
        [name]: {
          content: "Nothing here yet",
        },
      },
      public: isPublic,
    }).map((_) => _.data)

  const clone = (id: string) =>
    Do(($) => {
      const dir = $(runner.mkTmpDir(id))

      return $(
        git.clone(
          `https://${github.token.value}@gist.github.com/${id}.git`,
          dir,
        ),
      )
    })

  const cloneAndAdd = (id: string, path: string) =>
    Do(($) => {
      const git = $(clone(id))
      $(fs.copyFileOrDir(path, git.path))
      $(git.run((_) => _.add(".").commit(`Add ${path}`).push("origin", "main")))
    })

  const createAndAdd = (path: string, name?: string) =>
    Do(($) => {
      const gist = $(createBlank(name))
      $(cloneAndAdd(gist.id!, path))
      return gist
    })

  return { create, createBlank, clone, cloneAndAdd, createAndAdd }
})

export interface Gist extends Effect.Success<typeof make> {}
export const Gist = Tag<Gist>()
export const GistLive = (RunnerEnvLive + Fs.FsLive) >> make.toLayer(Gist)

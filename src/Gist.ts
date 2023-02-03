import { Github } from "./Github.js"
import { RunnerEnv, RunnerEnvLive } from "./Runner.js"

const make = Do(($) => {
  const github = $(Github.access)
  const git = $(Git.Git.access)
  const runner = $(RunnerEnv.access)
  const fs = $(Fs.Fs.access)

  const create = github.wrap((_) => _.gists.create)

  const createBlank = (isPublic = false) =>
    create({
      files: {
        ".EMPTY": {
          content: "Nothing here yet",
        },
      },
      public: isPublic,
    }).map((_) => _.data)

  const clone = (id: string) =>
    Do(($) => {
      const dir = $(runner.mkTmpDir(id))

      $(
        git.run((_) =>
          _.clone(
            `https://${github.token.value}@gist.github.com/${id}.git`,
            dir,
            { "--depth": 1 },
          ),
        ),
      )

      return dir
    })

  const cloneAndAdd = (id: string, path: string) =>
    Do(($) => {
      const dir = $(clone(id))
      $(fs.copyFileOrDir(path, dir))
      $(git.run((_) => _.add(".").commit(`Add ${path}`).push("origin", "main")))
    })

  const createAndAdd = (path: string) =>
    Do(($) => {
      const gist = $(createBlank())
      $(cloneAndAdd(gist.id!, path))
    })

  return { create, createBlank, clone, cloneAndAdd, createAndAdd }
})

export interface Gist extends Effect.Success<typeof make> {}
export const Gist = Tag<Gist>()
export const GistLive = (RunnerEnvLive + Fs.FsLive) >> make.toLayer(Gist)

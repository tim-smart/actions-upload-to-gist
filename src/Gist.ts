import { Fs, FsLive } from "./Fs.js"
import { Git } from "./Git.js"
import { Github } from "./Github.js"
import { RunnerEnv, RunnerEnvLive } from "./Runner.js"

const make = Do(($) => {
  const github = $(Github.access)
  const git = $(Git.access)
  const runner = $(RunnerEnv.access)
  const fs = $(Fs.access)

  const create = github.wrap((_) => _.gists.create)
  const get = github.wrap((_) => _.gists.get)

  const createBlank = (isPublic = false) =>
    create({
      files: {
        ".EMPTY": {
          content: "Nothing here yet",
        },
      },
      public: isPublic,
    })

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
      $(git.run((_) => _.rm(".EMPTY")).ignore)
      $(git.run((_) => _.add(".").commit(`Add ${path}`).push("origin", "main")))
      return $(get({ gist_id: id }))
    })

  const createAndAdd = (path: string) =>
    Do(($) => {
      const gist = $(createBlank())
      $(cloneAndAdd(gist.id!, path))
      return $(get({ gist_id: gist.id! }))
    })

  return { create, createBlank, clone, cloneAndAdd, createAndAdd }
})

export interface Gist extends Effect.Success<typeof make> {}
export const Gist = Tag<Gist>()
export const GistLive = (RunnerEnvLive + FsLive) >> make.toLayer(Gist)

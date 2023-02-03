import * as NFS from "node:fs"
import * as Path from "path"

export class FsError {
  readonly _tag = "FsError"
  constructor(readonly error: NodeJS.ErrnoException) {}
}

const make = () => {
  const stat = (path: string) =>
    Effect.async<never, FsError, NFS.Stats>((resume) => {
      NFS.stat(path, (err, stats) => {
        if (err) {
          resume(Effect.fail(new FsError(err)))
        } else {
          resume(Effect.succeed(stats))
        }
      })
    })

  const readdir = (path: string) =>
    Effect.async<never, FsError, NFS.Dirent[]>((resume) => {
      NFS.readdir(path, { withFileTypes: true }, (err, files) => {
        if (err) {
          resume(Effect.fail(new FsError(err)))
        } else {
          resume(Effect.succeed(files))
        }
      })
    })

  const copyFile = (path: string, dest: string) =>
    Effect.async<never, FsError, void>((resume) => {
      NFS.copyFile(path, dest, (err) => {
        if (err) {
          resume(Effect.fail(new FsError(err)))
        } else {
          resume(Effect.unit())
        }
      })
    })

  const copyDir = (path: string, dest: string) =>
    Do(($) => {
      const entries = $(readdir(path))
      const files = entries.filter((_) => !_.isDirectory()).map((_) => _.name)
      const copies = files.map((_) =>
        copyFile(Path.join(path, _), Path.join(dest, _)),
      )
      $(Effect.collectAllParDiscard(copies))
    })

  const copyFileOrDir = (path: string, dest: string) =>
    Do(($) => {
      const pathStat = $(stat(path))

      $(
        pathStat.isDirectory()
          ? copyDir(path, dest)
          : copyFile(path, Path.join(dest, Path.basename(path))),
      )
    })

  const mkdir = (path: string) =>
    Effect.async<never, FsError, void>((resume) => {
      NFS.mkdir(path, (err) => {
        if (err) {
          resume(Effect.fail(new FsError(err)))
        } else {
          resume(Effect.unit())
        }
      })
    })

  return {
    stat,
    readdir,
    mkdir,
    copyFile,
    copyDir,
    copyFileOrDir,
  }
}

export interface Fs extends ReturnType<typeof make> {}
export const Fs = Tag<Fs>()
export const FsLive = Layer.sync(Fs, make)

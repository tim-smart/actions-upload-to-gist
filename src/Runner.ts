import * as OS from "node:os"
import * as Path from "node:path"

export class FsError {
  readonly _tag = "FsError"
  constructor(readonly reason: unknown) {}
}

export const make = Do(($) => {
  const fs = $(Fs.Fs.access)
  const runnerTemp = $(Config.string("RUNNER_TEMP").optional.config)
  const tmpDir = runnerTemp.getOrElse(OS.tmpdir)

  const mkTmpDir = (path: string) => {
    const dir = Path.join(tmpDir, path)
    return fs.mkdir(dir).as(dir)
  }

  return { tmpDir, mkTmpDir }
})

export interface RunnerEnv extends Effect.Success<typeof make> {}
export const RunnerEnv = Tag<RunnerEnv>()
export const RunnerEnvLive = Fs.FsLive >> make.toLayer(RunnerEnv)

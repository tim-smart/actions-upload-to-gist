import * as OS from "node:os"
import * as Path from "node:path"
import { Fs, FsLive } from "./Fs"

export const make = Do(($) => {
  const fs = $(Fs.access)
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
export const RunnerEnvLive = FsLive >> make.toLayer(RunnerEnv)

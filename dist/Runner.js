import * as tsplus_module_1 from "@effect/io/Effect";
import * as tsplus_module_2 from "@fp-ts/core/Option";
import * as tsplus_module_3 from "@effect/io/Config";
import * as tsplus_module_4 from "actions-upload-to-gist/_common";
import * as tsplus_module_5 from "@fp-ts/data/Context";
import * as tsplus_module_6 from "@effect/io/Layer";
import * as OS from "node:os";
import * as Path from "node:path";
export class FsError {
    reason;
    _tag = "FsError";
    constructor(reason) {
        this.reason = reason;
    }
}
export const make = tsplus_module_1.flatMap(tsplus_module_1.service(tsplus_module_4.Fs.Fs), fs => tsplus_module_1.map(tsplus_module_1.config(tsplus_module_3.optional(tsplus_module_3.string("RUNNER_TEMP"))), runnerTemp => {
    const tmpDir = tsplus_module_2.getOrElse(OS.tmpdir)(runnerTemp);
    const mkTmpDir = (path) => {
        const dir = Path.join(tmpDir, path);
        return tsplus_module_1.as(fs.mkdir(dir), dir);
    };
    return { tmpDir, mkTmpDir };
}));
export const RunnerEnv = tsplus_module_5.Tag();
export const RunnerEnvLive = tsplus_module_6.provide(tsplus_module_1.toLayer(make, RunnerEnv))(tsplus_module_4.Fs.FsLive);
//# sourceMappingURL=Runner.js.map
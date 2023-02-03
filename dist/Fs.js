import * as tsplus_module_1 from "@effect/io/Effect";
import * as tsplus_module_2 from "@fp-ts/data/Context";
import * as tsplus_module_3 from "@effect/io/Layer";
import * as NFS from "node:fs";
import * as Path from "path";
export class FsError {
    error;
    _tag = "FsError";
    constructor(error) {
        this.error = error;
    }
}
const make = () => {
    const stat = (path) => tsplus_module_1.async((resume) => {
        NFS.stat(path, (err, stats) => {
            if (err) {
                resume(tsplus_module_1.fail(new FsError(err)));
            }
            else {
                resume(tsplus_module_1.succeed(stats));
            }
        });
    });
    const readdir = (path) => tsplus_module_1.async((resume) => {
        NFS.readdir(path, { withFileTypes: true }, (err, files) => {
            if (err) {
                resume(tsplus_module_1.fail(new FsError(err)));
            }
            else {
                resume(tsplus_module_1.succeed(files));
            }
        });
    });
    const copyFile = (path, dest) => tsplus_module_1.async((resume) => {
        NFS.copyFile(path, dest, (err) => {
            if (err) {
                resume(tsplus_module_1.fail(new FsError(err)));
            }
            else {
                resume(tsplus_module_1.unit());
            }
        });
    });
    const copyDir = (path, dest) => tsplus_module_1.flatMap(readdir(path), entries => {
        const files = entries.filter((_) => !_.isDirectory()).map((_) => _.name);
        const copies = files.map((_) => copyFile(Path.join(path, _), Path.join(dest, _)));
        return tsplus_module_1.map(tsplus_module_1.collectAllParDiscard(copies), () => void 0);
    });
    const copyFileOrDir = (path, dest) => tsplus_module_1.flatMap(stat(path), pathStat => tsplus_module_1.map(pathStat.isDirectory()
        ? copyDir(path, dest)
        : copyFile(path, Path.join(dest, Path.basename(path))), () => void 0));
    const mkdir = (path) => tsplus_module_1.async((resume) => {
        NFS.mkdir(path, (err) => {
            if (err) {
                resume(tsplus_module_1.fail(new FsError(err)));
            }
            else {
                resume(tsplus_module_1.unit());
            }
        });
    });
    return {
        stat,
        readdir,
        mkdir,
        copyFile,
        copyDir,
        copyFileOrDir,
    };
};
export const Fs = tsplus_module_2.Tag();
export const FsLive = tsplus_module_3.sync(Fs, make);
//# sourceMappingURL=Fs.js.map
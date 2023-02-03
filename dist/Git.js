import * as tsplus_module_1 from "@fp-ts/data/Context";
import * as tsplus_module_2 from "@effect/io/Effect";
import * as tsplus_module_3 from "@effect/io/Config";
import * as SG from "simple-git";
export class GitError {
    error;
    _tag = "GitError";
    constructor(error) {
        this.error = error;
    }
}
export const GitRepo = tsplus_module_1.Tag();
const make = ({ git: opts = {}, userName, userEmail }) => {
    const clone = (url, dir) => tsplus_module_2.map(tsplus_module_2.tryCatchPromise(() => SG.simpleGit(opts).clone(url, dir), (error) => new GitError(error)), () => {
        const git = SG.simpleGit(dir, opts);
        const run = (f) => tsplus_module_2.tryCatchPromise(() => f(git), (error) => new GitError(error));
        run((_) => _.addConfig("user.name", userName).addConfig("user.email", userEmail));
        return { git, run, path: dir };
    });
    return { clone };
};
export const Git = tsplus_module_1.Tag();
export const makeLayer = (_) => tsplus_module_2.toLayer(tsplus_module_2.map(tsplus_module_2.config(tsplus_module_3.unwrap(_)), make), Git);
//# sourceMappingURL=Git.js.map
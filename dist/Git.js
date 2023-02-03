import * as tsplus_module_1 from "@effect/io/Effect";
import * as tsplus_module_2 from "@fp-ts/data/Context";
import * as tsplus_module_3 from "@effect/io/Config";
import * as SG from "simple-git";
export class GitError {
    error;
    _tag = "GitError";
    constructor(error) {
        this.error = error;
    }
}
const make = ({ git: opts = {}, userName, userEmail }) => (() => {
    const git = SG.simpleGit(opts);
    const run = (f) => tsplus_module_1.tryCatchPromise(() => f(git), (error) => new GitError(error));
    return tsplus_module_1.flatMap(run((_) => _.addConfig("user.name", userName, false, "global")), () => tsplus_module_1.map(run((_) => _.addConfig("user.email", userEmail, false, "global")), () => ({ git, run })));
})();
export const Git = tsplus_module_2.Tag();
export const makeLayer = (_) => tsplus_module_1.toLayer(tsplus_module_1.flatMap(tsplus_module_1.config(tsplus_module_3.unwrap(_)), make), Git);
//# sourceMappingURL=Git.js.map
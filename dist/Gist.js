import * as tsplus_module_1 from "@effect/io/Effect";
import * as tsplus_module_2 from "@effect/io/Config/Secret";
import * as tsplus_module_3 from "actions-upload-to-gist/_common";
import * as tsplus_module_4 from "@fp-ts/data/Context";
import * as tsplus_module_5 from "@effect/io/Layer";
import { Github } from "./Github.js";
import { RunnerEnv, RunnerEnvLive } from "./Runner.js";
const make = tsplus_module_1.flatMap(tsplus_module_1.service(Github), github => tsplus_module_1.flatMap(tsplus_module_1.service(tsplus_module_3.Git.Git), git => tsplus_module_1.flatMap(tsplus_module_1.service(RunnerEnv), runner => tsplus_module_1.map(tsplus_module_1.service(tsplus_module_3.Fs.Fs), fs => {
    const create = github.wrap((_) => _.gists.create);
    const createBlank = (name = "Z.EMPTY", isPublic = false) => tsplus_module_1.map(create({
        files: {
            [name]: {
                content: "Nothing here yet",
            },
        },
        public: isPublic,
    }), (_) => _.data);
    const clone = (id) => tsplus_module_1.flatMap(runner.mkTmpDir(id), dir => git.clone(`https://${tsplus_module_2.value(github.token)}@gist.github.com/${id}.git`, dir));
    const cloneAndAdd = (id, path) => tsplus_module_1.flatMap(clone(id), git => tsplus_module_1.flatMap(fs.copyFileOrDir(path, git.path), () => tsplus_module_1.map(git.run((_) => _.add(".").commit(`Add ${path}`).push("origin", "main")), () => void 0)));
    const createAndAdd = (path, name) => tsplus_module_1.flatMap(createBlank(name), gist => tsplus_module_1.map(cloneAndAdd(gist.id, path), () => gist));
    return { create, createBlank, clone, cloneAndAdd, createAndAdd };
}))));
export const Gist = tsplus_module_4.Tag();
export const GistLive = tsplus_module_5.provide(tsplus_module_1.toLayer(make, Gist))((tsplus_module_5.merge(tsplus_module_3.Fs.FsLive)(RunnerEnvLive)));
//# sourceMappingURL=Gist.js.map
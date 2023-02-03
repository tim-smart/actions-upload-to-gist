import * as tsplus_module_1 from "@effect/io/Config";
import * as tsplus_module_2 from "actions-upload-to-gist/_common";
import * as tsplus_module_3 from "@effect/io/Layer";
import * as tsplus_module_4 from "@effect/io/Effect";
import * as tsplus_module_5 from "@fp-ts/core/Option";
import * as tsplus_module_6 from "@effect/io/Exit";
import * as tsplus_module_7 from "@effect/io/Cause";
import * as tsplus_module_8 from "@effect/io/Config/Provider";
import * as Dotenv from "dotenv";
Dotenv.config();
const GitLive = tsplus_module_2.Git.makeLayer({
    userName: tsplus_module_1.string("github_actor"),
    userEmail: tsplus_module_1.map(tsplus_module_1.string("github_actor"), (_) => `${_}@users.noreply.github.com`),
    git: tsplus_module_1.succeed({}),
});
const GithubLive = tsplus_module_2.Github.makeLayer(tsplus_module_1.nested(tsplus_module_1.struct({
    token: tsplus_module_1.secret("token"),
}), "input"));
const GistLive = tsplus_module_3.provide(tsplus_module_2.Gist.GistLive)((tsplus_module_3.merge(GithubLive)(GitLive)));
const program = tsplus_module_4.flatMap(tsplus_module_4.service(tsplus_module_2.Gist.Gist), gist => tsplus_module_4.flatMap(tsplus_module_4.config(tsplus_module_1.nested(tsplus_module_1.struct({
    name: tsplus_module_1.optional(tsplus_module_1.string("name")),
    path: tsplus_module_1.string("path"),
}), "input")), ({ name, path }) => tsplus_module_4.flatMap(gist.createAndAdd(path, tsplus_module_5.getOrUndefined(name)), info => tsplus_module_4.map(tsplus_module_4.logInfo(`Created gist: ${info.html_url}`), () => void 0))));
tsplus_module_4.runCallback(tsplus_module_4.withConfigProvider(tsplus_module_4.provideLayer(program, GistLive), tsplus_module_8.upperCase(tsplus_module_8.fromEnv())), (exit) => {
    if (tsplus_module_6.isFailure(exit)) {
        console.log(tsplus_module_7.squash(exit.cause));
    }
});
//# sourceMappingURL=main.js.map
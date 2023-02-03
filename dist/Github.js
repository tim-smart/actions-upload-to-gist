import * as tsplus_module_1 from "@effect/io/Config/Secret";
import * as tsplus_module_2 from "@effect/io/Effect";
import * as tsplus_module_3 from "@fp-ts/data/Context";
import * as tsplus_module_4 from "@effect/io/Config";
import { getOctokit } from "@actions/github";
export class GithubError {
    reason;
    _tag = "GithubError";
    constructor(reason) {
        this.reason = reason;
    }
}
const make = ({ token }) => {
    const api = getOctokit(tsplus_module_1.value(token));
    const rest = api.rest;
    const request = (f) => tsplus_module_2.tryCatchPromise(() => f(rest), (reason) => new GithubError(reason));
    const wrap = (f) => (...args) => tsplus_module_2.tryCatchPromise(() => f(rest)(...args), (reason) => new GithubError(reason));
    return { api, token, request, wrap };
};
export const Github = tsplus_module_3.Tag();
export const makeLayer = (_) => tsplus_module_2.toLayer(tsplus_module_2.map(tsplus_module_2.config(tsplus_module_4.unwrap(_)), make), Github);
//# sourceMappingURL=Github.js.map
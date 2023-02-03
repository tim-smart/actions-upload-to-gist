import './sourcemap-register.cjs';import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 717:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(147)
const path = __nccwpck_require__(17)
const os = __nccwpck_require__(37)
const packageJson = __nccwpck_require__(321)

const version = packageJson.version

const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg

// Parser src into an Object
function parse (src) {
  const obj = {}

  // Convert buffer to string
  let lines = src.toString()

  // Convert line breaks to same format
  lines = lines.replace(/\r\n?/mg, '\n')

  let match
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1]

    // Default undefined or null to empty string
    let value = (match[2] || '')

    // Remove whitespace
    value = value.trim()

    // Check if double quoted
    const maybeQuote = value[0]

    // Remove surrounding quotes
    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, '$2')

    // Expand newlines if double quoted
    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, '\n')
      value = value.replace(/\\r/g, '\r')
    }

    // Add to object
    obj[key] = value
  }

  return obj
}

function _log (message) {
  console.log(`[dotenv@${version}][DEBUG] ${message}`)
}

function _resolveHome (envPath) {
  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath
}

// Populates process.env from .env file
function config (options) {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding = 'utf8'
  const debug = Boolean(options && options.debug)
  const override = Boolean(options && options.override)

  if (options) {
    if (options.path != null) {
      dotenvPath = _resolveHome(options.path)
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
  }

  try {
    // Specifying an encoding returns a string instead of a buffer
    const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }))

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key]
      } else {
        if (override === true) {
          process.env[key] = parsed[key]
        }

        if (debug) {
          if (override === true) {
            _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`)
          } else {
            _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`)
          }
        }
      }
    })

    return { parsed }
  } catch (e) {
    if (debug) {
      _log(`Failed to load ${dotenvPath} ${e.message}`)
    }

    return { error: e }
  }
}

const DotenvModule = {
  config,
  parse
}

module.exports.config = DotenvModule.config
module.exports.parse = DotenvModule.parse
module.exports = DotenvModule


/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = eval("require")("actions-upload-to-gist/_common");


/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");

/***/ }),

/***/ 37:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");

/***/ }),

/***/ 321:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}');

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/debug.mjs
/** @internal */
const levels = ["All", "Fatal", "Error", "Warning", "Info", "Debug", "Trace", "None"];
/** @internal */
const restoreOn = body => function () {
  if (runtimeDebug.tracingEnabled) {
    // @ts-expect-error
    return body.apply(this, arguments);
  }
  runtimeDebug.tracingEnabled = true;
  try {
    // @ts-expect-error
    return body.apply(this, arguments);
  } finally {
    runtimeDebug.tracingEnabled = false;
  }
};
/** @internal */
const restoreOff = body => function () {
  if (!runtimeDebug.tracingEnabled) {
    // @ts-expect-error
    return body.apply(this, arguments);
  }
  runtimeDebug.tracingEnabled = false;
  try {
    // @ts-expect-error
    return body.apply(this, arguments);
  } finally {
    runtimeDebug.tracingEnabled = true;
  }
};
const processEnv = typeof process !== "undefined" ? process.env : undefined;
/** @internal */
const runtimeDebug = {
  minumumLogLevel: processEnv && processEnv["EFFECT_LOG_LEVEL"] && /*#__PURE__*/levels.includes(processEnv["EFFECT_LOG_LEVEL"]) ? processEnv["EFFECT_LOG_LEVEL"] : "Info",
  traceStackLimit: processEnv && processEnv["EFFECT_TRACING_STACK_LIMIT"] ? /*#__PURE__*/Number.parseInt(processEnv["EFFECT_TRACING_STACK_LIMIT"]) : 5,
  tracingEnabled: processEnv && processEnv["EFFECT_TRACING_ENABLED"] && processEnv["EFFECT_TRACING_ENABLED"] === "false" ? false : true,
  parseStack: error => {
    const stack = error.stack;
    if (stack) {
      const lines = stack.split("\n");
      let starts = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("Error")) {
          starts = i;
        }
      }
      const frames = [];
      for (let i = starts + 1; i < lines.length; i++) {
        if (lines[i].includes("at")) {
          const blocks = lines[i].split(" ").filter(i => i.length > 0 && i !== "at");
          const name = blocks.length === 2 && !blocks[0].includes("<anonymous>") ? blocks[0] : undefined;
          const file = blocks.length === 2 ? blocks[1] : blocks[0];
          const matchFrame = file?.match(/\(?(.*):(\d+):(\d+)/);
          if (matchFrame) {
            frames.push({
              name,
              fileName: matchFrame[1],
              line: Number.parseInt(matchFrame[2]),
              column: Number.parseInt(matchFrame[3])
            });
          } else {
            frames.push(undefined);
          }
        } else {
          frames.push(undefined);
        }
      }
      return frames;
    }
    return [];
  },
  filterStackFrame: _ => _ != null && !_.fileName.match(/\/internal_effect_untraced/)
};
//# sourceMappingURL=debug.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Debug.mjs
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category debug
 */
const Debug_runtimeDebug = runtimeDebug;
const sourceLocationProto = /*#__PURE__*/Object.setPrototypeOf({
  toFrame() {
    if ("parsed" in this) {
      return this.parsed;
    }
    const stack = Debug_runtimeDebug.parseStack(this);
    if (stack && stack.length >= 2 && stack[0] && stack[1]) {
      this.parsed = {
        ...stack[this.depth - 1],
        name: stack[this.depth - 2]?.name
      };
    } else {
      this.parsed = undefined;
    }
    return this.parsed;
  }
}, Error.prototype);
/**
 * @since 1.0.0
 */
const sourceLocation = error => {
  ;
  error.depth = Error.stackTraceLimit;
  Object.setPrototypeOf(error, sourceLocationProto);
  return error;
};
/**
 * @since 1.0.0
 */
const bodyWithTrace = body => {
  if (!Debug_runtimeDebug.tracingEnabled) {
    return body(void 0, restoreOff);
  }
  Debug_runtimeDebug.tracingEnabled = false;
  try {
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 3;
    const source = sourceLocation(new Error());
    Error.stackTraceLimit = limit;
    return body(source, restoreOn);
  } finally {
    Debug_runtimeDebug.tracingEnabled = true;
  }
};
/**
 * @since 1.0.0
 */
const methodWithTrace = body => {
  // @ts-expect-error
  return function () {
    if (!Debug_runtimeDebug.tracingEnabled) {
      // @ts-expect-error
      return body(void 0, restoreOff).apply(this, arguments);
    }
    Debug_runtimeDebug.tracingEnabled = false;
    try {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const error = sourceLocation(new Error());
      Error.stackTraceLimit = limit;
      // @ts-expect-error
      return body(error, restoreOn).apply(this, arguments);
    } finally {
      Debug_runtimeDebug.tracingEnabled = true;
    }
  };
};
/**
 * @since 1.0.0
 */
const pipeableWithTrace = body => {
  // @ts-expect-error
  return function () {
    if (!Debug_runtimeDebug.tracingEnabled) {
      const a = body(void 0, debug.restoreOff);
      // @ts-expect-error
      return self => untraced(() => a.apply(this, arguments)(self));
    }
    Debug_runtimeDebug.tracingEnabled = false;
    try {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const source = sourceLocation(new Error());
      Error.stackTraceLimit = limit;
      const f = body(source, debug.restoreOn);
      // @ts-expect-error
      return self => untraced(() => f.apply(this, arguments)(self));
    } finally {
      Debug_runtimeDebug.tracingEnabled = true;
    }
  };
};
/**
 * @since 1.0.0
 */
const dual = (dfLen, body) => {
  // @ts-expect-error
  return function () {
    if (arguments.length === dfLen) {
      // @ts-expect-error
      return body.apply(this, arguments);
    }
    return self => body(self, ...arguments);
  };
};
/**
 * @since 1.0.0
 */
const dualWithTrace = (dfLen, body) => {
  // @ts-expect-error
  return function () {
    if (!Debug_runtimeDebug.tracingEnabled) {
      const f = body(void 0, restoreOff);
      if (arguments.length === dfLen) {
        // @ts-expect-error
        return untraced(() => f.apply(this, arguments));
      }
      return self => untraced(() => f(self, ...arguments));
    }
    Debug_runtimeDebug.tracingEnabled = false;
    try {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const source = sourceLocation(new Error());
      Error.stackTraceLimit = limit;
      const f = body(source, restoreOn);
      if (arguments.length === dfLen) {
        // @ts-expect-error
        return untraced(() => f.apply(this, arguments));
      }
      return self => untraced(() => f(self, ...arguments));
    } finally {
      Debug_runtimeDebug.tracingEnabled = true;
    }
  };
};
/**
 * @since 1.0.0
 */
const untraced = body => {
  if (!Debug_runtimeDebug.tracingEnabled) {
    return body(restoreOff);
  }
  Debug_runtimeDebug.tracingEnabled = false;
  try {
    return body(restoreOn);
  } finally {
    Debug_runtimeDebug.tracingEnabled = true;
  }
};
/**
 * @since 1.0.0
 */
const untracedDual = (dfLen, body) => {
  // @ts-expect-error
  return function () {
    if (!Debug_runtimeDebug.tracingEnabled) {
      const f = body(restoreOff);
      if (arguments.length === dfLen) {
        // @ts-expect-error
        return untraced(() => f.apply(this, arguments));
      }
      return self => untraced(() => f(self, ...arguments));
    }
    Debug_runtimeDebug.tracingEnabled = false;
    try {
      const f = body(restoreOn);
      if (arguments.length === dfLen) {
        // @ts-expect-error
        return untraced(() => f.apply(this, arguments));
      }
      return self => untraced(() => f(self, ...arguments));
    } finally {
      Debug_runtimeDebug.tracingEnabled = true;
    }
  };
};
/**
 * @since 1.0.0
 */
const untracedMethod = body => {
  // @ts-expect-error
  return function () {
    if (!Debug_runtimeDebug.tracingEnabled) {
      // @ts-expect-error
      return untraced(() => body(restoreOff).apply(this, arguments));
    }
    Debug_runtimeDebug.tracingEnabled = false;
    try {
      // @ts-expect-error
      return untraced(() => body(restoreOn).apply(this, arguments));
    } finally {
      Debug_runtimeDebug.tracingEnabled = true;
    }
  };
};
/**
 * @since 1.0.0
 */
const traced = body => {
  if (Debug_runtimeDebug.tracingEnabled) {
    return body(debug.restoreOn);
  }
  Debug_runtimeDebug.tracingEnabled = true;
  try {
    return body(debug.restoreOff);
  } finally {
    Debug_runtimeDebug.tracingEnabled = false;
  }
};
//# sourceMappingURL=Debug.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/opCodes/configError.mjs
/** @internal */
const OP_AND = "And";
/** @internal */
const OP_OR = "Or";
/** @internal */
const OP_INVALID_DATA = "InvalidData";
/** @internal */
const OP_MISSING_DATA = "MissingData";
/** @internal */
const OP_SOURCE_UNAVAILABLE = "SourceUnavailable";
/** @internal */
const OP_UNSUPPORTED = "Unsupported";
//# sourceMappingURL=configError.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/Function.mjs

/**
 * @since 1.0.0
 */
const compose = bc => ab => flow(ab, bc);
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate } from '@fp-ts/core/Predicate'
 * import { pipe, getSemigroup } from '@fp-ts/core/Function'
 * import * as B from '@fp-ts/core/Boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.combine(f, g)(1), true)
 * assert.deepStrictEqual(S1.combine(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.combine(f, g)(1), true)
 * assert.deepStrictEqual(S2.combine(f, g)(3), true)
 *
 * @category instances
 * @since 1.0.0
 */
const getSemigroup = Semigroup => () => semigroup.fromCombine((self, that) => a => Semigroup.combine(self(a), that(a)));
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate } from '@fp-ts/core/Predicate'
 * import { getMonoid, pipe } from '@fp-ts/core/Function'
 * import * as B from '@fp-ts/core/Boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.combine(f, g)(1), true)
 * assert.deepStrictEqual(M1.combine(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.combine(f, g)(1), true)
 * assert.deepStrictEqual(M2.combine(f, g)(3), true)
 *
 * @category instances
 * @since 1.0.0
 */
const getMonoid = Monoid => () => {
  const S = getSemigroup(Monoid)();
  const empty = () => Monoid.empty;
  return {
    ...S,
    combineAll: collection => S.combineMany(empty, collection),
    empty
  };
};
/**
 * @since 1.0.0
 */
const apply = a => self => self(a);
/**
 * @since 1.0.0
 */
const Function_identity = a => a;
/**
 * @since 1.0.0
 */
const Function_unsafeCoerce = (/* unused pure expression or super */ null && (Function_identity));
/**
 * @since 1.0.0
 */
const constant = a => () => a;
/**
 * A thunk that returns always `true`.
 *
 * @since 1.0.0
 */
const Function_constTrue = /*#__PURE__*/constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 1.0.0
 */
const Function_constFalse = /*#__PURE__*/constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 1.0.0
 */
const Function_constNull = /*#__PURE__*/(/* unused pure expression or super */ null && (constant(null)));
/**
 * A thunk that returns always `undefined`.
 *
 * @since 1.0.0
 */
const Function_constUndefined = /*#__PURE__*/constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 1.0.0
 */
const Function_constVoid = Function_constUndefined;
/**
 * Flips the arguments of a curried function.
 *
 * @example
 * import { flip } from '@fp-ts/core/Function'
 *
 * const f = (a: number) => (b: string) => a - b.length
 *
 * assert.strictEqual(flip(f)('aaa')(2), -1)
 *
 * @since 1.0.0
 */
const flip = f => b => a => f(a)(b);
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function () {
        return bc(ab.apply(this, arguments));
      };
    case 3:
      return function () {
        return cd(bc(ab.apply(this, arguments)));
      };
    case 4:
      return function () {
        return de(cd(bc(ab.apply(this, arguments))));
      };
    case 5:
      return function () {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };
    case 6:
      return function () {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };
    case 7:
      return function () {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };
    case 8:
      return function () {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };
    case 9:
      return function () {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }
  return;
}
/**
 * @since 1.0.0
 */
const absurd = _ => {
  throw new Error("Called `absurd` function which should be uncallable");
};
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from '@fp-ts/core/Function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 1.0.0
 */
const tupled = f => a => f(...a);
/**
 * Inverse function of `tupled`
 *
 * @since 1.0.0
 */
const untupled = f => (...a) => f(a);
function Function_pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default:
      {
        let ret = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
          ret = arguments[i](ret);
        }
        return ret;
      }
  }
}
/**
 * Type hole simulation
 *
 * @since 1.0.0
 */
const hole = (/* unused pure expression or super */ null && (absurd));
/**
 * `SK` function (SKI combinator calculus).
 *
 * @since 1.0.0
 */
const SK = (_, b) => b;
//# sourceMappingURL=Function.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/internal/effect.mjs
/**
 * @since 1.0.0
 */
/** @internal */
const structural = /*#__PURE__*/Symbol.for("@effect/data/Equal/structural");
/** @internal */
const proto = /*#__PURE__*/Object.setPrototypeOf({
  [structural]: true
}, Object.prototype);
//# sourceMappingURL=effect.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/internal/Option.mjs
/**
 * @since 1.0.0
 */

/** @internal */
const isOption = u => typeof u === "object" && u != null && structural in u && "_tag" in u && (u["_tag"] === "None" || u["_tag"] === "Some");
/** @internal */
const isNone = fa => fa._tag === "None";
/** @internal */
const isSome = fa => fa._tag === "Some";
/** @internal */
const none = /*#__PURE__*/Object.setPrototypeOf({
  _tag: "None"
}, proto);
/** @internal */
const some = a => Object.setPrototypeOf({
  _tag: "Some",
  value: a
}, proto);
/** @internal */
const fromNullable = a => a == null ? none : some(a);
//# sourceMappingURL=Option.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/internal/Either.mjs
/**
 * @since 1.0.0
 */


/** @internal */
const isEither = u => typeof u === "object" && u != null && structural in u && "_tag" in u && (u["_tag"] === "Left" || u["_tag"] === "Right");
/** @internal */
const isLeft = ma => ma._tag === "Left";
/** @internal */
const isRight = ma => ma._tag === "Right";
/** @internal */
const left = e => Object.setPrototypeOf({
  _tag: "Left",
  left: e
}, proto);
/** @internal */
const right = a => Object.setPrototypeOf({
  _tag: "Right",
  right: a
}, proto);
/** @internal */
const getLeft = self => isRight(self) ? none : some(self.left);
/** @internal */
const getRight = self => isLeft(self) ? none : some(self.right);
/** @internal */
const Either_fromNullable = onNullable => a => a == null ? left(onNullable()) : right(a);
/** @internal */
const fromOption = onNone => fa => isNone(fa) ? left(onNone()) : right(fa.value);
//# sourceMappingURL=Either.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Covariant.mjs
/**
 * Returns a default `map` composition.
 *
 * @since 1.0.0
 */
const mapComposition = (F, G) => f => F.map(G.map(f));
/**
 * Returns a default `imap` implementation.
 *
 * @since 1.0.0
 */
const imap = map => (to, _) => map(to);
/**
 * @category constructors
 * @since 1.0.0
 */
const make = map => ({
  map,
  imap: imap(map)
});
/**
 * @category mapping
 * @since 1.0.0
 */
const flap = F => a => F.map(f => f(a));
/**
 * @category mapping
 * @since 1.0.0
 */
const as = F => b => F.map(() => b);
/**
 * @category mapping
 * @since 1.0.0
 */
const asUnit = F => as(F)(undefined);
const let_ = F => (name, f) => F.map(a => Object.assign({}, a, {
  [name]: f(a)
}));

//# sourceMappingURL=Covariant.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Traversable.mjs
/**
 * @since 1.0.0
 */

/**
 * Returns a default `traverse` composition.
 *
 * @since 1.0.0
 */
const traverseComposition = (T, G) => F => f => T.traverse(F)(G.traverse(F)(f));
/**
 * Returns a default `sequence` composition.
 *
 * @since 1.0.0
 */
const sequenceComposition = (T, G) => F => self => T.sequence(F)(pipe(self, T.map(G.sequence(F))));
/**
 * Returns a default `sequence` implementation.
 *
 * @since 1.0.0
 */
const sequence = traverse => F => traverse(F)(Function_identity);
/**
 * Given a function which returns a `F` effect, thread this effect
 * through the running of this function on all the values in `T`,
 * returning an `T<A>` in a `F` context, ignoring the values
 * returned by the provided function.
 *
 * @since 1.0.0
 */
const traverseTap = T => F => f => T.traverse(F)(a => pipe(f(a), F.map(() => a)));
//# sourceMappingURL=Traversable.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/Either.mjs















/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure.
 *
 * @category constructors
 * @since 1.0.0
 */
const Either_right = right;
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure.
 *
 * @category constructors
 * @since 1.0.0
 */
const Either_left = left;
/**
 * Alias of `right`.
 *
 * @category constructors
 * @since 1.0.0
 */
const of = Either_right;
/**
 * Returns `true` if the specified value is an instance of `Either`, `false`
 * otherwise.
 *
 * @category guards
 * @since 1.0.0
 */
const Either_isEither = isEither;
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise.
 *
 * @category guards
 * @since 1.0.0
 */
const Either_isLeft = isLeft;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise.
 *
 * @category guards
 * @since 1.0.0
 */
const Either_isRight = isRight;
/**
 * Returns an effect whose Right is mapped by the specified `f` function.
 *
 * @category mapping
 * @since 1.0.0
 */
const map = f => self => Either_isRight(self) ? Either_right(f(self.right)) : self;
/**
 * @category mapping
 * @since 1.0.0
 */
const Either_imap = /*#__PURE__*/imap(map);
/**
 * @category instances
 * @since 1.0.0
 */
const Invariant = {
  imap: Either_imap
};
/**
 * @category mapping
 * @since 1.0.0
 */
const Either_tupled = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.tupled(Invariant)));
/**
 * @category do notation
 * @since 1.0.0
 */
const bindTo = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.bindTo(Invariant)));
/**
 * @category instances
 * @since 1.0.0
 */
const Covariant = {
  ...Invariant,
  map
};
/**
 * @category mapping
 * @since 1.0.0
 */
const Either_flap = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.flap(Covariant)));
/**
 * Maps the Right value of this effect to the specified constant value.
 *
 * @category mapping
 * @since 1.0.0
 */
const Either_as = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.as(Covariant)));
/**
 * Returns the effect Eithering from mapping the Right of this effect to unit.
 *
 * @category mapping
 * @since 1.0.0
 */
const Either_asUnit = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.asUnit(Covariant)));
const Either_let_ = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.let(Covariant)));

/**
 * Returns an effect whose Left and Right channels have been mapped by
 * the specified pair of functions, `f` and `g`.
 *
 * @category mapping
 * @since 1.0.0
 */
const bimap = (f, g) => self => Either_isLeft(self) ? Either_left(f(self.left)) : Either_right(g(self.right));
/**
 * @category instances
 * @since 1.0.0
 */
const Bicovariant = {
  bimap
};
/**
 * Returns an effect with its error channel mapped using the specified
 * function. This can be used to lift a "smaller" error into a "larger" error.
 *
 * @category error handling
 * @since 1.0.0
 */
const mapLeft = /*#__PURE__*/(/* unused pure expression or super */ null && (bicovariant.mapLeft(Bicovariant)));
/**
 * @category instances
 * @since 1.0.0
 */
const Of = {
  of
};
/**
 * @since 1.0.0
 */
const unit = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.unit(Of)));
/**
 * @category do notation
 * @since 1.0.0
 */
const Do = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.Do(Of)));
/**
 * @category instances
 * @since 1.0.0
 */
const Pointed = {
  ...Of,
  ...Covariant
};
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMap = f => self => Either_isLeft(self) ? self : f(self.right);
/**
 * @category instances
 * @since 1.0.0
 */
const FlatMap = {
  flatMap
};
/**
 * @since 1.0.0
 */
const flatten = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.flatten(FlatMap)));
/**
 * @since 1.0.0
 */
const andThen = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.andThen(FlatMap)));
/**
 * @since 1.0.0
 */
const composeKleisliArrow = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.composeKleisliArrow(FlatMap)));
/**
 * @category instances
 * @since 1.0.0
 */
const Chainable = {
  ...FlatMap,
  ...Covariant
};
/**
 * @category do notation
 * @since 1.0.0
 */
const bind = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.bind(Chainable)));
/**
 * Sequences the specified effect after this effect, but ignores the value
 * produced by the effect.
 *
 * @category sequencing
 * @since 1.0.0
 */
const andThenDiscard = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.andThenDiscard(Chainable)));
/**
 * @category instances
 * @since 1.0.0
 */
const Monad = {
  ...Pointed,
  ...FlatMap
};
const productMany = (self, collection) => {
  if (Either_isLeft(self)) {
    return self;
  }
  const out = [self.right];
  for (const e of collection) {
    if (Either_isLeft(e)) {
      return e;
    }
    out.push(e.right);
  }
  return Either_right(out);
};
/**
 * @category instances
 * @since 1.0.0
 */
const SemiProduct = {
  ...Invariant,
  product: (self, that) => Either_isRight(self) ? Either_isRight(that) ? Either_right([self.right, that.right]) : that : self,
  productMany
};
/**
 * A variant of `bind` that sequentially ignores the scope.
 *
 * @category do notation
 * @since 1.0.0
 */
const andThenBind = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.andThenBind(SemiProduct)));
/**
 * Adds an element to the end of a tuple.
 *
 * @since 1.0.0
 */
const Either_element = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.element(SemiProduct)));
const productAll = collection => {
  const out = [];
  for (const e of collection) {
    if (Either_isLeft(e)) {
      return e;
    }
    out.push(e.right);
  }
  return Either_right(out);
};
/**
 * @category instances
 * @since 1.0.0
 */
const Product = {
  ...Of,
  ...SemiProduct,
  productAll
};
/**
 * @since 1.0.0
 */
const tuple = /*#__PURE__*/(/* unused pure expression or super */ null && (product_.tuple(Product)));
/**
 * @since 1.0.0
 */
const struct = /*#__PURE__*/(/* unused pure expression or super */ null && (product_.struct(Product)));
/**
 * @category instances
 * @since 1.0.0
 */
const SemiApplicative = {
  ...SemiProduct,
  ...Covariant
};
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`.
 *
 * | x        | y        | x |> combine(y)        |
 * | ---------| ---------| -----------------------|
 * | left(a)  | left(b)  | left(a)                |
 * | left(a)  | right(2) | left(a)                |
 * | right(1) | left(b)  | left(b)                |
 * | right(1) | right(2) | right(1 |> combine(2)) |
 *
 * @category combining
 * @since 1.0.0
 */
const getFirstLeftSemigroup = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.liftSemigroup(SemiApplicative)));
/**
 * @category lifting
 * @since 1.0.0
 */
const lift2 = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.lift2(SemiApplicative)));
/**
 * @category lifting
 * @since 1.0.0
 */
const lift3 = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.lift3(SemiApplicative)));
/**
 * @since 1.0.0
 */
const ap = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.ap(SemiApplicative)));
/**
 * @category instances
 * @since 1.0.0
 */
const Applicative = {
  ...SemiApplicative,
  ...Product
};
/**
 * Monoid returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Monoid`.
 *
 * The `empty` value is `right(M.empty)`.
 *
 * @category combining
 * @since 1.0.0
 */
const getFirstLeftMonoid = /*#__PURE__*/(/* unused pure expression or super */ null && (applicative.liftMonoid(Applicative)));
/**
 * @category error handling
 * @since 1.0.0
 */
const firstSuccessOf = collection => self => {
  let out = self;
  if (Either_isRight(out)) {
    return out;
  }
  for (out of collection) {
    if (Either_isRight(out)) {
      return out;
    }
  }
  return out;
};
/**
 * @category instances
 * @since 1.0.0
 */
const SemiCoproduct = {
  ...Invariant,
  coproduct: (self, that) => Either_isRight(self) ? self : that,
  coproductMany: (self, collection) => Function_pipe(self, firstSuccessOf(collection))
};
/**
 * Semigroup returning the left-most `Right` value.
 *
 * | x        | y        | x |> combine(y) |
 * | ---------| ---------| ----------------|
 * | left(a)  | left(b)  | left(b)         |
 * | left(a)  | right(2) | right(2)        |
 * | right(1) | left(b)  | right(1)        |
 * | right(1) | right(2) | right(1)        |
 *
 * @category combining
 * @since 1.0.0
 */
const getFirstRightSemigroup = /*#__PURE__*/(/* unused pure expression or super */ null && (semiCoproduct.getSemigroup(SemiCoproduct)));
/**
 * Returns the wrapped value if it's a `Right` or a default value if is a `Left`.
 *
 * @example
 * import * as E from '@fp-ts/core/Either'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     E.right(1),
 *     E.getOrElse(() => 0)
 *   ),
 *   1
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     E.left('error'),
 *     E.getOrElse(() => 0)
 *   ),
 *   0
 * )
 *
 * @category getters
 * @since 1.0.0
 */
const getOrElse = onLeft => self => Either_isLeft(self) ? onLeft() : self.right;
/**
 * Recovers from all errors.
 *
 * @category error handling
 * @since 1.0.0
 */
const catchAll = onLeft => self => Either_isLeft(self) ? onLeft(self.left) : self;
/**
 * Executes this effect and returns its value, if it succeeds, but otherwise
 * executes the specified effect.
 *
 * | x          | y          | x |> orElse(y) |
 * | ---------- | ---------- | ---------------|
 * | left(a)    | left(b)    | left(b)        |
 * | left(a)    | right(2)   | right(2)       |
 * | right(1)   | left(b)    | right(1)       |
 * | right(1)   | right(2)   | right(1)       |
 *
 * @category error handling
 * @since 1.0.0
 */
const orElse = that => self => Either_isLeft(self) ? that : self;
/**
 * Returns an effect that will produce the value of this effect, unless it
 * fails, in which case, it will produce the value of the specified effect.
 *
 * @category error handling
 * @since 1.0.0
 */
const orElseEither = that => self => Either_isLeft(self) ? pipe(that, map(Either_right)) : pipe(self, map(Either_left));
/**
 * Executes this effect and returns its value, if it succeeds, but otherwise
 * fails with the specified error.
 *
 * @category error handling
 * @since 1.0.0
 */
const orElseFail = onLeft => catchAll(() => Either_left(onLeft()));
/**
 * Executes this effect and returns its value, if it succeeds, but otherwise
 * succeeds with the specified value.
 *
 * @category error handling
 * @since 1.0.0
 */
const orElseSucceed = onLeft => catchAll(() => Either_right(onLeft()));
/**
 * @category instances
 * @since 1.0.0
 */
const SemiAlternative = {
  ...Covariant,
  ...SemiCoproduct
};
/**
 * @category instances
 * @since 1.0.0
 */
const Foldable = {
  reduce: (b, f) => self => Either_isLeft(self) ? b : f(b, self.right)
};
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import * as E from '@fp-ts/core/Either'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * const onLeft  = (errors: ReadonlyArray<string>): string => `Errors: ${errors.join(', ')}`
 *
 * const onRight = (value: number): string => `Ok: ${value}`
 *
 * assert.strictEqual(
 *   pipe(
 *     E.right(1),
 *     E.match(onLeft , onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     E.left(['error 1', 'error 2']),
 *     E.match(onLeft , onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @category pattern matching
 * @since 1.0.0
 */
const match = (onLeft, onRight) => self => Either_isLeft(self) ? onLeft(self.left) : onRight(self.right);
/**
 * Takes a lazy default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`.
 *
 * @example
 * import * as E from '@fp-ts/core/Either'
 *
 * const parse = E.fromNullable(() => 'nullable')
 *
 * assert.deepStrictEqual(parse(1), E.right(1))
 * assert.deepStrictEqual(parse(null), E.left('nullable'))
 *
 * @category conversions
 * @since 1.0.0
 */
const mjs_Either_fromNullable = Either_fromNullable;
/**
 * @category lifting
 * @since 1.0.0
 */
const liftNullable = (f, onNullable) => (...a) => mjs_Either_fromNullable(() => onNullable(...a))(f(...a));
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMapNullable = (f, onNullable) => flatMap(liftNullable(f, onNullable));
/**
 * Returns a `Refinement` from a `Either` returning function.
 * This function ensures that a `Refinement` definition is type-safe.
 *
 * @category conversions
 * @since 1.0.0
 */
const toRefinement = f => a => Either_isRight(f(a));
/**
 * Constructs a new `Either` from a function that might throw.
 *
 * @example
 * import * as E from '@fp-ts/core/Either'
 * import { identity } from '@fp-ts/core/Function'
 *
 * const unsafeHead = <A>(as: ReadonlyArray<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: ReadonlyArray<A>): E.Either<unknown, A> =>
 *   E.fromThrowable(() => unsafeHead(as), identity)
 *
 * assert.deepStrictEqual(head([]), E.left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), E.right(1))
 *
 * @category interop
 * @since 1.0.0
 */
const fromThrowable = (f, onThrow) => {
  try {
    return Either_right(f());
  } catch (e) {
    return Either_left(onThrow(e));
  }
};
/**
 * @category interop
 * @since 1.0.0
 */
const getOrThrow = onLeft => self => {
  if (Either_isRight(self)) {
    return self.right;
  }
  throw onLeft(self.left);
};
/**
 * Lifts a function that may throw to one returning a `Either`.
 *
 * @category interop
 * @since 1.0.0
 */
const liftThrowable = (f, onThrow) => (...a) => fromThrowable(() => f(...a), onThrow);
/**
 * @category getters
 * @since 1.0.0
 */
const merge = /*#__PURE__*/match(Function_identity, Function_identity);
/**
 * @since 1.0.0
 */
const reverse = self => Either_isLeft(self) ? Either_right(self.left) : Either_left(self.right);
/**
 * @category filtering
 * @since 1.0.0
 */
const compact = onNone => self => Either_isLeft(self) ? self : option.isNone(self.right) ? Either_left(onNone()) : Either_right(self.right.value);
/**
 * @category filtering
 * @since 1.0.0
 */
const filter = (predicate, onFalse) => self => Either_isLeft(self) ? self : predicate(self.right) ? self : Either_left(onFalse());
/**
 * @category filtering
 * @since 1.0.0
 */
const filterMap = (f, onNone) => self => pipe(self, flatMap(a => {
  const ob = f(a);
  return option.isNone(ob) ? Either_left(onNone()) : Either_right(ob.value);
}));
/**
 * @category traversing
 * @since 1.0.0
 */
const traverse = F => f => self => Either_isLeft(self) ? F.of(Either_left(self.left)) : Function_pipe(f(self.right), F.map(Either_right));
/**
 * @category traversing
 * @since 1.0.0
 */
const Either_sequence = /*#__PURE__*/sequence(traverse);
/**
 * @category instances
 * @since 1.0.0
 */
const Traversable = {
  traverse,
  sequence: Either_sequence
};
/**
 * @category traversing
 * @since 1.0.0
 */
const Either_traverseTap = /*#__PURE__*/(/* unused pure expression or super */ null && (traversable.traverseTap(Traversable)));
/**
 * Returns an effect that effectfully "peeks" at the success of this effect.
 *
 * @since 1.0.0
 */
const tap = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.tap(Chainable)));
/**
 * @category debugging
 * @since 1.0.0
 */
const inspectRight = onRight => self => {
  if (Either_isRight(self)) {
    onRight(self.right);
  }
  return self;
};
/**
 * Returns an effect that effectfully "peeks" at the failure of this effect.
 *
 * @category error handling
 * @since 1.0.0
 */
const tapError = onLeft => self => {
  if (Either_isRight(self)) {
    return self;
  }
  const out = onLeft(self.left);
  return Either_isLeft(out) ? out : self;
};
/**
 * @category debugging
 * @since 1.0.0
 */
const inspectLeft = onLeft => self => {
  if (Either_isLeft(self)) {
    onLeft(self.left);
  }
  return self;
};
/**
 * @category conversions
 * @since 1.0.0
 */
const fromIterable = onEmpty => collection => {
  for (const a of collection) {
    return Either_right(a);
  }
  return Either_left(onEmpty());
};
/**
 * @example
 * import * as E from '@fp-ts/core/Either'
 * import { pipe } from '@fp-ts/core/Function'
 * import * as O from '@fp-ts/core/Option'
 *
 * assert.deepStrictEqual(pipe(O.some(1), E.fromOption(() => 'error')), E.right(1))
 * assert.deepStrictEqual(pipe(O.none(), E.fromOption(() => 'error')), E.left('error'))
 *
 * @category conversions
 * @since 1.0.0
 */
const Either_fromOption = fromOption;
/**
 * Converts a `Either` to an `Option` discarding the Right.
 *
 * @example
 * import * as O from '@fp-ts/core/Option'
 * import * as E from '@fp-ts/core/Either'
 *
 * assert.deepStrictEqual(E.getLeft(E.right('ok')), O.none())
 * assert.deepStrictEqual(E.getLeft(E.left('err')), O.some('err'))
 *
 * @category getters
 * @since 1.0.0
 */
const Either_getLeft = getLeft;
/**
 * Converts a `Either` to an `Option` discarding the error.
 *
 * @example
 * import * as O from '@fp-ts/core/Option'
 * import * as E from '@fp-ts/core/Either'
 *
 * assert.deepStrictEqual(E.getRight(E.right('ok')), O.some('ok'))
 * assert.deepStrictEqual(E.getRight(E.left('err')), O.none())
 *
 * @category getters
 * @since 1.0.0
 */
const Either_getRight = getRight;
/**
 * @category getters
 * @since 1.0.0
 */
const getOrNull = /*#__PURE__*/(/* unused pure expression or super */ null && (getOrElse(constNull)));
/**
 * @category getters
 * @since 1.0.0
 */
const getOrUndefined = /*#__PURE__*/(/* unused pure expression or super */ null && (getOrElse(constUndefined)));
/**
 * @example
 * import { liftPredicate, left, right } from '@fp-ts/core/Either'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     1,
 *     liftPredicate((n) => n > 0, () => 'error')
 *   ),
 *   right(1)
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     -1,
 *     liftPredicate((n) => n > 0, () => 'error')
 *   ),
 *   left('error')
 * )
 *
 * @category lifting
 * @since 1.0.0
 */
const liftPredicate = (predicate, onFalse) => b => predicate(b) ? Either_right(b) : Either_left(onFalse());
/**
 * @category lifting
 * @since 1.0.0
 */
const liftOption = (f, onNone) => (...a) => Either_fromOption(() => onNone(...a))(f(...a));
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMapOption = (f, onNone) => self => pipe(self, flatMap(liftOption(f, onNone)));
/**
 * Returns a function that checks if an `Either` contains a given value using a provided `equivalence` function.
 *
 * @since 1.0.0
 */
const contains = equivalence => a => self => Either_isLeft(self) ? false : equivalence(self.right, a);
/**
 * Returns `false` if `Left` or returns the Either of the application of the given predicate to the `Right` value.
 *
 * @example
 * import * as E from '@fp-ts/core/Either'
 *
 * const f = E.exists((n: number) => n > 2)
 *
 * assert.strictEqual(f(E.left('a')), false)
 * assert.strictEqual(f(E.right(1)), false)
 * assert.strictEqual(f(E.right(3)), true)
 *
 * @since 1.0.0
 */
const exists = predicate => self => Either_isLeft(self) ? false : predicate(self.right);
//# sourceMappingURL=Either.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/internal/ReadonlyArray.mjs
/** @internal */
const isNonEmpty = as => as.length > 0;
/** @internal */
const ReadonlyArray_fromIterable = collection => Array.isArray(collection) ? collection : Array.from(collection);
//# sourceMappingURL=ReadonlyArray.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Compactable.mjs


/**
 * Returns a default `compact` composition.
 *
 * @since 1.0.0
 */
const compactComposition = (F, G) => F.map(G.compact);
/**
 * @since 1.0.0
 */
const separate = F => self => {
  return [Function_pipe(self, F.map(getLeft), F.compact), Function_pipe(self, F.map(getRight), F.compact)];
};
//# sourceMappingURL=Compactable.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/FlatMap.mjs
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 */
const FlatMap_flatten = F => self => Function_pipe(self, F.flatMap(Function_identity));
/**
 * A variant of `flatMap` that ignores the value produced by this effect.
 *
 * @since 1.0.0
 */
const FlatMap_andThen = F => that => F.flatMap(() => that);
/**
 * @since 1.0.0
 */
const FlatMap_composeKleisliArrow = F => bc => ab => a => pipe(ab(a), F.flatMap(bc));
//# sourceMappingURL=FlatMap.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/Option.mjs



















/**
 * @category constructors
 * @since 1.0.0
 */
const Option_none = () => none;
/**
 * @category constructors
 * @since 1.0.0
 */
const Option_some = some;
/**
 * Returns `true` if the specified value is an instance of `Option`, `false`
 * otherwise.
 *
 * @example
 * import { some, none, isOption } from '@fp-ts/core/Option'
 *
 * assert.strictEqual(isOption(some(1)), true)
 * assert.strictEqual(isOption(none()), true)
 * assert.strictEqual(isOption({}), false)
 *
 * @category guards
 * @since 1.0.0
 */
const Option_isOption = isOption;
/**
 * Constructs a new `Option` from a nullable type. If the value is `null` or `undefined`, returns `None`, otherwise
 * returns the value wrapped in a `Some`.
 *
 * @example
 * import { none, some, fromNullable } from '@fp-ts/core/Option'
 *
 * assert.deepStrictEqual(fromNullable(undefined), none())
 * assert.deepStrictEqual(fromNullable(null), none())
 * assert.deepStrictEqual(fromNullable(1), some(1))
 *
 * @category conversions
 * @since 1.0.0
 */
const Option_fromNullable = fromNullable;
/**
 * Returns a `Refinement` from a `Option` returning function.
 * This function ensures that a `Refinement` definition is type-safe.
 *
 * @category conversions
 * @since 1.0.0
 */
const Option_toRefinement = f => a => Option_isSome(f(a));
/**
 * Converts an exception into an `Option`. If `f` throws, returns `None`, otherwise returns the output wrapped in a
 * `Some`.
 *
 * @example
 * import { none, some, fromThrowable } from '@fp-ts/core/Option'
 *
 * assert.deepStrictEqual(
 *   fromThrowable(() => {
 *     throw new Error()
 *   }),
 *   none()
 * )
 * assert.deepStrictEqual(fromThrowable(() => 1), some(1))
 *
 * @category interop
 * @since 1.0.0
 */
const Option_fromThrowable = f => {
  try {
    return Option_some(f());
  } catch (e) {
    return option.none;
  }
};
/**
 * Lifts a function that may throw to one returning a `Option`.
 *
 * @category interop
 * @since 1.0.0
 */
const Option_liftThrowable = f => (...a) => Option_fromThrowable(() => f(...a));
/**
 * @category interop
 * @since 1.0.0
 */
const Option_getOrThrow = onError => self => {
  if (Option_isSome(self)) {
    return self.value;
  }
  throw onError();
};
/**
 * Returns an effect whose success is mapped by the specified `f` function.
 *
 * @category mapping
 * @since 1.0.0
 */
const Option_map = f => self => Option_isNone(self) ? none : Option_some(f(self.value));
/**
 * @category mapping
 * @since 1.0.0
 */
const Option_imap = /*#__PURE__*/imap(Option_map);
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Invariant = {
  imap: Option_imap
};
/**
 * @since 1.0.0
 */
const Option_tupled = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.tupled(Option_Invariant)));
/**
 * @category do notation
 * @since 1.0.0
 */
const Option_bindTo = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.bindTo(Option_Invariant)));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Covariant = {
  ...Option_Invariant,
  map: Option_map
};
const Option_let_ = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.let(Option_Covariant)));

/**
 * @category mapping
 * @since 1.0.0
 */
const Option_flap = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.flap(Option_Covariant)));
/**
 * Maps the success value of this effect to the specified constant value.
 *
 * @category mapping
 * @since 1.0.0
 */
const Option_as = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.as(Option_Covariant)));
/**
 * Returns the effect resulting from mapping the success of this effect to unit.
 *
 * @category mapping
 * @since 1.0.0
 */
const Option_asUnit = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.asUnit(Option_Covariant)));
/**
 * @category constructors
 * @since 1.0.0
 */
const Option_of = (/* unused pure expression or super */ null && (Option_some));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Of = {
  of: Option_some
};
/**
 * @since 1.0.0
 */
const Option_unit = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.unit(Option_Of)));
/**
 * @category do notation
 * @since 1.0.0
 */
const Option_Do = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.Do(Option_Of)));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Pointed = {
  ...Option_Of,
  ...Option_Covariant
};
/**
 * @category sequencing
 * @since 1.0.0
 */
const Option_flatMap = f => self => Option_isNone(self) ? none : f(self.value);
/**
 * @category instances
 * @since 1.0.0
 */
const Option_FlatMap = {
  flatMap: Option_flatMap
};
/**
 * @since 1.0.0
 */
const Option_flatten = /*#__PURE__*/FlatMap_flatten(Option_FlatMap);
/**
 * @since 1.0.0
 */
const Option_andThen = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.andThen(Option_FlatMap)));
/**
 * @since 1.0.0
 */
const Option_composeKleisliArrow = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.composeKleisliArrow(Option_FlatMap)));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Chainable = {
  ...Option_FlatMap,
  ...Option_Covariant
};
/**
 * @category do notation
 * @since 1.0.0
 */
const Option_bind = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.bind(Option_Chainable)));
/**
 * Returns an effect that effectfully "peeks" at the success of this effect.
 *
 * @since 1.0.0
 */
const Option_tap = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.tap(Option_Chainable)));
/**
 * @category debugging
 * @since 1.0.0
 */
const inspectSome = onSome => self => {
  if (Option_isSome(self)) {
    onSome(self.value);
  }
  return self;
};
/**
 * @category debugging
 * @since 1.0.0
 */
const inspectNone = onNone => self => {
  if (Option_isNone(self)) {
    onNone();
  }
  return self;
};
/**
 * Sequences the specified effect after this effect, but ignores the value
 * produced by the effect.
 *
 * @category sequencing
 * @since 1.0.0
 */
const Option_andThenDiscard = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.andThenDiscard(Option_Chainable)));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Monad = {
  ...Option_Pointed,
  ...Option_FlatMap
};
const Option_productMany = (self, collection) => {
  if (Option_isNone(self)) {
    return none;
  }
  const out = [self.value];
  for (const o of collection) {
    if (Option_isNone(o)) {
      return none;
    }
    out.push(o.value);
  }
  return Option_some(out);
};
/**
 * @category instances
 * @since 1.0.0
 */
const Option_SemiProduct = {
  ...Option_Invariant,
  product: (self, that) => Option_isSome(self) && Option_isSome(that) ? Option_some([self.value, that.value]) : none,
  productMany: Option_productMany
};
/**
 * A variant of `bind` that sequentially ignores the scope.
 *
 * @category do notation
 * @since 1.0.0
 */
const Option_andThenBind = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.andThenBind(Option_SemiProduct)));
/**
 * Adds an element to the end of a tuple.
 *
 * @since 1.0.0
 */
const Option_element = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.element(Option_SemiProduct)));
const Option_productAll = collection => {
  const out = [];
  for (const o of collection) {
    if (Option_isNone(o)) {
      return none;
    }
    out.push(o.value);
  }
  return Option_some(out);
};
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Product = {
  ...Option_Of,
  ...Option_SemiProduct,
  productAll: Option_productAll
};
/**
 * @since 1.0.0
 */
const Option_tuple = /*#__PURE__*/(/* unused pure expression or super */ null && (product_.tuple(Option_Product)));
/**
 * @since 1.0.0
 */
const Option_struct = /*#__PURE__*/(/* unused pure expression or super */ null && (product_.struct(Option_Product)));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_SemiApplicative = {
  ...Option_SemiProduct,
  ...Option_Covariant
};
/**
 * Monoid returning the left-most non-`None` value. If both operands are `Some`s then the inner values are
 * combined using the provided `Semigroup`
 *
 * | x       | y       | combine(y)(x)       |
 * | ------- | ------- | ------------------- |
 * | none    | none    | none                |
 * | some(a) | none    | some(a)             |
 * | none    | some(a) | some(a)             |
 * | some(a) | some(b) | some(combine(b)(a)) |
 *
 * @example
 * import { getMonoid, some, none } from '@fp-ts/core/Option'
 * import * as N from '@fp-ts/core/Number'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * const M = getMonoid(N.SemigroupSum)
 * assert.deepStrictEqual(M.combine(none(), none()), none())
 * assert.deepStrictEqual(M.combine(some(1), none()), some(1))
 * assert.deepStrictEqual(M.combine(none(), some(1)), some(1))
 * assert.deepStrictEqual(M.combine(some(1), some(2)), some(3))
 *
 * @category lifting
 * @since 1.0.0
 */
const Option_getMonoid = Semigroup => {
  const combine = (self, that) => Option_isNone(self) ? that : Option_isNone(that) ? self : Option_some(Semigroup.combine(self.value, that.value));
  return {
    combine,
    combineMany: (self, collection) => {
      let c = self;
      for (const o of collection) {
        c = combine(c, o);
      }
      return c;
    },
    combineAll: collection => {
      let c = option.none;
      for (const o of collection) {
        c = combine(c, o);
      }
      return c;
    },
    empty: option.none
  };
};
/**
 * Lifts a binary function into `Option`.
 *
 * @category lifting
 * @since 1.0.0
 */
const Option_lift2 = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.lift2(Option_SemiApplicative)));
/**
 * Lifts a ternary function into `Option`.
 *
 * @category lifting
 * @since 1.0.0
 */
const Option_lift3 = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.lift3(Option_SemiApplicative)));
/**
 * @since 1.0.0
 */
const Option_ap = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.ap(Option_SemiApplicative)));
/**
 * Semigroup returning the left-most `None` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`.
 *
 * @category combining
 * @since 1.0.0
 */
const getFirstNoneSemigroup = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.liftSemigroup(Option_SemiApplicative)));
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Applicative = {
  ...Option_SemiApplicative,
  ...Option_Product
};
/**
 * Monoid returning the left-most `None` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Monoid`.
 *
 * The `empty` value is `some(M.empty)`.
 *
 * @category combining
 * @since 1.0.0
 */
const getFirstNoneMonoid = /*#__PURE__*/(/* unused pure expression or super */ null && (applicative.liftMonoid(Option_Applicative)));
/**
 * @category error handling
 * @since 1.0.0
 */
const firstSomeOf = collection => self => {
  let out = self;
  if (Option_isSome(out)) {
    return out;
  }
  for (out of collection) {
    if (Option_isSome(out)) {
      return out;
    }
  }
  return out;
};
/**
 * @category instances
 * @since 1.0.0
 */
const Option_SemiCoproduct = {
  ...Option_Invariant,
  coproduct: (self, that) => Option_isSome(self) ? self : that,
  coproductMany: (self, collection) => Function_pipe(self, firstSomeOf(collection))
};
/**
 * Semigroup returning the left-most `Some` value.
 *
 * @category combining
 * @since 1.0.0
 */
const getFirstSomeSemigroup = /*#__PURE__*/(/* unused pure expression or super */ null && (semiCoproduct.getSemigroup(Option_SemiCoproduct)));
/**
 * @since 1.0.0
 */
const coproductEither = that => self => Option_isNone(self) ? pipe(that, Option_map(either.right)) : pipe(self, Option_map(either.left));
/**
 * @category instances
 * @since 1.0.0
 */
const Coproduct = {
  ...Option_SemiCoproduct,
  zero: Option_none,
  coproductAll: collection => {
    const options = ReadonlyArray_fromIterable(collection);
    return options.length > 0 ? Option_SemiCoproduct.coproductMany(options[0], options.slice(1)) : none;
  }
};
/**
 * @category instances
 * @since 1.0.0
 */
const Option_SemiAlternative = {
  ...Option_Covariant,
  ...Option_SemiCoproduct
};
/**
 * @category instances
 * @since 1.0.0
 */
const Alternative = {
  ...Option_SemiAlternative,
  ...Coproduct
};
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Foldable = {
  reduce: (b, f) => self => Option_isNone(self) ? b : f(b, self.value)
};
/**
 * @since 1.0.0
 */
const toArray = /*#__PURE__*/(/* unused pure expression or super */ null && (foldable.toArray(Option_Foldable)));
/**
 * Alias of `flatten`.
 *
 * @category filtering
 * @since 1.0.0
 */
const Option_compact = Option_flatten;
/**
 * @category instances
 * @since 1.0.0
 */
const Compactable = {
  compact: Option_compact
};
/**
 * @category filtering
 * @since 1.0.0
 */
const Option_separate = /*#__PURE__*/separate({
  ...Option_Covariant,
  ...Compactable
});
/**
 * @category filtering
 * @since 1.0.0
 */
const Option_filterMap = f => self => Option_isNone(self) ? none : f(self.value);
/**
 * @category instances
 * @since 1.0.0
 */
const Filterable = {
  filterMap: Option_filterMap
};
/**
 * @category filtering
 * @since 1.0.0
 */
const Option_filter = /*#__PURE__*/(/* unused pure expression or super */ null && (filterable.filter(Filterable)));
/**
 * @category traversing
 * @since 1.0.0
 */
const Option_traverse = F => f => self => Option_isNone(self) ? F.of(none) : Function_pipe(f(self.value), F.map(Option_some));
/**
 * @category traversing
 * @since 1.0.0
 */
const Option_sequence = /*#__PURE__*/sequence(Option_traverse);
/**
 * @category instances
 * @since 1.0.0
 */
const Option_Traversable = {
  traverse: Option_traverse,
  sequence: Option_sequence
};
/**
 * @category traversing
 * @since 1.0.0
 */
const Option_traverseTap = /*#__PURE__*/(/* unused pure expression or super */ null && (traversable.traverseTap(Option_Traversable)));
/**
 * Returns `true` if the option is `None`, `false` otherwise.
 *
 * @example
 * import { some, none, isNone } from '@fp-ts/core/Option'
 *
 * assert.strictEqual(isNone(some(1)), false)
 * assert.strictEqual(isNone(none()), true)
 *
 * @category guards
 * @since 1.0.0
 */
const Option_isNone = isNone;
/**
 * Returns `true` if the option is an instance of `Some`, `false` otherwise.
 *
 * @example
 * import { some, none, isSome } from '@fp-ts/core/Option'
 *
 * assert.strictEqual(isSome(some(1)), true)
 * assert.strictEqual(isSome(none()), false)
 *
 * @category guards
 * @since 1.0.0
 */
const Option_isSome = isSome;
/**
 * @category conversions
 * @since 1.0.0
 */
const Option_fromIterable = collection => {
  for (const a of collection) {
    return Option_some(a);
  }
  return option.none;
};
/**
 * Converts a `Either` to an `Option` discarding the error.
 *
 * @example
 * import * as O from '@fp-ts/core/Option'
 * import * as E from '@fp-ts/core/Either'
 *
 * assert.deepStrictEqual(O.fromEither(E.right(1)), O.some(1))
 * assert.deepStrictEqual(O.fromEither(E.left('a')), O.none())
 *
 * @category conversions
 * @since 1.0.0
 */
const fromEither = getRight;
/**
 * @category conversions
 * @since 1.0.0
 */
const toEither = fromOption;
/**
 * Takes a (lazy) default value, a function, and an `Option` value, if the `Option` value is `None` the default value is
 * returned, otherwise the function is applied to the value inside the `Some` and the result is returned.
 *
 * @example
 * import { some, none, match } from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a some containing 1'
 * )
 *
 * assert.strictEqual(
 *   pipe(
 *     none(),
 *     match(() => 'a none', a => `a some containing ${a}`)
 *   ),
 *   'a none'
 * )
 *
 * @category pattern matching
 * @since 1.0.0
 */
const Option_match = (onNone, onSome) => self => Option_isNone(self) ? onNone() : onSome(self.value);
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns the given default value
 *
 * @example
 * import { some, none, getOrElse } from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.strictEqual(pipe(some(1), getOrElse(() => 0)), 1)
 * assert.strictEqual(pipe(none(), getOrElse(() => 0)), 0)
 *
 * @category error handling
 * @since 1.0.0
 */
const Option_getOrElse = onNone => self => Option_isNone(self) ? onNone() : self.value;
/**
 * Returns a *smart constructor* from a function that returns a nullable value.
 *
 * @example
 * import { liftNullable, none, some } from '@fp-ts/core/Option'
 *
 * const f = (s: string): number | undefined => {
 *   const n = parseFloat(s)
 *   return isNaN(n) ? undefined : n
 * }
 *
 * const g = liftNullable(f)
 *
 * assert.deepStrictEqual(g('1'), some(1))
 * assert.deepStrictEqual(g('a'), none())
 *
 * @category lifting
 * @since 1.0.0
 */
const Option_liftNullable = f => (...a) => Option_fromNullable(f(...a));
/**
 * This is `flatMap` + `fromNullable`, useful when working with optional values.
 *
 * @example
 * import { some, none, fromNullable, flatMapNullable } from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * interface Employee {
 *   company?: {
 *     address?: {
 *       street?: {
 *         name?: string
 *       }
 *     }
 *   }
 * }
 *
 * const employee1: Employee = { company: { address: { street: { name: 'high street' } } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee1.company),
 *     flatMapNullable(company => company.address),
 *     flatMapNullable(address => address.street),
 *     flatMapNullable(street => street.name)
 *   ),
 *   some('high street')
 * )
 *
 * const employee2: Employee = { company: { address: { street: {} } } }
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     fromNullable(employee2.company),
 *     flatMapNullable(company => company.address),
 *     flatMapNullable(address => address.street),
 *     flatMapNullable(street => street.name)
 *   ),
 *   none()
 * )
 *
 * @category sequencing
 * @since 1.0.0
 */
const Option_flatMapNullable = f => self => Option_isNone(self) ? option.none : Option_fromNullable(f(self.value));
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `null`.
 *
 * @example
 * import { some, none, getOrNull } from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.strictEqual(pipe(some(1), getOrNull), 1)
 * assert.strictEqual(pipe(none(), getOrNull), null)
 *
 * @category conversions
 * @since 1.0.0
 */
const Option_getOrNull = /*#__PURE__*/(/* unused pure expression or super */ null && (Option_getOrElse(constNull)));
/**
 * Extracts the value out of the structure, if it exists. Otherwise returns `undefined`.
 *
 * @example
 * import { some, none, getOrUndefined } from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.strictEqual(pipe(some(1), getOrUndefined), 1)
 * assert.strictEqual(pipe(none(), getOrUndefined), undefined)
 *
 * @category conversions
 * @since 1.0.0
 */
const Option_getOrUndefined = /*#__PURE__*/Option_getOrElse(Function_constUndefined);
/**
 * Lazy version of `orElse`.
 *
 * @category error handling
 * @since 1.0.0
 */
const Option_catchAll = that => self => Option_isNone(self) ? that() : self;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * In case of `Option` returns the left-most non-`None` value.
 *
 * | x       | y       | pipe(x, orElse(y) |
 * | ------- | ------- | ------------------|
 * | none    | none    | none              |
 * | some(a) | none    | some(a)           |
 * | none    | some(b) | some(b)           |
 * | some(a) | some(b) | some(a)           |
 *
 * @example
 * import * as O from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none(),
 *     O.orElse(O.none())
 *   ),
 *   O.none()
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.orElse<string>(O.none())
 *   ),
 *   O.some('a')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.none(),
 *     O.orElse(O.some('b'))
 *   ),
 *   O.some('b')
 * )
 * assert.deepStrictEqual(
 *   pipe(
 *     O.some('a'),
 *     O.orElse(O.some('b'))
 *   ),
 *   O.some('a')
 * )
 *
 * @category error handling
 * @since 1.0.0
 */
const Option_orElse = that => Option_catchAll(() => that);
/**
 * Returns an effect that will produce the value of this effect, unless it
 * fails, in which case, it will produce the value of the specified effect.
 *
 * @category error handling
 * @since 1.0.0
 */
const Option_orElseEither = that => self => Option_isNone(self) ? pipe(that, Option_map(either.right)) : pipe(self, Option_map(either.left));
/**
 * Executes this effect and returns its value, if it succeeds, but otherwise
 * succeeds with the specified value.
 *
 * @category error handling
 * @since 1.0.0
 */
const Option_orElseSucceed = onNone => Option_catchAll(() => Option_some(onNone()));
/**
 * The `Order` instance allows `Option` values to be compared with
 * `compare`, whenever there is an `Order` instance for
 * the type the `Option` contains.
 *
 * `None` is considered to be less than any `Some` value.
 *
 * @example
 * import { none, some, liftOrder } from '@fp-ts/core/Option'
 * import * as N from '@fp-ts/core/Number'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * const O = liftOrder(N.Order)
 * assert.strictEqual(O.compare(none(), none()), 0)
 * assert.strictEqual(O.compare(none(), some(1)), -1)
 * assert.strictEqual(O.compare(some(1), none()), 1)
 * assert.strictEqual(O.compare(some(1), some(2)), -1)
 * assert.strictEqual(O.compare(some(1), some(1)), 0)
 *
 * @category sorting
 * @since 1.0.0
 */
const liftOrder = O => order.fromCompare((self, that) => Option_isSome(self) ? Option_isSome(that) ? O.compare(self.value, that.value) : 1 : -1);
/**
 * Returns a *smart constructor* based on the given predicate.
 *
 * @example
 * import * as O from '@fp-ts/core/Option'
 *
 * const getOption = O.liftPredicate((n: number) => n >= 0)
 *
 * assert.deepStrictEqual(getOption(-1), O.none())
 * assert.deepStrictEqual(getOption(1), O.some(1))
 *
 * @category lifting
 * @since 1.0.0
 */
const Option_liftPredicate = predicate => b => predicate(b) ? Option_some(b) : option.none;
/**
 * @category lifting
 * @since 1.0.0
 */
const liftEither = f => (...a) => fromEither(f(...a));
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMapEither = f => self => pipe(self, Option_flatMap(liftEither(f)));
/**
 * Returns a function that checks if an `Option` contains a given value using a provided `equivalence` function.
 *
 * @since 1.0.0
 */
const Option_contains = equivalence => a => self => Option_isNone(self) ? false : equivalence(self.value, a);
/**
 * Returns `true` if the predicate is satisfied by the wrapped value
 *
 * @example
 * import { some, none, exists } from '@fp-ts/core/Option'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 0)
 *   ),
 *   true
 * )
 * assert.strictEqual(
 *   pipe(
 *     some(1),
 *     exists(n => n > 1)
 *   ),
 *   false
 * )
 * assert.strictEqual(
 *   pipe(
 *     none(),
 *     exists(n => n > 0)
 *   ),
 *   false
 * )
 *
 * @since 1.0.0
 */
const Option_exists = predicate => self => Option_isNone(self) ? false : predicate(self.value);
//# sourceMappingURL=Option.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Contravariant.mjs
/**
 * Composing two contravariant functors yields a Covariant functor.
 *
 * Returns a default `map` composition.
 *
 * @since 1.0.0
 */
const contramapComposition = (F, G) => f => F.contramap(G.contramap(f));
/**
 * Returns a default `imap` implementation.
 *
 * @since 1.0.0
 */
const Contravariant_imap = contramap => (_, from) => contramap(from);
/**
 * @category constructors
 * @since 1.0.0
 */
const Contravariant_make = contramap => ({
  contramap,
  imap: Contravariant_imap(contramap)
});
//# sourceMappingURL=Contravariant.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/Predicate.mjs
/**
 * @since 1.0.0
 */








/**
 * @category guards
 * @since 1.0.0
 */
const isString = u => typeof u === "string";
/**
 * @category guards
 * @since 1.0.0
 */
const isNumber = u => typeof u === "number";
/**
 * @category guards
 * @since 1.0.0
 */
const isBoolean = u => typeof u === "boolean";
/**
 * @category guards
 * @since 1.0.0
 */
const isBigInt = u => typeof u === "bigint";
/**
 * @category guards
 * @since 1.0.0
 */
const isSymbol = u => typeof u === "symbol";
/**
 * @category constructors
 * @since 1.0.0
 */
const id = () => _ => true;
/**
 * @since 1.0.0
 */
const Predicate_compose = bc => ab => i => ab(i) && bc(i);
/**
 * @since 1.0.0
 */
const contramap = f => self => b => self(f(b));
/**
 * @category instances
 * @since 1.0.0
 */
const Contravariant = /*#__PURE__*/Contravariant_make(contramap);
/**
 * @since 1.0.0
 */
const Predicate_imap = Contravariant.imap;
/**
 * @category instances
 * @since 1.0.0
 */
const Predicate_Invariant = {
  imap: Predicate_imap
};
/**
 * @since 1.0.0
 */
// @ts-expect-error
const Predicate_tupled = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.tupled(Predicate_Invariant)));
/**
 * @category do notation
 * @since 1.0.0
 */
const Predicate_bindTo = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.bindTo(Predicate_Invariant)));
/**
 * @since 1.0.0
 */
const Predicate_of = _ => id();
/**
 * @category instances
 * @since 1.0.0
 */
const Predicate_Of = {
  of: Predicate_of
};
/**
 * @since 1.0.0
 */
const Predicate_Do = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.Do(Predicate_Of)));
/**
 * @since 1.0.0
 */
const Predicate_unit = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.unit(Predicate_Of)));
const Predicate_productMany = (self, collection) => {
  return ([head, ...tail]) => {
    if (self(head) === false) {
      return false;
    }
    const predicates = ReadonlyArray_fromIterable(collection);
    for (let i = 0; i < predicates.length; i++) {
      if (predicates[i](tail[i]) === false) {
        return false;
      }
    }
    return true;
  };
};
/**
 * @category instances
 * @since 1.0.0
 */
const Predicate_SemiProduct = {
  imap: Predicate_imap,
  product: (self, that) => ([a, b]) => self(a) && that(b),
  productMany: Predicate_productMany
};
const Predicate_productAll = collection => as => {
  const predicates = ReadonlyArray_fromIterable(collection);
  for (let i = 0; i < predicates.length; i++) {
    if (predicates[i](as[i]) === false) {
      return false;
    }
  }
  return true;
};
/**
 * @category instances
 * @since 1.0.0
 */
const Predicate_Product = {
  ...Predicate_SemiProduct,
  of: Predicate_of,
  productAll: Predicate_productAll
};
/**
 * @since 1.0.0
 */
const Predicate_andThenBind = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.andThenBind(Predicate_SemiProduct)));
/**
 * Adds an element to the end of a tuple.
 *
 * @since 1.0.0
 */
const Predicate_element = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.element(Predicate_SemiProduct)));
/**
 * @since 1.0.0
 */
const Predicate_tuple = /*#__PURE__*/(/* unused pure expression or super */ null && (product_.tuple(Predicate_Product)));
/**
 * @since 1.0.0
 */
const Predicate_struct = /*#__PURE__*/(/* unused pure expression or super */ null && (product_.struct(Predicate_Product)));
/**
 * @since 1.0.0
 */
const not = self => a => !self(a);
/**
 * @since 1.0.0
 */
const or = that => self => a => self(a) || that(a);
/**
 * @since 1.0.0
 */
const and = that => self => a => self(a) && that(a);
/**
 * @category instances
 * @since 1.0.0
 */
const getSemigroupAny = () => ({
  combine: (self, that) => pipe(self, or(that)),
  combineMany: (self, collection) => a => {
    if (self(a)) {
      return true;
    }
    for (const p of collection) {
      if (p(a)) {
        return true;
      }
    }
    return false;
  }
});
/**
 * @category instances
 * @since 1.0.0
 */
const getMonoidAny = () => monoid.fromSemigroup(getSemigroupAny(), constFalse);
/**
 * @category instances
 * @since 1.0.0
 */
const getSemigroupAll = () => ({
  combine: (self, that) => pipe(self, and(that)),
  combineMany: (self, collection) => a => {
    if (!self(a)) {
      return false;
    }
    for (const p of collection) {
      if (!p(a)) {
        return false;
      }
    }
    return true;
  }
});
/**
 * @category instances
 * @since 1.0.0
 */
const getMonoidAll = () => monoid.fromSemigroup(getSemigroupAll(), constTrue);
/**
 * @since 1.0.0
 */
const Predicate_all = collection => getMonoidAll().combineAll(collection);
/**
 * @since 1.0.0
 */
const any = collection => getMonoidAny().combineAll(collection);
//# sourceMappingURL=Predicate.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Equivalence.mjs


/**
 * Return an `Equivalence` that uses strict equality (===) to compare values
 *
 * @since 1.0.0
 * @category constructors
 */
const strict = () => (x, y) => x === y;
/**
 * @category instances
 * @since 1.0.0
 */
const string = /*#__PURE__*/strict();
/**
 * @category instances
 * @since 1.0.0
 */
const number = /*#__PURE__*/strict();
/**
 * @category instances
 * @since 1.0.0
 */
const Equivalence_boolean = /*#__PURE__*/(/* unused pure expression or super */ null && (strict()));
/**
 * @category instances
 * @since 1.0.0
 */
const bigint = /*#__PURE__*/(/* unused pure expression or super */ null && (strict()));
/**
 * @category instances
 * @since 1.0.0
 */
const symbol = /*#__PURE__*/(/* unused pure expression or super */ null && (strict()));
/**
 * Given a tuple of `Equivalence`s returns a new `Equivalence` that compares values of a tuple
 * by applying each `Equivalence` to the corresponding element of the tuple.
 *
 * @category constructors
 * @since 1.0.0
 */
const Equivalence_tuple = (...equivalences) => (x, y) => equivalences.every((equivalence, i) => equivalence(x[i], y[i]));
/**
 * Given an `Equivalence` of type `A`, returns a new `Equivalence` of type `ReadonlyArray<A>`.
 * The returned `Equivalence` compares arrays by first checking their length and then applying the provided `Equivalence` to each element.
 * If all comparisons return true, the arrays are considered equal.
 *
 * @category constructors
 * @since 1.0.0
 */
const array = equivalence => (x, y) => x.length === y.length && x.every((a, i) => equivalence(a, y[i]));
/**
 * Given a struct of `Equivalence`s returns a new `Equivalence` that compares values of a struct
 * by applying each `Equivalence` to the corresponding property of the struct.
 *
 * @category constructors
 * @since 1.0.0
 */
const Equivalence_struct = equivalences => (x, y) => {
  for (const key in equivalences) {
    if (!equivalences[key](x[key], y[key])) {
      return false;
    }
  }
  return true;
};
/**
 * Given an `Equivalence` of type `A`, returns a new `Equivalence` of type `{ readonly [x: string]: A }`.
 * The returned `Equivalence` compares records by first checking their number of keys and then applying the provided `Equivalence` to each value.
 * If all comparisons return true, the records are considered equal.
 *
 * @category constructors
 * @since 1.0.0
 */
const record = equivalence => (x, y) => {
  const keys = Object.keys(x);
  if (Object.keys(y).length !== keys.length) {
    return false;
  }
  for (const key of keys) {
    if (!equivalence(x[key], y[key])) {
      return false;
    }
  }
  return true;
};
/**
 * @category instances
 * @since 2.10.0
 */
const Equivalence_getSemigroup = () => ({
  combine: (self, that) => (x, y) => self(x, y) && that(x, y),
  combineMany: (self, collection) => (x, y) => {
    if (!self(x, y)) {
      return false;
    }
    for (const equivalence of collection) {
      if (!equivalence(x, y)) {
        return false;
      }
    }
    return true;
  }
});
const empty = () => true;
/**
 * @category instances
 * @since 2.6.0
 */
const Equivalence_getMonoid = () => monoid.fromSemigroup(Equivalence_getSemigroup(), empty);
/**
 * @category combinators
 * @since 1.0.0
 */
const Equivalence_contramap = f => self => (x, y) => self(f(x), f(y));
/**
 * @category instances
 * @since 1.0.0
 */
const Equivalence_Contravariant = /*#__PURE__*/Contravariant_make(Equivalence_contramap);
/**
 * @category instances
 * @since 1.0.0
 */
const Equivalence_Invariant = {
  imap: Equivalence_Contravariant.imap
};
/**
 * @category instances
 * @since 1.0.0
 */
const Equivalence_SemiProduct = {
  imap: Equivalence_Contravariant.imap,
  product: Equivalence_tuple,
  productMany: (self, collection) => Equivalence_tuple(self, ...collection)
};
/**
 * @category instances
 * @since 1.0.0
 */
const Equivalence_Product = {
  ...Equivalence_SemiProduct,
  of: () => empty,
  productAll: collection => Equivalence_tuple(...collection)
};
//# sourceMappingURL=Equivalence.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Semigroup.mjs

/**
 * Useful when `combineMany` can't be optimised.
 *
 * @category constructors
 * @since 1.0.0
 */
const Semigroup_fromCombine = combine => ({
  combine,
  combineMany: (self, collection) => {
    let out = self;
    for (const a of collection) {
      out = combine(out, a);
    }
    return out;
  }
});
/**
 * @category instances
 * @since 1.0.0
 */
const Semigroup_string = /*#__PURE__*/Semigroup_fromCombine((self, that) => self + that);
/**
 * `number` semigroup under addition.
 *
 * @category instances
 * @since 1.0.0
 */
const numberSum = /*#__PURE__*/Semigroup_fromCombine((self, that) => self + that);
/**
 * `number` semigroup under multiplication.
 *
 * @category instances
 * @since 1.0.0
 */
const numberMultiply = {
  combine: (self, that) => self * that,
  combineMany: (self, collection) => {
    if (self === 0) {
      return 0;
    }
    let out = self;
    for (const n of collection) {
      if (n === 0) {
        return 0;
      }
      out = out * n;
    }
    return out;
  }
};
/**
 * `bigint` semigroup under addition.
 *
 * @category instances
 * @since 1.0.0
 */
const bigintSum = /*#__PURE__*/Semigroup_fromCombine((self, that) => self + that);
/**
 * `bigint` semigroup under multiplication.
 *
 * @category instances
 * @since 1.0.0
 */
const bigintMultiply = {
  combine: (self, that) => self * that,
  combineMany: (self, collection) => {
    if (self === 0n) {
      return 0n;
    }
    let out = self;
    for (const n of collection) {
      if (n === 0n) {
        return 0n;
      }
      out = out * n;
    }
    return out;
  }
};
/**
 * `boolean` semigroup under conjunction.
 *
 * @category instances
 * @since 1.0.0
 */
const booleanAll = {
  combine: (self, that) => self && that,
  combineMany: (self, collection) => {
    if (self === false) {
      return false;
    }
    for (const b of collection) {
      if (b === false) {
        return false;
      }
    }
    return true;
  }
};
/**
 * `boolean` semigroup under disjunction.
 *
 * @category instances
 * @since 1.0.0
 */
const booleanAny = {
  combine: (self, that) => self || that,
  combineMany: (self, collection) => {
    if (self === true) {
      return true;
    }
    for (const b of collection) {
      if (b === true) {
        return true;
      }
    }
    return false;
  }
};
/**
 * This function creates and returns a new `Semigroup` for a tuple of values based on the given `Semigroup`s for each element in the tuple.
 * The returned `Semigroup` combines two tuples of the same type by applying the corresponding `Semigroup` passed as arguments to each element in the tuple.
 * It is useful when you need to combine two tuples of the same type and you have a specific way of combining each element of the tuple.
 *
 * @category combinators
 * @since 1.0.0
 */
const Semigroup_tuple = (...semigroups) => Semigroup_fromCombine((self, that) => semigroups.map((S, i) => S.combine(self[i], that[i])));
/**
 * Given a type `A`, this function creates and returns a `Semigroup` for `Array<A>`.
 * The returned `Semigroup` combines two arrays by concatenating them.
 *
 * @category combinators
 * @since 1.0.0
 */
const Semigroup_array = () => Semigroup_fromCombine((self, that) => self.concat(that));
/**
 * Given a type `A`, this function creates and returns a `Semigroup` for `ReadonlyArray<A>`.
 * The returned `Semigroup` combines two arrays by concatenating them.
 *
 * @category combinators
 * @since 1.0.0
 */
const Semigroup_readonlyArray = Semigroup_array;
/**
 * This function creates and returns a new `Semigroup` for a struct of values based on the given `Semigroup`s for each property in the struct.
 * The returned `Semigroup` combines two structs of the same type by applying the corresponding `Semigroup` passed as arguments to each property in the struct.
 * It is useful when you need to combine two structs of the same type and you have a specific way of combining each property of the struct.
 *
 * @category combinators
 * @since 1.0.0
 */
const Semigroup_struct = semigroups => Semigroup_fromCombine((self, that) => {
  const r = {};
  for (const k in semigroups) {
    if (Object.prototype.hasOwnProperty.call(semigroups, k)) {
      r[k] = semigroups[k].combine(self[k], that[k]);
    }
  }
  return r;
});
/**
 * `Semigroup` that returns last minimum of elements.
 *
 * @category constructors
 * @since 1.0.0
 */
const min = O => Semigroup_fromCombine((self, that) => O.compare(self, that) === -1 ? self : that);
/**
 * `Semigroup` that returns last maximum of elements.
 *
 * @category constructors
 * @since 1.0.0
 */
const max = O => Semigroup_fromCombine((self, that) => O.compare(self, that) === 1 ? self : that);
/**
 * @category constructors
 * @since 1.0.0
 */
const Semigroup_constant = a => ({
  combine: () => a,
  combineMany: () => a
});
/**
 * The dual of a `Semigroup`, obtained by flipping the arguments of `combine`.
 *
 * @since 1.0.0
 */
const Semigroup_reverse = S => ({
  combine: (self, that) => S.combine(that, self),
  combineMany: (self, collection) => {
    const reversed = Array.from(collection).reverse();
    return reversed.length > 0 ? S.combine(S.combineMany(reversed[0], reversed.slice(1)), self) : self;
  }
});
/**
 * @since 1.0.0
 */
const intercalate = separator => S => Semigroup_fromCombine((self, that) => S.combineMany(self, [separator, that]));
/**
 * Always return the first argument.
 *
 * @category instances
 * @since 1.0.0
 */
const first = () => ({
  combine: a => a,
  combineMany: a => a
});
/**
 * Always return the last argument.
 *
 * @category instances
 * @since 1.0.0
 */
const last = () => ({
  combine: (_, second) => second,
  combineMany: (self, collection) => {
    let a = self;
    // eslint-disable-next-line no-empty
    for (a of collection) {}
    return a;
  }
});
/**
 * @since 1.0.0
 */
const Semigroup_imap = (to, from) => S => ({
  combine: (self, that) => to(S.combine(from(self), from(that))),
  combineMany: (self, collection) => to(S.combineMany(from(self), ReadonlyArray_fromIterable(collection).map(from)))
});
/**
 * @category instances
 * @since 1.0.0
 */
const Semigroup_Invariant = {
  imap: Semigroup_imap
};
/**
 * @category instances
 * @since 1.0.0
 */
const Semigroup_SemiProduct = {
  ...Semigroup_Invariant,
  product: Semigroup_tuple,
  productMany: (self, collection) => Semigroup_tuple(self, ...collection)
};
/**
 * @category instances
 * @since 1.0.0
 */
const Semigroup_Product = {
  ...Semigroup_SemiProduct,
  of: Semigroup_constant,
  productAll: collection => Semigroup_tuple(...collection)
};
//# sourceMappingURL=Semigroup.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Monoid.mjs

/**
 * @category constructors
 * @since 1.0.0
 */
const fromSemigroup = (S, empty) => ({
  ...S,
  empty,
  combineAll: collection => S.combineMany(empty, collection)
});
/**
 * Get a monoid where `combine` will return the minimum, based on the provided bounded order.
 *
 * The `empty` value is the `maxBound` value.
 *
 * @category constructors
 * @since 1.0.0
 */
const Monoid_min = B => fromSemigroup(semigroup.min(B), B.maxBound);
/**
 * Get a monoid where `combine` will return the maximum, based on the provided bounded order.
 *
 * The `empty` value is the `minimum` value.
 *
 * @category constructors
 * @since 1.0.0
 */
const Monoid_max = B => fromSemigroup(semigroup.max(B), B.minBound);
/**
 * The dual of a `Monoid`, obtained by swapping the arguments of `combine`.
 *
 * @category combinators
 * @since 1.0.0
 */
const Monoid_reverse = M => fromSemigroup(semigroup.reverse(M), M.empty);
/**
 * @category instances
 * @since 1.0.0
 */
const Monoid_string = {
  ...Semigroup_string,
  combineAll: collection => Semigroup_string.combineMany("", collection),
  empty: ""
};
/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid_numberSum = {
  ...numberSum,
  combineAll: collection => numberSum.combineMany(0, collection),
  empty: 0
};
/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid_numberMultiply = {
  ...numberMultiply,
  combineAll: collection => numberMultiply.combineMany(1, collection),
  empty: 1
};
/**
 * `number` monoid under addition.
 *
 * The `bigint` value is `0n`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid_bigintSum = {
  ...bigintSum,
  combineAll: collection => bigintSum.combineMany(0n, collection),
  empty: 0n
};
/**
 * `bigint` monoid under multiplication.
 *
 * The `empty` value is `1n`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid_bigintMultiply = {
  ...bigintMultiply,
  combineAll: collection => bigintMultiply.combineMany(1n, collection),
  empty: 1n
};
/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid_booleanAll = {
  ...booleanAll,
  combineAll: collection => booleanAll.combineMany(true, collection),
  empty: true
};
/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid_booleanAny = {
  ...booleanAny,
  combineAll: collection => booleanAny.combineMany(false, collection),
  empty: false
};
/**
 * Given a tuple of `Monoid`s returns a `Monoid` for the tuple.
 *
 * @category combinators
 * @since 1.0.0
 */
const Monoid_tuple = (...monoids) => {
  const empty = monoids.map(m => m.empty);
  return fromSemigroup(semigroup.tuple(...monoids), empty);
};
/**
 * Given a type `A`, this function creates and returns a `Monoid` for `Array<A>`.
 * The returned `Monoid`'s empty value is the empty array.
 *
 * @category combinators
 * @since 1.0.0
 */
const Monoid_array = () => {
  const S = Semigroup_array();
  return {
    combine: S.combine,
    combineMany: S.combineMany,
    combineAll: collection => S.combineMany([], collection),
    empty: []
  };
};
/**
 * Given a type `A`, this function creates and returns a `Semigroup` for `ReadonlyArray<A>`.
 * The returned `Monoid`'s empty value is the empty array.
 *
 * @category combinators
 * @since 1.0.0
 */
const Monoid_readonlyArray = Monoid_array;
/**
 * Given a struct of `Monoid`s returns a `Monoid` for the struct.
 *
 * @category combinators
 * @since 1.0.0
 */
const Monoid_struct = monoids => {
  const empty = {};
  for (const k in monoids) {
    if (Object.prototype.hasOwnProperty.call(monoids, k)) {
      empty[k] = monoids[k].empty;
    }
  }
  return fromSemigroup(semigroup.struct(monoids), empty);
};
//# sourceMappingURL=Monoid.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Order.mjs


/**
 * @category instances
 * @since 1.0.0
 */
const Order_string = {
  compare: (self, that) => self < that ? -1 : self > that ? 1 : 0
};
/**
 * @category instances
 * @since 1.0.0
 */
const Order_number = {
  compare: (self, that) => self < that ? -1 : self > that ? 1 : 0
};
/**
 * @category instances
 * @since 1.0.0
 */
const Order_boolean = {
  compare: (self, that) => self < that ? -1 : self > that ? 1 : 0
};
/**
 * @category instances
 * @since 1.0.0
 */
const Order_bigint = {
  compare: (self, that) => self < that ? -1 : self > that ? 1 : 0
};
/**
 * Main constructor.
 *
 * @category constructors
 * @since 1.0.0
 */
const fromCompare = compare => ({
  compare: (self, that) => self === that ? 0 : compare(self, that)
});
/**
 * This function creates and returns a new `Order` for a tuple of values based on the given `Order`s for each element in the tuple.
 * The returned `Order` compares two tuples of the same type by applying the corresponding `Order` to each element in the tuple.
 * It is useful when you need to compare two tuples of the same type and you have a specific way of comparing each element
 * of the tuple.
 *
 * @category combinators
 * @since 1.0.0
 */
const Order_tuple = (...orders) => fromCompare((self, that) => {
  let i = 0;
  for (; i < orders.length - 1; i++) {
    const r = orders[i].compare(self[i], that[i]);
    if (r !== 0) {
      return r;
    }
  }
  return orders[i].compare(self[i], that[i]);
});
/**
 * This function creates and returns a new `Order` for an array of values based on a given `Order` for the elements of the array.
 * The returned `Order` compares two arrays by applying the given `Order` to each element in the arrays.
 * If all elements are equal, the arrays are then compared based on their length.
 * It is useful when you need to compare two arrays of the same type and you have a specific way of comparing each element of the array.
 *
 * @category combinators
 * @since 1.0.0
 */
const Order_array = O => fromCompare((self, that) => {
  const aLen = self.length;
  const bLen = that.length;
  const len = Math.min(aLen, bLen);
  for (let i = 0; i < len; i++) {
    const o = O.compare(self[i], that[i]);
    if (o !== 0) {
      return o;
    }
  }
  return Order_number.compare(aLen, bLen);
});
/**
 * This function creates and returns a new `Order` for a struct of values based on the given `Order`s
 * for each property in the struct.
 *
 * @category combinators
 * @since 1.0.0
 */
const Order_struct = orders => ({
  compare: (self, that) => {
    for (const key of Object.keys(orders)) {
      const o = orders[key].compare(self[key], that[key]);
      if (o !== 0) {
        return o;
      }
    }
    return 0;
  }
});
/**
 * @since 1.0.0
 */
const Order_reverse = O => fromCompare((self, that) => O.compare(that, self));
/**
 * @since 1.0.0
 */
const Order_contramap = f => self => fromCompare((b1, b2) => self.compare(f(b1), f(b2)));
/**
 * @category instances
 * @since 1.0.0
 */
const Order_getSemigroup = () => ({
  combine: (O1, O2) => fromCompare((self, that) => {
    const out = O1.compare(self, that);
    if (out !== 0) {
      return out;
    }
    return O2.compare(self, that);
  }),
  combineMany: (self, collection) => fromCompare((a1, a2) => {
    let out = self.compare(a1, a2);
    if (out !== 0) {
      return out;
    }
    for (const O of collection) {
      out = O.compare(a1, a2);
      if (out !== 0) {
        return out;
      }
    }
    return out;
  })
});
const Order_empty = /*#__PURE__*/fromCompare(() => 0);
/**
 * @category instances
 * @since 1.0.0
 */
const Order_getMonoid = () => monoid.fromSemigroup(Order_getSemigroup(), Order_empty);
/**
 * @category instances
 * @since 1.0.0
 */
const Order_Contravariant = /*#__PURE__*/Contravariant_make(Order_contramap);
/**
 * @category instances
 * @since 1.0.0
 */
const Order_Invariant = {
  imap: Order_Contravariant.imap
};
/**
 * @category instances
 * @since 1.0.0
 */
const Order_SemiProduct = {
  imap: Order_Contravariant.imap,
  product: Order_tuple,
  productMany: (self, collection) => Order_tuple(self, ...collection)
};
/**
 * @category instances
 * @since 1.0.0
 */
const Order_Product = {
  ...Order_SemiProduct,
  of: () => Order_empty,
  productAll: collection => Order_tuple(...collection)
};
/**
 * Test whether one value is _strictly less than_ another.
 *
 * @since 1.0.0
 */
const lessThan = O => that => self => O.compare(self, that) === -1;
/**
 * Test whether one value is _strictly greater than_ another.
 *
 * @since 1.0.0
 */
const greaterThan = O => that => self => O.compare(self, that) === 1;
/**
 * Test whether one value is _non-strictly less than_ another.
 *
 * @since 1.0.0
 */
const lessThanOrEqualTo = O => that => self => O.compare(self, that) !== 1;
/**
 * Test whether one value is _non-strictly greater than_ another.
 *
 * @since 1.0.0
 */
const greaterThanOrEqualTo = O => that => self => O.compare(self, that) !== -1;
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen.
 *
 * @since 1.0.0
 */
const Order_min = O => that => self => self === that || O.compare(self, that) < 1 ? self : that;
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen.
 *
 * @since 1.0.0
 */
const Order_max = O => that => self => self === that || O.compare(self, that) > -1 ? self : that;
/**
 * Clamp a value between a minimum and a maximum.
 *
 * @since 1.0.0
 */
const clamp = O => (minimum, maximum) => a => Order_min(O)(Order_max(O)(a)(minimum))(maximum);
/**
 * Test whether a value is between a minimum and a maximum (inclusive).
 *
 * @since 1.0.0
 */
const between = O => (minimum, maximum) => a => !lessThan(O)(minimum)(a) && !greaterThan(O)(maximum)(a);
//# sourceMappingURL=Order.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/String.mjs
/**
 * This module provides utility functions and type class instances for working with the `string` type in TypeScript.
 * It includes functions for basic string manipulation, as well as type class instances for
 * `Equivalence`, `Order`, `Semigroup`, and `Monoid`.
 *
 * @since 1.0.0
 */






/**
 * @category guards
 * @since 1.0.0
 */
const String_isString = isString;
/**
 * @category instances
 * @since 1.0.0
 */
const Equivalence = string;
/**
 * @category instances
 * @since 1.0.0
 */
const Order = Order_string;
/**
 * `string` semigroup under concatenation.
 *
 * @category instances
 * @since 1.0.0
 */
const Semigroup = Semigroup_string;
/**
 * `string` monoid under concatenation.
 *
 * The `empty` value is `''`.
 *
 * @category instances
 * @since 1.0.0
 */
const Monoid = Monoid_string;
/**
 * @since 1.0.0
 */
const String_empty = "";
/**
 * @since 1.0.0
 */
const concat = that => self => Semigroup.combine(self, that);
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('a', S.toUpperCase), 'A')
 *
 * @since 1.0.0
 */
const toUpperCase = s => s.toUpperCase();
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('A', S.toLowerCase), 'a')
 *
 * @since 1.0.0
 */
const toLowerCase = s => s.toLowerCase();
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abc', S.replace('b', 'd')), 'adc')
 *
 * @since 1.0.0
 */
const replace = (searchValue, replaceValue) => s => s.replace(searchValue, replaceValue);
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trim), 'a')
 *
 * @since 1.0.0
 */
const trim = s => s.trim();
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trimStart), 'a ')
 *
 * @since 1.0.0
 */
const trimStart = s => s.trimStart();
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe(' a ', S.trimEnd), ' a')
 *
 * @since 1.0.0
 */
const trimEnd = s => s.trimEnd();
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abcd', S.slice(1, 3)), 'bc')
 *
 * @since 1.0.0
 */
const slice = (start, end) => s => s.slice(start, end);
/**
 * Test whether a `string` is empty.
 *
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('', S.isEmpty), true)
 * assert.deepStrictEqual(pipe('a', S.isEmpty), false)
 *
 * @since 1.0.0
 */
const isEmpty = s => s.length === 0;
/**
 * Test whether a `string` is non empty.
 *
 * @since 1.0.0
 */
const String_isNonEmpty = s => s.length > 0;
/**
 * Calculate the number of characters in a `string`.
 *
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abc', S.length), 3)
 *
 * @since 1.0.0
 */
const String_length = s => s.length;
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abc', S.split('')), ['a', 'b', 'c'])
 * assert.deepStrictEqual(pipe('', S.split('')), [''])
 *
 * @since 1.0.0
 */
const split = separator => s => {
  const out = s.split(separator);
  return readonlyArray.isNonEmpty(out) ? out : [s];
};
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abc', S.includes('b')), true)
 * assert.deepStrictEqual(pipe('abc', S.includes('d')), false)
 *
 * @since 1.0.0
 */
const includes = (searchString, position) => s => s.includes(searchString, position);
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abc', S.startsWith('a')), true)
 * assert.deepStrictEqual(pipe('bc', S.startsWith('a')), false)
 *
 * @since 1.0.0
 */
const startsWith = (searchString, position) => s => s.startsWith(searchString, position);
/**
 * @example
 * import * as S from '@fp-ts/core/String'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(pipe('abc', S.endsWith('c')), true)
 * assert.deepStrictEqual(pipe('ab', S.endsWith('c')), false)
 *
 * @since 1.0.0
 */
const endsWith = (searchString, position) => s => s.endsWith(searchString, position);
/**
 * Keep the specified number of characters from the start of a string.
 *
 * If `n` is larger than the available number of characters, the string will
 * be returned whole.
 *
 * If `n` is not a positive number, an empty string will be returned.
 *
 * If `n` is a float, it will be rounded down to the nearest integer.
 *
 * @since 1.0.0
 */
const takeLeft = n => self => self.slice(0, Math.max(n, 0));
/**
 * Keep the specified number of characters from the end of a string.
 *
 * If `n` is larger than the available number of characters, the string will
 * be returned whole.
 *
 * If `n` is not a positive number, an empty string will be returned.
 *
 * If `n` is a float, it will be rounded down to the nearest integer.
 *
 * @since 1.0.0
 */
const takeRight = n => s => s.slice(Math.max(0, s.length - Math.floor(n)), Infinity);
/*

  Missing:

  - charCodeAt
  - substring
  - at
  - charAt
  - codePointAt
  - indexOf
  - lastIndexOf
  - localeCompare
  - match
  - matchAll
  - normalize
  - padEnd
  - padStart
  - repeat
  - replaceAll
  - search
  - toLocaleLowerCase
  - toLocaleUpperCase
*/
// TODO: 100% coverage tests (ask Max)
// const CR = 0x0d
// const LF = 0x0a
// /**
//  * Returns an `IterableIterator` which yields each line contained within the
//  * string, trimming off the trailing newline character.
//  *
//  * @since 1.0.0
//  */
// // export const linesIterator = (self: string): LinesIterator => linesSeparated(self, true)
// /**
//  * Returns an `IterableIterator` which yields each line contained within the
//  * string as well as the trailing newline character.
//  *
//  * @since 1.0.0
//  */
// export const linesWithSeparators = (s: string): LinesIterator => linesSeparated(s, false)
// /**
//  * For every line in this string, strip a leading prefix consisting of blanks
//  * or control characters followed by the character specified by `marginChar`
//  * from the line.
//  *
//  * @since 1.0.0
//  */
// export const stripMarginWith = (marginChar: string) =>
//   (self: string): string => {
//     let out = ""
//     for (const line of linesWithSeparators(self)) {
//       let index = 0
//       while (index < line.length && line.charAt(index) <= " ") {
//         index = index + 1
//       }
//       const stripped = index < line.length && line.charAt(index) === marginChar
//         ? line.substring(index + 1)
//         : line
//       out = out + stripped
//     }
//     return out
//   }
// /**
//  * For every line in this string, strip a leading prefix consisting of blanks
//  * or control characters followed by the `"|"` character from the line.
//  *
//  * @since 1.0.0
//  */
// export const stripMargin = (self: string): string => stripMarginWith("|")(self)
// class LinesIterator implements IterableIterator<string> {
//   private index: number
//   private readonly length: number
//   constructor(readonly s: string, readonly stripped: boolean = false) {
//     this.index = 0
//     this.length = s.length
//   }
//   next(): IteratorResult<string> {
//     if (this.done) {
//       return { done: true, value: undefined }
//     }
//     const start = this.index
//     while (!this.done && !isLineBreak(this.s[this.index]!)) {
//       this.index = this.index + 1
//     }
//     let end = this.index
//     if (!this.done) {
//       const char = this.s[this.index]!
//       this.index = this.index + 1
//       if (!this.done && isLineBreak2(char, this.s[this.index]!)) {
//         this.index = this.index + 1
//       }
//       if (!this.stripped) {
//         end = this.index
//       }
//     }
//     return { done: false, value: this.s.substring(start, end) }
//   }
//   [Symbol.iterator](): IterableIterator<string> {
//     return new LinesIterator(this.s, this.stripped)
//   }
//   private get done(): boolean {
//     return this.index >= this.length
//   }
// }
// /**
//  * Test if the provided character is a line break character (i.e. either `"\r"`
//  * or `"\n"`).
//  */
// const isLineBreak = (char: string): boolean => {
//   const code = char.charCodeAt(0)
//   return code === CR || code === LF
// }
// /**
//  * Test if the provided characters combine to form a carriage return/line-feed
//  * (i.e. `"\r\n"`).
//  */
// const isLineBreak2 = (char0: string, char1: string): boolean =>
//   char0.charCodeAt(0) === CR && char1.charCodeAt(0) === LF
// const linesSeparated = (self: string, stripped: boolean): LinesIterator =>
//   new LinesIterator(self, stripped)
//# sourceMappingURL=String.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/SemiProduct.mjs
/**
 * @since 1.0.0
 */

/**
 * Returns a default `product` composition.
 *
 * @since 1.0.0
 */
const productComposition = (F, G) => (self, that) => pipe(F.product(self, that), F.map(([ga, gb]) => G.product(ga, gb)));
/**
 * Returns a default `productMany` composition.
 *
 * @since 1.0.0
 */
const productManyComposition = (F, G) => (self, collection) => pipe(F.productMany(self, collection), F.map(([ga, ...gas]) => G.productMany(ga, gas)));
/**
 * Returns a default `productMany` implementation (useful for tests).
 *
 * @category constructors
 * @since 1.0.0
 */
const SemiProduct_productMany = (Covariant, product) => (self, collection) => {
  let out = Function_pipe(self, Covariant.map(a => [a]));
  for (const fa of collection) {
    out = Function_pipe(product(out, fa), Covariant.map(([[head, ...tail], a]) => [head, ...tail, a]));
  }
  return out;
};
/**
 * @since 1.0.0
 */
const SemiProduct_andThenBind = F => (name, that) => self => pipe(F.product(self, that), F.imap(([a, b]) => Object.assign({}, a, {
  [name]: b
}), ({
  [name]: b,
  ...rest
}) => [rest, b]));
/**
 * Adds an element to the end of a tuple.
 *
 * @since 1.0.0
 */
const SemiProduct_element = F => that => self => pipe(F.product(self, that), F.imap(([a, b]) => [...a, b], ab => [ab.slice(0, -1), ab[ab.length - 1]]));
/**
 * @since 1.0.0
 */
const nonEmptyTuple = F => (...components) => F.productMany(components[0], components.slice(1));
/**
 * @since 1.0.0
 */
const nonEmptyStruct = F => fields => {
  const keys = Object.keys(fields);
  return pipe(F.productMany(fields[keys[0]], keys.slice(1).map(k => fields[k])), F.imap(([value, ...values]) => {
    const out = {
      [keys[0]]: value
    };
    for (let i = 0; i < values.length; i++) {
      out[keys[i + 1]] = values[i];
    }
    return out;
  }, r => keys.map(k => r[k])));
};
//# sourceMappingURL=SemiProduct.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/TraversableFilterable.mjs




/**
 * Returns a default `traversePartitionMap` implementation.
 *
 * @since 1.0.0
 */
const traversePartitionMap = T => F => f => ta => Function_pipe(ta, T.traverse(F)(f), F.map(separate(T)));
/**
 * Returns a default `traverseFilterMap` implementation.
 *
 * @since 1.0.0
 */
const traverseFilterMap = T => F => f => ta => Function_pipe(ta, T.traverse(F)(f), F.map(T.compact));
/**
 * @since 1.0.0
 */
const traverseFilter = T => F => predicate => T.traverseFilterMap(F)(b => pipe(predicate(b), F.map(keep => keep ? O.some(b) : O.none())));
/**
 * @since 1.0.0
 */
const traversePartition = T => F => predicate => T.traversePartitionMap(F)(b => pipe(predicate(b), F.map(keep => keep ? E.right(b) : E.left(b))));
//# sourceMappingURL=TraversableFilterable.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/ReadonlyArray.mjs






















/**
 * Builds a `NonEmptyArray` from an non-empty collection of elements.
 *
 * @category constructors
 * @since 1.0.0
 */
const ReadonlyArray_make = (...elements) => elements;
/**
 * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @category constructors
 * @since 1.0.0
 */
const makeBy = f => n => {
  const max = Math.max(1, Math.floor(n));
  const out = [f(0)];
  for (let i = 1; i < max; i++) {
    out.push(f(i));
  }
  return out;
};
/**
 * Return a `NonEmptyArray` containing a range of integers, including both endpoints.
 *
 * @category constructors
 * @since 1.0.0
 */
const range = (start, end) => start <= end ? makeBy(i => start + i)(end - start + 1) : [start];
/**
 * Return a `NonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @category constructors
 * @since 1.0.0
 */
const replicate = a => makeBy(() => a);
/**
 * @category conversions
 * @since 1.0.0
 */
const mjs_ReadonlyArray_fromIterable = ReadonlyArray_fromIterable;
/**
 * @category conversions
 * @since 1.0.0
 */
const ReadonlyArray_fromOption = self => option.isNone(self) ? [] : [self.value];
/**
 * @category conversions
 * @since 1.0.0
 */
const ReadonlyArray_fromEither = self => either.isLeft(self) ? [] : [self.right];
/**
 * @category pattern matching
 * @since 1.0.0
 */
const ReadonlyArray_match = (onEmpty, onNonEmpty) => self => ReadonlyArray_isNonEmpty(self) ? onNonEmpty(headNonEmpty(self), tailNonEmpty(self)) : onEmpty();
/**
 * @category pattern matching
 * @since 1.0.0
 */
const matchRight = (onEmpty, onNonEmpty) => self => ReadonlyArray_isNonEmpty(self) ? onNonEmpty(initNonEmpty(self), lastNonEmpty(self)) : onEmpty();
/**
 * Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * @since 1.0.0
 */
const prepend = head => self => [head, ...self];
/**
 * @since 1.0.0
 */
const prependAll = that => self => mjs_ReadonlyArray_fromIterable(that).concat(mjs_ReadonlyArray_fromIterable(self));
function prependAllNonEmpty(that) {
  return prependAll(that);
}
/**
 * Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * @since 1.0.0
 */
const append = last => self => [...self, last];
/**
 * @since 1.0.0
 */
const appendAll = that => self => mjs_ReadonlyArray_fromIterable(self).concat(mjs_ReadonlyArray_fromIterable(that));
function appendAllNonEmpty(that) {
  return appendAll(that);
}
/**
 * Fold an `Iterable` from the left, keeping all intermediate results instead of only the final result.
 *
 * @category folding
 * @since 1.0.0
 */
const scan = (b, f) => self => {
  const out = [b];
  let i = 0;
  for (const a of self) {
    out[i + 1] = f(out[i], a);
    i++;
  }
  return out;
};
/**
 * Fold an `Iterable` from the right, keeping all intermediate results instead of only the final result.
 *
 * @category folding
 * @since 1.0.0
 */
const scanRight = (b, f) => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  const out = new Array(input.length + 1);
  out[input.length] = b;
  for (let i = input.length - 1; i >= 0; i--) {
    out[i] = f(out[i + 1], input[i]);
  }
  return out;
};
/**
 * Test whether a `ReadonlyArray` is empty narrowing down the type to `[]`.
 *
 * @category predicates
 * @since 1.0.0
 */
const ReadonlyArray_isEmpty = self => self.length === 0;
/**
 * Test whether a `ReadonlyArray` is non empty narrowing down the type to `NonEmptyReadonlyArray<A>`.
 *
 * @category predicates
 * @since 1.0.0
 */
const ReadonlyArray_isNonEmpty = isNonEmpty;
/**
 * Return the number of elements in a `ReadonlyArray`.
 *
 * @category getters
 * @since 1.0.0
 */
const ReadonlyArray_length = self => self.length;
const isOutOfBound = (i, as) => i < 0 || i >= as.length;
const ReadonlyArray_clamp = (i, as) => Math.floor(Math.min(Math.max(0, i), as.length));
/**
 * This function provides a safe way to read a value at a particular index from a `ReadonlyArray`.
 *
 * @category getters
 * @since 1.0.0
 */
const get = index => self => {
  const i = Math.floor(index);
  return isOutOfBound(i, self) ? option.none : option.some(self[i]);
};
/**
 * Return a tuple containing the first element, and a new `Array` of the remaining elements, if any.
 *
 * @category getters
 * @since 1.0.0
 */
const unprepend = self => [headNonEmpty(self), tailNonEmpty(self)];
/**
 * Return a tuple containing a copy of the `NonEmptyReadonlyArray` without its last element, and that last element.
 *
 * @category getters
 * @since 1.0.0
 */
const unappend = self => [initNonEmpty(self), lastNonEmpty(self)];
/**
 * Get the first element of a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
 *
 * @category getters
 * @since 1.0.0
 */
const head = /*#__PURE__*/(/* unused pure expression or super */ null && (get(0)));
/**
 * Gets an element unsafely, will throw on out of bounds.
 *
 * @since 1.0.0
 * @category unsafe
 */
const unsafeGet = index => self => {
  const i = Math.floor(index);
  if (isOutOfBound(i, self)) {
    throw new Error(`Index ${i} out of bounds`);
  }
  return self[i];
};
/**
 * @category getters
 * @since 1.0.0
 */
const headNonEmpty = /*#__PURE__*/unsafeGet(0);
/**
 * Get the last element in a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
 *
 * @category getters
 * @since 1.0.0
 */
const ReadonlyArray_last = self => ReadonlyArray_isNonEmpty(self) ? option.some(lastNonEmpty(self)) : option.none;
/**
 * @category getters
 * @since 1.0.0
 */
const lastNonEmpty = as => as[as.length - 1];
/**
 * Get all but the first element of an `Iterable`, creating a new `Array`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 1.0.0
 */
const tail = self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? option.some(tailNonEmpty(input)) : option.none;
};
/**
 * @category getters
 * @since 1.0.0
 */
const tailNonEmpty = self => self.slice(1);
/**
 * Get all but the last element of an `Iterable`, creating a new `Array`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 1.0.0
 */
const init = self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? option.some(initNonEmpty(input)) : option.none;
};
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @category getters
 * @since 1.0.0
 */
const initNonEmpty = self => self.slice(0, -1);
/**
 * Keep only a max number of elements from the start of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 1.0.0
 */
const take = n => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return input.slice(0, ReadonlyArray_clamp(n, input));
};
/**
 * Keep only a max number of elements from the end of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 1.0.0
 */
const ReadonlyArray_takeRight = n => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  const i = ReadonlyArray_clamp(n, input);
  return i === 0 ? [] : input.slice(-i);
};
function takeWhile(predicate) {
  return self => {
    const out = [];
    for (const a of self) {
      if (!predicate(a)) {
        break;
      }
      out.push(a);
    }
    return out;
  };
}
const spanIndex = (self, predicate) => {
  let i = 0;
  for (const a of self) {
    if (!predicate(a)) {
      break;
    }
    i++;
  }
  return i;
};
function span(predicate) {
  return self => splitAt(spanIndex(self, predicate))(self);
}
/**
 * Drop a max number of elements from the start of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 1.0.0
 */
const drop = n => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return input.slice(ReadonlyArray_clamp(n, input), input.length);
};
/**
 * Drop a max number of elements from the end of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 1.0.0
 */
const dropRight = n => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return input.slice(0, input.length - ReadonlyArray_clamp(n, input));
};
function dropWhile(predicate) {
  return self => mjs_ReadonlyArray_fromIterable(self).slice(spanIndex(self, predicate));
}
/**
 * Return the first index for which a predicate holds.
 *
 * @category getters
 * @since 1.0.0
 */
const findFirstIndex = predicate => self => {
  let i = 0;
  for (const a of self) {
    if (predicate(a)) {
      return option.some(i);
    }
    i++;
  }
  return option.none;
};
/**
 * Return the last index for which a predicate holds.
 *
 * @category getters
 * @since 1.0.0
 */
const findLastIndex = predicate => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  for (let i = input.length - 1; i >= 0; i--) {
    if (predicate(input[i])) {
      return option.some(i);
    }
  }
  return option.none;
};
function findFirst(predicate) {
  return self => {
    const input = mjs_ReadonlyArray_fromIterable(self);
    for (let i = 0; i < input.length; i++) {
      if (predicate(input[i])) {
        return option.some(input[i]);
      }
    }
    return option.none;
  };
}
function findLast(predicate) {
  return self => {
    const input = mjs_ReadonlyArray_fromIterable(self);
    for (let i = input.length - 1; i >= 0; i--) {
      if (predicate(input[i])) {
        return option.some(input[i]);
      }
    }
    return option.none;
  };
}
/**
 * Insert an element at the specified index, creating a new `NonEmptyArray`,
 * or return `None` if the index is out of bounds.
 *
 * @since 1.0.0
 */
const insertAt = (i, b) => self => {
  const out = Array.from(self);
  //             v--- `= self.length` ok, it means inserting in last position
  if (i < 0 || i > out.length) {
    return option.none;
  }
  out.splice(i, 0, b);
  return option.some(out);
};
/**
 * Change the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * @since 1.0.0
 */
const ReadonlyArray_replace = (i, b) => modify(i, () => b);
/**
 * @since 1.0.0
 */
const replaceOption = (i, b) => modifyOption(i, () => b);
/**
 * Apply a function to the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * @since 1.0.0
 */
const modify = (i, f) => self => pipe(modifyOption(i, f)(self), O.getOrElse(() => Array.from(self)));
/**
 * Apply a function to the element at the specified index, creating a new `Array`,
 * or return `None` if the index is out of bounds.
 *
 * @since 1.0.0
 */
const modifyOption = (i, f) => self => {
  const out = Array.from(self);
  if (isOutOfBound(i, out)) {
    return O.none();
  }
  const next = f(out[i]);
  // @ts-expect-error
  out[i] = next;
  return O.some(out);
};
/**
 * Delete the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * @since 1.0.0
 */
const remove = i => self => {
  const out = Array.from(self);
  if (isOutOfBound(i, out)) {
    return out;
  }
  out.splice(i, 1);
  return out;
};
/**
 * Reverse an `Iterable`, creating a new `Array`.
 *
 * @since 1.0.0
 */
const ReadonlyArray_reverse = self => Array.from(self).reverse();
/**
 * @since 1.0.0
 */
const reverseNonEmpty = self => [lastNonEmpty(self), ...self.slice(0, -1).reverse()];
/**
 * Return all the `Right` elements from an `Interable` of `Either`s.
 *
 * @category getters
 * @since 1.0.0
 */
const rights = self => {
  const out = [];
  for (const a of self) {
    if (either.isRight(a)) {
      out.push(a.right);
    }
  }
  return out;
};
/**
 * Return all the `Left` elements from an `Interable` of `Either`s.
 *
 * @category getters
 * @since 1.0.0
 */
const lefts = self => {
  const out = [];
  for (const a of self) {
    if (either.isLeft(a)) {
      out.push(a.left);
    }
  }
  return out;
};
/**
 * Sort the elements of an `Iterable` in increasing order, creating a new `Array`.
 *
 * @category sorting
 * @since 1.0.0
 */
const sort = O => self => {
  const out = Array.from(self);
  out.sort(O.compare);
  return out;
};
/**
 * Sort the elements of a `NonEmptyReadonlyArray` in increasing order, creating a new `NonEmptyArray`.
 *
 * @category sorting
 * @since 1.0.0
 */
const sortNonEmpty = O => self => sort(O)(self);
/**
 * Sort the elements of an `Iterable` in increasing order, where elements are compared
 * using first `orders[0]`, then `orders[1]`, etc...
 *
 * @category sorting
 * @since 1.0.0
 */
const sortBy = (...orders) => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? sortByNonEmpty(...orders)(input) : [];
};
/**
 * @category sorting
 * @since 1.0.0
 */
const sortByNonEmpty = (...orders) => sortNonEmpty(order.getMonoid().combineAll(orders));
/**
 * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
 * If one input `Iterable` is short, excess elements of the
 * longer `Iterable` are discarded.
 *
 * @since 1.0.0
 */
const zip = that => zipWith(that, (a, b) => [a, b]);
/**
 * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
 * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
 *
 * @since 1.0.0
 */
const zipWith = (that, f) => self => {
  const as = mjs_ReadonlyArray_fromIterable(self);
  const bs = mjs_ReadonlyArray_fromIterable(that);
  return ReadonlyArray_isNonEmpty(as) && ReadonlyArray_isNonEmpty(bs) ? zipNonEmptyWith(bs, f)(as) : [];
};
/**
 * @since 1.0.0
 */
const zipNonEmpty = that => self => pipe(self, zipNonEmptyWith(that, (a, b) => [a, b]));
/**
 * @since 1.0.0
 */
const zipNonEmptyWith = (that, f) => self => {
  const cs = [f(headNonEmpty(self), headNonEmpty(that))];
  const len = Math.min(self.length, that.length);
  for (let i = 1; i < len; i++) {
    cs[i] = f(self[i], that[i]);
  }
  return cs;
};
/**
 * This function is the inverse of `zip`. Takes an `Iterable` of pairs and return two corresponding `Array`s.
 *
 * @since 1.0.0
 */
const unzip = self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? unzipNonEmpty(input) : [[], []];
};
/**
 * @since 1.0.0
 */
const unzipNonEmpty = self => {
  const fa = [self[0][0]];
  const fb = [self[0][1]];
  for (let i = 1; i < self.length; i++) {
    fa[i] = self[i][0];
    fb[i] = self[i][1];
  }
  return [fa, fb];
};
/**
 * Places an element in between members of an `Iterable`
 *
 * @since 1.0.0
 */
const intersperse = middle => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? intersperseNonEmpty(middle)(input) : [];
};
/**
 * Places an element in between members of a `NonEmptyReadonlyArray`
 *
 * @since 1.0.0
 */
const intersperseNonEmpty = middle => self => {
  const out = [headNonEmpty(self)];
  const tail = tailNonEmpty(self);
  for (let i = 0; i < tail.length; i++) {
    if (i < tail.length) {
      out.push(middle);
    }
    out.push(tail[i]);
  }
  return out;
};
/**
 * Apply a function to the head, creating a new `NonEmptyReadonlyArray`.
 *
 * @since 1.0.0
 */
const modifyNonEmptyHead = f => self => [f(headNonEmpty(self)), ...tailNonEmpty(self)];
/**
 * Change the head, creating a new `NonEmptyReadonlyArray`.
 *
 * @since 1.0.0
 */
const setNonEmptyHead = b => modifyNonEmptyHead(() => b);
/**
 * Apply a function to the last element, creating a new `NonEmptyReadonlyArray`.
 *
 * @since 1.0.0
 */
const modifyNonEmptyLast = f => self => pipe(initNonEmpty(self), append(f(lastNonEmpty(self))));
/**
 * Change the last element, creating a new `NonEmptyReadonlyArray`.
 *
 * @since 1.0.0
 */
const setNonEmptyLast = b => modifyNonEmptyLast(() => b);
/**
 * Rotate an `Iterable` by `n` steps.
 *
 * @since 1.0.0
 */
const rotate = n => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? rotateNonEmpty(n)(input) : [];
};
/**
 * Rotate a `NonEmptyReadonlyArray` by `n` steps.
 *
 * @since 1.0.0
 */
const rotateNonEmpty = n => self => {
  const len = self.length;
  const m = Math.round(n) % len;
  if (isOutOfBound(Math.abs(m), self) || m === 0) {
    return copy(self);
  }
  if (m < 0) {
    const [f, s] = splitNonEmptyAt(-m)(self);
    return appendAllNonEmpty(f)(s);
  } else {
    return rotateNonEmpty(m - len)(self);
  }
};
/**
 * Returns a function that checks if a `ReadonlyArray` contains a given value using a provided `equivalence` function.
 *
 * @category predicates
 * @since 1.0.0
 */
const ReadonlyArray_contains = equivalence => a => self => {
  for (const i of self) {
    if (equivalence(a, i)) {
      return true;
    }
  }
  return false;
};
/**
 * Remove duplicates from am `Iterable`, keeping the first occurrence of an element.
 *
 * @since 1.0.0
 */
const uniq = equivalence => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? uniqNonEmpty(equivalence)(input) : [];
};
/**
 * Remove duplicates from a `NonEmptyReadonlyArray`, keeping the first occurrence of an element.
 *
 * @since 1.0.0
 */
const uniqNonEmpty = equivalence => self => {
  const out = [headNonEmpty(self)];
  const rest = tailNonEmpty(self);
  for (const a of rest) {
    if (out.every(o => !equivalence(a, o))) {
      out.push(a);
    }
  }
  return out;
};
/**
 * A useful recursion pattern for processing an `Iterable` to produce a new `Array`, often used for "chopping" up the input
 * `Iterable`. Typically chop is called with some function that will consume an initial prefix of the `Iterable` and produce a
 * value and the rest of the `Array`.
 *
 * @since 1.0.0
 */
const chop = f => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? chopNonEmpty(f)(input) : [];
};
/**
 * A useful recursion pattern for processing a `NonEmptyReadonlyArray` to produce a new `NonEmptyReadonlyArray`, often used for "chopping" up the input
 * `NonEmptyReadonlyArray`. Typically `chop` is called with some function that will consume an initial prefix of the `NonEmptyReadonlyArray` and produce a
 * value and the tail of the `NonEmptyReadonlyArray`.
 *
 * @since 1.0.0
 */
const chopNonEmpty = f => self => {
  const [b, rest] = f(self);
  const out = [b];
  let next = rest;
  while (readonlyArray.isNonEmpty(next)) {
    const [b, rest] = f(next);
    out.push(b);
    next = rest;
  }
  return out;
};
/**
 * Splits an `Iterable` into two pieces, the first piece has max `n` elements.
 *
 * @category getters
 * @since 1.0.0
 */
const splitAt = n => self => {
  const input = Array.from(self);
  return n >= 1 && ReadonlyArray_isNonEmpty(input) ? splitNonEmptyAt(n)(input) : ReadonlyArray_isEmpty(input) ? [input, []] : [[], input];
};
function copy(self) {
  return self.slice();
}
/**
 * Splits a `NonEmptyReadonlyArray` into two pieces, the first piece has max `n` elements.
 *
 * @category getters
 * @since 1.0.0
 */
const splitNonEmptyAt = n => self => {
  const m = Math.max(1, n);
  return m >= self.length ? [copy(self), []] : [pipe(self.slice(1, m), prepend(headNonEmpty(self))), self.slice(m)];
};
/**
 * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `Iterable`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `self`.
 *
 * @category getters
 * @since 1.0.0
 */
const chunksOf = n => self => {
  const input = mjs_ReadonlyArray_fromIterable(self);
  return ReadonlyArray_isNonEmpty(input) ? chunksOfNonEmpty(n)(input) : [];
};
/**
 * Splits a `NonEmptyReadonlyArray` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `NonEmptyReadonlyArray`.
 *
 * @category getters
 * @since 1.0.0
 */
const chunksOfNonEmpty = n => chopNonEmpty(splitNonEmptyAt(n));
/**
 * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s.
 *
 * @category grouping
 * @since 1.0.0
 */
const group = equivalence => self => pipe(self, chopNonEmpty(as => {
  const h = headNonEmpty(as);
  const out = [h];
  let i = 1;
  for (; i < as.length; i++) {
    const a = as[i];
    if (equivalence(a, h)) {
      out.push(a);
    } else {
      break;
    }
  }
  return [out, as.slice(i)];
}));
/**
 * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @category grouping
 * @since 1.0.0
 */
const groupBy = f => self => {
  const out = {};
  for (const a of self) {
    const k = f(a);
    if (Object.prototype.hasOwnProperty.call(out, k)) {
      out[k].push(a);
    } else {
      out[k] = [a];
    }
  }
  return out;
};
/**
 * @since 1.0.0
 */
const union = equivalence => that => self => {
  const a = Array.from(self);
  const b = Array.from(that);
  return ReadonlyArray_isNonEmpty(a) && ReadonlyArray_isNonEmpty(b) ? unionNonEmpty(equivalence)(b)(a) : ReadonlyArray_isNonEmpty(a) ? a : b;
};
/**
 * @since 1.0.0
 */
const unionNonEmpty = equivalence =>
// @ts-expect-error
that => self => uniqNonEmpty(equivalence)(appendAllNonEmpty(that)(self));
/**
 * Creates an `Array` of unique values that are included in all given `Iterable`s.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * @since 1.0.0
 */
const intersection = equivalence => that => self => mjs_ReadonlyArray_fromIterable(self).filter(a => ReadonlyArray_contains(equivalence)(a)(that));
/**
 * Creates a `Array` of values not included in the other given `Iterable`.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * @since 1.0.0
 */
const difference = equivalence => that => self => mjs_ReadonlyArray_fromIterable(self).filter(a => !ReadonlyArray_contains(equivalence)(a)(that));
/**
 * @category constructors
 * @since 1.0.0
 */
const ReadonlyArray_of = a => [a];
/**
 * @category constructors
 * @since 1.0.0
 */
const ReadonlyArray_empty = () => [];
/**
 * @category mapping
 * @since 1.0.0
 */
const ReadonlyArray_map = f => mapWithIndex(a => f(a));
/**
 * @category mapping
 * @since 1.0.0
 */
const mapNonEmpty = f => mapNonEmptyWithIndex(f);
/**
 * @category mapping
 * @since 1.0.0
 */
const mapWithIndex = f => self => self.map((a, i) => f(a, i));
/**
 * @category mapping
 * @since 1.0.0
 */
const mapNonEmptyWithIndex = f => self => {
  const out = [f(headNonEmpty(self), 0)];
  for (let i = 1; i < self.length; i++) {
    out.push(f(self[i], i));
  }
  return out;
};
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Of = {
  of: ReadonlyArray_of
};
/**
 * @category do notation
 * @since 1.0.0
 */
const ReadonlyArray_Do = /*#__PURE__*/(/* unused pure expression or super */ null && (of_.Do(ReadonlyArray_Of)));
/**
 * @category mapping
 * @since 1.0.0
 */
const ReadonlyArray_imap = /*#__PURE__*/imap(ReadonlyArray_map);
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Invariant = {
  imap: ReadonlyArray_imap
};
/**
 * @category mapping
 * @since 1.0.0
 */
const ReadonlyArray_tupled = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.tupled(ReadonlyArray_Invariant)));
/**
 * @category do notation
 * @since 1.0.0
 */
const ReadonlyArray_bindTo = /*#__PURE__*/(/* unused pure expression or super */ null && (invariant.bindTo(ReadonlyArray_Invariant)));
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Covariant = /*#__PURE__*/make(ReadonlyArray_map);
const ReadonlyArray_let_ = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.let(ReadonlyArray_Covariant)));

/**
 * @category mapping
 * @since 1.0.0
 */
const ReadonlyArray_flap = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.flap(ReadonlyArray_Covariant)));
/**
 * Maps the success value of this effect to the specified constant value.
 *
 * @category mapping
 * @since 1.0.0
 */
const ReadonlyArray_as = /*#__PURE__*/(/* unused pure expression or super */ null && (covariant.as(ReadonlyArray_Covariant)));
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Pointed = {
  ...ReadonlyArray_Of,
  ...ReadonlyArray_Covariant
};
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMapWithIndex = f => self => {
  if (ReadonlyArray_isEmpty(self)) {
    return [];
  }
  const out = [];
  for (let i = 0; i < self.length; i++) {
    out.push(...f(self[i], i));
  }
  return out;
};
/**
 * @category sequencing
 * @since 1.0.0
 */
const ReadonlyArray_flatMap = f => flatMapWithIndex(f);
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMapNonEmptyWithIndex = f => self => {
  const out = copy(f(headNonEmpty(self), 0));
  for (let i = 1; i < self.length; i++) {
    out.push(...f(self[i], i));
  }
  return out;
};
/**
 * @category sequencing
 * @since 1.0.0
 */
const flatMapNonEmpty = f => flatMapNonEmptyWithIndex(f);
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_FlatMap = {
  flatMap: ReadonlyArray_flatMap
};
/**
 * @category sequencing
 * @since 1.0.0
 */
const ReadonlyArray_flatten = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.flatten(ReadonlyArray_FlatMap)));
/**
 * @category sequencing
 * @since 1.0.0
 */
const flattenNonEmpty = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMapNonEmpty(identity)));
/**
 * @since 1.0.0
 */
const ReadonlyArray_composeKleisliArrow = /*#__PURE__*/(/* unused pure expression or super */ null && (flatMap_.composeKleisliArrow(ReadonlyArray_FlatMap)));
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Chainable = {
  ...ReadonlyArray_FlatMap,
  ...ReadonlyArray_Covariant
};
/**
 * @category do notation
 * @since 1.0.0
 */
const ReadonlyArray_bind = /*#__PURE__*/(/* unused pure expression or super */ null && (chainable.bind(ReadonlyArray_Chainable)));
/**
 * @category filtering
 * @since 1.0.0
 */
const filterMapWithIndex = f => self => {
  const as = mjs_ReadonlyArray_fromIterable(self);
  const out = [];
  for (let i = 0; i < as.length; i++) {
    const o = f(as[i], i);
    if (isSome(o)) {
      out.push(o.value);
    }
  }
  return out;
};
/**
 * @category filtering
 * @since 1.0.0
 */
const ReadonlyArray_filterMap = f => filterMapWithIndex(f);
/**
 * @category filtering
 * @since 1.0.0
 */
const ReadonlyArray_compact = /*#__PURE__*/ReadonlyArray_filterMap(Function_identity);
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Compactable = {
  compact: ReadonlyArray_compact
};
/**
 * @category filtering
 * @since 1.0.0
 */
const ReadonlyArray_separate = self => {
  const left = [];
  const right = [];
  for (const e of self) {
    if (either.isLeft(e)) {
      left.push(e.left);
    } else {
      right.push(e.right);
    }
  }
  return [left, right];
};
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Filterable = {
  filterMap: ReadonlyArray_filterMap
};
/**
 * @category filtering
 * @since 1.0.0
 */
const ReadonlyArray_filter = /*#__PURE__*/(/* unused pure expression or super */ null && (filterable.filter(ReadonlyArray_Filterable)));
/**
 * @category filtering
 * @since 1.0.0
 */
const filterWithIndex = predicate => filterMapWithIndex((b, i) => predicate(b, i) ? option.some(b) : option.none);
/**
 * @category filtering
 * @since 1.0.0
 */
const partition = /*#__PURE__*/(/* unused pure expression or super */ null && (filterable.partition(ReadonlyArray_Filterable)));
/**
 * @category filtering
 * @since 1.0.0
 */
const partitionWithIndex = predicate => partitionMapWithIndex((b, i) => predicate(b, i) ? either.right(b) : either.left(b));
/**
 * @category filtering
 * @since 1.0.0
 */
const partitionMap = f => partitionMapWithIndex(f);
/**
 * @category filtering
 * @since 1.0.0
 */
const partitionMapWithIndex = f => self => {
  const left = [];
  const right = [];
  for (let i = 0; i < self.length; i++) {
    const e = f(self[i], i);
    if (either.isLeft(e)) {
      left.push(e.left);
    } else {
      right.push(e.right);
    }
  }
  return [left, right];
};
/**
 * @category traversing
 * @since 1.0.0
 */
const ReadonlyArray_traverse = F => f => traverseWithIndex(F)(f);
/**
 * @category traversing
 * @since 1.0.0
 */
const traverseWithIndex = F => f => self => F.productAll(self.map(f));
/**
 * @category traversing
 * @since 1.0.0
 */
const traverseNonEmpty = F => f => traverseNonEmptyWithIndex(F)(f);
/**
 * @category traversing
 * @since 1.0.0
 */
const traverseNonEmptyWithIndex = F => f => self => {
  const [head, ...tail] = pipe(self, mapNonEmptyWithIndex(f));
  return F.productMany(head, tail);
};
/**
 * @category traversing
 * @since 1.0.0
 */
const ReadonlyArray_sequence = /*#__PURE__*/sequence(ReadonlyArray_traverse);
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Traversable = {
  // @ts-expect-error
  traverse: ReadonlyArray_traverse,
  // @ts-expect-error
  sequence: ReadonlyArray_sequence
};
/**
 * @category traversing
 * @since 1.0.0
 */
const ReadonlyArray_traverseTap = /*#__PURE__*/(/* unused pure expression or super */ null && (traversable.traverseTap(ReadonlyArray_Traversable)));
/**
 * @category traversing
 * @since 1.0.0
 */
const sequenceNonEmpty = F => traverseNonEmpty(F)(identity);
const product = (self, that) => {
  if (ReadonlyArray_isEmpty(self) || ReadonlyArray_isEmpty(that)) {
    return ReadonlyArray_empty();
  }
  const out = [];
  for (let i = 0; i < self.length; i++) {
    for (let j = 0; j < that.length; j++) {
      out.push([self[i], that[j]]);
    }
  }
  return out;
};
const ReadonlyArray_productMany = /*#__PURE__*/SemiProduct_productMany(ReadonlyArray_Covariant, product);
const ReadonlyArray_productAll = collection => {
  const arrays = mjs_ReadonlyArray_fromIterable(collection);
  return ReadonlyArray_isEmpty(arrays) ? ReadonlyArray_empty() : ReadonlyArray_productMany(arrays[0], arrays.slice(1));
};
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_SemiProduct = {
  ...ReadonlyArray_Invariant,
  product,
  productMany: ReadonlyArray_productMany
};
/**
 * A variant of `bind` that sequentially ignores the scope.
 *
 * @category do notation
 * @since 1.0.0
 */
const ReadonlyArray_andThenBind = /*#__PURE__*/(/* unused pure expression or super */ null && (semiProduct.andThenBind(ReadonlyArray_SemiProduct)));
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_SemiApplicative = {
  ...ReadonlyArray_SemiProduct,
  ...ReadonlyArray_Covariant
};
/**
 * @since 1.0.0
 */
const ReadonlyArray_ap = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.ap(ReadonlyArray_SemiApplicative)));
/**
 * Lifts a binary function into `ReadonlyArray`.
 *
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_lift2 = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.lift2(ReadonlyArray_SemiApplicative)));
/**
 * Lifts a ternary function into `ReadonlyArray`.
 *
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_lift3 = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.lift3(ReadonlyArray_SemiApplicative)));
/**
 * @category lifting
 * @since 1.0.0
 */
const liftSemigroup = /*#__PURE__*/(/* unused pure expression or super */ null && (semiApplicative.liftSemigroup(ReadonlyArray_SemiApplicative)));
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Product = {
  ...ReadonlyArray_Of,
  ...ReadonlyArray_SemiProduct,
  productAll: ReadonlyArray_productAll
};
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Applicative = {
  ...ReadonlyArray_SemiApplicative,
  ...ReadonlyArray_Product
};
/**
 * @category lifting
 * @since 1.0.0
 */
const liftMonoid = /*#__PURE__*/(/* unused pure expression or super */ null && (applicative.liftMonoid(ReadonlyArray_Applicative)));
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Monad = {
  ...ReadonlyArray_Pointed,
  ...ReadonlyArray_FlatMap
};
/**
 * @category folding
 * @since 1.0.0
 */
const reduce = (b, f) => self => self.reduce((b, a) => f(b, a), b);
/**
 * @category folding
 * @since 1.0.0
 */
const reduceWithIndex = (b, f) => self => self.reduce((b, a, i) => f(b, a, i), b);
/**
 * @category folding
 * @since 1.0.0
 */
const reduceRight = (b, f) => self => self.reduceRight((b, a) => f(b, a), b);
/**
 * @category folding
 * @since 1.0.0
 */
const reduceRightWithIndex = (b, f) => self => self.reduceRight((b, a, i) => f(b, a, i), b);
/**
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_Foldable = {
  reduce
};
/**
 * @category folding
 * @since 1.0.0
 */
const foldMap = /*#__PURE__*/(/* unused pure expression or super */ null && (foldable.foldMap(ReadonlyArray_Foldable)));
/**
 * @category folding
 * @since 1.0.0
 */
const foldMapWithIndex = Monoid => f => self => self.reduce((m, a, i) => Monoid.combine(m, f(a, i)), Monoid.empty);
/**
 * @category folding
 * @since 1.0.0
 */
const foldMapNonEmpty = S => f => foldMapNonEmptyWithIndex(S)(f);
/**
 * @category folding
 * @since 1.0.0
 */
const foldMapNonEmptyWithIndex = S => f => self => tailNonEmpty(self).reduce((s, a, i) => S.combine(s, f(a, i + 1)), f(headNonEmpty(self), 0));
/**
 * @category folding
 * @since 1.0.0
 */
const reduceKind = /*#__PURE__*/(/* unused pure expression or super */ null && (foldable.reduceKind(ReadonlyArray_Foldable)));
/**
 * @category folding
 * @since 1.0.0
 */
const reduceRightKind = /*#__PURE__*/(/* unused pure expression or super */ null && (foldable.reduceRightKind(ReadonlyArray_Foldable)));
/**
 * @category folding
 * @since 1.0.0
 */
const foldMapKind = /*#__PURE__*/(/* unused pure expression or super */ null && (foldable.foldMapKind(ReadonlyArray_Foldable)));
/**
 * @category filtering
 * @since 1.0.0
 */
const ReadonlyArray_traverseFilterMap = /*#__PURE__*/traverseFilterMap({
  ...ReadonlyArray_Traversable,
  ...ReadonlyArray_Compactable
});
/**
 * @category filtering
 * @since 1.0.0
 */
const ReadonlyArray_traversePartitionMap = /*#__PURE__*/traversePartitionMap({
  ...ReadonlyArray_Traversable,
  ...ReadonlyArray_Covariant,
  ...ReadonlyArray_Compactable
});
/**
 * @category instances
 * @since 1.0.0
 */
const TraversableFilterable = {
  // @ts-expect-error
  traverseFilterMap: ReadonlyArray_traverseFilterMap,
  // @ts-expect-error
  traversePartitionMap: ReadonlyArray_traversePartitionMap
};
/**
 * Filter values inside a context.
 *
 * @since 1.0.0
 */
const ReadonlyArray_traverseFilter = /*#__PURE__*/(/* unused pure expression or super */ null && (traversableFilterable.traverseFilter(TraversableFilterable)));
/**
 * @since 1.0.0
 */
const ReadonlyArray_traversePartition = /*#__PURE__*/(/* unused pure expression or super */ null && (traversableFilterable.traversePartition(TraversableFilterable)));
/**
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_liftPredicate = predicate => b => predicate(b) ? [b] : [];
/**
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_liftOption = f => (...a) => ReadonlyArray_fromOption(f(...a));
/**
 * @category conversions
 * @since 1.0.0
 */
const ReadonlyArray_fromNullable = a => a == null ? ReadonlyArray_empty() : [a];
/**
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_liftNullable = f => (...a) => ReadonlyArray_fromNullable(f(...a));
/**
 * @category sequencing
 * @since 1.0.0
 */
const ReadonlyArray_flatMapNullable = f => self => ReadonlyArray_isNonEmpty(self) ? ReadonlyArray_fromNullable(f(headNonEmpty(self))) : ReadonlyArray_empty();
/**
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_liftEither = f => (...a) => {
  const e = f(...a);
  return either.isLeft(e) ? [] : [e.right];
};
function every(predicate) {
  return self => self.every(predicate);
}
/**
 * Check if a predicate holds true for any `ReadonlyArray` member.
 *
 * @category predicates
 * @since 1.0.0
 */
const ReadonlyArray_some = predicate => self => self.some(predicate);
/**
 * Fold a data structure, accumulating values in some `Monoid`, combining adjacent elements
 * using the specified separator.
 *
 * @since 1.0.0
 */
const ReadonlyArray_intercalate = M => middle => self => ReadonlyArray_isNonEmpty(self) ? intercalateNonEmpty(M)(middle)(self) : M.empty;
/**
 * Places an element in between members of a `NonEmptyReadonlyArray`, then folds the results using the provided `Semigroup`.
 *
 * @since 1.0.0
 */
const intercalateNonEmpty = S => middle => self => intercalate(middle)(S).combineMany(headNonEmpty(self), tailNonEmpty(self));
/**
 * @since 1.0.0
 */
const join = /*#__PURE__*/ReadonlyArray_intercalate(Monoid);
/**
 * @since 1.0.0
 */
const extend = f => self => self.map((_, i, as) => f(as.slice(i)));
/**
 * @since 1.0.0
 */
const ReadonlyArray_min = O => {
  const S = semigroup.min(O);
  return self => self.reduce(S.combine);
};
/**
 * @since 1.0.0
 */
const ReadonlyArray_max = O => {
  const S = semigroup.max(O);
  return self => self.reduce(S.combine);
};
/**
 * @category constructors
 * @since 1.0.0
 */
const unfold = (b, f) => {
  const out = [];
  let next = b;
  let o;
  while (option.isSome(o = f(next))) {
    const [a, b] = o.value;
    out.push(a);
    next = b;
  }
  return out;
};
/**
 * @category instances
 * @since 1.0.0
 */
const getUnionSemigroup = equivalence => fromCombine((self, that) => pipe(self, union(equivalence)(that)));
/**
 * @category instances
 * @since 1.0.0
 */
const getUnionMonoid = equivalence => {
  const S = getUnionSemigroup(equivalence);
  return {
    combine: S.combine,
    combineMany: S.combineMany,
    combineAll: collection => S.combineMany([], collection),
    empty: []
  };
};
/**
 * @category instances
 * @since 1.0.0
 */
const getIntersectionSemigroup = equivalence => fromCombine((self, that) => pipe(self, intersection(equivalence)(that)));
/**
 * Returns a `Semigroup` for `ReadonlyArray<A>`.
 *
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_getSemigroup = Semigroup_readonlyArray;
/**
 * Returns a `Monoid` for `ReadonlyArray<A>`.
 *
 * @category instances
 * @since 1.0.0
 */
const ReadonlyArray_getMonoid = Monoid_readonlyArray;
/**
 * This function creates and returns a new `Order` for an array of values based on a given `Order` for the elements of the array.
 * The returned `Order` compares two arrays by applying the given `Order` to each element in the arrays.
 * If all elements are equal, the arrays are then compared based on their length.
 * It is useful when you need to compare two arrays of the same type and you have a specific way of comparing each element of the array.
 *
 * @category lifting
 * @since 1.0.0
 */
const ReadonlyArray_liftOrder = Order_array;
//# sourceMappingURL=ReadonlyArray.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Dual.mjs
/**
 * @since 1.0.0
 */
const Dual_dual = (dfLen, body) => {
  // @ts-expect-error
  return function () {
    if (arguments.length === dfLen) {
      // @ts-expect-error
      return body.apply(this, arguments);
    }
    return self => body(self, ...arguments);
  };
};
//# sourceMappingURL=Dual.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Equal.mjs
/** @internal */
const Equal_structural = /*#__PURE__*/Symbol.for("@effect/data/Equal/structural");
//# sourceMappingURL=Equal.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Random.mjs
/*
 * Copyright 2014 Thom Chiovoloni, released under the MIT license.
 *
 * A random number generator based on the basic implementation of the PCG algorithm,
 * as described here: http://www.pcg-random.org/
 *
 * Adapted for TypeScript from Thom's original code at https://github.com/thomcc/pcg-random
 *
 * forked from https://github.com/frptools
 *
 * @since 1.0.0
 */
/** @internal */
function isNothing(value) {
  return value === void 0 || value === null;
}
const defaultIncHi = 0x14057b7e;
const defaultIncLo = 0xf767814f;
const MUL_HI = 0x5851f42d >>> 0;
const MUL_LO = 0x4c957f2d >>> 0;
const BIT_53 = 9007199254740992.0;
const BIT_27 = 134217728.0;
/**
 * PCG is a family of simple fast space-efficient statistically good algorithms
 * for random number generation. Unlike many general-purpose RNGs, they are also
 * hard to predict.
 *
 * @category model
 * @since 1.0.0
 */
class PCGRandom {
  constructor(seedHi, seedLo, incHi, incLo) {
    if (isNothing(seedLo) && isNothing(seedHi)) {
      seedLo = Math.random() * 0xffffffff >>> 0;
      seedHi = 0;
    } else if (isNothing(seedLo)) {
      seedLo = seedHi;
      seedHi = 0;
    }
    if (isNothing(incLo) && isNothing(incHi)) {
      // @ts-expect-error
      incLo = this._state ? this._state[3] : defaultIncLo;
      // @ts-expect-error
      incHi = this._state ? this._state[2] : defaultIncHi;
    } else if (isNothing(incLo)) {
      incLo = incHi;
      incHi = 0;
    }
    this._state = new Int32Array([0, 0, incHi >>> 0, ((incLo || 0) | 1) >>> 0]);
    this._next();
    add64(this._state, this._state[0], this._state[1], seedHi >>> 0, seedLo >>> 0);
    this._next();
    return this;
  }
  /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 1.0.0
   */
  getState() {
    return [this._state[0], this._state[1], this._state[2], this._state[3]];
  }
  /**
   * Restore state previously retrieved using `getState()`.
   *
   * @category mutations
   * @since 1.0.0
   */
  setState(state) {
    this._state[0] = state[0];
    this._state[1] = state[1];
    this._state[2] = state[2];
    this._state[3] = state[3] | 1;
  }
  /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 1.0.0
   */
  integer(max) {
    if (!max) {
      return this._next();
    }
    max = max >>> 0;
    if ((max & max - 1) === 0) {
      return this._next() & max - 1; // fast path for power of 2
    }

    let num = 0;
    const skew = (-max >>> 0) % max >>> 0;
    for (num = this._next(); num < skew; num = this._next()) {
      // this loop will rarely execute more than twice,
      // and is intentionally empty
    }
    return num % max;
  }
  /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 1.0.0
   */
  number() {
    const hi = (this._next() & 0x03ffffff) * 1.0;
    const lo = (this._next() & 0x07ffffff) * 1.0;
    return (hi * BIT_27 + lo) / BIT_53;
  }
  /** @internal */
  _next() {
    // save current state (what we'll use for this number)
    const oldHi = this._state[0] >>> 0;
    const oldLo = this._state[1] >>> 0;
    // churn LCG.
    mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO);
    add64(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    // get least sig. 32 bits of ((oldstate >> 18) ^ oldstate) >> 27
    let xsHi = oldHi >>> 18;
    let xsLo = (oldLo >>> 18 | oldHi << 14) >>> 0;
    xsHi = (xsHi ^ oldHi) >>> 0;
    xsLo = (xsLo ^ oldLo) >>> 0;
    const xorshifted = (xsLo >>> 27 | xsHi << 5) >>> 0;
    // rotate xorshifted right a random amount, based on the most sig. 5 bits
    // bits of the old state.
    const rot = oldHi >>> 27;
    const rot2 = (-rot >>> 0 & 31) >>> 0;
    return (xorshifted >>> rot | xorshifted << rot2) >>> 0;
  }
}
function mul64(out, aHi, aLo, bHi, bLo) {
  let c1 = (aLo >>> 16) * (bLo & 0xffff) >>> 0;
  let c0 = (aLo & 0xffff) * (bLo >>> 16) >>> 0;
  let lo = (aLo & 0xffff) * (bLo & 0xffff) >>> 0;
  let hi = (aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16)) >>> 0;
  c0 = c0 << 16 >>> 0;
  lo = lo + c0 >>> 0;
  if (lo >>> 0 < c0 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  c1 = c1 << 16 >>> 0;
  lo = lo + c1 >>> 0;
  if (lo >>> 0 < c1 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  hi = hi + Math.imul(aLo, bHi) >>> 0;
  hi = hi + Math.imul(aHi, bLo) >>> 0;
  out[0] = hi;
  out[1] = lo;
}
// add two 64 bit numbers (given in parts), and store the result in `out`.
function add64(out, aHi, aLo, bHi, bLo) {
  let hi = aHi + bHi >>> 0;
  const lo = aLo + bLo >>> 0;
  if (lo >>> 0 < aLo >>> 0) {
    hi = hi + 1 | 0;
  }
  out[0] = hi;
  out[1] = lo;
}
//# sourceMappingURL=Random.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Hash.mjs
/**
 * @since 1.0.0
 */



/** @internal */
const randomHashCache = /*#__PURE__*/new WeakMap();
/** @internal */
const pcgr = /*#__PURE__*/new PCGRandom();
/**
 * @since 1.0.0
 * @category symbols
 */
const Hash_symbol = /*#__PURE__*/Symbol.for("@fp-ts/data/Hash");
/**
 * @since 1.0.0
 * @category hashing
 */
const Hash_hash = self => {
  switch (typeof self) {
    case "number":
      {
        return Hash_number(self);
      }
    case "bigint":
      {
        return Hash_string(self.toString(10));
      }
    case "boolean":
      {
        return Hash_string(String(self));
      }
    case "symbol":
      {
        return Hash_string(String(self));
      }
    case "string":
      {
        return Hash_string(self);
      }
    case "undefined":
      {
        return Hash_string("undefined");
      }
    case "function":
    case "object":
      {
        if (self === null) {
          return Hash_string("null");
        }
        if (isHash(self)) {
          return self[Hash_symbol]();
        } else {
          if (Equal_structural in self) {
            return structure(self);
          }
          return random(self);
        }
      }
    default:
      {
        throw new Error("Bug in Equal.hashGeneric");
      }
  }
};
/**
 * @since 1.0.0
 * @category hashing
 */
const random = self => {
  if (!randomHashCache.has(self)) {
    randomHashCache.set(self, Hash_number(pcgr.integer(Number.MAX_SAFE_INTEGER)));
  }
  return randomHashCache.get(self);
};
/**
 * @since 1.0.0
 * @category hashing
 */
const combine = b => self => self * 53 ^ b;
/**
 * @since 1.0.0
 * @category hashing
 */
const optimize = n => n & 0xbfffffff | n >>> 1 & 0x40000000;
/**
 * @since 1.0.0
 * @category guards
 */
const isHash = u => typeof u === "object" && u !== null && Hash_symbol in u;
/**
 * @since 1.0.0
 * @category hashing
 */
const Hash_number = n => {
  if (n !== n || n === Infinity) {
    return 0;
  }
  let h = n | 0;
  if (h !== n) {
    h ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    h ^= n /= 0xffffffff;
  }
  return optimize(n);
};
/**
 * @since 1.0.0
 * @category hashing
 */
const Hash_string = str => {
  let h = 5381,
    i = str.length;
  while (i) {
    h = h * 33 ^ str.charCodeAt(--i);
  }
  return optimize(h);
};
/**
 * @since 1.0.0
 * @category hashing
 */
const structure = o => {
  const keys = Object.keys(o);
  let h = 12289;
  for (let i = 0; i < keys.length; i++) {
    h ^= Function_pipe(Hash_string(keys[i]), combine(Hash_hash(o[keys[i]])));
  }
  return optimize(h);
};
/**
 * @since 1.0.0
 * @category hashing
 */
const Hash_array = arr => {
  let h = 6151;
  for (let i = 0; i < arr.length; i++) {
    h = Function_pipe(h, combine(Hash_hash(arr[i])));
  }
  return optimize(h);
};
//# sourceMappingURL=Hash.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Equal.mjs


/**
 * @since 1.0.0
 * @category symbols
 */
const Equal_symbol = /*#__PURE__*/Symbol.for("@fp-ts/data/Equal");
function equals() {
  if (arguments.length === 1) {
    return self => compareBoth(self, arguments[0]);
  }
  return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
  if (self === that) {
    return true;
  }
  const selfType = typeof self;
  if (selfType !== typeof that) {
    return false;
  }
  if ((selfType === "object" || selfType === "function") && self !== null && that !== null) {
    if (isEqual(self) && isEqual(that)) {
      return Hash_hash(self) === Hash_hash(that) && self[Equal_symbol](that);
    }
    if (Equal_structural in self && Equal_structural in that) {
      const selfKeys = Object.keys(self);
      const thatKeys = Object.keys(that);
      if (selfKeys.length !== thatKeys.length) {
        return false;
      }
      for (const key of selfKeys) {
        if (!(key in that) || !equals(self[key], that[key])) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}
/**
 * @since 1.0.0
 * @category guards
 */
const isEqual = u => typeof u === "object" && u !== null && Equal_symbol in u;
/**
 * @since 1.0.0
 * @category instances
 */
const equivalence = () => (self, that) => Hash_hash(self) === Hash_hash(that) && equals(self, that);
//# sourceMappingURL=Equal.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Chunk.mjs






const TypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Chunk");
/** @internal */
const emptyArray = [];
/** @internal */
function Chunk_copy(src, srcPos, dest, destPos, len) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i];
  }
  return dest;
}
/** @internal */
class ChunkImpl {
  constructor(backing) {
    this.backing = backing;
    this._id = TypeId;
    switch (backing._tag) {
      case "IEmpty":
        {
          this.length = 0;
          this.depth = 0;
          this.left = this;
          this.right = this;
          break;
        }
      case "IConcat":
        {
          this.length = backing.left.length + backing.right.length;
          this.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
          this.left = backing.left;
          this.right = backing.right;
          break;
        }
      case "IArray":
        {
          this.length = backing.array.length;
          this.depth = 0;
          this.left = _empty;
          this.right = _empty;
          break;
        }
      case "ISingleton":
        {
          this.length = 1;
          this.depth = 0;
          this.left = _empty;
          this.right = _empty;
          break;
        }
    }
  }
  get array() {
    return this.toReadonlyArray();
  }
  toReadonlyArray() {
    switch (this.backing._tag) {
      case "IEmpty":
        {
          return emptyArray;
        }
      case "IArray":
        {
          return this.backing.array;
        }
      default:
        {
          const arr = new Array(this.length);
          copyToArray(this, arr, 0);
          this.backing = {
            _tag: "IArray",
            array: arr
          };
          this.left = _empty;
          this.right = _empty;
          this.depth = 0;
          return arr;
        }
    }
  }
  toString() {
    return `Chunk(${this.toReadonlyArray().map(String).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "Chunk",
      values: this.toReadonlyArray()
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
  isNonEmpty() {
    return this.length > 0;
  }
  isEmpty() {
    return !this.isNonEmpty();
  }
  map(f) {
    return this.backing._tag === "ISingleton" ? Chunk_of(f(this.backing.a)) : unsafeFromArray(ReadonlyArray_map(f)(toReadonlyArray(this)));
  }
  flatMap(f) {
    if (this.backing._tag === "ISingleton") {
      return f(this.backing.a);
    }
    let r = _empty;
    for (const k of this) {
      r = Chunk_concat(f(k))(r);
    }
    return r;
  }
  forEach(f) {
    return this.backing._tag === "ISingleton" ? f(this.backing.a) : toReadonlyArray(this).forEach(f);
  }
  append(b) {
    return this.concat(Chunk_of(b));
  }
  prepend(b) {
    return Chunk_of(b).concat(this);
  }
  concat(that) {
    if (this.backing._tag === "IEmpty") {
      return that;
    }
    if (that.backing._tag === "IEmpty") {
      return this;
    }
    const diff = that.depth - this.depth;
    if (Math.abs(diff) <= 1) {
      return new ChunkImpl({
        _tag: "IConcat",
        left: this,
        right: that
      });
    } else if (diff < -1) {
      if (this.left.depth >= this.right.depth) {
        const nr = Chunk_concat(that)(this.right);
        return new ChunkImpl({
          _tag: "IConcat",
          left: this.left,
          right: nr
        });
      } else {
        const nrr = Chunk_concat(that)(this.right.right);
        if (nrr.depth === this.depth - 3) {
          const nr = new ChunkImpl({
            _tag: "IConcat",
            left: this.right.left,
            right: nrr
          });
          return new ChunkImpl({
            _tag: "IConcat",
            left: this.left,
            right: nr
          });
        } else {
          const nl = new ChunkImpl({
            _tag: "IConcat",
            left: this.left,
            right: this.right.left
          });
          return new ChunkImpl({
            _tag: "IConcat",
            left: nl,
            right: nrr
          });
        }
      }
    } else {
      if (this.right.depth >= that.left.depth) {
        const nl = Chunk_concat(that.left)(this);
        return new ChunkImpl({
          _tag: "IConcat",
          left: nl,
          right: that.right
        });
      } else {
        const nll = Chunk_concat(that.left.left)(this);
        if (nll.depth === that.depth - 3) {
          const nl = new ChunkImpl({
            _tag: "IConcat",
            left: nll,
            right: that.left.right
          });
          return new ChunkImpl({
            _tag: "IConcat",
            left: nl,
            right: that.right
          });
        } else {
          const nr = new ChunkImpl({
            _tag: "IConcat",
            left: that.left.right,
            right: that.right
          });
          return new ChunkImpl({
            _tag: "IConcat",
            left: nll,
            right: nr
          });
        }
      }
    }
  }
  get(index) {
    return index < 0 || index >= this.length ? Option_none() : Option_some(this.unsafeGet(index));
  }
  unsafeGet(index) {
    switch (this.backing._tag) {
      case "IEmpty":
        {
          throw new Error(`Index out of bounds`);
        }
      case "ISingleton":
        {
          if (index !== 0) {
            throw new Error(`Index out of bounds`);
          }
          return this.backing.a;
        }
      case "IArray":
        {
          if (index >= this.length || index < 0) {
            throw new Error(`Index out of bounds`);
          }
          return this.backing.array[index];
        }
      case "IConcat":
        {
          return index < this.left.length ? this.left.unsafeGet(index) : this.right.unsafeGet(index - this.left.length);
        }
    }
  }
  [Equal_symbol](that) {
    if (isChunk(that) && this.length === that.length) {
      return toReadonlyArray(this).every((value, i) => equals(value, that.unsafeGet(i)));
    }
    return false;
  }
  [Hash_symbol]() {
    return Hash_array(toReadonlyArray(this));
  }
  [Symbol.iterator]() {
    switch (this.backing._tag) {
      case "IArray":
        {
          return this.backing.array[Symbol.iterator]();
        }
      case "IEmpty":
        {
          return emptyArray[Symbol.iterator]();
        }
      default:
        {
          return toReadonlyArray(this)[Symbol.iterator]();
        }
    }
  }
}
/** @internal */
const copyToArray = (self, array, n) => {
  switch (self.backing._tag) {
    case "IArray":
      {
        Chunk_copy(self.backing.array, 0, array, n, self.length);
        break;
      }
    case "IConcat":
      {
        copyToArray(self.left, array, n);
        copyToArray(self.right, array, n + self.left.length);
        break;
      }
    case "ISingleton":
      {
        array[n] = self.backing.a;
        break;
      }
  }
};
/**
 * Checks if `u` is a `Chunk<unknown>`
 *
 * @since 1.0.0
 * @category constructors
 */
const isChunk = u => typeof u === "object" && u != null && "_id" in u && u["_id"] === TypeId;
const _empty = /*#__PURE__*/new ChunkImpl({
  _tag: "IEmpty"
});
/**
 * @since 1.0.0
 * @category constructors
 */
const Chunk_empty = () => _empty;
/**
 * Converts from an `Iterable<A>`
 *
 * @since 1.0.0
 * @category conversions
 */
const Chunk_fromIterable = self => isChunk(self) ? self : new ChunkImpl({
  _tag: "IArray",
  array: Array.from(self)
});
/**
 * Converts to a `ReadonlyArray<A>`
 *
 * @since 1.0.0
 * @category conversions
 */
const toReadonlyArray = self => self.toReadonlyArray();
/**
 * This function provides a safe way to read a value at a particular index from a `Chunk`.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_get = /*#__PURE__*/Dual_dual(2, (self, index) => self.get(index));
/**
 * Wraps an array into a chunk without copying, unsafe on mutable arrays
 *
 * @since 1.0.0
 * @category unsafe
 */
const unsafeFromArray = self => new ChunkImpl({
  _tag: "IArray",
  array: self
});
/**
 * Gets an element unsafely, will throw on out of bounds
 *
 * @since 1.0.0
 * @category unsafe
 */
const Chunk_unsafeGet = /*#__PURE__*/Dual_dual(2, (self, index) => self.unsafeGet(index));
/**
 * Appends the value to the chunk
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_append = /*#__PURE__*/Dual_dual(2, (self, a) => self.append(a));
/**
 * Prepends the value to the chunk
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_prepend = /*#__PURE__*/Dual_dual(2, (self, elem) => self.prepend(elem));
/**
 * Takes the first up to `n` elements from the chunk
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_take = /*#__PURE__*/Dual_dual(2, (self, n) => {
  if (n <= 0) {
    return _empty;
  } else if (n >= self.length) {
    return self;
  } else {
    return unsafeFromArray(take(n)(self.toReadonlyArray()));
  }
});
/**
 * Drops the first up to `n` elements from the chunk
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_drop = /*#__PURE__*/Dual_dual(2, (self, n) => {
  if (n <= 0) {
    return self;
  } else if (n >= self.length) {
    return _empty;
  } else {
    return unsafeFromArray(drop(n)(self.toReadonlyArray()));
  }
});
/**
 * Drops the last `n` elements.
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_dropRight = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => Chunk_take(self, Math.max(0, self.length - n)))));
/**
 * Drops all elements so long as the predicate returns true.
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_dropWhile = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  const arr = toReadonlyArray(self);
  const len = arr.length;
  let i = 0;
  while (i < len && f(arr[i])) {
    i++;
  }
  return pipe(self, Chunk_drop(i));
})));
/**
 * @category mutations
 * @since 1.0.0
 */
const Chunk_prependAllNonEmpty = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => that.concat(self))));
/**
 * Concatenates the two chunks
 *
 * @since 1.0.0
 * @category mutations
 */
const Chunk_concat = /*#__PURE__*/Dual_dual(2, (self, that) => self.concat(that));
/**
 * Compares the two chunks of equal length using the specified function
 *
 * @since 1.0.0
 * @category elements
 */
const correspondsTo = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, that, f) => {
  if (self.length !== that.length) {
    return false;
  }
  const selfArray = toReadonlyArray(self);
  const thatArray = toReadonlyArray(that);
  return selfArray.every((v, i) => f(v, thatArray[i]));
})));
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 1.0.0
 * @category filtering
 */
const Chunk_filterMap = /*#__PURE__*/Dual_dual(2, (self, f) => unsafeFromArray(ReadonlyArray_filterMap(f)(self)));
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 1.0.0
 * @category filtering
 */
const Chunk_filter = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => unsafeFromArray(RA.filterMap(O.liftPredicate(predicate))(self)))));
/**
 * Returns a filtered and mapped subset of the elements.
 *
 * @since 1.0.0
 * @category filtering
 */
const Chunk_filterMapWithIndex = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => unsafeFromArray(RA.filterMapWithIndex(f)(self)))));
/**
 * Transforms all elements of the chunk for as long as the specified function returns some value
 *
 * @since 1.0.0
 * @category filtering
 */
const filterMapWhile = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  const res = [];
  for (const a of self) {
    const b = f(a);
    if (O.isSome(b)) {
      res.push(b.value);
    } else {
      break;
    }
  }
  return unsafeFromArray(res);
})));
/**
 * Tests whether a value is a member of a `Chunk<A>`.
 *
 * @since 1.0.0
 * @category elements
 */
const elem = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, b) => pipe(toReadonlyArray(self), RA.contains(Equal.equivalence())(b)))));
/**
 * Filter out optional values
 *
 * @since 1.0.0
 * @category filtering
 */
const Chunk_compact = self => Chunk_filterMap(self, Function_identity);
/**
 * Deduplicates adjacent elements that are identical.
 *
 * @since 1.0.0
 * @category filtering
 */
const dedupeAdjacent = self => {
  const builder = [];
  let lastA = Option_none();
  for (const a of self) {
    if (Option_isNone(lastA) || !equals(a, lastA.value)) {
      builder.push(a);
      lastA = Option_some(a);
    }
  }
  return unsafeFromArray(builder);
};
/**
 * Check if a predicate holds true for any `Chunk` member.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_some = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => toReadonlyArray(self).findIndex(v => f(v)) !== -1)));
/**
 * Check if a predicate holds true for every `Chunk` member.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_every = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => toReadonlyArray(self).every(v => f(v)))));
/**
 * Find the first element which satisfies a predicate (or a refinement) function.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_findFirst = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => RA.findFirst(predicate)(toReadonlyArray(self)))));
/**
 * Find the first index for which a predicate holds
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_findFirstIndex = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => RA.findFirstIndex(f)(toReadonlyArray(self)))));
/**
 * Find the first index for which a predicate holds
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_findLastIndex = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => RA.findLastIndex(f)(toReadonlyArray(self)))));
/**
 * Find the last element which satisfies a predicate function
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_findLast = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => RA.findLast(f)(toReadonlyArray(self)))));
/**
 * Returns a chunk with the elements mapped by the specified function.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Chunk_flatMap = /*#__PURE__*/Dual_dual(2, (self, f) => {
  if (self.backing._tag === "ISingleton") {
    return f(self.backing.a);
  }
  let r = _empty;
  for (const k of self) {
    r = Chunk_concat(f(k))(r);
  }
  return r;
});
/**
 * Flattens a chunk of chunks into a single chunk by concatenating all chunks.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Chunk_flatten = /*#__PURE__*/Chunk_flatMap(Function_identity);
/**
 * Iterate over the chunk applying `f`.
 *
 * @since 1.0.0
 * @category elements
 */
const forEach = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => self.forEach(f))));
/**
 * Groups elements in chunks of up to `n` elements.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_chunksOf = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => {
  const gr = [];
  let current = [];
  toReadonlyArray(self).forEach(a => {
    current.push(a);
    if (current.length >= n) {
      gr.push(unsafeFromArray(current));
      current = [];
    }
  });
  if (current.length > 0) {
    gr.push(unsafeFromArray(current));
  }
  return unsafeFromArray(gr);
})));
/**
 * Returns the first element of this chunk if it exists.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_head = /*#__PURE__*/Chunk_get(0);
/**
 * Creates a Chunk of unique values that are included in all given Chunks.
 *
 * The order and references of result values are determined by the Chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_intersection = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => pipe(toReadonlyArray(self), RA.intersection(Equal.equivalence())(toReadonlyArray(that)), unsafeFromArray))));
/**
 * Determines if the chunk is empty.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_isEmpty = self => self.isEmpty();
/**
 * Determines if the chunk is not empty.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_isNonEmpty = self => self.isNonEmpty();
/**
 * Folds over the elements in this chunk from the left.
 *
 * @since 1.0.0
 * @category folding
 */
const Chunk_reduce = /*#__PURE__*/Dual_dual(3, (self, b, f) => Function_pipe(toReadonlyArray(self), reduce(b, f)));
/**
 * Folds over the elements in this chunk from the left.
 *
 * @since 1.0.0
 * @category folding
 */
const Chunk_reduceWithIndex = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, b, f) => pipe(toReadonlyArray(self), RA.reduceWithIndex(b, f)))));
/**
 * Folds over the elements in this chunk from the right.
 *
 * @since 1.0.0
 * @category folding
 */
const Chunk_reduceRight = /*#__PURE__*/Dual_dual(3, (self, b, f) => Function_pipe(toReadonlyArray(self), reduceRight(b, (b, a) => f(b, a))));
/**
 * Folds over the elements in this chunk from the right.
 *
 * @since 1.0.0
 * @category folding
 */
const Chunk_reduceRightWithIndex = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, b, f) => pipe(toReadonlyArray(self), RA.reduceRightWithIndex(b, f)))));
/**
 * Joins the elements together with "sep" in the middle.
 *
 * @since 1.0.0
 * @category folding
 */
const Chunk_join = /*#__PURE__*/Dual_dual(2, (self, sep) => Chunk_reduce(self, "", (s, a) => s.length > 0 ? `${s}${sep}${a}` : a));
/**
 * Returns the last element of this chunk if it exists.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_last = self => Chunk_get(self, self.length - 1);
/**
 * Builds a `NonEmptyChunk` from an non-empty collection of elements.
 *
 * @since 1.0.0
 * @category constructors
 */
const Chunk_make = (...as) => unsafeFromArray(as);
/**
 * Builds a `NonEmptyChunk` from a single element.
 *
 * @since 1.0.0
 * @category constructors
 */
const Chunk_of = a => new ChunkImpl({
  _tag: "ISingleton",
  a
});
/**
 * Return a Chunk of length n with element i initialized with f(i).
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @since 1.0.0
 * @category constructors
 */
const Chunk_makeBy = /*#__PURE__*/Dual_dual(2, (n, f) => Chunk_make(...makeBy(f)(n)));
/**
 * Returns an effect whose success is mapped by the specified f function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Chunk_map = /*#__PURE__*/Dual_dual(2, (self, f) => self.map(f));
/**
 * Returns an effect whose success is mapped by the specified f function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Chunk_mapWithIndex = /*#__PURE__*/Dual_dual(2, (self, f) => self.backing._tag === "ISingleton" ? Chunk_of(f(self.backing.a, 0)) : unsafeFromArray(Function_pipe(toReadonlyArray(self), mapWithIndex(f))));
/**
 * Statefully maps over the chunk, producing new elements of type `B`.
 *
 * @since 1.0.0
 * @category folding
 */
const mapAccum = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, s, f) => {
  let s1 = s;
  const res = [];
  for (const a of toReadonlyArray(self)) {
    const r = f(s1, a);
    s1 = r[0];
    res.push(r[1]);
  }
  return [s1, unsafeFromArray(res)];
})));
/**
 * Separate elements based on a predicate that also exposes the index of the element.
 *
 * @category filtering
 * @since 1.0.0
 */
const Chunk_partitionWithIndex = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => pipe(toReadonlyArray(self), RA.partitionWithIndex(f), ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]))));
/**
 * Separate elements based on a predicate.
 *
 * @category filtering
 * @since 1.0.0
 */
const Chunk_partition = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => pipe(toReadonlyArray(self), RA.partition(predicate), ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]))));
/**
 * Partitions the elements of this chunk into two chunks using f.
 *
 * @category filtering
 * @since 1.0.0
 */
const Chunk_partitionMap = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => pipe(self, toReadonlyArray, RA.partitionMap(f), ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]))));
/**
 * Partitions the elements of this chunk into two chunks.
 *
 * @category filtering
 * @since 1.0.0
 */
const Chunk_separate = self => pipe(self, toReadonlyArray, RA.separate, ([l, r]) => [unsafeFromArray(l), unsafeFromArray(r)]);
/**
 * Create a non empty `Chunk` containing a range of integers, including both endpoints.
 *
 * @category constructors
 * @since 1.0.0
 */
const Chunk_range = (start, end) => start <= end ? Chunk_makeBy(end - start + 1, i => start + i) : Chunk_of(start);
/**
 * Reverse a Chunk, creating a new Chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_reverse = self => unsafeFromArray(ReadonlyArray_reverse(toReadonlyArray(self)));
/**
 * Retireves the size of the chunk
 *
 * @since 1.0.0
 * @category elements
 */
const size = self => self.length;
/**
 * Sort the elements of a Chunk in increasing order, creating a new Chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_sort = /*#__PURE__*/Dual_dual(2, (self, O) => Function_pipe(toReadonlyArray(self), sort(O), unsafeFromArray));
/**
 *  Returns two splits of this chunk at the specified index.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_splitAt = /*#__PURE__*/Dual_dual(2, (self, n) => [Chunk_take(n)(self), Chunk_drop(n)(self)]);
/**
 * Splits this chunk into `n` equally sized chunks.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_split = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => {
  const length = self.length;
  const k = Math.floor(n);
  const quotient = Math.floor(length / k);
  const remainder = length % k;
  const chunks = [];
  let i = 0;
  let chunk = [];
  toReadonlyArray(self).forEach(a => {
    chunk.push(a);
    if (i <= remainder && chunk.length > quotient || i > remainder && chunk.length >= quotient) {
      chunks.push(unsafeFromArray(chunk));
      chunk = [];
    }
    i++;
  });
  if (chunk.length > 0) {
    chunks.push(unsafeFromArray(chunk));
  }
  return unsafeFromArray(chunks);
})));
/**
 * Splits this chunk on the first element that matches this predicate.
 *
 * @since 1.0.0
 * @category elements
 */
const splitWhere = /*#__PURE__*/Dual_dual(2, (self, f) => {
  let i = 0;
  for (const a of toReadonlyArray(self)) {
    if (f(a)) {
      break;
    } else {
      i++;
    }
  }
  return Chunk_splitAt(i)(self);
});
/**
 * Returns every elements after the first.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_tail = self => self.length > 0 ? O.some(Chunk_drop(1)(self)) : O.none();
/**
 * Takes the last `n` elements.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_takeRight = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => Chunk_drop(self, self.length - n))));
/**
 * Takes all elements so long as the predicate returns true.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_takeWhile = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  const res = [];
  for (const a of toReadonlyArray(self)) {
    if (f(a)) {
      res.push(a);
    } else {
      break;
    }
  }
  return unsafeFromArray(res);
})));
/**
 * Constructs a `Chunk` by repeatedly applying the function `f` as long as it * returns `Some`.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_unfold = (s, f) => {
  const builder = [];
  let cont = true;
  let s1 = s;
  while (cont) {
    const x = f(s1);
    if (Option_isSome(x)) {
      s1 = x.value[1];
      builder.push(x.value[0]);
    } else {
      cont = false;
    }
  }
  return unsafeFromArray(builder);
};
/**
 * Creates a Chunks of unique values, in order, from all given Chunks.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_union = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => unsafeFromArray(RA.union(Equal.equivalence())(toReadonlyArray(that))(toReadonlyArray(self))))));
/**
 * Remove duplicates from an array, keeping the first occurrence of an element.
 *
 * @since 1.0.0
 * @category elements
 */
const dedupe = self => unsafeFromArray(uniq(equivalence())(toReadonlyArray(self)));
/**
 * Returns the first element of this chunk.
 *
 * @since 1.0.0
 * @category unsafe
 */
const unsafeHead = self => Chunk_unsafeGet(0)(self);
/**
 * Returns the last element of this chunk.
 *
 * @since 1.0.0
 * @category unsafe
 */
const unsafeLast = self => Chunk_unsafeGet(self.length - 1)(self);
/**
 * Takes an array of pairs and return two corresponding arrays.
 *
 * Note: The function is reverse of `zip`.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_unzip = as => {
  const fa = [];
  const fb = [];
  toReadonlyArray(as).forEach(([a, b]) => {
    fa.push(a);
    fb.push(b);
  });
  return [unsafeFromArray(fa), unsafeFromArray(fb)];
};
/**
 * Zips this chunk pointwise with the specified chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_zip = /*#__PURE__*/Dual_dual(2, (self, that) => Chunk_zipWith(self, that, (a, b) => [a, b]));
/**
 * Zips this chunk pointwise with the specified chunk using the specified combiner.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_zipWith = /*#__PURE__*/Dual_dual(3, (self, that, f) => {
  const selfA = toReadonlyArray(self);
  const thatA = toReadonlyArray(that);
  return Function_pipe(selfA, zipWith(thatA, f), unsafeFromArray);
});
/**
 * Zips this chunk pointwise with the specified chunk to produce a new chunk with
 * pairs of elements from each chunk, filling in missing values from the
 * shorter chunk with `None`. The returned chunk will have the length of the
 * longer chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const zipAll = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => zipAllWith(self, that, (a, b) => [O.some(a), O.some(b)], a => [O.some(a), O.none()], b => [O.none(), O.some(b)]))));
/**
 * Zips with chunk with the specified chunk to produce a new chunk with
 * pairs of elements from each chunk combined using the specified function
 * `both`. If one chunk is shorter than the other uses the specified
 * function `left` or `right` to map the element that does exist to the
 * result type.
 *
 * @since 1.0.0
 * @category elements
 */
const zipAllWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(5, (self, that, f, left, right) => {
  const length = Math.max(self.length, that.length);
  if (length === 0) {
    return _empty;
  }
  const leftarr = toReadonlyArray(self);
  const rightArr = toReadonlyArray(that);
  let i = 0;
  let j = 0;
  let k = 0;
  const leftLength = leftarr.length;
  const rightLength = rightArr.length;
  const builder = new Array(length);
  while (i < length) {
    if (j < leftLength && k < rightLength) {
      builder[i] = f(leftarr[j], rightArr[k]);
      i++;
      j++;
      k++;
    } else if (j < leftLength) {
      builder[i] = left(leftarr[j]);
      i++;
      j++;
    } else if (k < rightLength) {
      builder[i] = right(rightArr[k]);
      i++;
      k++;
    }
  }
  return unsafeFromArray(builder);
})));
/**
 * Zips this chunk crosswise with the specified chunk using the specified combiner.
 *
 * @since 1.0.0
 * @category elements
 */
const crossWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, that, f) => Chunk_flatMap(self, a => pipe(that, Chunk_map(b => f(a, b)))))));
/**
 * Zips this chunk crosswise with the specified chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const cross = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => crossWith(self, that, (a, b) => [a, b]))));
/**
 * Zips this chunk with the index of every element, starting from the initial
 * index value.
 *
 * @category elements
 * @since 1.0.0
 */
const zipWithIndex = self => zipWithIndexOffset(0)(self);
/**
 * Zips this chunk with the index of every element, starting from the initial
 * index value.
 *
 * @category elements
 * @since 1.0.0
 */
const zipWithIndexOffset = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, offset) => {
  const iterator = self[Symbol.iterator]();
  let next;
  let i = offset;
  const builder = [];
  while (!(next = iterator.next()).done) {
    builder.push([next.value, i]);
    i = i + 1;
  }
  return unsafeFromArray(builder);
})));
/**
 * Delete the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @category mutations
 * @since 1.0.0
 */
const Chunk_remove = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, i) => pipe(self, toReadonlyArray, RA.remove(i), unsafeFromArray))));
/**
 * Change the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @category mutations
 * @since 1.0.0
 */
const Chunk_replace = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, i, b) => Chunk_modify(self, i, () => b))));
/**
 * @category mutations
 * @since 1.0.0
 */
const Chunk_replaceOption = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, i, b) => Chunk_modifyOption(self, i, () => b))));
/**
 * Apply a function to the element at the specified index, creating a new `Chunk`,
 * or returning the input if the index is out of bounds.
 *
 * @category mutations
 * @since 1.0.0
 */
const Chunk_modify = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, i, f) => pipe(Chunk_modifyOption(self, i, f), O.getOrElse(() => self)))));
/**
 * @category mutations
 * @since 1.0.0
 */
const Chunk_modifyOption = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, i, f) => pipe(self, toReadonlyArray, RA.modifyOption(i, f), O.map(unsafeFromArray)))));
/**
 * Returns the first element of this non empty chunk.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_headNonEmpty = unsafeHead;
/**
 * Returns every elements after the first.
 *
 * @since 1.0.0
 * @category elements
 */
const Chunk_tailNonEmpty = self => Chunk_drop(self, 1);
//# sourceMappingURL=Chunk.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/configError.mjs





/** @internal */
const ConfigErrorSymbolKey = "@effect/io/Config/Error";
/** @internal */
const ConfigErrorTypeId = /*#__PURE__*/Symbol.for(ConfigErrorSymbolKey);
/** @internal */
const configError_proto = {
  [ConfigErrorTypeId]: ConfigErrorTypeId
};
/** @internal */
const And = (self, that) => {
  const error = Object.create(configError_proto);
  error._tag = OP_AND;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} and ${this.right}`;
    }
  });
  return error;
};
/** @internal */
const Or = (self, that) => {
  const error = Object.create(configError_proto);
  error._tag = OP_OR;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} or ${this.right}`;
    }
  });
  return error;
};
/** @internal */
const InvalidData = (path, message) => {
  const error = Object.create(configError_proto);
  error._tag = OP_INVALID_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = Chunk_join(".")(this.path);
      return `(Invalid data at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
const MissingData = (path, message) => {
  const error = Object.create(configError_proto);
  error._tag = OP_MISSING_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = Chunk_join(".")(this.path);
      return `(Missing data at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
const SourceUnavailable = (path, message, cause) => {
  const error = Object.create(configError_proto);
  error._tag = OP_SOURCE_UNAVAILABLE;
  error.path = path;
  error.message = message;
  error.cause = cause;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = Chunk_join(".")(this.path);
      return `(Source unavailable at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
const Unsupported = (path, message) => {
  const error = Object.create(configError_proto);
  error._tag = OP_UNSUPPORTED;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path = Chunk_join(".")(this.path);
      return `(Unsupported operation at ${path}: "${this.message}")`;
    }
  });
  return error;
};
/** @internal */
const isConfigError = u => typeof u === "object" && u != null && ConfigErrorTypeId in u;
/** @internal */
const isAnd = self => self._tag === OP_AND;
/** @internal */
const isOr = self => self._tag === OP_OR;
/** @internal */
const isInvalidData = self => self._tag === OP_INVALID_DATA;
/** @internal */
const isMissingData = self => self._tag === OP_MISSING_DATA;
/** @internal */
const isSourceUnavailable = self => self._tag === OP_SOURCE_UNAVAILABLE;
/** @internal */
const isUnsupported = self => self._tag === OP_UNSUPPORTED;
/** @internal */
const prefixed = /*#__PURE__*/dual(2, (self, prefix) => {
  switch (self._tag) {
    case OP_AND:
      {
        return And(prefixed(prefix)(self.left), prefixed(prefix)(self.right));
      }
    case OP_OR:
      {
        return Or(prefixed(prefix)(self.left), prefixed(prefix)(self.right));
      }
    case OP_INVALID_DATA:
      {
        return InvalidData(Chunk_concat(self.path)(prefix), self.message);
      }
    case OP_MISSING_DATA:
      {
        return MissingData(Chunk_concat(self.path)(prefix), self.message);
      }
    case OP_SOURCE_UNAVAILABLE:
      {
        return SourceUnavailable(Chunk_concat(self.path)(prefix), self.message, self.cause);
      }
    case OP_UNSUPPORTED:
      {
        return Unsupported(Chunk_concat(self.path)(prefix), self.message);
      }
  }
});
/** @internal */
const IsMissingDataOnlyReducer = {
  andCase: (_, left, right) => left && right,
  orCase: (_, left, right) => left || right,
  invalidDataCase: Function_constFalse,
  missingDataCase: Function_constTrue,
  sourceUnavailableCase: Function_constFalse,
  unsupportedCase: Function_constFalse
};
/** @internal */
const reduceWithContext = /*#__PURE__*/dual(3, (self, context, reducer) => {
  const input = [self];
  const output = [];
  while (input.length > 0) {
    const error = input.pop();
    switch (error._tag) {
      case OP_AND:
        {
          input.push(error.right);
          input.push(error.left);
          output.push(Either_left({
            _tag: "AndCase"
          }));
          break;
        }
      case OP_OR:
        {
          input.push(error.right);
          input.push(error.left);
          output.push(Either_left({
            _tag: "OrCase"
          }));
          break;
        }
      case OP_INVALID_DATA:
        {
          output.push(Either_right(reducer.invalidDataCase(context, error.path, error.message)));
          break;
        }
      case OP_MISSING_DATA:
        {
          output.push(Either_right(reducer.missingDataCase(context, error.path, error.message)));
          break;
        }
      case OP_SOURCE_UNAVAILABLE:
        {
          output.push(Either_right(reducer.sourceUnavailableCase(context, error.path, error.message, error.cause)));
          break;
        }
      case OP_UNSUPPORTED:
        {
          output.push(Either_right(reducer.unsupportedCase(context, error.path, error.message)));
          break;
        }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either = output.pop();
    switch (either._tag) {
      case "Left":
        {
          switch (either.left._tag) {
            case "AndCase":
              {
                const left = accumulator.pop();
                const right = accumulator.pop();
                const value = reducer.andCase(context, left, right);
                accumulator.push(value);
                break;
              }
            case "OrCase":
              {
                const left = accumulator.pop();
                const right = accumulator.pop();
                const value = reducer.orCase(context, left, right);
                accumulator.push(value);
                break;
              }
          }
          break;
        }
      case "Right":
        {
          accumulator.push(either.right);
          break;
        }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: ConfigError.reduceWithContext - please report an issue at https://github.com/Effect-TS/io/issues");
  }
  return accumulator.pop();
});
/** @internal */
const isMissingDataOnly = self => reduceWithContext(self, void 0, IsMissingDataOnlyReducer);
//# sourceMappingURL=configError.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Config/Error.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const Error_ConfigErrorTypeId = ConfigErrorTypeId;
/**
 * @since 1.0.0
 * @category constructors
 */
const Error_And = And;
/**
 * @since 1.0.0
 * @category constructors
 */
const Error_Or = Or;
/**
 * @since 1.0.0
 * @category constructors
 */
const Error_MissingData = MissingData;
/**
 * @since 1.0.0
 * @category constructors
 */
const Error_InvalidData = InvalidData;
/**
 * @since 1.0.0
 * @category constructors
 */
const Error_SourceUnavailable = SourceUnavailable;
/**
 * @since 1.0.0
 * @category constructors
 */
const Error_Unsupported = Unsupported;
/**
 * Returns `true` if the specified value is a `ConfigError`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isConfigError = isConfigError;
/**
 * Returns `true` if the specified `ConfigError` is an `And`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isAnd = isAnd;
/**
 * Returns `true` if the specified `ConfigError` is an `Or`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isOr = isOr;
/**
 * Returns `true` if the specified `ConfigError` is an `InvalidData`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isInvalidData = isInvalidData;
/**
 * Returns `true` if the specified `ConfigError` is an `MissingData`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isMissingData = isMissingData;
/**
 * Returns `true` if the specified `ConfigError` contains only `MissingData` errors, `false` otherwise.
 *
 * @since 1.0.0
 * @categer getters
 */
const Error_isMissingDataOnly = isMissingDataOnly;
/**
 * Returns `true` if the specified `ConfigError` is a `SourceUnavailable`,
 * `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isSourceUnavailable = isSourceUnavailable;
/**
 * Returns `true` if the specified `ConfigError` is an `Unsupported`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Error_isUnsupported = isUnsupported;
/**
 * @since 1.0.0
 * @category mutations
 */
const Error_prefixed = prefixed;
/**
 * @since 1.0.0
 * @category folding
 */
const Error_reduceWithContext = reduceWithContext;
//# sourceMappingURL=Error.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/configSecret.mjs



/** @internal */
const ConfigSecretSymbolKey = "@effect/io/Config/Secret";
/** @internal */
const ConfigSecretTypeId = /*#__PURE__*/Symbol.for(ConfigSecretSymbolKey);
/** @internal */
const configSecret_proto = {
  [ConfigSecretTypeId]: ConfigSecretTypeId,
  [Hash_symbol]() {
    return combine(Hash_array(this.raw))(Hash_hash(ConfigSecretSymbolKey));
  },
  [Equal_symbol](that) {
    return isConfigSecret(that) && this.raw.length === that.raw.length && this.raw.every((v, i) => equals(v, that.raw[i]));
  }
};
/** @internal */
const isConfigSecret = u => {
  return typeof u === "object" && u != null && ConfigSecretTypeId in u;
};
/** @internal */
const configSecret_make = bytes => {
  const secret = Object.create(configSecret_proto);
  Object.defineProperty(secret, "toString", {
    enumerable: false,
    value() {
      return "ConfigSecret(<redacted>)";
    }
  });
  Object.defineProperty(secret, "raw", {
    enumerable: false,
    value: bytes
  });
  return secret;
};
/** @internal */
const fromChunk = chunk => {
  return configSecret_make(Chunk.toReadonlyArray(chunk).map(char => char.charCodeAt(0)));
};
/** @internal */
const fromString = text => {
  return configSecret_make(text.split("").map(char => char.charCodeAt(0)));
};
/** @internal */
const value = self => {
  return self.raw.map(byte => String.fromCharCode(byte)).join("");
};
/** @internal */
const unsafeWipe = self => {
  for (let i = 0; i < self.raw.length; i++) {
    self.raw[i] = 0;
  }
};
//# sourceMappingURL=configSecret.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/opCodes/config.mjs
/** @internal */
const OP_CONSTANT = "Constant";
/** @internal */
const OP_FAIL = "Fail";
/** @internal */
const OP_FALLBACK = "Fallback";
/** @internal */
const OP_DESCRIBED = "Described";
/** @internal */
const OP_LAZY = "Lazy";
/** @internal */
const OP_MAP_OR_FAIL = "MapOrFail";
/** @internal */
const OP_NESTED = "Nested";
/** @internal */
const OP_PRIMITIVE = "Primitive";
/** @internal */
const OP_SEQUENCE = "Sequence";
/** @internal */
const OP_TABLE = "Table";
/** @internal */
const OP_ZIP_WITH = "ZipWith";
//# sourceMappingURL=config.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashMap/config.mjs
/** @internal */
const SIZE = 5;
/** @internal */
const BUCKET_SIZE = /*#__PURE__*/Math.pow(2, SIZE);
/** @internal */
const MASK = BUCKET_SIZE - 1;
/** @internal */
const MAX_INDEX_NODE = BUCKET_SIZE / 2;
/** @internal */
const MIN_ARRAY_NODE = BUCKET_SIZE / 4;
//# sourceMappingURL=config.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashMap/bitwise.mjs

/**
 * Hamming weight.
 *
 * Taken from: http://jsperf.com/hamming-weight
 *
 * @internal
 */
function popcount(x) {
  x -= x >> 1 & 0x55555555;
  x = (x & 0x33333333) + (x >> 2 & 0x33333333);
  x = x + (x >> 4) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}
/** @internal */
function hashFragment(shift, h) {
  return h >>> shift & MASK;
}
/** @internal */
function toBitmap(x) {
  return 1 << x;
}
/** @internal */
function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
}
//# sourceMappingURL=bitwise.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashMap/array.mjs
/** @internal */
function arrayUpdate(mutate, at, v, arr) {
  let out = arr;
  if (!mutate) {
    const len = arr.length;
    out = new Array(len);
    for (let i = 0; i < len; ++i) out[i] = arr[i];
  }
  out[at] = v;
  return out;
}
/** @internal */
function arraySpliceOut(mutate, at, arr) {
  const newLen = arr.length - 1;
  let i = 0;
  let g = 0;
  let out = arr;
  if (mutate) {
    i = g = at;
  } else {
    out = new Array(newLen);
    while (i < at) out[g++] = arr[i++];
  }
  ;
  ++i;
  while (i <= newLen) out[g++] = arr[i++];
  if (mutate) {
    out.length = newLen;
  }
  return out;
}
/** @internal */
function arraySpliceIn(mutate, at, v, arr) {
  const len = arr.length;
  if (mutate) {
    let i = len;
    while (i >= at) arr[i--] = arr[i];
    arr[at] = v;
    return arr;
  }
  let i = 0,
    g = 0;
  const out = new Array(len + 1);
  while (i < at) out[g++] = arr[i++];
  out[at] = v;
  while (i < len) out[++g] = arr[i++];
  return out;
}
//# sourceMappingURL=array.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Stack.mjs
/** @internal */
class Stack {
  constructor(value, previous) {
    this.value = value;
    this.previous = previous;
  }
}
//# sourceMappingURL=Stack.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashMap/node.mjs






/** @internal */
class EmptyNode {
  constructor() {
    this._tag = "EmptyNode";
  }
  modify(edit, _shift, f, hash, key, size) {
    const v = f(Option_none());
    if (Option_isNone(v)) return new EmptyNode();
    ++size.value;
    return new LeafNode(edit, hash, key, v);
  }
}
/** @internal */
function isEmptyNode(a) {
  return a instanceof EmptyNode;
}
/** @internal */
function isLeafNode(node) {
  return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode";
}
/** @internal */
function canEditNode(node, edit) {
  return isEmptyNode(node) ? false : edit === node.edit;
}
/** @internal */
class LeafNode {
  constructor(edit, hash, key, value) {
    this.edit = edit;
    this.hash = hash;
    this.key = key;
    this.value = value;
    this._tag = "LeafNode";
  }
  modify(edit, shift, f, hash, key, size) {
    if (equals(key, this.key)) {
      const v = f(this.value);
      if (v === this.value) return this;else if (Option_isNone(v)) {
        ;
        --size.value;
        return new EmptyNode();
      }
      if (canEditNode(this, edit)) {
        this.value = v;
        return this;
      }
      return new LeafNode(edit, hash, key, v);
    }
    const v = f(Option_none());
    if (Option_isNone(v)) return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, hash, new LeafNode(edit, hash, key, v));
  }
}
/** @internal */
class CollisionNode {
  constructor(edit, hash, children) {
    this.edit = edit;
    this.hash = hash;
    this.children = children;
    this._tag = "CollisionNode";
  }
  modify(edit, shift, f, hash, key, size) {
    if (hash === this.hash) {
      const canEdit = canEditNode(this, edit);
      const list = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key, size);
      if (list === this.children) return this;
      return list.length > 1 ? new CollisionNode(edit, this.hash, list) : list[0]; // collapse single element collision list
    }

    const v = f(Option_none());
    if (Option_isNone(v)) return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, hash, new LeafNode(edit, hash, key, v));
  }
  updateCollisionList(mutate, edit, hash, list, f, key, size) {
    const len = list.length;
    for (let i = 0; i < len; ++i) {
      const child = list[i];
      if ("key" in child && equals(key, child.key)) {
        const value = child.value;
        const newValue = f(value);
        if (newValue === value) return list;
        if (Option_isNone(newValue)) {
          ;
          --size.value;
          return arraySpliceOut(mutate, i, list);
        }
        return arrayUpdate(mutate, i, new LeafNode(edit, hash, key, newValue), list);
      }
    }
    const newValue = f(Option_none());
    if (Option_isNone(newValue)) return list;
    ++size.value;
    return arrayUpdate(mutate, len, new LeafNode(edit, hash, key, newValue), list);
  }
}
/** @internal */
class IndexedNode {
  constructor(edit, mask, children) {
    this.edit = edit;
    this.mask = mask;
    this.children = children;
    this._tag = "IndexedNode";
  }
  modify(edit, shift, f, hash, key, size) {
    const mask = this.mask;
    const children = this.children;
    const frag = hashFragment(shift, hash);
    const bit = toBitmap(frag);
    const indx = fromBitmap(mask, bit);
    const exists = mask & bit;
    const canEdit = canEditNode(this, edit);
    if (!exists) {
      const _newChild = new EmptyNode().modify(edit, shift + SIZE, f, hash, key, size);
      if (!_newChild) return this;
      return children.length >= MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children) : new IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children));
    }
    const current = children[indx];
    const child = current.modify(edit, shift + SIZE, f, hash, key, size);
    if (current === child) return this;
    let bitmap = mask;
    let newChildren;
    if (isEmptyNode(child)) {
      // remove
      bitmap &= ~bit;
      if (!bitmap) return new EmptyNode();
      if (children.length <= 2 && isLeafNode(children[indx ^ 1])) {
        return children[indx ^ 1]; // collapse
      }

      newChildren = arraySpliceOut(canEdit, indx, children);
    } else {
      // modify
      newChildren = arrayUpdate(canEdit, indx, child, children);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return new IndexedNode(edit, bitmap, newChildren);
  }
}
/** @internal */
class ArrayNode {
  constructor(edit, size, children) {
    this.edit = edit;
    this.size = size;
    this.children = children;
    this._tag = "ArrayNode";
  }
  modify(edit, shift, f, hash, key, size) {
    let count = this.size;
    const children = this.children;
    const frag = hashFragment(shift, hash);
    const child = children[frag];
    const newChild = (child || new EmptyNode()).modify(edit, shift + SIZE, f, hash, key, size);
    if (child === newChild) return this;
    const canEdit = canEditNode(this, edit);
    let newChildren;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      // add
      ;
      ++count;
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      // remove
      ;
      --count;
      if (count <= MIN_ARRAY_NODE) {
        return pack(edit, count, frag, children);
      }
      newChildren = arrayUpdate(canEdit, frag, new EmptyNode(), children);
    } else {
      // modify
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    }
    if (canEdit) {
      this.size = count;
      this.children = newChildren;
      return this;
    }
    return new ArrayNode(edit, count, newChildren);
  }
}
function pack(edit, count, removed, elements) {
  const children = new Array(count - 1);
  let g = 0;
  let bitmap = 0;
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      const elem = elements[i];
      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }
  return new IndexedNode(edit, bitmap, children);
}
function expand(edit, frag, child, bitmap, subNodes) {
  const arr = [];
  let bit = bitmap;
  let count = 0;
  for (let i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++];
    bit >>>= 1;
  }
  arr[frag] = child;
  return new ArrayNode(edit, count + 1, arr);
}
function mergeLeavesInner(edit, shift, h1, n1, h2, n2) {
  if (h1 === h2) return new CollisionNode(edit, h1, [n2, n1]);
  const subH1 = hashFragment(shift, h1);
  const subH2 = hashFragment(shift, h2);
  if (subH1 === subH2) {
    return child => new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), [child]);
  } else {
    const children = subH1 < subH2 ? [n1, n2] : [n2, n1];
    return new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), children);
  }
}
function mergeLeaves(edit, shift, h1, n1, h2, n2) {
  let stack = undefined;
  let currentShift = shift;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2);
    if (typeof res === "function") {
      stack = new Stack(res, stack);
      currentShift = currentShift + SIZE;
    } else {
      let final = res;
      while (stack != null) {
        final = stack.value(final);
        stack = stack.previous;
      }
      return final;
    }
  }
}
//# sourceMappingURL=node.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashMap.mjs








/** @internal */
const HashMapTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/HashMap");
/** @internal */
class HashMapImpl {
  constructor(_editable, _edit, _root, _size) {
    this._editable = _editable;
    this._edit = _edit;
    this._root = _root;
    this._size = _size;
    this._id = HashMapTypeId;
  }
  [Symbol.iterator]() {
    return new HashMapIterator(this, (k, v) => [k, v]);
  }
  [Hash_symbol]() {
    let hash = Hash_hash("HashMap");
    for (const item of this) {
      hash ^= combine(Hash_hash(item[0]))(Hash_hash(item[1]));
    }
    return hash;
  }
  [Equal_symbol](that) {
    if (isHashMap(that)) {
      if (that._size !== this._size) {
        return false;
      }
      for (const item of this) {
        const elem = Function_pipe(that, getHash(item[0], Hash_hash(item[0])));
        if (Option_isNone(elem)) {
          return false;
        } else {
          if (!equals(item[1], elem.value)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }
  toString() {
    return `HashMap(${Array.from(this).map(([k, v]) => `[${String(k)}, ${String(v)}]`).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "HashMap",
      values: Array.from(this)
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}
class HashMapIterator {
  constructor(map, f) {
    this.map = map;
    this.f = f;
    this.v = visitLazy(this.map._root, this.f, undefined);
  }
  next() {
    if (Option_isNone(this.v)) {
      return {
        done: true,
        value: undefined
      };
    }
    const v0 = this.v.value;
    this.v = applyCont(v0.cont);
    return {
      done: false,
      value: v0.value
    };
  }
  [Symbol.iterator]() {
    return new HashMapIterator(this.map, this.f);
  }
}
const applyCont = cont => cont ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4]) : Option_none();
const visitLazy = (node, f, cont = undefined) => {
  switch (node._tag) {
    case "LeafNode":
      {
        if (Option_isSome(node.value)) {
          return Option_some({
            value: f(node.key, node.value.value),
            cont
          });
        }
        return applyCont(cont);
      }
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode":
      {
        const children = node.children;
        return visitLazyChildren(children.length, children, 0, f, cont);
      }
    default:
      {
        return applyCont(cont);
      }
  }
};
const visitLazyChildren = (len, children, i, f, cont) => {
  while (i < len) {
    const child = children[i++];
    if (child && !isEmptyNode(child)) {
      return visitLazy(child, f, [len, children, i, f, cont]);
    }
  }
  return applyCont(cont);
};
/** @internal */
const HashMap_empty = () => new HashMapImpl(false, 0, new EmptyNode(), 0);
/** @internal */
const HashMap_make = (...entries) => HashMap_fromIterable(entries);
/** @internal */
const HashMap_fromIterable = entries => {
  const map = beginMutation(HashMap_empty());
  for (const entry of entries) {
    set(entry[0], entry[1])(map);
  }
  return endMutation(map);
};
/** @internal */
const isHashMap = u => typeof u === "object" && u != null && "_id" in u && u["_id"] === HashMapTypeId;
/** @internal */
const HashMap_isEmpty = self => self && isEmptyNode(self._root);
/** @internal */
const HashMap_get = /*#__PURE__*/Dual_dual(2, (self, key) => getHash(self, key, Hash_hash(key)));
/** @internal */
const getHash = /*#__PURE__*/Dual_dual(3, (self, key, hash) => {
  let node = self._root;
  let shift = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    switch (node._tag) {
      case "LeafNode":
        {
          return equals(key, node.key) ? node.value : Option_none();
        }
      case "CollisionNode":
        {
          if (hash === node.hash) {
            const children = node.children;
            for (let i = 0, len = children.length; i < len; ++i) {
              const child = children[i];
              if ("key" in child && equals(key, child.key)) {
                return child.value;
              }
            }
          }
          return Option_none();
        }
      case "IndexedNode":
        {
          const frag = hashFragment(shift, hash);
          const bit = toBitmap(frag);
          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift += SIZE;
            break;
          }
          return Option_none();
        }
      case "ArrayNode":
        {
          node = node.children[hashFragment(shift, hash)];
          if (node) {
            shift += SIZE;
            break;
          }
          return Option_none();
        }
      default:
        return Option_none();
    }
  }
});
/** @internal */
const HashMap_unsafeGet = /*#__PURE__*/Dual_dual(2, (self, key) => {
  const element = getHash(self, key, Hash_hash(key));
  if (Option_isNone(element)) {
    throw new Error("Error: Expected map to contain key");
  }
  return element.value;
});
/** @internal */
const has = /*#__PURE__*/Dual_dual(2, (self, key) => Option_isSome(getHash(self, key, Hash_hash(key))));
/** @internal */
const hasHash = /*#__PURE__*/Dual_dual(3, (self, key, hash) => Option_isSome(getHash(self, key, hash)));
/** @internal */
const set = /*#__PURE__*/Dual_dual(3, (self, key, value) => modifyAt(self, key, () => Option_some(value)));
/** @internal */
const setTree = /*#__PURE__*/Dual_dual(3, (self, newRoot, newSize) => {
  if (self._editable) {
    ;
    self._root = newRoot;
    self._size = newSize;
    return self;
  }
  return newRoot === self._root ? self : new HashMapImpl(self._editable, self._edit, newRoot, newSize);
});
/** @internal */
const keys = self => new HashMapIterator(self, key => key);
/** @internal */
const values = self => new HashMapIterator(self, (_, value) => value);
/** @internal */
const HashMap_size = self => self._size;
/** @internal */
const beginMutation = self => new HashMapImpl(true, self._edit + 1, self._root, self._size);
/** @internal */
const endMutation = self => {
  ;
  self._editable = false;
  return self;
};
/** @internal */
const mutate = /*#__PURE__*/Dual_dual(2, (self, f) => {
  const transient = beginMutation(self);
  f(transient);
  return endMutation(transient);
});
/** @internal */
const modifyAt = /*#__PURE__*/Dual_dual(3, (self, key, f) => modifyHash(self, key, Hash_hash(key), f));
/** @internal */
const modifyHash = /*#__PURE__*/Dual_dual(4, (self, key, hash, f) => {
  const size = {
    value: self._size
  };
  const newRoot = self._root.modify(self._editable ? self._edit : NaN, 0, f, hash, key, size);
  return Function_pipe(self, setTree(newRoot, size.value));
});
/** @internal */
const HashMap_modify = /*#__PURE__*/Dual_dual(3, (self, key, f) => modifyAt(self, key, Option_map(f)));
/** @internal */
const HashMap_union = /*#__PURE__*/Dual_dual(2, (self, that) => {
  const result = beginMutation(self);
  forEachWithIndex(that, (v, k) => set(result, k, v));
  return endMutation(result);
});
/** @internal */
const HashMap_remove = /*#__PURE__*/Dual_dual(2, (self, key) => modifyAt(self, key, Option_none));
/** @internal */
const removeMany = /*#__PURE__*/Dual_dual(2, (self, keys) => mutate(self, map => {
  for (const key of keys) {
    HashMap_remove(key)(map);
  }
}));
/** @internal */
const HashMap_map = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_mapWithIndex(self, v => f(v)));
/**
 * Maps over the entries of the `HashMap` using the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const HashMap_mapWithIndex = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_reduceWithIndex(self, HashMap_empty(), (map, value, key) => set(map, key, f(value, key))));
/** @internal */
const HashMap_flatMap = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_flatMapWithIndex(self, v => f(v)));
/** @internal */
const HashMap_flatMapWithIndex = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_reduceWithIndex(self, HashMap_empty(), (zero, value, key) => mutate(zero, map => forEachWithIndex(f(value, key), (value, key) => set(map, key, value)))));
/** @internal */
const HashMap_forEach = /*#__PURE__*/Dual_dual(2, (self, f) => forEachWithIndex(self, value => f(value)));
/** @internal */
const forEachWithIndex = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_reduceWithIndex(self, void 0, (_, value, key) => f(value, key)));
/** @internal */
const HashMap_reduce = /*#__PURE__*/Dual_dual(3, (self, z, f) => HashMap_reduceWithIndex(self, z, (acc, v) => f(acc, v)));
/** @internal */
const HashMap_reduceWithIndex = /*#__PURE__*/Dual_dual(3, (self, zero, f) => {
  const root = self._root;
  if (root._tag === "LeafNode") {
    return Option_isSome(root.value) ? f(zero, root.value.value, root.key) : zero;
  }
  if (root._tag === "EmptyNode") {
    return zero;
  }
  const toVisit = [root.children];
  let children;
  while (children = toVisit.pop()) {
    for (let i = 0, len = children.length; i < len;) {
      const child = children[i++];
      if (child && !isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (Option_isSome(child.value)) {
            zero = f(zero, child.value.value, child.key);
          }
        } else {
          toVisit.push(child.children);
        }
      }
    }
  }
  return zero;
});
/** @internal */
const HashMap_filter = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_filterWithIndex(self, f));
/** @internal */
const HashMap_filterWithIndex = /*#__PURE__*/Dual_dual(2, (self, f) => mutate(HashMap_empty(), map => {
  for (const [k, a] of self) {
    if (f(a, k)) {
      set(map, k, a);
    }
  }
}));
/** @internal */
const HashMap_compact = self => HashMap_filterMap(self, Function_identity);
/** @internal */
const HashMap_filterMap = /*#__PURE__*/Dual_dual(2, (self, f) => HashMap_filterMapWithIndex(self, f));
/** @internal */
const HashMap_filterMapWithIndex = /*#__PURE__*/Dual_dual(2, (self, f) => mutate(HashMap_empty(), map => {
  for (const [k, a] of self) {
    const option = f(a, k);
    if (Option_isSome(option)) {
      set(map, k, option.value);
    }
  }
}));
//# sourceMappingURL=HashMap.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashSet.mjs




/** @internal */
const HashSetTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/HashSet");
/** @internal */
class HashSetImpl {
  constructor(_keyMap) {
    this._keyMap = _keyMap;
    this._id = HashSetTypeId;
  }
  [Symbol.iterator]() {
    return keys(this._keyMap);
  }
  [Hash_symbol]() {
    return combine(Hash_hash(this._keyMap))(Hash_hash("HashSet"));
  }
  [Equal_symbol](that) {
    if (isHashSet(that)) {
      return HashMap_size(this._keyMap) === HashMap_size(that._keyMap) && equals(this._keyMap, that._keyMap);
    }
    return false;
  }
  toString() {
    return `HashSet(${Array.from(this).map(String).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "HashSet",
      values: Array.from(this)
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}
/** @internal */
const isHashSet = u => typeof u === "object" && u != null && "_id" in u && u["_id"] === HashSetTypeId;
/** @internal */
const HashSet_empty = () => new HashSetImpl(HashMap_empty());
/** @internal */
const HashSet_fromIterable = elements => {
  const set = HashSet_beginMutation(HashSet_empty());
  for (const value of elements) {
    add(set, value);
  }
  return HashSet_endMutation(set);
};
/** @internal */
const HashSet_make = (...elements) => {
  const set = HashSet_beginMutation(HashSet_empty());
  for (const value of elements) {
    add(set, value);
  }
  return HashSet_endMutation(set);
};
/** @internal */
const HashSet_has = /*#__PURE__*/Dual_dual(2, (self, value) => has(self._keyMap, value));
/** @internal */
const HashSet_some = /*#__PURE__*/Dual_dual(2, (self, f) => {
  let found = false;
  for (const value of self) {
    found = f(value);
    if (found) {
      break;
    }
  }
  return found;
});
/** @internal */
const HashSet_every = /*#__PURE__*/Dual_dual(2, (self, f) => !HashSet_some(self, a => !f(a)));
/** @internal */
const isSubset = /*#__PURE__*/Dual_dual(2, (self, that) => HashSet_every(self, value => HashSet_has(that, value)));
/** @internal */
const HashSet_values = self => keys(self._keyMap);
/** @internal */
const HashSet_size = self => HashMap_size(self._keyMap);
/** @internal */
const HashSet_beginMutation = self => new HashSetImpl(beginMutation(self._keyMap));
/** @internal */
const HashSet_endMutation = self => {
  ;
  self._keyMap._editable = false;
  return self;
};
/** @internal */
const HashSet_mutate = /*#__PURE__*/Dual_dual(2, (self, f) => {
  const transient = HashSet_beginMutation(self);
  f(transient);
  return HashSet_endMutation(transient);
});
/** @internal */
const add = /*#__PURE__*/Dual_dual(2, (self, value) => self._keyMap._editable ? (set(value, true)(self._keyMap), self) : new HashSetImpl(set(value, true)(self._keyMap)));
/** @internal */
const HashSet_remove = /*#__PURE__*/Dual_dual(2, (self, value) => self._keyMap._editable ? (HashMap_remove(value)(self._keyMap), self) : new HashSetImpl(HashMap_remove(value)(self._keyMap)));
/** @internal */
const HashSet_difference = /*#__PURE__*/Dual_dual(2, (self, that) => HashSet_mutate(self, set => {
  for (const value of that) {
    HashSet_remove(set, value);
  }
}));
/** @internal */
const HashSet_intersection = /*#__PURE__*/Dual_dual(2, (self, that) => HashSet_mutate(HashSet_empty(), set => {
  for (const value of that) {
    if (HashSet_has(value)(self)) {
      add(value)(set);
    }
  }
}));
/** @internal */
const HashSet_union = /*#__PURE__*/Dual_dual(2, (self, that) => HashSet_mutate(HashSet_empty(), set => {
  HashSet_forEach(self, value => add(set, value));
  for (const value of that) {
    add(set, value);
  }
}));
/** @internal */
const toggle = /*#__PURE__*/Dual_dual(2, (self, value) => HashSet_has(self, value) ? HashSet_remove(self, value) : add(self, value));
/** @internal */
const HashSet_map = /*#__PURE__*/Dual_dual(2, (self, f) => HashSet_mutate(HashSet_empty(), set => {
  HashSet_forEach(self, a => {
    const b = f(a);
    if (!HashSet_has(set, b)) {
      add(set, b);
    }
  });
}));
/** @internal */
const HashSet_flatMap = /*#__PURE__*/Dual_dual(2, (self, f) => HashSet_mutate(HashSet_empty(), set => {
  HashSet_forEach(self, a => {
    for (const b of f(a)) {
      if (!HashSet_has(set, b)) {
        add(set, b);
      }
    }
  });
}));
/** @internal */
const HashSet_forEach = /*#__PURE__*/Dual_dual(2, (self, f) => forEachWithIndex(self._keyMap, (_, k) => f(k)));
/** @internal */
const HashSet_reduce = /*#__PURE__*/Dual_dual(3, (self, zero, f) => HashMap_reduceWithIndex(self._keyMap, zero, (z, _, a) => f(z, a)));
/** @internal */
const HashSet_filter = /*#__PURE__*/Dual_dual(2, (self, f) => {
  return HashSet_mutate(HashSet_empty(), set => {
    const iterator = HashSet_values(self);
    let next;
    while (!(next = iterator.next()).done) {
      const value = next.value;
      if (f(value)) {
        add(set, value);
      }
    }
  });
});
/** @internal */
const HashSet_partition = /*#__PURE__*/Dual_dual(2, (self, f) => {
  const iterator = HashSet_values(self);
  let next;
  const right = HashSet_beginMutation(HashSet_empty());
  const left = HashSet_beginMutation(HashSet_empty());
  while (!(next = iterator.next()).done) {
    const value = next.value;
    if (f(value)) {
      add(right, value);
    } else {
      add(left, value);
    }
  }
  return [HashSet_endMutation(left), HashSet_endMutation(right)];
});
//# sourceMappingURL=HashSet.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/HashSet.mjs
/**
 * @since 1.0.0
 */

const HashSet_TypeId = HashSetTypeId;
/**
 * @since 1.0.0
 * @category refinements
 */
const HashSet_isHashSet = isHashSet;
/**
 * Creates an empty `HashSet`.
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_HashSet_empty = HashSet_empty;
/**
 * Construct a new `HashSet` from a `Collection` of values
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_HashSet_fromIterable = HashSet_fromIterable;
/**
 * Construct a new `HashSet` from a variable number of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_HashSet_make = HashSet_make;
/**
 * Checks if the specified value exists in the `HashSet`.
 *
 * @since 1.0.0
 * @category elements
 */
const mjs_HashSet_has = HashSet_has;
/**
 * Returns `true` if any value in the `HashSet` matches the specified predicate.
 *
 * @since 1.0.0
 * @category elements
 */
const mjs_HashSet_some = HashSet_some;
/**
 * Returns `true` only if all values in the `HashSet` match the specified
 * predicate.
 *
 * @since 1.0.0
 * @category elements
 */
const mjs_HashSet_every = HashSet_every;
/**
 * Returns `true` if and only if every element in the this `HashSet` is an
 * element of the second set,
 *
 * **NOTE**: the hash and equal of both sets must be the same.
 *
 * @since 1.0.0
 * @category elements
 */
const HashSet_isSubset = isSubset;
/**
 * Returns an `IterableIterator` of the values in the `HashSet`.
 *
 * @since 1.0.0
 * @category getters
 */
const mjs_HashSet_values = HashSet_values;
/**
 * Calculates the number of values in the `HashSet`.
 *
 * @since 1.0.0
 * @category getters
 */
const mjs_HashSet_size = HashSet_size;
/**
 * Marks the `HashSet` as mutable.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_beginMutation = HashSet_beginMutation;
/**
 * Marks the `HashSet` as immutable.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_endMutation = HashSet_endMutation;
/**
 * Mutates the `HashSet` within the context of the provided function.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_mutate = HashSet_mutate;
/**
 * Adds a value to the `HashSet`.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashSet_add = add;
/**
 * Removes a value from the `HashSet`.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_remove = HashSet_remove;
/**
 * Computes the set difference between this `HashSet` and the specified
 * `Iterable<A>`.
 *
 * **NOTE**: the hash and equal of the values in both the set and the iterable
 * must be the same.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_difference = HashSet_difference;
/**
 * Returns a `HashSet` of values which are present in both this set and that
 * `Iterable<A>`.
 *
 * **NOTE**: the hash and equal of the values in both the set and the iterable
 * must be the same.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_intersection = HashSet_intersection;
/**
 * Computes the set union `(`self` + `that`)` between this `HashSet` and the
 * specified `Iterable<A>`.
 *
 * **NOTE**: the hash and equal of the values in both the set and the iterable
 * must be the same.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashSet_union = HashSet_union;
/**
 * Checks if a value is present in the `HashSet`. If it is present, the value
 * will be removed from the `HashSet`, otherwise the value will be added to the
 * `HashSet`.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashSet_toggle = toggle;
/**
 * Maps over the values of the `HashSet` using the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const mjs_HashSet_map = HashSet_map;
/**
 * Chains over the values of the `HashSet` using the specified function.
 *
 * @since 1.0.0
 * @category sequencing
 */
const mjs_HashSet_flatMap = HashSet_flatMap;
/**
 * Applies the specified function to the values of the `HashSet`.
 *
 * @since 1.0.0
 * @category traversing
 */
const mjs_HashSet_forEach = HashSet_forEach;
/**
 * Reduces the specified state over the values of the `HashSet`.
 *
 * @since 1.0.0
 * @category folding
 */
const mjs_HashSet_reduce = HashSet_reduce;
/**
 * Filters values out of a `HashSet` using the specified predicate.
 *
 * @since 1.0.0
 * @category filtering
 */
const mjs_HashSet_filter = HashSet_filter;
/**
 * Partition the values of a `HashSet` using the specified predicate.
 *
 * If a value matches the predicate, it will be placed into the `HashSet` on the
 * right side of the resulting `Tuple`, otherwise the value will be placed into
 * the left side.
 *
 * @since 1.0.0
 * @category partitioning
 */
const mjs_HashSet_partition = HashSet_partition;
//# sourceMappingURL=HashSet.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/config.mjs










/** @internal */
const ConfigSymbolKey = "@effect/io/Config";
/** @internal */
const ConfigTypeId = /*#__PURE__*/Symbol.for(ConfigSymbolKey);
/** @internal */
const configVariance = {
  _A: _ => _
};
/** @internal */
const config_proto = {
  [ConfigTypeId]: configVariance
};
/** @internal */
const bool = name => {
  const config = primitive("a boolean property", text => {
    switch (text) {
      case "true":
      case "yes":
      case "on":
      case "1":
        {
          return Either_right(true);
        }
      case "false":
      case "no":
      case "off":
      case "0":
        {
          return Either_right(false);
        }
      default:
        {
          const error = InvalidData(Chunk_empty(), `Expected a boolean value, but received ${text}`);
          return Either_left(error);
        }
    }
  });
  return name === undefined ? config : nested(name)(config);
};
/** @internal */
const arrayOf = (config, name) => {
  return config_map(toReadonlyArray)(chunkOf(config, name));
};
/** @internal */
const chunkOf = (config, name) => {
  return name === undefined ? repeat(config) : nested(name)(repeat(config));
};
/** @internal */
const date = name => {
  const config = primitive("a date property", text => {
    const result = Date.parse(text);
    if (Number.isNaN(result)) {
      return Either_left(InvalidData(Chunk_empty(), `Expected a date value but received ${text}`));
    }
    return Either_right(new Date(result));
  });
  return name === undefined ? config : nested(name)(config);
};
/** @internal */
const defer = config => {
  const lazy = Object.create(config_proto);
  lazy._tag = OP_LAZY;
  lazy.config = config;
  return lazy;
};
/** @internal */
const fail = message => {
  const fail = Object.create(config_proto);
  fail._tag = OP_FAIL;
  fail.message = message;
  fail.parse = () => Either_left(Unsupported(Chunk_empty(), message));
  return fail;
};
/** @internal */
const config_float = name => {
  const config = primitive("a float property", text => {
    const result = Number.parseFloat(text);
    if (Number.isNaN(result)) {
      return Either_left(InvalidData(Chunk_empty(), `Expected an float value but received ${text}`));
    }
    return Either_right(result);
  });
  return name === undefined ? config : nested(name)(config);
};
/** @internal */
const integer = name => {
  const config = primitive("an integer property", text => {
    const result = Number.parseInt(text, 10);
    if (Number.isNaN(result)) {
      return Either_left(InvalidData(Chunk_empty(), `Expected an integer value but received ${text}`));
    }
    return Either_right(result);
  });
  return name === undefined ? config : nested(name)(config);
};
/** @internal */
const config_map = /*#__PURE__*/dual(2, (self, f) => mapOrFail(self, a => Either_right(f(a))));
/** @internal */
const mapAttempt = /*#__PURE__*/dual(2, (self, f) => mapOrFail(self, a => {
  try {
    return Either_right(f(a));
  } catch (error) {
    return Either_left(InvalidData(Chunk_empty(), error instanceof Error ? error.message : `${error}`));
  }
}));
/** @internal */
const mapOrFail = /*#__PURE__*/dual(2, (self, f) => {
  const mapOrFail = Object.create(config_proto);
  mapOrFail._tag = OP_MAP_OR_FAIL;
  mapOrFail.original = self;
  mapOrFail.mapOrFail = f;
  return mapOrFail;
});
/** @internal */
const missingError = name => {
  return self => {
    return MissingData(Chunk_empty(), `Expected ${self.description} with name ${name}`);
  };
};
/** @internal */
const nested = /*#__PURE__*/dual(2, (self, name) => {
  const nested = Object.create(config_proto);
  nested._tag = OP_NESTED;
  nested.name = name;
  nested.config = self;
  return nested;
});
/** @internal */
const config_orElse = /*#__PURE__*/dual(2, (self, that) => {
  const fallback = Object.create(config_proto);
  fallback._tag = OP_FALLBACK;
  fallback.first = self;
  fallback.second = defer(that);
  fallback.condition = Function_constTrue;
  return fallback;
});
/** @internal */
const orElseIf = /*#__PURE__*/dual(3, (self, that, condition) => {
  const fallback = Object.create(config_proto);
  fallback._tag = OP_FALLBACK;
  fallback.first = self;
  fallback.second = defer(that);
  fallback.condition = condition;
  return fallback;
});
/** @internal */
const optional = self => {
  return orElseIf(() => succeed(Option_none()), Error_isMissingDataOnly)(config_map(Option_some)(self));
};
/** @internal */
const primitive = (description, parse) => {
  const primitive = Object.create(config_proto);
  primitive._tag = OP_PRIMITIVE;
  primitive.description = description;
  primitive.parse = parse;
  return primitive;
};
/** @internal */
const repeat = self => {
  const repeat = Object.create(config_proto);
  repeat._tag = OP_SEQUENCE;
  repeat.config = self;
  return repeat;
};
/** @internal */
const secret = name => {
  const config = primitive("a secret property", text => Either_right(fromString(text)));
  return name === undefined ? config : nested(name)(config);
};
/** @internal */
const setOf = (config, name) => {
  const newConfig = config_map(chunkOf(config), mjs_HashSet_fromIterable);
  return name === undefined ? newConfig : nested(name)(newConfig);
};
/** @internal */
const config_string = name => {
  const config = primitive("a text property", Either_right);
  return name === undefined ? config : nested(name)(config);
};
/** @internal */
const config_struct = r => {
  const entries = Object.entries(r);
  let result = config_map(value => ({
    [entries[0][0]]: value
  }))(entries[0][1]);
  if (entries.length === 1) {
    return result;
  }
  const rest = entries.slice(1);
  for (const [key, config] of rest) {
    result = config_zipWith(config, (record, value) => ({
      ...record,
      [key]: value
    }))(result);
  }
  return result;
};
/** @internal */
const succeed = value => {
  const constant = Object.create(config_proto);
  constant._tag = OP_CONSTANT;
  constant.value = value;
  constant.parse = () => Either_right(value);
  return constant;
};
/** @internal */
const sync = value => {
  return defer(() => succeed(value()));
};
/** @internal */
const table = (config, name) => {
  const table = Object.create(config_proto);
  table._tag = OP_TABLE;
  table.valueConfig = config;
  return name === undefined ? table : nested(name)(table);
};
/** @internal */
const config_tuple = (...tuple) => {
  if (tuple.length === 1) {
    return tuple[0];
  }
  let result = tuple[0];
  const rest = tuple.slice(1);
  for (const config of rest) {
    result = config_zipWith(config, (tuple, value) => [...tuple, value])(result);
  }
  return result;
};
/**
 * @internal
 */
const unwrap = wrapped => {
  if (typeof wrapped === "object" && wrapped != null && ConfigTypeId in wrapped) {
    return wrapped;
  }
  return config_struct(Object.fromEntries(Object.entries(wrapped).map(([k, a]) => [k, unwrap(a)])));
};
/** @internal */
const validate = /*#__PURE__*/dual(3, (self, message, f) => mapOrFail(self, a => {
  if (f(a)) {
    return Either_right(a);
  }
  return Either_left(InvalidData(Chunk_empty(), message));
}));
/** @internal */
const withDefault = /*#__PURE__*/dual(2, (self, def) => orElseIf(self, () => succeed(def), Error_isMissingDataOnly));
/** @internal */
const withDescription = /*#__PURE__*/dual(2, (self, description) => {
  const described = Object.create(config_proto);
  described._tag = OP_DESCRIBED;
  described.config = self;
  described.description = description;
  return described;
});
/** @internal */
const config_zip = /*#__PURE__*/dual(2, (self, that) => config_zipWith(self, that, (a, b) => [a, b]));
/** @internal */
const config_zipWith = /*#__PURE__*/dual(3, (self, that, f) => {
  const zipWith = Object.create(config_proto);
  zipWith._tag = OP_ZIP_WITH;
  zipWith.left = self;
  zipWith.right = that;
  zipWith.zip = f;
  return zipWith;
});
//# sourceMappingURL=config.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Config.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const Config_ConfigTypeId = ConfigTypeId;
/**
 * Constructs a config for an array of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_arrayOf = arrayOf;
/**
 * Constructs a config for a boolean value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_bool = bool;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_chunkOf = chunkOf;
/**
 * Constructs a config for a date value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_date = date;
/**
 * Lazily constructs a config.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_defer = defer;
/**
 * Constructs a config that fails with the specified message.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_fail = fail;
/**
 * Constructs a config for a float value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_float = config_float;
/**
 * Constructs a config for a integer value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_integer = integer;
/**
 * Returns a  config whose structure is the same as this one, but which produces
 * a different value, constructed using the specified function.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_map = config_map;
/**
 * Returns a config whose structure is the same as this one, but which may
 * produce a different value, constructed using the specified function, which
 * may throw exceptions that will be translated into validation errors.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_mapAttempt = mapAttempt;
/**
 * Returns a new config whose structure is the samea as this one, but which
 * may produce a different value, constructed using the specified fallible
 * function.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_mapOrFail = mapOrFail;
/**
 * Returns a config that has this configuration nested as a property of the
 * specified name.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_nested = nested;
/**
 * Returns a config whose structure is preferentially described by this
 * config, but which falls back to the specified config if there is an issue
 * reading from this config.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_orElse = config_orElse;
/**
 * Returns configuration which reads from this configuration, but which falls
 * back to the specified configuration if reading from this configuration
 * fails with an error satisfying the specified predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_orElseIf = orElseIf;
/**
 * Returns an optional version of this config, which will be `None` if the
 * data is missing from configuration, and `Some` otherwise.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_optional = optional;
/**
 * Constructs a new primitive config.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_primitive = primitive;
/**
 * Returns a config that describes a sequence of values, each of which has the
 * structure of this config.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_repeat = repeat;
/**
 * Constructs a config for a secret value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_secret = secret;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_setOf = setOf;
/**
 * Constructs a config for a string value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_string = config_string;
/**
 * Constructs a config from a record of configs.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_struct = config_struct;
/**
 * Constructs a config which contains the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_succeed = succeed;
/**
 * Constructs a config which contains the specified lazy value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_sync = sync;
/**
 * Constructs a config for a sequence of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_table = table;
/**
 * Constructs a config from a tuple of configs.
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_tuple = config_tuple;
/**
 * Constructs a config from some configuration wrapped with the `Wrap<A>` utility type.
 *
 * For example:
 *
 * ```
 * import { Config, unwrap } from "@effect/io/Config"
 *
 * interface Options { key: string }
 *
 * const makeConfig = (config: Config.Wrap<Options>): Config<Options> => unwrap(config)
 * ```
 *
 * @since 1.0.0
 * @category constructors
 */
const Config_unwrap = unwrap;
/**
 * Returns a config that describes the same structure as this one, but which
 * performs validation during loading.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_validate = validate;
/**
 * Returns a config that describes the same structure as this one, but has the
 * specified default value in case the information cannot be found.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_withDefault = withDefault;
/**
 * Adds a description to this configuration, which is intended for humans.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_withDescription = withDescription;
/**
 * Returns a config that is the composition of this config and the specified
 * config.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_zip = config_zip;
/**
 * Returns a config that is the composes this config and the specified config
 * using the provided function.
 *
 * @since 1.0.0
 * @category mutations
 */
const Config_zipWith = config_zipWith;
//# sourceMappingURL=Config.mjs.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@vercel+ncc@0.36.1/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?actions-upload-to-gist/_common
var _common = __nccwpck_require__(854);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/MutableRef.mjs
/**
 * @since 1.0.0
 */


const MutableRef_TypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/MutableRef");
class MutableRefImpl {
  constructor(current) {
    this.current = current;
    this._T = _ => _;
    this._id = MutableRef_TypeId;
  }
  get() {
    return this.current;
  }
  set(value) {
    this.current = value;
    return this;
  }
  setAndGet(value) {
    this.current = value;
    return this.current;
  }
  getAndSet(value) {
    const ret = this.current;
    this.current = value;
    return ret;
  }
  compareAndSet(oldValue, newValue) {
    if (equals(oldValue, this.current)) {
      this.current = newValue;
      return true;
    }
    return false;
  }
  pipe(f) {
    return f(this);
  }
  update(f) {
    return this.set(f(this.get()));
  }
  updateAndGet(f) {
    return this.setAndGet(f(this.get()));
  }
  getAndUpdate(f) {
    return this.getAndSet(f(this.get()));
  }
  toString() {
    return `MutableRef(${String(this.current)})`;
  }
  toJSON() {
    return {
      _tag: "MutableRef",
      current: this.current
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}
/**
 * @since 1.0.0
 * @category constructors
 */
const MutableRef_make = value => new MutableRefImpl(value);
/**
 * @since 1.0.0
 * @category general
 */
const compareAndSet = /*#__PURE__*/Dual_dual(3, (self, oldValue, newValue) => self.compareAndSet(oldValue, newValue));
/**
 * @since 1.0.0
 * @category numeric
 */
const decrement = self => self.update(n => n - 1);
/**
 * @since 1.0.0
 * @category numeric
 */
const decrementAndGet = self => self.updateAndGet(n => n - 1);
/**
 * @since 1.0.0
 * @category general
 */
const MutableRef_get = self => self.current;
/**
 * @since 1.0.0
 * @category numeric
 */
const getAndDecrement = self => self.getAndUpdate(n => n - 1);
/**
 * @since 1.0.0
 * @category numeric
 */
const getAndIncrement = self => self.getAndUpdate(n => n + 1);
/**
 * @since 1.0.0
 * @category general
 */
const getAndSet = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, value) => self.getAndSet(value))));
/**
 * @since 1.0.0
 * @category general
 */
const getAndUpdate = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => self.getAndUpdate(f))));
/**
 * @since 1.0.0
 * @category numeric
 */
const increment = self => self.update(n => n + 1);
/**
 * @since 1.0.0
 * @category numeric
 */
const incrementAndGet = self => self.updateAndGet(n => n + 1);
/**
 * @since 1.0.0
 * @category general
 */
const MutableRef_set = /*#__PURE__*/Dual_dual(2, (self, value) => self.set(value));
/**
 * @since 1.0.0
 * @category general
 */
const setAndGet = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, value) => self.setAndGet(value))));
/**
 * @since 1.0.0
 * @category general
 */
const update = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => self.update(f))));
/**
 * @since 1.0.0
 * @category general
 */
const updateAndGet = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => self.updateAndGet(f))));
/**
 * @since 1.0.0
 * @category boolean
 */
const MutableRef_toggle = self => self.update(_ => !_);
//# sourceMappingURL=MutableRef.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberId.mjs
var _a, _b, _c;






/** @internal */
const FiberIdSymbolKey = "@effect/io/Fiber/Id";
/** @internal */
const FiberIdTypeId = /*#__PURE__*/Symbol.for(FiberIdSymbolKey);
/** @internal */
const OP_NONE = "None";
/** @internal */
const OP_RUNTIME = "Runtime";
/** @internal */
const OP_COMPOSITE = "Composite";
/** @internal */
class None {
  constructor() {
    this[_a] = FiberIdTypeId;
    this._tag = OP_NONE;
  }
  [(_a = FiberIdTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this._tag))(Hash_hash(FiberIdSymbolKey));
  }
  [Equal_symbol](that) {
    return isFiberId(that) && that._tag === OP_NONE;
  }
}
/** @internal */
class Runtime {
  constructor(id, startTimeMillis) {
    this.id = id;
    this.startTimeMillis = startTimeMillis;
    this[_b] = FiberIdTypeId;
    this._tag = OP_RUNTIME;
  }
  [(_b = FiberIdTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.startTimeMillis))(combine(Hash_hash(this.id))(combine(Hash_hash(this._tag))(Hash_hash(FiberIdSymbolKey))));
  }
  [Equal_symbol](that) {
    return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
  }
}
/** @internal */
class Composite {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this[_c] = FiberIdTypeId;
    this._tag = OP_COMPOSITE;
  }
  [(_c = FiberIdTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.right))(combine(Hash_hash(this.left))(combine(Hash_hash(this._tag))(Hash_hash(FiberIdSymbolKey))));
  }
  [Equal_symbol](that) {
    return isFiberId(that) && that._tag === OP_COMPOSITE && equals(this.left, that.left) && equals(this.right, that.right);
  }
}
/** @internal */
const fiberId_none = /*#__PURE__*/new None();
/** @internal */
const runtime = (id, startTimeMillis) => {
  return new Runtime(id, startTimeMillis);
};
/** @internal */
const composite = (left, right) => {
  return new Composite(left, right);
};
/** @internal */
const isFiberId = self => {
  return typeof self === "object" && self != null && FiberIdTypeId in self;
};
/** @internal */
const fiberId_isNone = self => {
  return self._tag === OP_NONE || mjs_HashSet_every(id => fiberId_isNone(id))(toSet(self));
};
/** @internal */
const isRuntime = self => {
  return self._tag === OP_RUNTIME;
};
/** @internal */
const isComposite = self => {
  return self._tag === OP_COMPOSITE;
};
/** @internal */
const fiberId_combine = /*#__PURE__*/dual(2, (self, that) => {
  if (self._tag === OP_NONE) {
    return that;
  }
  if (that._tag === OP_NONE) {
    return self;
  }
  return new Composite(self, that);
});
/** @internal */
const combineAll = fiberIds => {
  return mjs_HashSet_reduce(fiberId_none, (a, b) => fiberId_combine(b)(a))(fiberIds);
};
/** @internal */
const fiberId_getOrElse = /*#__PURE__*/dual(2, (self, that) => fiberId_isNone(self) ? that : self);
/** @internal */
const ids = self => {
  switch (self._tag) {
    case OP_NONE:
      {
        return mjs_HashSet_empty();
      }
    case OP_RUNTIME:
      {
        return mjs_HashSet_make(self.id);
      }
    case OP_COMPOSITE:
      {
        return mjs_HashSet_union(ids(self.right))(ids(self.left));
      }
  }
};
const _fiberCounter = /*#__PURE__*/MutableRef_make(0);
/** @internal */
const fiberId_make = (id, startTimeSeconds) => {
  return new Runtime(id, startTimeSeconds);
};
/** @internal */
const threadName = self => {
  const identifiers = Array.from(ids(self)).map(n => `#${n}`).join(",");
  return identifiers;
};
/** @internal */
const toOption = self => {
  const fiberIds = toSet(self);
  if (mjs_HashSet_size(fiberIds) === 0) {
    return Option_none();
  }
  let first = true;
  let acc;
  for (const fiberId of fiberIds) {
    if (first) {
      acc = fiberId;
      first = false;
    } else {
      // @ts-expect-error
      acc = fiberId_combine(fiberId)(acc);
    }
  }
  // @ts-expect-error
  return Option_some(acc);
};
/** @internal */
const toSet = self => {
  switch (self._tag) {
    case OP_NONE:
      {
        return mjs_HashSet_empty();
      }
    case OP_RUNTIME:
      {
        return mjs_HashSet_make(self);
      }
    case OP_COMPOSITE:
      {
        return mjs_HashSet_union(toSet(self.right))(toSet(self.left));
      }
  }
};
/** @internal */
const unsafeMake = () => {
  const id = MutableRef_get(_fiberCounter);
  MutableRef_set(id + 1)(_fiberCounter);
  return new Runtime(id, new Date().getTime());
};
//# sourceMappingURL=fiberId.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Fiber/Id.mjs
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category symbols
 */
const Id_FiberIdTypeId = FiberIdTypeId;
/**
 * @since 1.0.0
 * @category constructors
 */
const Id_none = fiberId_none;
/**
 * @since 1.0.0
 * @category constructors
 */
const Id_runtime = runtime;
/**
 * @since 1.0.0
 * @category constructors
 */
const Id_composite = composite;
/**
 * Returns `true` if the specified unknown value is a `FiberId`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Id_isFiberId = isFiberId;
/**
 * Returns `true` if the `FiberId` is a `None`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Id_isNone = fiberId_isNone;
/**
 * Returns `true` if the `FiberId` is a `Runtime`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Id_isRuntime = isRuntime;
/**
 * Returns `true` if the `FiberId` is a `Composite`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Id_isComposite = isComposite;
/**
 * Combine two `FiberId`s.
 *
 * @since 1.0.0
 * @category constructors
 */
const Id_combine = fiberId_combine;
/**
 * Combines a set of `FiberId`s into a single `FiberId`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Id_combineAll = combineAll;
/**
 * Returns this `FiberId` if it is not `None`, otherwise returns that `FiberId`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Id_getOrElse = fiberId_getOrElse;
/**
 * Get the set of identifiers for this `FiberId`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Id_ids = ids;
/**
 * Creates a new `FiberId`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Id_make = fiberId_make;
/**
 * Creates a string representing the name of the current thread of execution
 * represented by the specified `FiberId`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Id_threadName = threadName;
/**
 * Convert a `FiberId` into an `Option<FiberId>`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Id_toOption = toOption;
/**
 * Convert a `FiberId` into a `HashSet<FiberId>`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Id_toSet = toSet;
/**
 * Unsafely creates a new `FiberId`.
 *
 * @since 1.0.0
 * @category unsafe
 */
const Id_unsafeMake = unsafeMake;
//# sourceMappingURL=Id.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/opCodes/cause.mjs
/** @internal */
const OP_DIE = "Die";
/** @internal */
const OP_EMPTY = "Empty";
/** @internal */
const cause_OP_FAIL = "Fail";
/** @internal */
const OP_INTERRUPT = "Interrupt";
/** @internal */
const OP_ANNOTATED = "Annotated";
/** @internal */
const OP_PARALLEL = "Parallel";
/** @internal */
const OP_SEQUENTIAL = "Sequential";
//# sourceMappingURL=cause.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/cause.mjs
var cause_a;










// -----------------------------------------------------------------------------
// Models
// -----------------------------------------------------------------------------
/** @internal */
const CauseSymbolKey = "@effect/io/Cause";
/** @internal */
const CauseTypeId = /*#__PURE__*/Symbol.for(CauseSymbolKey);
/** @internal */
const variance = {
  _E: _ => _
};
/** @internal */
const cause_proto = {
  [CauseTypeId]: variance,
  [Hash_symbol]() {
    return combine(Hash_hash(flattenCause(this)))(Hash_hash(CauseSymbolKey));
  },
  [Equal_symbol](that) {
    return isCause(that) && causeEquals(this, that);
  }
};
// -----------------------------------------------------------------------------
// Constructors
// -----------------------------------------------------------------------------
/** @internal */
const cause_empty = /*#__PURE__*/(() => {
  const o = /*#__PURE__*/Object.create(cause_proto);
  o._tag = OP_EMPTY;
  return o;
})();
/** @internal */
const cause_fail = error => {
  const o = Object.create(cause_proto);
  o._tag = cause_OP_FAIL;
  o.error = error;
  return o;
};
/** @internal */
const die = defect => {
  const o = Object.create(cause_proto);
  o._tag = OP_DIE;
  o.defect = defect;
  return o;
};
/** @internal */
const interrupt = fiberId => {
  const o = Object.create(cause_proto);
  o._tag = OP_INTERRUPT;
  o.fiberId = fiberId;
  return o;
};
/** @internal */
const annotated = (cause, annotation) => {
  const o = Object.create(cause_proto);
  o._tag = OP_ANNOTATED;
  o.cause = cause;
  o.annotation = annotation;
  return o;
};
/** @internal */
const parallel = (left, right) => {
  const o = Object.create(cause_proto);
  o._tag = OP_PARALLEL;
  o.left = left;
  o.right = right;
  return o;
};
/** @internal */
const sequential = (left, right) => {
  const o = Object.create(cause_proto);
  o._tag = OP_SEQUENTIAL;
  o.left = left;
  o.right = right;
  return o;
};
// -----------------------------------------------------------------------------
// Refinements
// -----------------------------------------------------------------------------
/** @internal */
const isCause = u => typeof u === "object" && u != null && CauseTypeId in u;
/** @internal */
const isEmptyType = self => self._tag === OP_EMPTY;
/** @internal */
const isFailType = self => self._tag === cause_OP_FAIL;
/** @internal */
const isDieType = self => self._tag === OP_DIE;
/** @internal */
const isInterruptType = self => self._tag === OP_INTERRUPT;
/** @internal */
const isAnnotatedType = self => self._tag === OP_ANNOTATED;
/** @internal */
const isSequentialType = self => self._tag === OP_SEQUENTIAL;
/** @internal */
const isParallelType = self => self._tag === OP_PARALLEL;
// -----------------------------------------------------------------------------
// Getters
// -----------------------------------------------------------------------------
/** @internal */
const cause_size = self => cause_reduceWithContext(self, void 0, SizeCauseReducer);
/** @internal */
const cause_isEmpty = self => {
  if (self._tag === OP_EMPTY) {
    return true;
  }
  return cause_reduce(self, true, (acc, cause) => {
    switch (cause._tag) {
      case OP_EMPTY:
        {
          return Option_some(acc);
        }
      case OP_DIE:
      case cause_OP_FAIL:
      case OP_INTERRUPT:
        {
          return Option_some(false);
        }
      default:
        {
          return Option_none();
        }
    }
  });
};
/** @internal */
const isFailure = self => Option_isSome(failureOption(self));
/** @internal */
const isDie = self => Option_isSome(dieOption(self));
/** @internal */
const isInterrupted = self => Option_isSome(interruptOption(self));
/** @internal */
const isInterruptedOnly = self => cause_reduceWithContext(undefined, IsInterruptedOnlyCauseReducer)(self);
/** @internal */
const failures = self => Chunk_reverse(cause_reduce(self, Chunk_empty(), (list, cause) => cause._tag === cause_OP_FAIL ? Option_some(Chunk_prepend(cause.error)(list)) : Option_none()));
/** @internal */
const defects = self => Chunk_reverse(cause_reduce(self, Chunk_empty(), (list, cause) => cause._tag === OP_DIE ? Option_some(Chunk_prepend(cause.defect)(list)) : Option_none()));
/** @internal */
const interruptors = self => cause_reduce(self, mjs_HashSet_empty(), (set, cause) => cause._tag === OP_INTERRUPT ? Option_some(HashSet_add(cause.fiberId)(set)) : Option_none());
/** @internal */
const failureOption = self => find(self, cause => cause._tag === cause_OP_FAIL ? Option_some(cause.error) : Option_none());
/** @internal */
const failureOrCause = self => {
  const option = failureOption(self);
  switch (option._tag) {
    case "None":
      {
        // no `E` inside this `Cause`, so it can be safely cast to `never`
        return Either_right(self);
      }
    case "Some":
      {
        return Either_left(option.value);
      }
  }
};
/** @internal */
const dieOption = self => find(self, cause => cause._tag === OP_DIE ? Option_some(cause.defect) : Option_none());
/** @internal */
const flipCauseOption = self => cause_match(self, Option_some(cause_empty), failureOption => Option_map(cause_fail)(failureOption), defect => Option_some(die(defect)), fiberId => Option_some(interrupt(fiberId)), (causeOption, annotation) => Option_map(cause => annotated(cause, annotation))(causeOption), (left, right) => {
  if (Option_isSome(left) && Option_isSome(right)) {
    return Option_some(sequential(left.value, right.value));
  }
  if (Option_isNone(left) && Option_isSome(right)) {
    return Option_some(right.value);
  }
  if (Option_isSome(left) && Option_isNone(right)) {
    return Option_some(left.value);
  }
  return Option_none();
}, (left, right) => {
  if (Option_isSome(left) && Option_isSome(right)) {
    return Option_some(parallel(left.value, right.value));
  }
  if (Option_isNone(left) && Option_isSome(right)) {
    return Option_some(right.value);
  }
  if (Option_isSome(left) && Option_isNone(right)) {
    return Option_some(left.value);
  }
  return Option_none();
});
/** @internal */
const interruptOption = self => find(self, cause => cause._tag === OP_INTERRUPT ? Option_some(cause.fiberId) : Option_none());
/** @internal */
const keepDefects = self => cause_match(self, Option_none(), () => Option_none(), defect => Option_some(die(defect)), () => Option_none(), (option, annotation) => Option_map(cause => annotated(cause, annotation))(option), (left, right) => {
  if (Option_isSome(left) && Option_isSome(right)) {
    return Option_some(sequential(left.value, right.value));
  }
  if (Option_isSome(left) && Option_isNone(right)) {
    return Option_some(left.value);
  }
  if (Option_isNone(left) && Option_isSome(right)) {
    return Option_some(right.value);
  }
  return Option_none();
}, (left, right) => {
  if (Option_isSome(left) && Option_isSome(right)) {
    return Option_some(parallel(left.value, right.value));
  }
  if (Option_isSome(left) && Option_isNone(right)) {
    return Option_some(left.value);
  }
  if (Option_isNone(left) && Option_isSome(right)) {
    return Option_some(right.value);
  }
  return Option_none();
});
/** @internal */
const linearize = self => cause_match(self, mjs_HashSet_empty(), error => mjs_HashSet_make(cause_fail(error)), defect => mjs_HashSet_make(die(defect)), fiberId => mjs_HashSet_make(interrupt(fiberId)), (set, annotation) => mjs_HashSet_map(cause => annotated(cause, annotation))(set), (leftSet, rightSet) => mjs_HashSet_flatMap(leftCause => mjs_HashSet_map(rightCause => sequential(leftCause, rightCause))(rightSet))(leftSet), (leftSet, rightSet) => mjs_HashSet_flatMap(leftCause => mjs_HashSet_map(rightCause => parallel(leftCause, rightCause))(rightSet))(leftSet));
/** @internal */
const stripFailures = self => cause_match(self, cause_empty, () => cause_empty, defect => die(defect), fiberId => interrupt(fiberId), (cause, annotation) => isEmptyType(cause) ? cause : annotated(cause, annotation), (left, right) => sequential(left, right), (left, right) => parallel(left, right));
/** @internal */
const stripSomeDefects = /*#__PURE__*/dual(2, (self, pf) => {
  return cause_match(self, Option_some(cause_empty), error => Option_some(cause_fail(error)), defect => {
    const option = pf(defect);
    return Option_isSome(option) ? Option_none() : Option_some(die(defect));
  }, fiberId => Option_some(interrupt(fiberId)), (option, annotation) => Option_map(cause => annotated(cause, annotation))(option), (left, right) => {
    if (Option_isSome(left) && Option_isSome(right)) {
      return Option_some(sequential(left.value, right.value));
    }
    if (Option_isSome(left) && Option_isNone(right)) {
      return Option_some(left.value);
    }
    if (Option_isNone(left) && Option_isSome(right)) {
      return Option_some(right.value);
    }
    return Option_none();
  }, (left, right) => {
    if (Option_isSome(left) && Option_isSome(right)) {
      return Option_some(parallel(left.value, right.value));
    }
    if (Option_isSome(left) && Option_isNone(right)) {
      return Option_some(left.value);
    }
    if (Option_isNone(left) && Option_isSome(right)) {
      return Option_some(right.value);
    }
    return Option_none();
  });
});
// -----------------------------------------------------------------------------
// Mapping
// -----------------------------------------------------------------------------
/** @internal */
const cause_as = /*#__PURE__*/dual(2, (self, error) => cause_map(self, () => error));
/** @internal */
const cause_map = /*#__PURE__*/dual(2, (self, f) => cause_flatMap(self, e => cause_fail(f(e))));
// -----------------------------------------------------------------------------
// Sequencing
// -----------------------------------------------------------------------------
/** @internal */
const cause_flatMap = /*#__PURE__*/dual(2, (self, f) => cause_match(self, cause_empty, error => f(error), defect => die(defect), fiberId => interrupt(fiberId), (cause, annotation) => annotated(cause, annotation), (left, right) => sequential(left, right), (left, right) => parallel(left, right)));
/** @internal */
const cause_flatten = self => cause_flatMap(self, Function_identity);
// -----------------------------------------------------------------------------
// Equality
// -----------------------------------------------------------------------------
/** @internal */
const cause_contains = /*#__PURE__*/dual(2, (self, that) => {
  if (that._tag === OP_EMPTY || self === that) {
    return true;
  }
  return cause_reduce(self, false, (accumulator, cause) => {
    return Option_some(accumulator || causeEquals(cause, that));
  });
});
/** @internal */
const causeEquals = (left, right) => {
  let leftStack = Chunk_of(left);
  let rightStack = Chunk_of(right);
  while (Chunk_isNonEmpty(leftStack) && Chunk_isNonEmpty(rightStack)) {
    const [leftParallel, leftSequential] = cause_reduce([mjs_HashSet_empty(), Chunk_empty()], ([parallel, sequential], cause) => {
      const [par, seq] = evaluateCause(cause);
      return Option_some([mjs_HashSet_union(par)(parallel), Chunk_concat(seq)(sequential)]);
    })(Chunk_headNonEmpty(leftStack));
    const [rightParallel, rightSequential] = cause_reduce([mjs_HashSet_empty(), Chunk_empty()], ([parallel, sequential], cause) => {
      const [par, seq] = evaluateCause(cause);
      return Option_some([mjs_HashSet_union(par)(parallel), Chunk_concat(seq)(sequential)]);
    })(Chunk_headNonEmpty(rightStack));
    if (!equals(leftParallel, rightParallel)) {
      return false;
    }
    leftStack = leftSequential;
    rightStack = rightSequential;
  }
  return true;
};
// -----------------------------------------------------------------------------
// Flattening
// -----------------------------------------------------------------------------
/**
 * Flattens a cause to a sequence of sets of causes, where each set represents
 * causes that fail in parallel and sequential sets represent causes that fail
 * after each other.
 *
 * @internal
 */
const flattenCause = cause => {
  return flattenCauseLoop(Chunk_of(cause), Chunk_empty());
};
/** @internal */
const flattenCauseLoop = (causes, flattened) => {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const [parallel, sequential] = Chunk_reduce([mjs_HashSet_empty(), Chunk_empty()], ([parallel, sequential], cause) => {
      const [par, seq] = evaluateCause(cause);
      return [mjs_HashSet_union(par)(parallel), Chunk_concat(seq)(sequential)];
    })(causes);
    const updated = mjs_HashSet_size(parallel) > 0 ? Chunk_prepend(parallel)(flattened) : flattened;
    if (Chunk_isEmpty(sequential)) {
      return Chunk_reverse(updated);
    }
    causes = sequential;
    flattened = updated;
  }
  throw new Error("BUG: Cause.flattenCauseLoop - please report an issue at https://github.com/Effect-TS/io/issues");
};
// -----------------------------------------------------------------------------
// Squashing
// -----------------------------------------------------------------------------
/** @internal */
const squash = self => {
  return squashWith(Function_identity)(self);
};
/** @internal */
const squashWith = /*#__PURE__*/dual(2, (self, f) => {
  const option = Option_map(f)(failureOption(self));
  switch (option._tag) {
    case "None":
      {
        return Option_match(() => {
          const interrupts = Array.from(interruptors(self)).flatMap(fiberId => Array.from(Id_ids(fiberId)).map(id => `#${id}`));
          return InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0);
        }, Function_identity)(Chunk_head(defects(self)));
      }
    case "Some":
      {
        return option.value;
      }
  }
});
// -----------------------------------------------------------------------------
// Finding
// -----------------------------------------------------------------------------
/** @internal */
const find = /*#__PURE__*/dual(2, (self, pf) => {
  const stack = [self];
  while (stack.length > 0) {
    const item = stack.pop();
    const option = pf(item);
    switch (option._tag) {
      case "None":
        {
          switch (item._tag) {
            case OP_SEQUENTIAL:
            case OP_PARALLEL:
              {
                stack.push(item.right);
                stack.push(item.left);
                break;
              }
            case OP_ANNOTATED:
              {
                stack.push(item.cause);
                break;
              }
          }
          break;
        }
      case "Some":
        {
          return option;
        }
    }
  }
  return Option_none();
});
// -----------------------------------------------------------------------------
// Filtering
// -----------------------------------------------------------------------------
/** @internal */
const cause_filter = /*#__PURE__*/dual(2, (self, predicate) => cause_reduceWithContext(self, void 0, FilterCauseReducer(predicate)));
// -----------------------------------------------------------------------------
// Evaluation
// -----------------------------------------------------------------------------
/**
 * Takes one step in evaluating a cause, returning a set of causes that fail
 * in parallel and a list of causes that fail sequentially after those causes.
 *
 * @internal
 */
const evaluateCause = self => {
  let cause = self;
  const stack = [];
  let _parallel = mjs_HashSet_empty();
  let _sequential = Chunk_empty();
  while (cause !== undefined) {
    switch (cause._tag) {
      case OP_EMPTY:
        {
          if (stack.length === 0) {
            return [_parallel, _sequential];
          }
          cause = stack.pop();
          break;
        }
      case cause_OP_FAIL:
        {
          if (stack.length === 0) {
            return [HashSet_add(cause.error)(_parallel), _sequential];
          }
          _parallel = HashSet_add(cause.error)(_parallel);
          cause = stack.pop();
          break;
        }
      case OP_DIE:
        {
          if (stack.length === 0) {
            return [HashSet_add(cause.defect)(_parallel), _sequential];
          }
          _parallel = HashSet_add(cause.defect)(_parallel);
          cause = stack.pop();
          break;
        }
      case OP_INTERRUPT:
        {
          if (stack.length === 0) {
            return [HashSet_add(cause.fiberId)(_parallel), _sequential];
          }
          _parallel = HashSet_add(cause.fiberId)(_parallel);
          cause = stack.pop();
          break;
        }
      case OP_ANNOTATED:
        {
          cause = cause.cause;
          break;
        }
      case OP_SEQUENTIAL:
        {
          switch (cause.left._tag) {
            case OP_EMPTY:
              {
                cause = cause.right;
                break;
              }
            case OP_SEQUENTIAL:
              {
                cause = sequential(cause.left.left, sequential(cause.left.right, cause.right));
                break;
              }
            case OP_PARALLEL:
              {
                cause = parallel(sequential(cause.left.left, cause.right), sequential(cause.left.right, cause.right));
                break;
              }
            case OP_ANNOTATED:
              {
                cause = sequential(cause.left.cause, cause.right);
                break;
              }
            default:
              {
                _sequential = Chunk_prepend(cause.right)(_sequential);
                cause = cause.left;
                break;
              }
          }
          break;
        }
      case OP_PARALLEL:
        {
          stack.push(cause.right);
          cause = cause.left;
          break;
        }
    }
  }
  throw new Error("BUG: Cause.evaluateCauseLoop - please report an issue at https://github.com/Effect-TS/io/issues");
};
// -----------------------------------------------------------------------------
// Reducing
// -----------------------------------------------------------------------------
/** @internal */
const SizeCauseReducer = {
  emptyCase: () => 0,
  failCase: () => 1,
  dieCase: () => 1,
  interruptCase: () => 1,
  annotatedCase: (_, value) => value,
  sequentialCase: (_, left, right) => left + right,
  parallelCase: (_, left, right) => left + right
};
/** @internal */
const IsInterruptedOnlyCauseReducer = {
  emptyCase: Function_constTrue,
  failCase: Function_constFalse,
  dieCase: Function_constFalse,
  interruptCase: Function_constTrue,
  annotatedCase: (_, value) => value,
  sequentialCase: (_, left, right) => left && right,
  parallelCase: (_, left, right) => left && right
};
/** @internal */
const FilterCauseReducer = predicate => ({
  emptyCase: () => cause_empty,
  failCase: (_, error) => cause_fail(error),
  dieCase: (_, defect) => die(defect),
  interruptCase: (_, fiberId) => interrupt(fiberId),
  annotatedCase: (_, cause, annotation) => annotated(cause, annotation),
  sequentialCase: (_, left, right) => {
    if (predicate(left)) {
      if (predicate(right)) {
        return sequential(left, right);
      }
      return left;
    }
    if (predicate(right)) {
      return right;
    }
    return cause_empty;
  },
  parallelCase: (_, left, right) => {
    if (predicate(left)) {
      if (predicate(right)) {
        return parallel(left, right);
      }
      return left;
    }
    if (predicate(right)) {
      return right;
    }
    return cause_empty;
  }
});
const OP_SEQUENTIAL_CASE = "SequentialCase";
const OP_PARALLEL_CASE = "ParallelCase";
const OP_ANNOTATED_CASE = "AnnotatedCase";
/** @internal */
const cause_match = /*#__PURE__*/dual(8, (self, emptyCase, failCase, dieCase, interruptCase, annotatedCase, sequentialCase, parallelCase) => {
  return cause_reduceWithContext(self, void 0, {
    emptyCase: () => emptyCase,
    failCase: (_, error) => failCase(error),
    dieCase: (_, defect) => dieCase(defect),
    interruptCase: (_, fiberId) => interruptCase(fiberId),
    annotatedCase: (_, value, annotation) => annotatedCase(value, annotation),
    sequentialCase: (_, left, right) => sequentialCase(left, right),
    parallelCase: (_, left, right) => parallelCase(left, right)
  });
});
/** @internal */
const cause_reduce = /*#__PURE__*/dual(3, (self, zero, pf) => {
  let accumulator = zero;
  let cause = self;
  const causes = [];
  while (cause !== undefined) {
    const option = pf(accumulator, cause);
    accumulator = Option_isSome(option) ? option.value : accumulator;
    switch (cause._tag) {
      case OP_SEQUENTIAL:
        {
          causes.push(cause.right);
          cause = cause.left;
          break;
        }
      case OP_PARALLEL:
        {
          causes.push(cause.right);
          cause = cause.left;
          break;
        }
      case OP_ANNOTATED:
        {
          cause = cause.cause;
          break;
        }
      default:
        {
          cause = undefined;
          break;
        }
    }
    if (cause === undefined && causes.length > 0) {
      cause = causes.pop();
    }
  }
  return accumulator;
});
/** @internal */
const cause_reduceWithContext = /*#__PURE__*/dual(3, (self, context, reducer) => {
  const input = [self];
  const output = [];
  while (input.length > 0) {
    const cause = input.pop();
    switch (cause._tag) {
      case OP_EMPTY:
        {
          output.push(Either_right(reducer.emptyCase(context)));
          break;
        }
      case cause_OP_FAIL:
        {
          output.push(Either_right(reducer.failCase(context, cause.error)));
          break;
        }
      case OP_DIE:
        {
          output.push(Either_right(reducer.dieCase(context, cause.defect)));
          break;
        }
      case OP_INTERRUPT:
        {
          output.push(Either_right(reducer.interruptCase(context, cause.fiberId)));
          break;
        }
      case OP_ANNOTATED:
        {
          input.push(cause.cause);
          output.push(Either_left({
            _tag: OP_ANNOTATED_CASE,
            annotation: cause.annotation
          }));
          break;
        }
      case OP_SEQUENTIAL:
        {
          input.push(cause.right);
          input.push(cause.left);
          output.push(Either_left({
            _tag: OP_SEQUENTIAL_CASE
          }));
          break;
        }
      case OP_PARALLEL:
        {
          input.push(cause.right);
          input.push(cause.left);
          output.push(Either_left({
            _tag: OP_PARALLEL_CASE
          }));
          break;
        }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either = output.pop();
    switch (either._tag) {
      case "Left":
        {
          switch (either.left._tag) {
            case OP_SEQUENTIAL_CASE:
              {
                const left = accumulator.pop();
                const right = accumulator.pop();
                const value = reducer.sequentialCase(context, left, right);
                accumulator.push(value);
                break;
              }
            case OP_PARALLEL_CASE:
              {
                const left = accumulator.pop();
                const right = accumulator.pop();
                const value = reducer.parallelCase(context, left, right);
                accumulator.push(value);
                break;
              }
            case OP_ANNOTATED_CASE:
              {
                const cause = accumulator.pop();
                const value = reducer.annotatedCase(context, cause, either.left.annotation);
                accumulator.push(value);
                break;
              }
          }
          break;
        }
      case "Right":
        {
          accumulator.push(either.right);
          break;
        }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/io/issues");
  }
  return accumulator.pop();
});
// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------
const makeException = (proto, tag) => {
  const _tag = {
    value: tag,
    enumerable: true
  };
  const protoWithToString = {
    ...proto,
    toString: {
      value() {
        return `${this._tag}: ${this.message}`;
      },
      enumerable: false
    }
  };
  return message => Object.create(protoWithToString, {
    _tag,
    message: {
      value: message,
      enumerable: true
    }
  });
};
/** @internal */
const RuntimeExceptionTypeId = /*#__PURE__*/Symbol.for("@effect/io/Cause/errors/RuntimeException");
/** @internal */
const RuntimeException = /*#__PURE__*/makeException({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException");
/** @internal */
const isRuntimeException = u => {
  return typeof u === "object" && u != null && RuntimeExceptionTypeId in u;
};
/** @internal */
const InterruptedExceptionTypeId = /*#__PURE__*/Symbol.for("@effect/io/Cause/errors/InterruptedException");
/** @internal */
const InterruptedException = /*#__PURE__*/makeException({
  [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}, "InterruptedException");
/** @internal */
const isInterruptedException = u => {
  return typeof u === "object" && u != null && InterruptedExceptionTypeId in u;
};
/** @internal */
const IllegalArgumentExceptionTypeId = /*#__PURE__*/Symbol.for("@effect/io/Cause/errors/IllegalArgument");
/** @internal */
const IllegalArgumentException = /*#__PURE__*/makeException({
  [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}, "IllegalArgumentException");
/** @internal */
const isIllegalArgumentException = u => {
  return typeof u === "object" && u != null && IllegalArgumentExceptionTypeId in u;
};
/** @internal */
const NoSuchElementExceptionTypeId = /*#__PURE__*/Symbol.for("@effect/io/Cause/errors/NoSuchElement");
/** @internal */
const NoSuchElementException = /*#__PURE__*/makeException({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException");
/** @internal */
const isNoSuchElementException = u => {
  return typeof u === "object" && u != null && NoSuchElementExceptionTypeId in u;
};
/** @internal */
const InvalidHubCapacityExceptionTypeId = /*#__PURE__*/Symbol.for("@effect/io/Cause/errors/InvalidHubCapacityException");
/** @internal */
const InvalidHubCapacityException = /*#__PURE__*/makeException({
  [InvalidHubCapacityExceptionTypeId]: InvalidHubCapacityExceptionTypeId
}, "InvalidHubCapacityException");
/** @internal */
const isInvalidCapacityError = u => {
  return typeof u === "object" && u != null && InvalidHubCapacityExceptionTypeId in u;
};
// -----------------------------------------------------------------------------
// Stack Annotations
// -----------------------------------------------------------------------------
/** @internal */
const StackAnnotationTypeId = /*#__PURE__*/Symbol.for("@effect/io/Cause/StackAnnotation");
/** @internal */
class StackAnnotation {
  constructor(stack, seq) {
    this.stack = stack;
    this.seq = seq;
    this[cause_a] = StackAnnotationTypeId;
  }
}
cause_a = StackAnnotationTypeId;
/** @internal */
const isStackAnnotation = u => {
  return typeof u === "object" && u != null && StackAnnotationTypeId in u;
};
/** @internal */
const UnAnnotateCauseReducer = () => ({
  emptyCase: () => cause_empty,
  failCase: (_, error) => cause_fail(error),
  dieCase: (_, defect) => die(defect),
  interruptCase: (_, fiberId) => interrupt(fiberId),
  annotatedCase: (_, cause, __) => cause,
  sequentialCase: (_, left, right) => sequential(left, right),
  parallelCase: (_, left, right) => parallel(left, right)
});
/** @internal */
const unannotate = self => cause_reduceWithContext(self, void 0, UnAnnotateCauseReducer());
//# sourceMappingURL=cause.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/runtimeFlagsPatch.mjs

/** @internal */
const BIT_MASK = 0xff;
/** @internal */
const BIT_SHIFT = 0x08;
/** @internal */
const active = patch => patch & BIT_MASK;
/** @internal */
const enabled = patch => patch >> BIT_SHIFT & BIT_MASK;
/** @internal */
const runtimeFlagsPatch_make = (active, enabled) => (active & BIT_MASK) + ((enabled & active & BIT_MASK) << BIT_SHIFT);
/** @internal */
const runtimeFlagsPatch_empty = /*#__PURE__*/runtimeFlagsPatch_make(0, 0);
/** @internal */
const enable = flag => runtimeFlagsPatch_make(flag, flag);
/** @internal */
const disable = flag => runtimeFlagsPatch_make(flag, 0);
/** @internal */
const runtimeFlagsPatch_isEmpty = patch => patch === 0;
/** @internal */
const isActive = /*#__PURE__*/dual(2, (self, flag) => (active(self) & flag) !== 0);
/** @internal */
const isEnabled = /*#__PURE__*/dual(2, (self, flag) => (enabled(self) & flag) !== 0);
/** @internal */
const isDisabled = /*#__PURE__*/dual(2, (self, flag) => (active(self) & flag) !== 0 && (enabled(self) & flag) === 0);
/** @internal */
const exclude = /*#__PURE__*/dual(2, (self, flag) => runtimeFlagsPatch_make(active(self) & ~flag, enabled(self)));
/** @internal */
const both = /*#__PURE__*/dual(2, (self, that) => runtimeFlagsPatch_make(active(self) | active(that), enabled(self) & enabled(that)));
/** @internal */
const runtimeFlagsPatch_either = /*#__PURE__*/dual(2, (self, that) => runtimeFlagsPatch_make(active(self) | active(that), enabled(self) | enabled(that)));
/** @internal */
const runtimeFlagsPatch_andThen = /*#__PURE__*/dual(2, (self, that) => self | that);
/** @internal */
const inverse = patch => runtimeFlagsPatch_make(enabled(patch), invert(active(patch)));
/** @internal */
const invert = n => ~n >>> 0 & BIT_MASK;
//# sourceMappingURL=runtimeFlagsPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Differ/ChunkPatch.mjs





/** @internal */
const ChunkPatchTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Differ/ChunkPatch");
function ChunkPatch_variance(a) {
  return a;
}
class Empty {
  constructor() {
    this._tag = "Empty";
    this._Value = ChunkPatch_variance;
    this._Patch = ChunkPatch_variance;
    this._id = ChunkPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`ChunkPatch(Empty)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id;
  }
}
class AndThen {
  constructor(first, second) {
    this.first = first;
    this.second = second;
    this._tag = "AndThen";
    this._Value = ChunkPatch_variance;
    this._Patch = ChunkPatch_variance;
    this._id = ChunkPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`ChunkPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.first, that.first) && equals(this.second, that.second);
  }
}
class Append {
  constructor(values) {
    this.values = values;
    this._tag = "Append";
    this._Value = ChunkPatch_variance;
    this._Patch = ChunkPatch_variance;
    this._id = ChunkPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`ChunkPatch(Append)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.values, that.values);
  }
}
class Slice {
  constructor(from, until) {
    this.from = from;
    this.until = until;
    this._tag = "Slice";
    this._Value = ChunkPatch_variance;
    this._Patch = ChunkPatch_variance;
    this._id = ChunkPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`ChunkPatch(Slice)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.from, that.from) && equals(this.until, that.until);
  }
}
class Update {
  constructor(index, patch) {
    this.index = index;
    this.patch = patch;
    this._tag = "Update";
    this._Value = ChunkPatch_variance;
    this._Patch = ChunkPatch_variance;
    this._id = ChunkPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`ChunkPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.index, that.index) && equals(this.patch, that.patch);
  }
}
/** @internal */
const ChunkPatch_empty = () => new Empty();
/** @internal */
const diff = (oldValue, newValue, differ) => {
  let i = 0;
  let patch = ChunkPatch_empty();
  while (i < oldValue.length && i < newValue.length) {
    const oldElement = Chunk_unsafeGet(i)(oldValue);
    const newElement = Chunk_unsafeGet(i)(newValue);
    const valuePatch = differ.diff(oldElement, newElement);
    if (!equals(valuePatch, differ.empty)) {
      patch = Function_pipe(patch, ChunkPatch_combine(new Update(i, valuePatch)));
    }
    i = i + 1;
  }
  if (i < oldValue.length) {
    patch = Function_pipe(patch, ChunkPatch_combine(new Slice(0, i)));
  }
  if (i < newValue.length) {
    patch = Function_pipe(patch, ChunkPatch_combine(new Append(Chunk_drop(i)(newValue))));
  }
  return patch;
};
/** @internal */
const ChunkPatch_combine = /*#__PURE__*/Dual_dual(2, (self, that) => new AndThen(self, that));
/** @internal */
const patch = /*#__PURE__*/Dual_dual(3, (self, oldValue, differ) => {
  let chunk = oldValue;
  let patches = Chunk_of(self);
  while (Chunk_isNonEmpty(patches)) {
    const head = Chunk_headNonEmpty(patches);
    const tail = Chunk_tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk_prepend(head.first)(Chunk_prepend(head.second)(tail));
          break;
        }
      case "Append":
        {
          chunk = Chunk_concat(head.values)(chunk);
          patches = tail;
          break;
        }
      case "Slice":
        {
          const array = toReadonlyArray(chunk);
          chunk = unsafeFromArray(array.slice(head.from, head.until));
          patches = tail;
          break;
        }
      case "Update":
        {
          const array = toReadonlyArray(chunk);
          array[head.index] = differ.patch(head.patch, array[head.index]);
          chunk = unsafeFromArray(array);
          patches = tail;
          break;
        }
    }
  }
  return chunk;
});
//# sourceMappingURL=ChunkPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Differ/ChunkPatch.mjs
/**
 * @since 1.0.0
 */

const ChunkPatch_TypeId = ChunkPatchTypeId;
/**
 * Constructs an empty chunk patch.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_ChunkPatch_empty = ChunkPatch_empty;
/**
 * Constructs a chunk patch from a new and old chunk of values and a differ
 * for the values.
 *
 * @since 1.0.0
 * @category constructors
 */
const ChunkPatch_diff = diff;
/**
 * Combines two chunk patches to produce a new chunk patch that describes
 * applying their changes sequentially.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_ChunkPatch_combine = ChunkPatch_combine;
/**
 * Applies a chunk patch to a chunk of values to produce a new chunk of
 * values which represents the original chunk of values updated with the
 * changes described by this patch.
 *
 * @since 1.0.0
 * @category destructors
 */
const ChunkPatch_patch = patch;
//# sourceMappingURL=ChunkPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Context.mjs




/** @internal */
const TagTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Context/Tag");
/** @internal */
class TagImpl {
  constructor(key) {
    this.key = key;
    this._id = TagTypeId;
    this._S = _ => _;
    if (key) {
      if (!(TagTypeId in globalThis)) {
        globalThis[TagTypeId] = {};
      }
      if (!(key in globalThis[TagTypeId])) {
        globalThis[TagTypeId][key] = this;
      }
      return globalThis[TagTypeId][key];
    }
  }
}
/** @internal */
const ContextTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Context");
/** @internal */
class ContextImpl {
  [Equal_symbol](that) {
    if (isContext(that)) {
      if (this.unsafeMap.size === that.unsafeMap.size) {
        for (const k of this.unsafeMap.keys()) {
          if (!that.unsafeMap.has(k) || !equals(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  }
  [Hash_symbol]() {
    return Hash_number(this.unsafeMap.size);
  }
  constructor(unsafeMap) {
    this.unsafeMap = unsafeMap;
    this._id = ContextTypeId;
    this._S = _ => _;
  }
}
/** @internal */
const isContext = u => typeof u === "object" && u !== null && "_id" in u && u["_id"] === ContextTypeId;
/** @internal */
const isTag = u => typeof u === "object" && u !== null && "_id" in u && u["_id"] === TagTypeId;
/** @internal */
const Context_empty = () => new ContextImpl(new Map());
/** @internal */
const Context_make = (tag, service) => new ContextImpl(new Map([[tag, service]]));
/** @internal */
const Context_add = /*#__PURE__*/Dual_dual(3, (self, tag, service) => {
  const map = new Map(self.unsafeMap);
  map.set(tag, service);
  return new ContextImpl(map);
});
/** @internal */
const Context_get = /*#__PURE__*/Dual_dual(2, (self, tag) => {
  if (!self.unsafeMap.has(tag)) {
    throw new Error("Service not found");
  }
  return self.unsafeMap.get(tag);
});
/** @internal */
const Context_unsafeGet = /*#__PURE__*/Dual_dual(2, (self, tag) => {
  if (!self.unsafeMap.has(tag)) {
    throw new Error("Service not found");
  }
  return self.unsafeMap.get(tag);
});
/** @internal */
const getOption = /*#__PURE__*/Dual_dual(2, (self, tag) => {
  if (!self.unsafeMap.has(tag)) {
    return Option_none();
  }
  return Option_some(self.unsafeMap.get(tag));
});
/** @internal */
const Context_merge = /*#__PURE__*/Dual_dual(2, (self, that) => {
  const map = new Map(self.unsafeMap);
  for (const [tag, s] of that.unsafeMap) {
    map.set(tag, s);
  }
  return new ContextImpl(map);
});
/** @internal */
const prune = (...tags) => self => {
  const tagSet = new Set(tags);
  const newEnv = new Map();
  for (const [tag, s] of self.unsafeMap.entries()) {
    if (tagSet.has(tag)) {
      newEnv.set(tag, s);
    }
  }
  return new ContextImpl(newEnv);
};
//# sourceMappingURL=Context.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Differ/ContextPatch.mjs





/** @internal */
const ContextPatchTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Differ/ContextPatch");
function ContextPatch_variance(a) {
  return a;
}
/** @internal */
class ContextPatch_Empty {
  constructor() {
    this._tag = "Empty";
    this._Input = ContextPatch_variance;
    this._Output = ContextPatch_variance;
    this._id = ContextPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`ContextPatch(Empty)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id;
  }
}
/** @internal */
class ContextPatch_AndThen {
  constructor(first, second) {
    this.first = first;
    this.second = second;
    this._tag = "AndThen";
    this._id = ContextPatchTypeId;
    this._Input = ContextPatch_variance;
    this._Output = ContextPatch_variance;
  }
  [Hash_symbol]() {
    return Hash_string(`ContextPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.first, that.first) && equals(this.second, that.second);
  }
}
/** @internal */
class AddService {
  constructor(tag, service) {
    this.tag = tag;
    this.service = service;
    this._tag = "AddService";
    this._id = ContextPatchTypeId;
    this._Input = ContextPatch_variance;
    this._Output = ContextPatch_variance;
  }
  [Hash_symbol]() {
    return Hash_string(`ContextPatch(AddService)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.tag, that.tag) && equals(this.service, that.service);
  }
}
/** @internal */
class RemoveService {
  constructor(tag) {
    this.tag = tag;
    this._tag = "RemoveService";
    this._id = ContextPatchTypeId;
    this._Input = ContextPatch_variance;
    this._Output = ContextPatch_variance;
  }
  [Hash_symbol]() {
    return Hash_string(`ContextPatch(RemoveService)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.tag, that.tag);
  }
}
/** @internal */
class UpdateService {
  constructor(tag, update) {
    this.tag = tag;
    this.update = update;
    this._tag = "UpdateService";
    this._id = ContextPatchTypeId;
    this._Input = ContextPatch_variance;
    this._Output = ContextPatch_variance;
  }
  [Hash_symbol]() {
    return Hash_string(`ContextPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.tag, that.tag) && equals(this.update, that.update);
  }
}
/** @internal */
const ContextPatch_empty = () => new ContextPatch_Empty();
/** @internal */
const ContextPatch_diff = (oldValue, newValue) => {
  const missingServices = new Map(oldValue.unsafeMap);
  let patch = ContextPatch_empty();
  for (const [tag, newService] of newValue.unsafeMap.entries()) {
    if (missingServices.has(tag)) {
      const old = missingServices.get(tag);
      missingServices.delete(tag);
      if (!equals(old, newService)) {
        patch = ContextPatch_combine(new UpdateService(tag, () => newService))(patch);
      }
    } else {
      missingServices.delete(tag);
      patch = ContextPatch_combine(new AddService(tag, newService))(patch);
    }
  }
  for (const [tag] of missingServices.entries()) {
    patch = ContextPatch_combine(new RemoveService(tag))(patch);
  }
  return patch;
};
/** @internal */
const ContextPatch_combine = /*#__PURE__*/Dual_dual(2, (self, that) => new ContextPatch_AndThen(self, that));
/** @internal */
const ContextPatch_patch = /*#__PURE__*/Dual_dual(2, (self, context) => {
  let wasServiceUpdated = false;
  let patches = Chunk_of(self);
  const updatedContext = new Map(context.unsafeMap);
  while (Chunk_isNonEmpty(patches)) {
    const head = Chunk_headNonEmpty(patches);
    const tail = Chunk_tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AddService":
        {
          updatedContext.set(head.tag, head.service);
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk_prepend(head.first)(Chunk_prepend(head.second)(tail));
          break;
        }
      case "RemoveService":
        {
          updatedContext.delete(head.tag);
          patches = tail;
          break;
        }
      case "UpdateService":
        {
          updatedContext.set(head.tag, head.update(updatedContext.get(head.tag)));
          wasServiceUpdated = true;
          patches = tail;
          break;
        }
    }
  }
  if (!wasServiceUpdated) {
    return new ContextImpl(updatedContext);
  }
  const map = new Map();
  for (const [tag] of context.unsafeMap) {
    if (updatedContext.has(tag)) {
      map.set(tag, updatedContext.get(tag));
      updatedContext.delete(tag);
    }
  }
  for (const [tag, s] of updatedContext) {
    map.set(tag, s);
  }
  return new ContextImpl(map);
});
//# sourceMappingURL=ContextPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Differ/ContextPatch.mjs
/**
 * @since 1.0.0
 */

const ContextPatch_TypeId = ContextPatchTypeId;
/**
 * An empty patch which returns the environment unchanged.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_ContextPatch_empty = ContextPatch_empty;
/**
 * @since 1.0.0
 * @category constructors
 */
const Differ_ContextPatch_diff = ContextPatch_diff;
/**
 * Combines two patches to produce a new patch that describes applying the
 * updates from this patch and then the updates from the specified patch.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_ContextPatch_combine = ContextPatch_combine;
/**
 * Applies a `Patch` to the specified `Context` to produce a new patched
 * `Context`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Differ_ContextPatch_patch = ContextPatch_patch;
//# sourceMappingURL=ContextPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/HashMap/keySet.mjs

/** @internal */
function keySet(self) {
  return new HashSetImpl(self);
}
//# sourceMappingURL=keySet.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/HashMap.mjs
/**
 * @since 1.0.0
 */


const HashMap_TypeId = HashMapTypeId;
/**
 * @since 1.0.0
 * @category refinements
 */
const HashMap_isHashMap = isHashMap;
/**
 * Creates a new `HashMap`.
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_HashMap_empty = HashMap_empty;
/**
 * Constructs a new `HashMap` from an array of key/value pairs.
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_HashMap_make = HashMap_make;
/**
 * Constructs a new `HashMap` from an iterable of key/value pairs.
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_HashMap_fromIterable = HashMap_fromIterable;
/**
 * Checks if the `HashMap` contains any entries.
 *
 * @since 1.0.0
 * @category elements
 */
const mjs_HashMap_isEmpty = HashMap_isEmpty;
/**
 * Safely lookup the value for the specified key in the `HashMap` using the
 * internal hashing function.
 *
 * @since 1.0.0
 * @category elements
 */
const mjs_HashMap_get = HashMap_get;
/**
 * Lookup the value for the specified key in the `HashMap` using a custom hash.
 *
 * @since 1.0.0
 * @category elements
 */
const HashMap_getHash = getHash;
/**
 * Unsafely lookup the value for the specified key in the `HashMap` using the
 * internal hashing function.
 *
 * @since 1.0.0
 * @category unsafe
 */
const mjs_HashMap_unsafeGet = HashMap_unsafeGet;
/**
 * Checks if the specified key has an entry in the `HashMap`.
 *
 * @since 1.0.0
 * @category elements
 */
const HashMap_has = has;
/**
 * Checks if the specified key has an entry in the `HashMap` using a custom
 * hash.
 *
 * @since 1.0.0
 * @category elements
 */
const HashMap_hasHash = hasHash;
/**
 * Sets the specified key to the specified value using the internal hashing
 * function.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_set = set;
/**
 * Returns an `IterableIterator` of the keys within the `HashMap`.
 *
 * @since 1.0.0
 * @category getters
 */
const HashMap_keys = keys;
/**
 * Returns a `HashSet` of keys within the `HashMap`.
 *
 * @since 1.0.0
 * @category getter
 */
const HashMap_keySet = keySet;
/**
 * Returns an `IterableIterator` of the values within the `HashMap`.
 *
 * @since 1.0.0
 * @category getters
 */
const HashMap_values = values;
/**
 * Returns the number of entries within the `HashMap`.
 *
 * @since 1.0.0
 * @category getters
 */
const mjs_HashMap_size = HashMap_size;
/**
 * Marks the `HashMap` as mutable.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_beginMutation = beginMutation;
/**
 * Marks the `HashMap` as immutable.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_endMutation = endMutation;
/**
 * Mutates the `HashMap` within the context of the provided function.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_mutate = mutate;
/**
 * Set or remove the specified key in the `HashMap` using the specified
 * update function. The value of the specified key will be computed using the
 * provided hash.
 *
 * The update function will be invoked with the current value of the key if it
 * exists, or `None` if no such value exists.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_modifyAt = modifyAt;
/**
 * Alter the value of the specified key in the `HashMap` using the specified
 * update function. The value of the specified key will be computed using the
 * provided hash.
 *
 * The update function will be invoked with the current value of the key if it
 * exists, or `None` if no such value exists.
 *
 * This function will always either update or insert a value into the `HashMap`.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_modifyHash = modifyHash;
/**
 * Updates the value of the specified key within the `HashMap` if it exists.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashMap_modify = HashMap_modify;
/**
 * Performs a union of this `HashMap` and that `HashMap`.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashMap_union = HashMap_union;
/**
 * Remove the entry for the specified key in the `HashMap` using the internal
 * hashing function.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_HashMap_remove = HashMap_remove;
/**
 * Removes all entries in the `HashMap` which have the specified keys.
 *
 * @since 1.0.0
 * @category mutations
 */
const HashMap_removeMany = removeMany;
/**
 * Maps over the values of the `HashMap` using the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const mjs_HashMap_map = HashMap_map;
/**
 * Maps over the entries of the `HashMap` using the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const mjs_HashMap_mapWithIndex = HashMap_mapWithIndex;
/**
 * Chains over the values of the `HashMap` using the specified function.
 *
 * **NOTE**: the hash and equal of both maps have to be the same.
 *
 * @since 1.0.0
 * @category sequencing
 */
const mjs_HashMap_flatMap = HashMap_flatMap;
/**
 * Chains over the entries of the `HashMap` using the specified function.
 *
 * **NOTE**: the hash and equal of both maps have to be the same.
 *
 * @since 1.0.0
 * @category sequencing
 */
const mjs_HashMap_flatMapWithIndex = HashMap_flatMapWithIndex;
/**
 * Applies the specified function to the values of the `HashMap`.
 *
 * @since 1.0.0
 * @category traversing
 */
const mjs_HashMap_forEach = HashMap_forEach;
/**
 * Applies the specified function to the entries of the `HashMap`.
 *
 * @since 1.0.0
 * @category traversing
 */
const HashMap_forEachWithIndex = forEachWithIndex;
/**
 * Reduces the specified state over the values of the `HashMap`.
 *
 * @since 1.0.0
 * @category folding
 */
const mjs_HashMap_reduce = HashMap_reduce;
/**
 * Reduces the specified state over the entries of the `HashMap`.
 *
 * @since 1.0.0
 * @category folding
 */
const mjs_HashMap_reduceWithIndex = HashMap_reduceWithIndex;
/**
 * Filters entries out of a `HashMap` using the specified predicate.
 *
 * @since 1.0.0
 * @category filtering
 */
const mjs_HashMap_filter = HashMap_filter;
/**
 * Filters entries out of a `HashMap` using the specified predicate.
 *
 * @since 1.0.0
 * @category filtering
 */
const mjs_HashMap_filterWithIndex = HashMap_filterWithIndex;
/**
 * Filters out `None` values from a `HashMap` of `Options`s.
 *
 * @since 1.0.0
 * @category filtering
 */
const mjs_HashMap_compact = HashMap_compact;
/**
 * Maps over the values of the `HashMap` using the specified partial function
 * and filters out `None` values.
 *
 * @since 1.0.0
 * @category filtering
 */
const mjs_HashMap_filterMap = HashMap_filterMap;
/**
 * Maps over the entries of the `HashMap` using the specified partial function
 * and filters out `None` values.
 *
 * @since 1.0.0
 * @category filtering
 */
const mjs_HashMap_filterMapWithIndex = HashMap_filterMapWithIndex;
//# sourceMappingURL=HashMap.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Differ/HashMapPatch.mjs





/** @internal */
const HashMapPatchTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Differ/HashMapPatch");
function HashMapPatch_variance(a) {
  return a;
}
class HashMapPatch_Empty {
  constructor() {
    this._tag = "Empty";
    this._Key = HashMapPatch_variance;
    this._Value = HashMapPatch_variance;
    this._Patch = HashMapPatch_variance;
    this._id = HashMapPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashMapPatch(Empty)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id;
  }
}
class HashMapPatch_AndThen {
  constructor(first, second) {
    this.first = first;
    this.second = second;
    this._tag = "AndThen";
    this._Key = HashMapPatch_variance;
    this._Value = HashMapPatch_variance;
    this._Patch = HashMapPatch_variance;
    this._id = HashMapPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashMapPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.first, that.first) && equals(this.second, that.second);
  }
}
class Add {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this._tag = "Add";
    this._Key = HashMapPatch_variance;
    this._Value = HashMapPatch_variance;
    this._Patch = HashMapPatch_variance;
    this._id = HashMapPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashMapPatch(Add)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.key, that.key) && equals(this.value, that.value);
  }
}
class Remove {
  constructor(key) {
    this.key = key;
    this._tag = "Remove";
    this._Key = HashMapPatch_variance;
    this._Value = HashMapPatch_variance;
    this._Patch = HashMapPatch_variance;
    this._id = HashMapPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashMapPatch(Remove)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.key, that.key);
  }
}
class HashMapPatch_Update {
  constructor(key, patch) {
    this.key = key;
    this.patch = patch;
    this._tag = "Update";
    this._Key = HashMapPatch_variance;
    this._Value = HashMapPatch_variance;
    this._Patch = HashMapPatch_variance;
    this._id = HashMapPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashMapPatch(Update)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.key, that.key) && equals(this.patch, that.patch);
  }
}
/** @internal */
const HashMapPatch_empty = () => new HashMapPatch_Empty();
/** @internal */
const HashMapPatch_diff = (oldValue, newValue, differ) => {
  const [removed, patch] = mjs_HashMap_reduceWithIndex([oldValue, HashMapPatch_empty()], ([map, patch], newValue, key) => {
    const option = mjs_HashMap_get(key)(map);
    switch (option._tag) {
      case "Some":
        {
          const valuePatch = differ.diff(option.value, newValue);
          if (equals(valuePatch, differ.empty)) {
            return [mjs_HashMap_remove(key)(map), patch];
          }
          return [mjs_HashMap_remove(key)(map), HashMapPatch_combine(new HashMapPatch_Update(key, valuePatch))(patch)];
        }
      case "None":
        {
          return [map, HashMapPatch_combine(new Add(key, newValue))(patch)];
        }
    }
  })(newValue);
  return mjs_HashMap_reduceWithIndex(patch, (patch, _, key) => HashMapPatch_combine(new Remove(key))(patch))(removed);
};
/** @internal */
const HashMapPatch_combine = /*#__PURE__*/Dual_dual(2, (self, that) => new HashMapPatch_AndThen(self, that));
/** @internal */
const HashMapPatch_patch = /*#__PURE__*/Dual_dual(3, (self, oldValue, differ) => {
  let map = oldValue;
  let patches = Chunk_of(self);
  while (Chunk_isNonEmpty(patches)) {
    const head = Chunk_headNonEmpty(patches);
    const tail = Chunk_tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk_prepend(head.first)(Chunk_prepend(head.second)(tail));
          break;
        }
      case "Add":
        {
          map = HashMap_set(head.key, head.value)(map);
          patches = tail;
          break;
        }
      case "Remove":
        {
          map = mjs_HashMap_remove(head.key)(map);
          patches = tail;
          break;
        }
      case "Update":
        {
          const option = mjs_HashMap_get(head.key)(map);
          if (option._tag === "Some") {
            map = HashMap_set(head.key, differ.patch(head.patch, option.value))(map);
          }
          patches = tail;
          break;
        }
    }
  }
  return map;
});
//# sourceMappingURL=HashMapPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Differ/HashMapPatch.mjs
/**
 * @since 1.0.0
 */

const HashMapPatch_TypeId = HashMapPatchTypeId;
/**
 * Constructs an empty map patch.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_HashMapPatch_empty = HashMapPatch_empty;
/**
 * Constructs a map patch from a new and old map of keys and values and a
 * differ for the values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_HashMapPatch_diff = HashMapPatch_diff;
/**
 * Combines two map patches to produce a new map patch that describes
 * applying their changes sequentially.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_HashMapPatch_combine = HashMapPatch_combine;
/**
 * Applies a map patch to a map of keys and values to produce a new map of
 * keys and values values which represents the original map of keys and
 * values updated with the changes described by this patch.
 *
 * @since 1.0.0
 * @category destructors
 */
const Differ_HashMapPatch_patch = HashMapPatch_patch;
//# sourceMappingURL=HashMapPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Differ/HashSetPatch.mjs





/** @internal */
const HashSetPatchTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Differ/HashSetPatch");
function HashSetPatch_variance(a) {
  return a;
}
class HashSetPatch_Empty {
  constructor() {
    this._tag = "Empty";
    this._Value = HashSetPatch_variance;
    this._id = HashSetPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashSetPatch(Empty)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id;
  }
}
class HashSetPatch_AndThen {
  constructor(first, second) {
    this.first = first;
    this.second = second;
    this._tag = "AndThen";
    this._Value = HashSetPatch_variance;
    this._id = HashSetPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashSetPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.first, that.first) && equals(this.second, that.second);
  }
}
class HashSetPatch_Add {
  constructor(value) {
    this.value = value;
    this._tag = "Add";
    this._Value = HashSetPatch_variance;
    this._id = HashSetPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashSetPatch(Add)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.value, that.value);
  }
}
class HashSetPatch_Remove {
  constructor(value) {
    this.value = value;
    this._tag = "Remove";
    this._Value = HashSetPatch_variance;
    this._id = HashSetPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`HashSetPatch(Remove)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.value, that.value);
  }
}
/** @internal */
const HashSetPatch_empty = () => new HashSetPatch_Empty();
/** @internal */
const HashSetPatch_diff = (oldValue, newValue) => {
  const [removed, patch] = mjs_HashSet_reduce([oldValue, HashSetPatch_empty()], ([set, patch], value) => {
    if (mjs_HashSet_has(value)(set)) {
      return [mjs_HashSet_remove(value)(set), patch];
    }
    return [set, HashSetPatch_combine(new HashSetPatch_Add(value))(patch)];
  })(newValue);
  return mjs_HashSet_reduce(patch, (patch, value) => HashSetPatch_combine(new HashSetPatch_Remove(value))(patch))(removed);
};
/** @internal */
const HashSetPatch_combine = /*#__PURE__*/Dual_dual(2, (self, that) => new HashSetPatch_AndThen(self, that));
/** @internal */
const HashSetPatch_patch = /*#__PURE__*/Dual_dual(2, (self, oldValue) => {
  let set = oldValue;
  let patches = Chunk_of(self);
  while (Chunk_isNonEmpty(patches)) {
    const head = Chunk_headNonEmpty(patches);
    const tail = Chunk_tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk_prepend(head.first)(Chunk_prepend(head.second)(tail));
          break;
        }
      case "Add":
        {
          set = HashSet_add(head.value)(set);
          patches = tail;
          break;
        }
      case "Remove":
        {
          set = mjs_HashSet_remove(head.value)(set);
          patches = tail;
        }
    }
  }
  return set;
});
//# sourceMappingURL=HashSetPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Differ/HashSetPatch.mjs
/**
 * @since 1.0.0
 */

const HashSetPatch_TypeId = HashSetPatchTypeId;
/**
 * Constructs an empty set patch.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_HashSetPatch_empty = HashSetPatch_empty;
/**
 * Constructs a set patch from a new set of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_HashSetPatch_diff = HashSetPatch_diff;
/**
 * Combines two set patches to produce a new set patch that describes
 * applying their changes sequentially.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_HashSetPatch_combine = HashSetPatch_combine;
/**
 * Applies a set patch to a set of values to produce a new set of values
 * which represents the original set of values updated with the changes
 * described by this patch.
 *
 * @since 1.0.0
 * @category destructors
 */
const Differ_HashSetPatch_patch = HashSetPatch_patch;
//# sourceMappingURL=HashSetPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Differ/OrPatch.mjs





/** @internal */
const OrPatchTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Differ/OrPatch");
function OrPatch_variance(a) {
  return a;
}
/** @internal */
class OrPatch_Empty {
  constructor() {
    this._tag = "Empty";
    this._Value = OrPatch_variance;
    this._Value2 = OrPatch_variance;
    this._Patch = OrPatch_variance;
    this._Patch2 = OrPatch_variance;
    this._id = OrPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`OrPatch(Empty)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id;
  }
}
/** @internal */
class OrPatch_AndThen {
  constructor(first, second) {
    this.first = first;
    this.second = second;
    this._tag = "AndThen";
    this._Value = OrPatch_variance;
    this._Value2 = OrPatch_variance;
    this._Patch = OrPatch_variance;
    this._Patch2 = OrPatch_variance;
    this._id = OrPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`OrPatch(AndThen)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.first, that.first) && equals(this.second, that.second);
  }
}
/** @internal */
class SetLeft {
  constructor(value) {
    this.value = value;
    this._tag = "SetLeft";
    this._Value = OrPatch_variance;
    this._Value2 = OrPatch_variance;
    this._Patch = OrPatch_variance;
    this._Patch2 = OrPatch_variance;
    this._id = OrPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`OrPatch(SetLeft)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.value, that.value);
  }
}
/** @internal */
class SetRight {
  constructor(value) {
    this.value = value;
    this._tag = "SetRight";
    this._Value = OrPatch_variance;
    this._Value2 = OrPatch_variance;
    this._Patch = OrPatch_variance;
    this._Patch2 = OrPatch_variance;
    this._id = OrPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`OrPatch(SetRight)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.value, that.value);
  }
}
/** @internal */
class UpdateLeft {
  constructor(patch) {
    this.patch = patch;
    this._tag = "UpdateLeft";
    this._Value = OrPatch_variance;
    this._Value2 = OrPatch_variance;
    this._Patch = OrPatch_variance;
    this._Patch2 = OrPatch_variance;
    this._id = OrPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`OrPatch(UpdateLeft)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.patch, that.patch);
  }
}
/** @internal */
class UpdateRight {
  constructor(patch) {
    this.patch = patch;
    this._tag = "UpdateRight";
    this._Value = OrPatch_variance;
    this._Value2 = OrPatch_variance;
    this._Patch = OrPatch_variance;
    this._Patch2 = OrPatch_variance;
    this._id = OrPatchTypeId;
  }
  [Hash_symbol]() {
    return Hash_string(`OrPatch(UpdateRight)`);
  }
  [Equal_symbol](that) {
    return typeof that === "object" && that !== null && "_id" in that && that["_id"] === this._id && "_tag" in that && that["_tag"] === this._id && equals(this.patch, that.patch);
  }
}
/** @internal */
const OrPatch_empty = () => new OrPatch_Empty();
/** @internal */
const OrPatch_diff = (oldValue, newValue, left, right) => {
  switch (oldValue._tag) {
    case "Left":
      {
        switch (newValue._tag) {
          case "Left":
            {
              const valuePatch = left.diff(oldValue.left, newValue.left);
              if (equals(valuePatch, left.empty)) {
                return new OrPatch_Empty();
              }
              return new UpdateLeft(valuePatch);
            }
          case "Right":
            {
              return new SetRight(newValue.right);
            }
        }
      }
    case "Right":
      {
        switch (newValue._tag) {
          case "Left":
            {
              return new SetLeft(newValue.left);
            }
          case "Right":
            {
              const valuePatch = right.diff(oldValue.right, newValue.right);
              if (equals(valuePatch, right.empty)) {
                return new OrPatch_Empty();
              }
              return new UpdateRight(valuePatch);
            }
        }
      }
  }
};
/** @internal */
const OrPatch_combine = /*#__PURE__*/Dual_dual(2, (self, that) => new OrPatch_AndThen(self, that));
/** @internal */
const OrPatch_patch = /*#__PURE__*/Dual_dual(4, (self, oldValue, left, right) => {
  let patches = Chunk_of(self);
  let result = oldValue;
  while (Chunk_isNonEmpty(patches)) {
    const head = Chunk_headNonEmpty(patches);
    const tail = Chunk_tailNonEmpty(patches);
    switch (head._tag) {
      case "Empty":
        {
          patches = tail;
          break;
        }
      case "AndThen":
        {
          patches = Chunk_prepend(head.first)(Chunk_prepend(head.second)(tail));
          break;
        }
      case "UpdateLeft":
        {
          if (result._tag === "Left") {
            result = Either_left(left.patch(head.patch, result.left));
          }
          patches = tail;
          break;
        }
      case "UpdateRight":
        {
          if (result._tag === "Right") {
            result = Either_right(right.patch(head.patch, result.right));
          }
          patches = tail;
          break;
        }
      case "SetLeft":
        {
          result = Either_left(head.value);
          patches = tail;
          break;
        }
      case "SetRight":
        {
          result = Either_right(head.value);
          patches = tail;
          break;
        }
    }
  }
  return result;
});
//# sourceMappingURL=OrPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Differ/OrPatch.mjs
/**
 * @since 1.0.0
 */

const OrPatch_TypeId = OrPatchTypeId;
/**
 * Constructs an empty `OrPatch`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_OrPatch_empty = OrPatch_empty;
/**
 * Constructs an `OrPatch` from a new and old value and a differ for the
 * values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_OrPatch_diff = OrPatch_diff;
/**
 * Combines two or patches to produce a new or patch that describes applying
 * their changes sequentially.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_OrPatch_combine = OrPatch_combine;
/**
 * Applies an `OrPatch` to a value to produce a new value which represents
 * the original value updated with the changes described by this patch.
 *
 * @since 1.0.0
 * @category destructors
 */
const Differ_OrPatch_patch = OrPatch_patch;
//# sourceMappingURL=OrPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/internal/Differ.mjs








/** @internal */
const DifferTypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Differ");
/** @internal */
class DifferImpl {
  constructor(params) {
    this._id = DifferTypeId;
    this._P = Function_identity;
    this._V = Function_identity;
    this.empty = params.empty;
    this.diff = params.diff;
    this.combine = params.combine;
    this.patch = params.patch;
  }
}
/** @internal */
const Differ_make = params => new DifferImpl(params);
/** @internal */
const environment = () => Differ_make({
  empty: Differ_ContextPatch_empty(),
  combine: (first, second) => Differ_ContextPatch_combine(second)(first),
  diff: (oldValue, newValue) => Differ_ContextPatch_diff(oldValue, newValue),
  patch: (patch, oldValue) => Differ_ContextPatch_patch(oldValue)(patch)
});
/** @internal */
const chunk = differ => Differ_make({
  empty: Differ_ChunkPatch_empty(),
  combine: (first, second) => Differ_ChunkPatch_combine(second)(first),
  diff: (oldValue, newValue) => ChunkPatch_diff(oldValue, newValue, differ),
  patch: (patch, oldValue) => ChunkPatch_patch(oldValue, differ)(patch)
});
/** @internal */
const hashMap = differ => Differ_make({
  empty: Differ_HashMapPatch_empty(),
  combine: (first, second) => Differ_HashMapPatch_combine(second)(first),
  diff: (oldValue, newValue) => Differ_HashMapPatch_diff(oldValue, newValue, differ),
  patch: (patch, oldValue) => Differ_HashMapPatch_patch(oldValue, differ)(patch)
});
/** @internal */
const hashSet = () => Differ_make({
  empty: Differ_HashSetPatch_empty(),
  combine: (first, second) => Differ_HashSetPatch_combine(second)(first),
  diff: (oldValue, newValue) => Differ_HashSetPatch_diff(oldValue, newValue),
  patch: (patch, oldValue) => Differ_HashSetPatch_patch(oldValue)(patch)
});
/** @internal */
const orElseResult = /*#__PURE__*/Dual_dual(2, (self, that) => Differ_make({
  empty: Differ_OrPatch_empty(),
  combine: (first, second) => Differ_OrPatch_combine(second)(first),
  diff: (oldValue, newValue) => Differ_OrPatch_diff(oldValue, newValue, self, that),
  patch: (patch, oldValue) => Differ_OrPatch_patch(oldValue, self, that)(patch)
}));
/** @internal */
const transform = /*#__PURE__*/Dual_dual(3, (self, f, g) => Differ_make({
  empty: self.empty,
  combine: (first, second) => self.combine(first, second),
  diff: (oldValue, newValue) => self.diff(g(oldValue), g(newValue)),
  patch: (patch, oldValue) => f(self.patch(patch, g(oldValue)))
}));
/** @internal */
const Differ_update = () => updateWith((_, a) => a);
/** @internal */
const updateWith = f => Differ_make({
  empty: Function_identity,
  combine: (first, second) => {
    if (first === Function_identity) {
      return second;
    }
    if (second === Function_identity) {
      return first;
    }
    return a => second(first(a));
  },
  diff: (oldValue, newValue) => {
    if (equals(oldValue, newValue)) {
      return Function_identity;
    }
    return constant(newValue);
  },
  patch: (patch, oldValue) => f(oldValue, patch(oldValue))
});
/** @internal */
const Differ_zip = /*#__PURE__*/Dual_dual(2, (self, that) => Differ_make({
  empty: [self.empty, that.empty],
  combine: (first, second) => [self.combine(first[0], second[0]), that.combine(first[1], second[1])],
  diff: (oldValue, newValue) => [self.diff(oldValue[0], newValue[0]), that.diff(oldValue[1], newValue[1])],
  patch: (patch, oldValue) => [self.patch(patch[0], oldValue[0]), that.patch(patch[1], oldValue[1])]
}));
//# sourceMappingURL=Differ.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Differ.mjs


const Differ_TypeId = DifferTypeId;
/**
 * An empty patch that describes no changes.
 *
 * @since 1.0.0
 * @category patch
 */
const Differ_empty = self => self.empty;
/**
 * An empty patch that describes no changes.
 *
 * @since 1.0.0
 * @category patch
 */
const Differ_diff = /*#__PURE__*/Dual_dual(3, (self, oldValue, newValue) => self.diff(oldValue, newValue));
/**
 * Combines two patches to produce a new patch that describes the updates of
 * the first patch and then the updates of the second patch. The combine
 * operation should be associative. In addition, if the combine operation is
 * commutative then joining multiple fibers concurrently will result in
 * deterministic `FiberRef` values.
 *
 * @since 1.0.0
 * @category patch
 */
const Differ_combine = /*#__PURE__*/Dual_dual(3, (self, first, second) => self.combine(first, second));
/**
 * Applies a patch to an old value to produce a new value that is equal to the
 * old value with the updates described by the patch.
 *
 * @since 1.0.0
 * @category patch
 */
const Differ_patch = /*#__PURE__*/Dual_dual(3, (self, patch, oldValue) => self.patch(patch, oldValue));
/**
 * Constructs a new `Differ`.
 *
 * @since 1.0.0
 * @category constructors
 */
const mjs_Differ_make = Differ_make;
/**
 * Constructs a differ that knows how to diff `Env` values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_environment = environment;
/**
 * Constructs a differ that knows how to diff a `Chunk` of values given a
 * differ that knows how to diff the values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_chunk = chunk;
/**
 * Constructs a differ that knows how to diff a `HashMap` of keys and values given
 * a differ that knows how to diff the values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_hashMap = hashMap;
/**
 * Constructs a differ that knows how to diff a `HashSet` of values.
 *
 * @since 1.0.0
 * @category constructors
 */
const Differ_hashSet = hashSet;
/**
 * Combines this differ and the specified differ to produce a differ that
 * knows how to diff the sum of their values.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_orElseResult = orElseResult;
/**
 * Transforms the type of values that this differ knows how to differ using
 * the specified functions that map the new and old value types to each other.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_transform = transform;
/**
 * Constructs a differ that just diffs two values by returning a function that
 * sets the value to the new value. This differ does not support combining
 * multiple updates to the value compositionally and should only be used when
 * there is no compositional way to update them.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_Differ_update = Differ_update;
/**
 * A variant of `update` that allows specifying the function that will be used
 * to combine old values with new values.
 *
 * @since 1.0.0
 * @category mutations
 */
const Differ_updateWith = updateWith;
/**
 * Combines this differ and the specified differ to produce a new differ that
 * knows how to diff the product of their values.
 *
 * @since 1.0.0
 * @category mutations
 */
const mjs_Differ_zip = Differ_zip;
//# sourceMappingURL=Differ.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/runtimeFlags.mjs



/** @internal */
const runtimeFlags_None = 0;
/** @internal */
const Interruption = 1 << 0;
/** @internal */
const OpSupervision = 1 << 1;
/** @internal */
const RuntimeMetrics = 1 << 2;
/** @internal */
const WindDown = 1 << 4;
/** @internal */
const CooperativeYielding = 1 << 5;
/** @internal */
const allFlags = [runtimeFlags_None, Interruption, OpSupervision, RuntimeMetrics, WindDown, CooperativeYielding];
/** @internal */
const cooperativeYielding = self => runtimeFlags_isEnabled(self, CooperativeYielding);
/** @internal */
const runtimeFlags_disable = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, flag) => self & ~flag)));
/** @internal */
const disableAll = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, flags) => self & ~flags)));
/** @internal */
const runtimeFlags_enable = /*#__PURE__*/dual(2, (self, flag) => self | flag);
/** @internal */
const enableAll = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, flags) => self | flags)));
/** @internal */
const interruptible = self => interruption(self) && !windDown(self);
/** @internal */
const interruption = self => runtimeFlags_isEnabled(self, Interruption);
/** @internal */
const runtimeFlags_isDisabled = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, flag) => !runtimeFlags_isEnabled(self, flag))));
/** @internal */
const runtimeFlags_isEnabled = /*#__PURE__*/dual(2, (self, flag) => (self & flag) !== 0);
/** @internal */
const runtimeFlags_make = (...flags) => flags.reduce((a, b) => a | b, 0);
/** @internal */
const runtimeFlags_none = /*#__PURE__*/runtimeFlags_make(runtimeFlags_None);
/** @internal */
const opSupervision = self => runtimeFlags_isEnabled(self, OpSupervision);
/** @internal */
const render = self => {
  const active = [];
  allFlags.forEach(flag => {
    if (runtimeFlags_isEnabled(self, flag)) {
      active.push(`${flag}`);
    }
  });
  return `RuntimeFlags(${active.join(", ")})`;
};
/** @internal */
const runtimeMetrics = self => runtimeFlags_isEnabled(self, RuntimeMetrics);
/** @internal */
const runtimeFlags_toSet = self => new Set(allFlags.filter(flag => runtimeFlags_isEnabled(self, flag)));
const windDown = self => runtimeFlags_isEnabled(self, WindDown);
// circular with RuntimeFlagsPatch
/** @internal */
const enabledSet = self => runtimeFlags_toSet(active(self) & enabled(self));
/** @internal */
const disabledSet = self => runtimeFlags_toSet(active(self) & ~enabled(self));
/** @internal */
const runtimeFlags_diff = /*#__PURE__*/dual(2, (self, that) => runtimeFlagsPatch_make(self ^ that, that));
/** @internal */
const runtimeFlags_patch = /*#__PURE__*/dual(2, (self, patch) => self & (invert(active(patch)) | enabled(patch)) | active(patch) & enabled(patch));
/** @internal */
const renderFlag = a => `${allFlags.find(b => a === b)}`;
/** @internal */
const renderPatch = self => {
  const enabled = Array.from(enabledSet(self)).map(flag => renderFlag(flag)).join(", ");
  const disabled = Array.from(disabledSet(self)).map(flag => renderFlag(flag)).join(", ");
  return `RuntimeFlagsPatch(enabled = (${enabled}), disabled = (${disabled}))`;
};
/** @internal */
const differ = () => mjs_Differ_make({
  empty: runtimeFlagsPatch_empty,
  diff: (oldValue, newValue) => runtimeFlags_diff(oldValue, newValue),
  combine: (first, second) => runtimeFlagsPatch_andThen(second)(first),
  patch: (_patch, oldValue) => runtimeFlags_patch(oldValue, _patch)
});
//# sourceMappingURL=runtimeFlags.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Fiber/Runtime/Flags/Patch.mjs


/**
 * The empty `RuntimeFlagsPatch`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Patch_empty = runtimeFlagsPatch_empty;
/**
 * @since 1.0.0
 * @category constructors
 */
const Patch_make = runtimeFlagsPatch_make;
/**
 * Creates a `RuntimeFlagsPatch` describing enabling the provided `RuntimeFlag`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Patch_enable = enable;
/**
 * Creates a `RuntimeFlagsPatch` describing disabling the provided `RuntimeFlag`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Patch_disable = disable;
/**
 * Returns `true` if the specified `RuntimeFlagsPatch` is empty.
 *
 * @since 1.0.0
 * @category getters
 */
const Patch_isEmpty = runtimeFlagsPatch_isEmpty;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as active.
 *
 * @since 1.0.0
 * @category elements
 */
const Patch_isActive = isActive;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as enabled.
 *
 * @since 1.0.0
 * @category elements
 */
const Patch_isEnabled = isEnabled;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as disabled.
 *
 * @since 1.0.0
 * @category elements
 */
const Patch_isDisabled = isDisabled;
/**
 * Returns `true` if the `RuntimeFlagsPatch` includes the specified
 * `RuntimeFlag`, `false` otherwise.
 *
 * @since 1.0.0
 * @category elements
 */
const Patch_includes = isActive;
/**
 * Creates a `RuntimeFlagsPatch` describing the application of the `self` patch,
 * followed by `that` patch.
 *
 * @since 1.0.0
 * @category mutations
 */
const Patch_andThen = runtimeFlagsPatch_andThen;
/**
 * Creates a `RuntimeFlagsPatch` describing application of both the `self` patch
 * and `that` patch.
 *
 * @since 1.0.0
 * @category mutations
 */
const Patch_both = both;
/**
 * Creates a `RuntimeFlagsPatch` describing application of either the `self`
 * patch or `that` patch.
 *
 * @since 1.0.0
 * @category mutations
 */
const Patch_either = runtimeFlagsPatch_either;
/**
 * Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
 * `RuntimeFlag` from the set of `RuntimeFlags`.
 *
 * @category mutations
 * @since 1.0.0
 */
const Patch_exclude = exclude;
/**
 * Creates a `RuntimeFlagsPatch` which describes the inverse of the patch
 * specified by the provided `RuntimeFlagsPatch`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Patch_inverse = inverse;
/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * enabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Patch_enabledSet = enabledSet;
/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * disabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Patch_disabledSet = disabledSet;
/**
 * Renders the provided `RuntimeFlagsPatch` to a string.
 *
 * @since 1.0.0
 * @category destructors
 */
const Patch_render = renderPatch;
//# sourceMappingURL=Patch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/opCodes/deferred.mjs
/** @internal */
const OP_STATE_PENDING = "Pending";
/** @internal */
const OP_STATE_DONE = "Done";
//# sourceMappingURL=deferred.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/deferred.mjs

/** @internal */
const DeferredSymbolKey = "@effect/io/Deferred";
/** @internal */
const DeferredTypeId = /*#__PURE__*/Symbol.for(DeferredSymbolKey);
/** @internal */
const deferredVariance = {
  _E: _ => _,
  _A: _ => _
};
/** @internal */
const pending = joiners => {
  return {
    _tag: OP_STATE_PENDING,
    joiners
  };
};
/** @internal */
const done = effect => {
  return {
    _tag: OP_STATE_DONE,
    effect
  };
};
//# sourceMappingURL=deferred.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/opCodes/effect.mjs
/** @internal */
const OP_ASYNC = "Async";
/** @internal */
const OP_COMMIT = "Commit";
/** @internal */
const OP_FAILURE = "Failure";
/** @internal */
const OP_ON_FAILURE = "OnFailure";
/** @internal */
const OP_ON_SUCCESS = "OnSuccess";
/** @internal */
const OP_ON_SUCCESS_AND_FAILURE = "OnSuccessAndFailure";
/** @internal */
const OP_TRACED = "OpTraced";
/** @internal */
const OP_SUCCESS = "Success";
/** @internal */
const OP_SYNC = "Sync";
/** @internal */
const OP_UPDATE_RUNTIME_FLAGS = "UpdateRuntimeFlags";
/** @internal */
const OP_WHILE = "While";
/** @internal */
const OP_WITH_RUNTIME = "WithRuntime";
/** @internal */
const OP_YIELD = "Yield";
/** @internal */
const OP_REVERT_FLAGS = "RevertFlags";
//# sourceMappingURL=effect.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/scheduler.mjs
/** @internal */
class HighPriorityScheduler {
  constructor() {
    this.running = false;
    this.tasks = [];
  }
  get preferredExecution() {
    return "Async";
  }
  starveInternal(depth) {
    const toRun = this.tasks;
    this.tasks = [];
    for (let i = 0; i < toRun.length; i++) {
      toRun[i]();
    }
    if (this.tasks.length === 0) {
      this.running = false;
    } else {
      this.starve(depth);
    }
  }
  starve(depth = 0) {
    if (depth >= 2048) {
      setTimeout(() => this.starveInternal(0), 0);
    } else {
      Promise.resolve(void 0).then(() => this.starveInternal(depth + 1));
    }
  }
  scheduleTask(task) {
    this.tasks.push(task);
    if (!this.running) {
      this.running = true;
      this.starve();
    }
  }
}
/** @internal */
const defaultScheduler = /*#__PURE__*/new HighPriorityScheduler();
/** @internal */
class SyncScheduler {
  constructor() {
    this.tasks = [];
    this.deferred = false;
  }
  scheduleTask(task) {
    if (this.deferred) {
      defaultScheduler.scheduleTask(task);
    } else {
      this.tasks.push(task);
    }
  }
  get preferredExecution() {
    return this.deferred ? "Async" : "Sync";
  }
  flush() {
    while (this.tasks.length > 0) {
      const toRun = this.tasks;
      this.tasks = [];
      for (let i = 0; i < toRun.length; i++) {
        toRun[i]();
      }
    }
    this.deferred = true;
  }
}
//# sourceMappingURL=scheduler.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Context.mjs

const Context_TagTypeId = TagTypeId;
/**
 * Specifying the key will make the Tag global, meaning two tags with the same
 * key will map to the same instance.
 *
 * Note: this is useful for cases where live reload can happen and it is
 * desireable to preserve the instance across reloads.
 *
 * @since 1.0.0
 * @category constructors
 */
const Tag = key => new TagImpl(key);
const Context_TypeId = ContextTypeId;
/**
 * @since 1.0.0
 * @category guards
 */
const Context_isContext = isContext;
/**
 * @since 1.0.0
 * @category guards
 */
const Context_isTag = isTag;
/**
 * @since 1.0.0
 * @category constructors
 */
const mjs_Context_empty = Context_empty;
/**
 * @since 1.0.0
 * @category constructors
 */
const mjs_Context_make = Context_make;
/**
 * @since 1.0.0
 * @category mutations
 */
const mjs_Context_add = Context_add;
/**
 * @since 1.0.0
 * @category getters
 */
const mjs_Context_get = Context_get;
/**
 * @since 1.0.0
 * @category unsafe
 */
const mjs_Context_unsafeGet = Context_unsafeGet;
/**
 * @since 1.0.0
 * @category getters
 */
const Context_getOption = getOption;
/**
 * @since 1.0.0
 * @category mutations
 */
const mjs_Context_merge = Context_merge;
/**
 * @since 1.0.0
 * @category mutations
 */
const Context_prune = prune;
//# sourceMappingURL=Context.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/core.mjs






















// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
/** @internal */
const EffectErrorSymbolKey = "@effect/io/Effect/Error";
/** @internal */
const EffectErrorTypeId = /*#__PURE__*/Symbol.for(EffectErrorSymbolKey);
/** @internal */
const isEffectError = u => typeof u === "object" && u != null && EffectErrorTypeId in u;
/** @internal */
const makeEffectError = cause => ({
  [EffectErrorTypeId]: EffectErrorTypeId,
  _tag: "EffectError",
  cause
});
/** @internal */
const EffectTypeId = /*#__PURE__*/Symbol.for("@effect/io/Effect");
/** @internal */
class RevertFlags {
  constructor(patch) {
    this.patch = patch;
    this._tag = OP_REVERT_FLAGS;
  }
}
/** @internal */
const effectVariance = {
  _R: _ => _,
  _E: _ => _,
  _A: _ => _
};
/** @internal */
const core_proto = {
  [EffectTypeId]: effectVariance,
  [Equal_symbol](that) {
    return this === that;
  },
  [Hash_symbol]() {
    return random(this);
  },
  traced(trace) {
    if (trace) {
      const effect = Object.create(core_proto);
      effect._tag = OP_TRACED;
      effect.self = this;
      effect.trace = trace;
      return effect;
    }
    return this;
  }
};
/** @internal */
const isEffect = u => typeof u === "object" && u != null && EffectTypeId in u;
/* @internal */
const acquireUseRelease = /*#__PURE__*/dualWithTrace(3, (trace, restoreTracing) => (acquire, use, release) => uninterruptibleMask(restore => core_flatMap(a => core_flatMap(exit => matchCauseEffect(cause => {
  switch (exit._tag) {
    case OP_FAILURE:
      {
        return failCause(parallel(exit.cause, cause));
      }
    case OP_SUCCESS:
      {
        return failCause(cause);
      }
  }
}, () => exit)(suspendSucceed(() => restoreTracing(release)(a, exit))))(core_exit(suspendSucceed(() => restore(restoreTracing(use)(a))))))(acquire)).traced(trace));
/* @internal */
const core_as = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => core_flatMap(() => core_succeed(value))(self).traced(trace));
/* @internal */
const core_asUnit = /*#__PURE__*/methodWithTrace(trace => self => core_as(void 0)(self).traced(trace));
/* @internal */
const core_async = /*#__PURE__*/methodWithTrace(trace => (register, blockingOn = Id_none) => {
  const effect = Object.create(core_proto);
  effect._tag = OP_ASYNC;
  effect.register = register;
  effect.blockingOn = blockingOn;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const asyncInterruptEither = /*#__PURE__*/methodWithTrace((trace, restore) => (register, blockingOn = Id_none) => suspendSucceed(() => {
  let cancelerRef = core_unit();
  return onInterrupt(() => cancelerRef)(core_async(resume => {
    const result = restore(register)(resume);
    if (Either_isRight(result)) {
      resume(result.right);
    } else {
      cancelerRef = result.left;
    }
  }, blockingOn));
}).traced(trace));
/* @internal */
const asyncInterrupt = /*#__PURE__*/methodWithTrace((trace, restore) => (register, blockingOn = Id_none) => suspendSucceed(() => {
  let cancelerRef = core_unit();
  return onInterrupt(() => cancelerRef)(core_async(resume => {
    cancelerRef = restore(register)(resume);
  }, blockingOn));
}).traced(trace));
/* @internal */
const catchAllCause = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => {
  const effect = Object.create(core_proto);
  effect._tag = OP_ON_FAILURE;
  effect.first = self;
  effect.failK = restore(f);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const core_catchAll = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchEffect(restore(f), core_succeed)(self).traced(trace));
/**
 * @macro identity
 * @internal
 */
const unified = f => (...args) => f(...args);
/* @internal */
const catchSome = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => matchCauseEffect(unified(cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return Option_getOrElse(() => failCause(cause))(restore(pf)(either.left));
      }
    case "Right":
      {
        return failCause(either.right);
      }
  }
}), core_succeed)(self).traced(trace));
/* @internal */
const checkInterruptible = /*#__PURE__*/methodWithTrace((trace, restore) => f => withFiberRuntime((_, status) => restore(f)(interruption(status.runtimeFlags))).traced(trace));
/* @internal */
const core_die = /*#__PURE__*/methodWithTrace(trace => defect => failCause(die(defect)).traced(trace));
/* @internal */
const dieSync = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => failCauseSync(() => die(restore(evaluate)())).traced(trace));
/* @internal */
const core_done = /*#__PURE__*/methodWithTrace(trace => exit => suspendSucceed(() => exit).traced(trace));
/* @internal */
const core_either = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(e => core_succeed(Either_left(e)), a => core_succeed(Either_right(a)))(self).traced(trace));
/* @internal */
const context = /*#__PURE__*/methodWithTrace(trace => () => suspendSucceed(() => fiberRefGet(currentContext)).traced(trace));
/* @internal */
const contextWithEffect = /*#__PURE__*/methodWithTrace((trace, restore) => f => core_flatMap(restore(f))(context()).traced(trace));
/* @internal */
const core_exit = /*#__PURE__*/methodWithTrace(trace => self => matchCause(failCause, core_succeed)(self).traced(trace));
/* @internal */
const core_fail = /*#__PURE__*/methodWithTrace(trace => error => failCause(cause_fail(error)).traced(trace));
/* @internal */
const failSync = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => failCauseSync(() => cause_fail(restore(evaluate)())).traced(trace));
/* @internal */
const failCause = /*#__PURE__*/methodWithTrace(trace => cause => {
  const effect = Object.create(core_proto);
  effect._tag = OP_FAILURE;
  effect.cause = cause;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const failCauseSync = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => core_flatMap(failCause)(core_sync(restore(evaluate))).traced(trace));
/* @internal */
const fiberId = /*#__PURE__*/methodWithTrace(trace => () => withFiberRuntime(state => core_succeed(state.id())).traced(trace));
/* @internal */
const fiberIdWith = /*#__PURE__*/methodWithTrace((trace, restore) => f => withFiberRuntime(state => restore(f)(state.id())).traced(trace));
/* @internal */
const core_flatMap = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => {
  const effect = Object.create(core_proto);
  effect._tag = OP_ON_SUCCESS;
  effect.first = self;
  effect.successK = restore(f);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const core_flatten = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(Function_identity)(self).traced(trace));
/* @internal */
const core_flip = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(core_succeed, core_fail)(self).traced(trace));
/* @internal */
const matchCause = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, onFailure, onSuccess) => matchCauseEffect(cause => core_succeed(restore(onFailure)(cause)), a => core_succeed(restore(onSuccess)(a)))(self).traced(trace));
/* @internal */
const matchCauseEffect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, onFailure, onSuccess) => {
  const effect = Object.create(core_proto);
  effect._tag = OP_ON_SUCCESS_AND_FAILURE;
  effect.first = self;
  effect.failK = restore(onFailure);
  effect.successK = restore(onSuccess);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const matchEffect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, onFailure, onSuccess) => matchCauseEffect(self, cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return restore(onFailure)(either.left);
      }
    case "Right":
      {
        return restore(failCause)(either.right);
      }
  }
}, onSuccess).traced(trace));
/* @internal */
const core_forEach = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => suspendSucceed(() => {
  const arr = Array.from(self);
  const ret = new Array(arr.length);
  let i = 0;
  return core_as(unsafeFromArray(ret))(whileLoop(() => i < arr.length, () => restore(f)(arr[i]), b => {
    ret[i++] = b;
  }));
}).traced(trace));
/* @internal */
const forEachDiscard = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => suspendSucceed(() => {
  const arr = Array.from(self);
  let i = 0;
  return whileLoop(() => i < arr.length, () => restore(f)(arr[i++]), () => {
    //
  });
}).traced(trace));
/* @internal */
const core_fromOption = /*#__PURE__*/methodWithTrace(trace => option => {
  switch (option._tag) {
    case "None":
      {
        return core_fail(Option_none()).traced(trace);
      }
    case "Some":
      {
        return core_succeed(option.value).traced(trace);
      }
  }
});
/* @internal */
const core_fromEither = /*#__PURE__*/methodWithTrace(trace => either => {
  switch (either._tag) {
    case "Left":
      {
        return core_fail(either.left).traced(trace);
      }
    case "Right":
      {
        return core_succeed(either.right).traced(trace);
      }
  }
});
/* @internal */
const ifEffect = /*#__PURE__*/dualWithTrace(3, trace => (self, onTrue, onFalse) => core_flatMap(unified(b => b ? onTrue : onFalse))(self).traced(trace));
/* @internal */
const core_interrupt = /*#__PURE__*/methodWithTrace(trace => () => core_flatMap(fiberId => interruptWith(fiberId))(fiberId()).traced(trace));
/* @internal */
const interruptWith = /*#__PURE__*/methodWithTrace(trace => fiberId => failCause(interrupt(fiberId)).traced(trace));
/* @internal */
const core_interruptible = /*#__PURE__*/methodWithTrace(trace => self => {
  const effect = Object.create(core_proto);
  effect._tag = OP_UPDATE_RUNTIME_FLAGS;
  effect.update = Patch_enable(Interruption);
  effect.scope = () => self;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const interruptibleMask = /*#__PURE__*/methodWithTrace((trace, restore) => f => {
  const effect = Object.create(core_proto);
  effect._tag = OP_UPDATE_RUNTIME_FLAGS;
  effect.update = Patch_enable(Interruption);
  effect.scope = oldFlags => interruption(oldFlags) ? restore(f)(core_interruptible) : restore(f)(uninterruptible);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const intoDeferred = /*#__PURE__*/dualWithTrace(2, trace => (self, deferred) => uninterruptibleMask(restore => core_flatMap(exit => deferredDone(deferred, exit))(core_exit(restore(self)))).traced(trace));
/* @internal */
const core_map = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => core_flatMap(a => core_sync(() => restore(f)(a)))(self).traced(trace));
/* @internal */
const mapError = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return failSync(() => restore(f)(either.left));
      }
    case "Right":
      {
        return failCause(either.right);
      }
  }
}, core_succeed).traced(trace));
/* @internal */
const never = /*#__PURE__*/methodWithTrace(trace => () => asyncInterruptEither(() => {
  const interval = setInterval(() => {
    //
  }, 2 ** 31 - 1);
  return Either_left(core_sync(() => clearInterval(interval)));
}).traced(trace));
/* @internal */
const onError = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, cleanup) => onExit(self, unified(exit => exitIsSuccess(exit) ? core_unit() : restore(cleanup)(exit.cause))).traced(trace));
/* @internal */
const onExit = /*#__PURE__*/dualWithTrace(2, (trace, restoreTrace) => (self, cleanup) => uninterruptibleMask(restore => matchCauseEffect(restore(self), cause1 => {
  const result = exitFailCause(cause1);
  return matchCauseEffect(cause2 => exitFailCause(sequential(cause1, cause2)), () => result)(restoreTrace(cleanup)(result));
}, success => {
  const result = exitSucceed(success);
  return zipRight(result)(restoreTrace(cleanup)(result));
})).traced(trace));
/* @internal */
const onInterrupt = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, cleanup) => onExit(self, exitMatch(cause => isInterruptedOnly(cause) ? core_asUnit(restore(cleanup)(interruptors(cause))) : core_unit(), () => core_unit())).traced(trace));
/* @internal */
const core_orElse = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, that) => tryOrElse(restore(that), core_succeed)(self).traced(trace));
/* @internal */
const orDie = /*#__PURE__*/methodWithTrace(trace => self => orDieWith(Function_identity)(self).traced(trace));
/* @internal */
const orDieWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchEffect(e => core_die(restore(f)(e)), core_succeed)(self).traced(trace));
/* @internal */
const core_partitionMap = (elements, f) => Array.from(elements).reduceRight(([lefts, rights], current) => {
  const either = f(current);
  switch (either._tag) {
    case "Left":
      {
        return [Chunk_prepend(either.left)(lefts), rights];
      }
    case "Right":
      {
        return [lefts, Chunk_prepend(either.right)(rights)];
      }
  }
}, [Chunk_empty(), Chunk_empty()]);
/* @internal */
const provideContext = /*#__PURE__*/dualWithTrace(2, trace => (self, context) => fiberRefLocally(currentContext, context)(self).traced(trace));
/* @internal */
const contramapContext = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => contextWithEffect(context => provideContext(restore(f)(context))(self)).traced(trace));
/* @internal */
const core_runtimeFlags = /*#__PURE__*/methodWithTrace(trace => () => withFiberRuntime((_, status) => core_succeed(status.runtimeFlags)).traced(trace));
/* @internal */
const service = /*#__PURE__*/methodWithTrace(trace => tag => serviceWithEffect(tag, core_succeed).traced(trace));
/* @internal */
const serviceWith = /*#__PURE__*/methodWithTrace((trace, restore) => (tag, f) => serviceWithEffect(tag, a => core_sync(() => restore(f)(a))).traced(trace));
/* @internal */
const serviceWithEffect = /*#__PURE__*/methodWithTrace((trace, restore) => (tag, f) => suspendSucceed(() => core_flatMap(env => restore(f)(mjs_Context_unsafeGet(tag)(env)))(fiberRefGet(currentContext))).traced(trace));
/* @internal */
const core_succeed = /*#__PURE__*/methodWithTrace(trace => value => {
  const effect = Object.create(core_proto);
  effect._tag = OP_SUCCESS;
  effect.value = value;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const suspendSucceed = /*#__PURE__*/methodWithTrace((trace, restore) => effect => core_flatMap(Function_identity)(core_sync(restore(effect))).traced(trace));
/* @internal */
const core_sync = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => {
  const effect = Object.create(core_proto);
  effect._tag = OP_SYNC;
  effect.evaluate = restore(evaluate);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const tags = /*#__PURE__*/methodWithTrace(trace => () => fiberRefGet(currentTags).traced(trace));
/* @internal */
const core_tap = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => core_flatMap(a => core_as(a)(restore(f)(a)))(self).traced(trace));
/* @internal */
const transplant = /*#__PURE__*/methodWithTrace((trace, restore) => f => withFiberRuntime(state => {
  const scopeOverride = state.getFiberRef(forkScopeOverride);
  const scope = Option_getOrElse(() => state.scope())(scopeOverride);
  return restore(f)(fiberRefLocally(forkScopeOverride, Option_some(scope)));
}).traced(trace));
/* @internal */
const tryOrElse = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, that, onSuccess) => matchCauseEffect(self, cause => {
  const option = keepDefects(cause);
  switch (option._tag) {
    case "None":
      {
        return restore(that)();
      }
    case "Some":
      {
        return failCause(option.value);
      }
  }
}, restore(onSuccess)).traced(trace));
/* @internal */
const uninterruptible = /*#__PURE__*/methodWithTrace(trace => self => {
  const effect = Object.create(core_proto);
  effect._tag = OP_UPDATE_RUNTIME_FLAGS;
  effect.update = Patch_disable(Interruption);
  effect.scope = () => self;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const uninterruptibleMask = /*#__PURE__*/methodWithTrace((trace, restore) => f => {
  const effect = Object.create(core_proto);
  effect._tag = OP_UPDATE_RUNTIME_FLAGS;
  effect.update = Patch_disable(Interruption);
  effect.scope = oldFlags => {
    return interruption(oldFlags) ? restore(f)(core_interruptible) : restore(f)(uninterruptible);
  };
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const core_unit = /*#__PURE__*/methodWithTrace(trace => _ => core_succeed(void 0).traced(trace));
/* @internal */
const updateRuntimeFlags = /*#__PURE__*/methodWithTrace(trace => patch => {
  const effect = Object.create(core_proto);
  effect._tag = OP_UPDATE_RUNTIME_FLAGS;
  effect.update = patch;
  effect.scope = void 0;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const whenEffect = /*#__PURE__*/dualWithTrace(2, trace => (self, predicate) => core_flatMap(b => {
  if (b) {
    return core_map(Option_some)(self);
  }
  return core_succeed(Option_none());
})(predicate).traced(trace));
/* @internal */
const whileLoop = /*#__PURE__*/methodWithTrace((trace, restore) => (check, body, process) => {
  const effect = Object.create(core_proto);
  effect._tag = OP_WHILE;
  effect.check = restore(check);
  effect.body = restore(body);
  effect.process = restore(process);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const withFiberRuntime = /*#__PURE__*/methodWithTrace((trace, restore) => withRuntime => {
  const effect = Object.create(core_proto);
  effect._tag = OP_WITH_RUNTIME;
  effect.withRuntime = restore(withRuntime);
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const withParallelism = /*#__PURE__*/dualWithTrace(2, trace => (self, parallelism) => suspendSucceed(() => fiberRefLocally(currentParallelism, Option_some(parallelism))(self)).traced(trace));
/* @internal */
const withParallelismUnbounded = /*#__PURE__*/methodWithTrace(trace => self => suspendSucceed(() => fiberRefLocally(currentParallelism, Option_none())(self)).traced(trace));
/* @internal */
const withRuntimeFlags = /*#__PURE__*/dualWithTrace(2, trace => (self, update) => {
  const effect = Object.create(core_proto);
  effect._tag = OP_UPDATE_RUNTIME_FLAGS;
  effect.update = update;
  effect.scope = () => self;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const yieldNow = /*#__PURE__*/methodWithTrace(trace => (priority = "normal") => {
  const effect = Object.create(core_proto);
  effect._tag = OP_YIELD;
  effect.priority = priority;
  effect.trace = void 0;
  if (trace) {
    return effect.traced(trace);
  }
  return effect;
});
/* @internal */
const core_zip = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => core_flatMap(self, a => core_map(that, b => [a, b])).traced(trace));
/* @internal */
const zipFlatten = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, that) => core_flatMap(self, a => core_map(that, b => [...a, b])).traced(trace))));
/* @internal */
const zipLeft = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => core_flatMap(self, a => core_as(that, a)).traced(trace));
/* @internal */
const zipRight = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => core_flatMap(self, () => that).traced(trace));
/* @internal */
const core_zipWith = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, that, f) => core_flatMap(self, a => core_map(that, b => restore(f)(a, b))).traced(trace));
// -----------------------------------------------------------------------------
// Fiber
// -----------------------------------------------------------------------------
/* @internal */
const interruptFiber = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(fiberId => interruptAsFiber(fiberId)(self))(fiberId()).traced(trace));
/* @internal */
const interruptAsFiber = /*#__PURE__*/dualWithTrace(2, trace => (self, fiberId) => core_flatMap(() => self.await())(self.interruptAsFork(fiberId)).traced(trace));
// -----------------------------------------------------------------------------
// LogLevel
// -----------------------------------------------------------------------------
/** @internal */
const logLevelAll = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER
};
/** @internal */
const logLevelFatal = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 50000
};
/** @internal */
const logLevelError = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 40000
};
/** @internal */
const logLevelWarning = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 30000
};
/** @internal */
const logLevelInfo = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 20000
};
/** @internal */
const logLevelDebug = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 10000
};
/** @internal */
const logLevelTrace = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0
};
/** @internal */
const logLevelNone = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER
};
// -----------------------------------------------------------------------------
// FiberRef
// -----------------------------------------------------------------------------
/** @internal */
const FiberRefSymbolKey = "@effect/io/FiberRef";
/** @internal */
const FiberRefTypeId = /*#__PURE__*/Symbol.for(FiberRefSymbolKey);
/** @internal */
const fiberRefVariance = {
  _A: _ => _
};
/* @internal */
const fiberRefGet = /*#__PURE__*/methodWithTrace(trace => self => fiberRefModify(self, a => [a, a]).traced(trace));
/* @internal */
const fiberRefGetAndSet = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => (self, value) => fiberRefModify(self, v => [v, value]).traced(trace))));
/* @internal */
const fiberRefGetAndUpdate = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, f) => fiberRefModify(self, v => [v, restore(f)(v)]).traced(trace))));
/* @internal */
const fiberRefGetAndUpdateSome = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, pf) => fiberRefModify(self, v => [v, Option.getOrElse(() => v)(restore(pf)(v))]).traced(trace))));
/* @internal */
const fiberRefGetWith = /*#__PURE__*/methodWithTrace((trace, restore) => (self, f) => core_flatMap(restore(f))(fiberRefGet(self)).traced(trace));
/* @internal */
const fiberRefSet = /*#__PURE__*/methodWithTrace(trace => (self, value) => fiberRefModify(self, () => [void 0, value]).traced(trace));
/* @internal */
const fiberRefDelete = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => self => withFiberRuntime(state => {
  state.unsafeDeleteFiberRef(self);
  return core_unit();
}).traced(trace))));
/* @internal */
const fiberRefReset = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => self => fiberRefSet(self, self.initial).traced(trace))));
/* @internal */
const fiberRefModify = /*#__PURE__*/methodWithTrace((trace, restore) => (self, f) => withFiberRuntime(state => {
  const [b, a] = restore(f)(state.getFiberRef(self));
  state.setFiberRef(self, a);
  return core_succeed(b);
}).traced(trace));
/* @internal */
const fiberRefModifySome = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, def, f) => fiberRefModify(self, v => Option.getOrElse(() => [def, v])(restore(f)(v))).traced(trace))));
/* @internal */
const fiberRefUpdate = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, f) => fiberRefModify(self, v => [void 0, restore(f)(v)]).traced(trace))));
/* @internal */
const fiberRefUpdateSome = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, pf) => fiberRefModify(self, v => [void 0, Option.getOrElse(() => v)(restore(pf)(v))]).traced(trace))));
/* @internal */
const fiberRefUpdateAndGet = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, f) => fiberRefModify(self, v => {
  const result = restore(f)(v);
  return [result, result];
}).traced(trace))));
/* @internal */
const fiberRefUpdateSomeAndGet = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (self, pf) => fiberRefModify(self, v => {
  const result = Option.getOrElse(() => v)(restore(pf)(v));
  return [result, result];
}).traced(trace))));
/* @internal */
const fiberRefLocally = /*#__PURE__*/dualWithTrace(3, trace => (use, self, value) => acquireUseRelease(zipLeft(fiberRefSet(self, value))(fiberRefGet(self)), () => use, oldValue => fiberRefSet(self, oldValue)).traced(trace));
/* @internal */
const fiberRefLocallyWith = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (use, self, f) => fiberRefGetWith(self, a => fiberRefLocally(self, restore(f)(a))(use)).traced(trace));
/** @internal */
const fiberRefUnsafeMake = (initial, fork = Function_identity, join = (_, a) => a) => fiberRefUnsafeMakePatch(initial, mjs_Differ_update(), fork, join);
/** @internal */
const fiberRefUnsafeMakeHashSet = initial => fiberRefUnsafeMakePatch(initial, Differ_hashSet(), Differ_HashSetPatch_empty());
/** @internal */
const fiberRefUnsafeMakeContext = initial => fiberRefUnsafeMakePatch(initial, Differ_environment(), Differ_ContextPatch_empty());
/** @internal */
const fiberRefUnsafeMakePatch = (initial, differ, fork, join = (_, n) => n) => ({
  [FiberRefTypeId]: fiberRefVariance,
  initial,
  diff: (oldValue, newValue) => Differ_diff(oldValue, newValue)(differ),
  combine: (first, second) => Differ_combine(first, second)(differ),
  patch: patch => oldValue => Differ_patch(patch, oldValue)(differ),
  fork,
  join
});
/** @internal */
const fiberRefUnsafeMakeRuntimeFlags = initial => fiberRefUnsafeMakePatch(initial, differ(), Patch_empty);
/** @internal */
const currentContext = /*#__PURE__*/fiberRefUnsafeMakeContext( /*#__PURE__*/mjs_Context_empty());
/** @internal */
const currentLogAnnotations = /*#__PURE__*/fiberRefUnsafeMake( /*#__PURE__*/mjs_HashMap_empty());
/** @internal */
const currentLogLevel = /*#__PURE__*/fiberRefUnsafeMake(logLevelInfo);
/** @internal */
const currentLogSpan = /*#__PURE__*/fiberRefUnsafeMake( /*#__PURE__*/Chunk_empty());
/** @internal */
const currentScheduler = /*#__PURE__*/fiberRefUnsafeMake(defaultScheduler);
/** @internal */
const currentParallelism = /*#__PURE__*/fiberRefUnsafeMake( /*#__PURE__*/Option_none());
/** @internal */
const currentTags = /*#__PURE__*/fiberRefUnsafeMakeHashSet( /*#__PURE__*/mjs_HashSet_empty());
/** @internal */
const forkScopeOverride = /*#__PURE__*/fiberRefUnsafeMake( /*#__PURE__*/Option_none(), () => Option_none(), (parent, _) => parent);
/** @internal */
const interruptedCause = /*#__PURE__*/fiberRefUnsafeMake(cause_empty, () => cause_empty, (parent, _) => parent);
// -----------------------------------------------------------------------------
// Scope
// -----------------------------------------------------------------------------
/** @internal */
const ScopeTypeId = /*#__PURE__*/Symbol.for("@effect/io/Scope");
/** @internal */
const CloseableScopeTypeId = /*#__PURE__*/Symbol.for("@effect/io/CloseableScope");
/* @internal */
const scopeAddFinalizer = /*#__PURE__*/methodWithTrace(trace => (self, finalizer) => self.addFinalizer(() => core_asUnit(finalizer)).traced(trace));
/* @internal */
const scopeAddFinalizerExit = /*#__PURE__*/methodWithTrace((trace, restore) => (self, finalizer) => self.addFinalizer(restore(finalizer)).traced(trace));
/* @internal */
const scopeClose = /*#__PURE__*/methodWithTrace(trace => (self, exit) => self.close(exit).traced(trace));
/* @internal */
const scopeFork = /*#__PURE__*/methodWithTrace(trace => (self, strategy) => self.fork(strategy).traced(trace));
/* @internal */
const releaseMapAdd = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, finalizer) => core_map(Option_match(() => () => core_unit(), key => exit => releaseMapRelease(key, exit)(self)))(releaseMapAddIfOpen(restore(finalizer))(self)).traced(trace));
/* @internal */
const releaseMapRelease = /*#__PURE__*/dualWithTrace(3, trace => (self, key, exit) => suspendSucceed(() => {
  switch (self.state._tag) {
    case "Exited":
      {
        return core_unit();
      }
    case "Running":
      {
        const finalizer = self.state.finalizers.get(key);
        self.state.finalizers.delete(key);
        if (finalizer != null) {
          return self.state.update(finalizer)(exit);
        }
        return core_unit();
      }
  }
}).traced(trace));
/* @internal */
const releaseMapAddIfOpen = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, finalizer) => suspendSucceed(() => {
  switch (self.state._tag) {
    case "Exited":
      {
        self.state.nextKey += 1;
        return core_as(Option_none())(restore(finalizer)(self.state.exit));
      }
    case "Running":
      {
        const key = self.state.nextKey;
        self.state.finalizers.set(key, finalizer);
        self.state.nextKey += 1;
        return core_succeed(Option_some(key));
      }
  }
}).traced(trace));
/* @internal */
const releaseMapGet = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, key) => core_sync(() => self.state._tag === "Running" ? Option.fromNullable(self.state.finalizers.get(key)) : Option.none()).traced(trace))));
/* @internal */
const releaseMapReplace = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, (trace, restore) => (self, key, finalizer) => suspendSucceed(() => {
  switch (self.state._tag) {
    case "Exited":
      {
        return core_as(Option.none())(restore(finalizer)(self.state.exit));
      }
    case "Running":
      {
        const fin = Option.fromNullable(self.state.finalizers.get(key));
        self.state.finalizers.set(key, restore(finalizer));
        return core_succeed(fin);
      }
  }
}).traced(trace))));
/* @internal */
const releaseMapRemove = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, key) => core_sync(() => {
  if (self.state._tag === "Exited") {
    return Option.none();
  }
  const fin = Option.fromNullable(self.state.finalizers.get(key));
  self.state.finalizers.delete(key);
  return fin;
}).traced(trace))));
/* @internal */
const releaseMapMake = /*#__PURE__*/methodWithTrace(trace => () => core_sync(() => ({
  state: {
    _tag: "Running",
    nextKey: 0,
    finalizers: new Map(),
    update: Function_identity
  }
})).traced(trace));
// -----------------------------------------------------------------------------
// Exit
// -----------------------------------------------------------------------------
/** @internal */
const exitIsExit = u => isEffect(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure");
/** @internal */
const exitIsFailure = self => self._tag === "Failure";
/** @internal */
const exitIsSuccess = self => self._tag === "Success";
/** @internal */
const exitIsInterrupted = self => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return isInterrupted(self.cause);
      }
    case OP_SUCCESS:
      {
        return false;
      }
  }
};
/** @internal */
const exitAs = /*#__PURE__*/dual(2, (self, value) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return self;
      }
    case OP_SUCCESS:
      {
        return exitSucceed(value);
      }
  }
});
/** @internal */
const exitAsUnit = self => exitAs(self, void 0);
/** @internal */
const exitCauseOption = self => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return Option_some(self.cause);
      }
    case OP_SUCCESS:
      {
        return Option_none();
      }
  }
};
/** @internal */
const exitCollectAll = exits => exitCollectAllInternal(exits, sequential);
/** @internal */
const exitCollectAllPar = exits => exitCollectAllInternal(exits, parallel);
/** @internal */
const exitDie = defect => exitFailCause(die(defect));
/** @internal */
const exitExists = /*#__PURE__*/dual(2, (self, predicate) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return false;
      }
    case OP_SUCCESS:
      {
        return predicate(self.value);
      }
  }
});
/** @internal */
const exitFail = error => exitFailCause(cause_fail(error));
/** @internal */
const exitFailCause = cause => {
  const exit = Object.create(core_proto);
  exit._tag = OP_FAILURE;
  exit.cause = cause;
  exit.trace = void 0;
  return exit;
};
/** @internal */
const exitFlatMap = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return self;
      }
    case OP_SUCCESS:
      {
        return f(self.value);
      }
  }
});
/** @internal */
const exitFlatMapEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return core_succeed(self).traced(trace);
      }
    case OP_SUCCESS:
      {
        return restore(f)(self.value).traced(trace);
      }
  }
});
/** @internal */
const exitFlatten = self => exitFlatMap(Function_identity)(self);
/** @internal */
const exitForEachEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return core_succeed(exitFailCause(self.cause)).traced(trace);
      }
    case OP_SUCCESS:
      {
        return core_exit(restore(f)(self.value)).traced(trace);
      }
  }
});
/** @internal */
const exitFromEither = either => {
  switch (either._tag) {
    case "Left":
      {
        return exitFail(either.left);
      }
    case "Right":
      {
        return exitSucceed(either.right);
      }
  }
};
/** @internal */
const exitFromOption = option => {
  switch (option._tag) {
    case "None":
      {
        return exitFail(void 0);
      }
    case "Some":
      {
        return exitSucceed(option.value);
      }
  }
};
/** @internal */
const exitGetOrElse = /*#__PURE__*/dual(2, (self, orElse) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return orElse(self.cause);
      }
    case OP_SUCCESS:
      {
        return self.value;
      }
  }
});
/** @internal */
const exitInterrupt = fiberId => exitFailCause(interrupt(fiberId));
/** @internal */
const exitMap = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return self;
      }
    case OP_SUCCESS:
      {
        return exitSucceed(f(self.value));
      }
  }
});
/** @internal */
const exitMapBoth = /*#__PURE__*/dual(3, (self, onFailure, onSuccess) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return exitFailCause(cause_map(onFailure)(self.cause));
      }
    case OP_SUCCESS:
      {
        return exitSucceed(onSuccess(self.value));
      }
  }
});
/** @internal */
const exitMapError = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return exitFailCause(cause_map(f)(self.cause));
      }
    case OP_SUCCESS:
      {
        return self;
      }
  }
});
/** @internal */
const exitMapErrorCause = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return exitFailCause(f(self.cause));
      }
    case OP_SUCCESS:
      {
        return self;
      }
  }
});
/** @internal */
const exitMatch = /*#__PURE__*/dual(3, (self, onFailure, onSuccess) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return onFailure(self.cause);
      }
    case OP_SUCCESS:
      {
        return onSuccess(self.value);
      }
  }
});
/** @internal */
const exitMatchEffect = /*#__PURE__*/dual(3, (self, onFailure, onSuccess) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        return onFailure(self.cause);
      }
    case OP_SUCCESS:
      {
        return onSuccess(self.value);
      }
  }
});
/** @internal */
const exitSucceed = value => {
  const exit = Object.create(core_proto);
  exit._tag = OP_SUCCESS;
  exit.value = value;
  exit.trace = void 0;
  return exit;
};
/** @internal */
const exitUnannotate = exit => exitIsSuccess(exit) ? exit : exitFailCause(unannotate(exit.cause));
/** @internal */
const exitUnit = () => exitSucceed(void 0);
/** @internal */
const exitZip = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, (a, a2) => [a, a2], sequential));
/** @internal */
const exitZipLeft = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, (a, _) => a, sequential));
/** @internal */
const exitZipRight = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, (_, a2) => a2, sequential));
/** @internal */
const exitZipPar = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, (a, a2) => [a, a2], parallel));
/** @internal */
const exitZipParLeft = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, (a, _) => a, parallel));
/** @internal */
const exitZipParRight = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, (_, a2) => a2, parallel));
/** @internal */
const exitZipWith = /*#__PURE__*/dual(4, (self, that, f, g) => {
  switch (self._tag) {
    case OP_FAILURE:
      {
        switch (that._tag) {
          case OP_SUCCESS:
            {
              return self;
            }
          case OP_FAILURE:
            {
              return exitFailCause(g(self.cause, that.cause));
            }
        }
      }
    case OP_SUCCESS:
      {
        switch (that._tag) {
          case OP_SUCCESS:
            {
              return exitSucceed(f(self.value, that.value));
            }
          case OP_FAILURE:
            {
              return that;
            }
        }
      }
  }
});
const exitCollectAllInternal = (exits, combineCauses) => {
  const list = Chunk_fromIterable(exits);
  if (!Chunk_isNonEmpty(list)) {
    return Option_none();
  }
  return Option_some(exitMap(Chunk_reverse)(Chunk_reduce(exitMap(Chunk_of)(Chunk_headNonEmpty(list)), (accumulator, current) => exitZipWith(current, (list, value) => Chunk_prepend(value)(list), combineCauses)(accumulator))(Chunk_tailNonEmpty(list))));
};
// -----------------------------------------------------------------------------
// Deferred
// -----------------------------------------------------------------------------
/** @internal */
const deferredUnsafeMake = fiberId => ({
  [DeferredTypeId]: deferredVariance,
  state: MutableRef_make(pending([])),
  blockingOn: fiberId
});
/* @internal */
const deferredMake = /*#__PURE__*/methodWithTrace(trace => () => core_flatMap(id => deferredMakeAs(id))(fiberId()).traced(trace));
/* @internal */
const deferredMakeAs = /*#__PURE__*/methodWithTrace(trace => fiberId => core_sync(() => deferredUnsafeMake(fiberId)).traced(trace));
/* @internal */
const deferredAwait = /*#__PURE__*/methodWithTrace(trace => self => asyncInterruptEither(k => {
  const state = MutableRef_get(self.state);
  switch (state._tag) {
    case OP_STATE_DONE:
      {
        return Either_right(state.effect);
      }
    case OP_STATE_PENDING:
      {
        MutableRef_set(pending([k, ...state.joiners]))(self.state);
        return Either_left(deferredInterruptJoiner(self, k));
      }
  }
}, self.blockingOn).traced(trace));
/* @internal */
const deferredComplete = /*#__PURE__*/dualWithTrace(2, trace => (self, effect) => intoDeferred(effect, self).traced(trace));
/* @internal */
const deferredCompleteWith = /*#__PURE__*/dualWithTrace(2, trace => (self, effect) => core_sync(() => {
  const state = MutableRef_get(self.state);
  switch (state._tag) {
    case OP_STATE_DONE:
      {
        return false;
      }
    case OP_STATE_PENDING:
      {
        MutableRef_set(done(effect))(self.state);
        for (let i = 0; i < state.joiners.length; i++) {
          state.joiners[i](effect);
        }
        return true;
      }
  }
}).traced(trace));
/* @internal */
const deferredDone = /*#__PURE__*/dualWithTrace(2, trace => (self, exit) => deferredCompleteWith(self, core_done(exit)).traced(trace));
/* @internal */
const deferredFail = /*#__PURE__*/dualWithTrace(2, trace => (self, error) => deferredCompleteWith(self, core_fail(error)).traced(trace));
/* @internal */
const deferredFailSync = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, evaluate) => deferredCompleteWith(self, failSync(restore(evaluate))).traced(trace));
/* @internal */
const deferredFailCause = /*#__PURE__*/dualWithTrace(2, trace => (self, cause) => deferredCompleteWith(self, failCause(cause)).traced(trace));
/* @internal */
const deferredFailCauseSync = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, evaluate) => deferredCompleteWith(self, failCauseSync(restore(evaluate))).traced(trace));
/* @internal */
const deferredDie = /*#__PURE__*/dualWithTrace(2, trace => (self, defect) => deferredCompleteWith(self, core_die(defect)).traced(trace));
/* @internal */
const deferredDieSync = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, evaluate) => deferredCompleteWith(self, dieSync(restore(evaluate))).traced(trace));
/* @internal */
const deferredInterrupt = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(fiberId => deferredCompleteWith(self, interruptWith(fiberId)))(fiberId()).traced(trace));
/* @internal */
const deferredInterruptWith = /*#__PURE__*/dualWithTrace(2, trace => (self, fiberId) => deferredCompleteWith(self, interruptWith(fiberId)).traced(trace));
/* @internal */
const deferredIsDone = /*#__PURE__*/methodWithTrace(trace => self => core_sync(() => MutableRef_get(self.state)._tag === OP_STATE_DONE).traced(trace));
/* @internal */
const deferredPoll = /*#__PURE__*/methodWithTrace(trace => self => core_sync(() => {
  const state = MutableRef_get(self.state);
  switch (state._tag) {
    case OP_STATE_DONE:
      {
        return Option_some(state.effect);
      }
    case OP_STATE_PENDING:
      {
        return Option_none();
      }
  }
}).traced(trace));
/* @internal */
const deferredSucceed = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => deferredCompleteWith(self, core_succeed(value)).traced(trace));
/* @internal */
const deferredSync = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, evaluate) => deferredCompleteWith(self, core_sync(restore(evaluate))).traced(trace));
/** @internal */
const deferredUnsafeDone = (self, effect) => {
  const state = MutableRef_get(self.state);
  if (state._tag === OP_STATE_PENDING) {
    MutableRef_set(done(effect))(self.state);
    for (let i = state.joiners.length - 1; i >= 0; i--) {
      state.joiners[i](effect);
    }
  }
};
const deferredInterruptJoiner = (self, joiner) => core_sync(() => {
  const state = MutableRef_get(self.state);
  if (state._tag === OP_STATE_PENDING) {
    MutableRef_set(pending(state.joiners.filter(j => j !== joiner)))(self.state);
  }
});
//# sourceMappingURL=core.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/cause-pretty.mjs







// -----------------------------------------------------------------------------
// Pretty Printing
// -----------------------------------------------------------------------------
/** @internal */
const renderToString = u => {
  if (typeof u === "object" && u != null && "toString" in u && typeof u["toString"] === "function" && u["toString"] !== Object.prototype.toString) {
    return u["toString"]();
  }
  if (typeof u === "string") {
    return `Error: ${u}`;
  }
  if (typeof u === "object" && u !== null) {
    if ("message" in u && typeof u["message"] === "string") {
      const raw = JSON.parse(JSON.stringify(u));
      const keys = new Set(Object.keys(raw));
      keys.delete("name");
      keys.delete("message");
      keys.delete("_tag");
      if (keys.size === 0) {
        return `${"name" in u && typeof u.name === "string" ? u.name : "Error"}${"_tag" in u && typeof u["_tag"] === "string" ? `(${u._tag})` : ``}: ${u.message}`;
      }
    }
  }
  return `Error: ${JSON.stringify(u)}`;
};
const renderTraces = chunk => {
  const ret = [];
  for (const s of chunk) {
    const r = s?.toFrame();
    if (r) {
      if (Debug_runtimeDebug.filterStackFrame(r)) {
        ret.push(renderFrame(r));
      }
    }
  }
  return ret;
};
/** @internal */
const renderStack = span => {
  if (Option_isNone(span)) {
    return [];
  }
  if (span.value.stack.length > 0) {
    return renderTraces(span.value.stack);
  }
  return [];
};
/** @internal */
const renderFail = (error, stack) => {
  return [new RenderError(stack._tag === "Some" ? stack.value.seq : 0, error, renderStack(stack).join("\r\n"))];
};
/** @internal */
const renderError = error => {
  if (error.stack) {
    const stack = Debug_runtimeDebug.parseStack(error);
    const traces = [];
    for (const frame of stack) {
      if (frame) {
        if (Debug_runtimeDebug.filterStackFrame(frame)) {
          traces.push(renderFrame(frame));
        } else {
          break;
        }
      }
    }
    return [renderToString(error), ...traces].join("\r\n");
  }
  return String(error);
};
/** @internal */
const defaultErrorToLines = error => {
  if (error instanceof Error) {
    return renderError(error);
  }
  return renderToString(error);
};
class RenderError {
  constructor(seq, message, stack) {
    this.seq = seq;
    this.message = message;
    this.stack = stack;
  }
}
const cause_pretty_render = (cause, stack) => {
  switch (cause._tag) {
    case OP_ANNOTATED:
      {
        const annotation = cause.annotation;
        if (isStackAnnotation(annotation)) {
          return suspendSucceed(() => cause_pretty_render(cause.cause, Option_orElse(Option_some(annotation))(Option_map(parent => new StackAnnotation(annotation.stack.length < Debug_runtimeDebug.traceStackLimit && parent.stack.length > 0 && (annotation.stack.length > 0 && unsafeLast(parent.stack) !== unsafeLast(annotation.stack) || annotation.stack.length === 0) ? Chunk_take(Debug_runtimeDebug.traceStackLimit)(dedupeAdjacent(Chunk_concat(parent.stack)(annotation.stack))) : annotation.stack, annotation.seq))(stack))));
        }
        return suspendSucceed(() => cause_pretty_render(cause.cause, stack));
      }
    case OP_EMPTY:
      {
        return core_succeed([]);
      }
    case cause_OP_FAIL:
      {
        return core_succeed(renderFail(defaultErrorToLines(cause.error), stack));
      }
    case OP_DIE:
      {
        return core_succeed(renderFail(defaultErrorToLines(cause.defect), stack));
      }
    case OP_INTERRUPT:
      {
        return core_succeed([]);
      }
    case OP_SEQUENTIAL:
      {
        return core_zipWith(suspendSucceed(() => cause_pretty_render(cause.left, stack)), suspendSucceed(() => cause_pretty_render(cause.right, stack)), (left, right) => [...left, ...right]);
      }
    case OP_PARALLEL:
      {
        return core_zipWith(suspendSucceed(() => cause_pretty_render(cause.left, stack)), suspendSucceed(() => cause_pretty_render(cause.right, stack)), (left, right) => [...left, ...right]);
      }
    default:
      {
        return core_succeed([]);
      }
  }
};
/** @internal */
const prettySafe = cause => {
  if (isInterruptedOnly(cause)) {
    return core_succeed("All fibers interrupted without errors.");
  }
  return core_map(cause_pretty_render(cause, Option_none()), errors => {
    const final = Array.from(errors).sort((a, b) => a.seq === b.seq ? 0 : a.seq > b.seq ? 1 : -1).map(e => {
      let message = e.message;
      if (e.stack && e.stack.length > 0) {
        message += `\r\n${e.stack}`;
      }
      return message;
    }).join("\r\n\r\n");
    if (!final.includes("\r\n")) {
      return final;
    }
    return `\r\n${final}\r\n`;
  });
};
function renderFrame(r) {
  if (r) {
    if (r.name) {
      return `    at ${r.name} (${r.fileName}:${r.line}:${r.column})`;
    }
    return `    at ${r.fileName}:${r.line}:${r.column}`;
  }
  return `    at <unknown>`;
}
//# sourceMappingURL=cause-pretty.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Exit.mjs

/**
 * Returns `true` if the specified value is an `Exit`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const isExit = exitIsExit;
/**
 * Returns `true` if the specified `Exit` is a `Failure`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Exit_isFailure = exitIsFailure;
/**
 * Returns `true` if the specified `Exit` is a `Success`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const isSuccess = exitIsSuccess;
/**
 * Returns `true` if the specified exit is a `Failure` **and** the `Cause` of
 * the failure was due to interruption, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Exit_isInterrupted = exitIsInterrupted;
/**
 * Maps the `Success` value of the specified exit to the provided constant
 * value.
 *
 * @since 1.0.0
 * @category mapping
 */
const Exit_as = exitAs;
/**
 * Maps the `Success` value of the specified exit to a void.
 *
 * @since 1.0.0
 * @category mapping
 */
const Exit_asUnit = exitAsUnit;
/**
 * Returns a `Some<Cause<E>>` if the specified exit is a `Failure`, `None`
 * otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const causeOption = exitCauseOption;
/**
 * Collects all of the specified exit values into a `Some<Exit<E, List<A>>>`. If
 * the provided iterable contains no elements, `None` will be returned.
 *
 * **Note**: `Exit.collectAll` combines `Cause` values sequentially.
 *
 * @since 1.0.0
 * @category constructors
 */
const collectAll = exitCollectAll;
/**
 * Collects all of the specified exit values into a `Some<Exit<E, List<A>>>`. If
 * the provided iterable contains no elements, `None` will be returned.
 *
 * **Note**: `Exit.collectAll` combines `Cause` values in parallel.
 *
 * @since 1.0.0
 * @category constructors
 */
const collectAllPar = exitCollectAllPar;
/**
 * Constructs a new `Exit.Failure` from the specified unrecoverable defect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Exit_die = exitDie;
/**
 * Executes the predicate on the value of the specified exit if it is a
 * `Success`, otherwise returns `false`.
 *
 * @since 1.0.0
 * @category elements
 */
const Exit_exists = exitExists;
/**
 * Constructs a new `Exit.Failure` from the specified recoverable error of type
 * `E`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Exit_fail = exitFail;
/**
 * Constructs a new `Exit.Failure` from the specified `Cause` of type `E`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Exit_failCause = exitFailCause;
/**
 * @since 1.0.0
 * @category sequencing
 */
const Exit_flatMap = exitFlatMap;
/**
 * @since 1.0.0
 * @category sequencing
 */
const flatMapEffect = exitFlatMapEffect;
/**
 * @since 1.0.0
 * @category sequencing
 */
const Exit_flatten = exitFlatten;
/**
 * @since 1.0.0
 * @category traversing
 */
const forEachEffect = exitForEachEffect;
/**
 * Converts an `Either<E, A>` into an `Exit<E, A>`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Exit_fromEither = exitFromEither;
/**
 * Converts an `Option<A>` into an `Exit<void, A>`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Exit_fromOption = exitFromOption;
/**
 * Returns the `A` if specified exit is a `Success`, otherwise returns the
 * alternate `A` value computed from the specified function which receives the
 * `Cause<E>` of the exit `Failure`.
 *
 * @since 1.0.0
 * @category getters
 */
const Exit_getOrElse = exitGetOrElse;
/**
 * Constructs a new `Exit.Failure` from the specified `FiberId` indicating that
 * the `Fiber` running an `Effect` workflow was terminated due to interruption.
 *
 * @since 1.0.0
 * @category constructors
 */
const Exit_interrupt = exitInterrupt;
/**
 * Maps over the `Success` value of the specified exit using the provided
 * function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Exit_map = exitMap;
/**
 * Maps over the `Success` and `Failure` cases of the specified exit using the
 * provided functions.
 *
 * @since 1.0.0
 * @category mapping
 */
const mapBoth = exitMapBoth;
/**
 * Maps over the error contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Exit_mapError = exitMapError;
/**
 * Maps over the `Cause` contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 1.0.0
 * @category mapping
 */
const mapErrorCause = exitMapErrorCause;
/**
 * @since 1.0.0
 * @category folding
 */
const Exit_match = exitMatch;
/**
 * @since 1.0.0
 * @category folding
 */
const Exit_matchEffect = exitMatchEffect;
/**
 * Constructs a new `Exit.Success` containing the specified value of type `A`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Exit_succeed = exitSucceed;
/**
 * Removes any annotation from the failure cause
 *
 * @since 1.0.0
 * @category filtering
 */
const Exit_unannotate = exitUnannotate;
/**
 * Represents an `Exit` which succeeds with `undefined`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Exit_unit = exitUnit;
/**
 * Sequentially zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
const Exit_zip = exitZip;
/**
 * Sequentially zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
const Exit_zipLeft = exitZipLeft;
/**
 * Sequentially zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
const Exit_zipRight = exitZipRight;
/**
 * Parallelly zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
const zipPar = exitZipPar;
/**
 * Parallelly zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
const zipParLeft = exitZipParLeft;
/**
 * Parallelly zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
const zipParRight = exitZipParRight;
/**
 * Zips this exit together with that exit using the specified combination
 * functions.
 *
 * @since 1.0.0
 * @category zipping
 */
const Exit_zipWith = exitZipWith;
//# sourceMappingURL=Exit.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/executionStrategy.mjs

/** @internal */
const executionStrategy_OP_SEQUENTIAL = "Sequential";
/** @internal */
const executionStrategy_OP_PARALLEL = "Parallel";
/** @internal */
const OP_PARALLEL_N = "ParallelN";
/** @internal */
const executionStrategy_sequential = {
  _tag: executionStrategy_OP_SEQUENTIAL
};
/** @internal */
const executionStrategy_parallel = {
  _tag: executionStrategy_OP_PARALLEL
};
/** @internal */
const parallelN = parallelism => {
  return {
    _tag: OP_PARALLEL_N,
    parallelism
  };
};
/** @internal */
const isSequential = self => {
  return self._tag === executionStrategy_OP_SEQUENTIAL;
};
/** @internal */
const isParallel = self => {
  return self._tag === executionStrategy_OP_PARALLEL;
};
/** @internal */
const isParallelN = self => {
  return self._tag === OP_PARALLEL_N;
};
/** @internal */
const executionStrategy_match = /*#__PURE__*/dual(4, (self, onSequential, onParallel, onParallelN) => {
  switch (self._tag) {
    case executionStrategy_OP_SEQUENTIAL:
      {
        return onSequential();
      }
    case executionStrategy_OP_PARALLEL:
      {
        return onParallel();
      }
    case OP_PARALLEL_N:
      {
        return onParallelN(self.parallelism);
      }
  }
});
//# sourceMappingURL=executionStrategy.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/ExecutionStrategy.mjs
/**
 * @since 1.0.0
 */

/**
 * Execute effects sequentially.
 *
 * @since 1.0.0
 * @category constructors
 */
const ExecutionStrategy_sequential = executionStrategy_sequential;
/**
 * Execute effects in parallel.
 *
 * @since 1.0.0
 * @category constructors
 */
const ExecutionStrategy_parallel = executionStrategy_parallel;
/**
 * Execute effects in parallel, up to the specified number of concurrent fibers.
 *
 * @since 1.0.0
 * @category constructors
 */
const ExecutionStrategy_parallelN = parallelN;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const ExecutionStrategy_isSequential = isSequential;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const ExecutionStrategy_isParallel = isParallel;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const ExecutionStrategy_isParallelN = isParallelN;
/**
 * Folds over the specified `ExecutionStrategy` using the provided case
 * functions.
 *
 * @since 1.0.0
 * @category folding
 */
const ExecutionStrategy_match = executionStrategy_match;
//# sourceMappingURL=ExecutionStrategy.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/clock.mjs
var clock_a;





/** @internal */
const ClockSymbolKey = "@effect/io/Clock";
/** @internal */
const ClockTypeId = /*#__PURE__*/Symbol.for(ClockSymbolKey);
/** @internal */
const clockTag = /*#__PURE__*/Tag();
/** @internal */
const MAX_TIMER_MILLIS = 2 ** 31 - 1;
/** @internal */
const globalClockScheduler = {
  unsafeSchedule(task, duration) {
    // If the duration is greater than the value allowable by the JS timer
    // functions, treat the value as an infinite duration
    if (duration.millis > MAX_TIMER_MILLIS) {
      return Function_constFalse;
    }
    let completed = false;
    const handle = setTimeout(() => {
      completed = true;
      task();
    }, duration.millis);
    return () => {
      clearTimeout(handle);
      return !completed;
    };
  }
};
/** @internal */
class ClockImpl {
  constructor() {
    this[clock_a] = ClockTypeId;
  }
  unsafeCurrentTimeMillis() {
    return new Date().getTime();
  }
  currentTimeMillis() {
    return bodyWithTrace(trace => core_sync(() => this.unsafeCurrentTimeMillis()).traced(trace));
  }
  scheduler() {
    return bodyWithTrace(trace => core_succeed(globalClockScheduler).traced(trace));
  }
  sleep(duration) {
    return bodyWithTrace(trace => asyncInterruptEither(cb => {
      const canceler = globalClockScheduler.unsafeSchedule(() => cb(core_unit()), duration);
      return Either_left(core_asUnit(core_sync(canceler)));
    }).traced(trace));
  }
}
clock_a = ClockTypeId;
/** @internal */
const clock_make = () => new ClockImpl();
//# sourceMappingURL=clock.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/List.mjs
/**
 * @since 1.0.0
 */
var List_a, List_b;
/**
 * This file is ported from
 *
 * Scala (https://www.scala-lang.org)
 *
 * Copyright EPFL and Lightbend, Inc.
 *
 * Licensed under Apache License 2.0
 * (http://www.apache.org/licenses/LICENSE-2.0).
 */







const ListSymbolKey = "@fp-ts/data/List";
/**
 * @since 1.0.0
 * @category symbol
 */
const ListTypeId = /*#__PURE__*/Symbol.for(ListSymbolKey);
const listVariance = {
  _A: _ => _
};
class ConsImpl {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this._tag = "Cons";
    this[List_a] = listVariance;
  }
  toString() {
    return `List.Cons(${List_toReadonlyArray(this).map(String).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "List.Cons",
      values: List_toReadonlyArray(this)
    };
  }
  [(List_a = ListTypeId, Symbol.for("nodejs.util.inspect.custom"))]() {
    return this.toJSON();
  }
  [Equal_symbol](that) {
    return isList(that) && this._tag === that._tag && equalsWith(this, that, equals);
  }
  [Hash_symbol]() {
    return Hash_string(ListSymbolKey);
  }
  [Symbol.iterator]() {
    let done = false;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let self = this;
    return {
      next() {
        if (done) {
          return this.return();
        }
        if (self._tag === "Nil") {
          done = true;
          return this.return();
        }
        const value = self.head;
        self = self.tail;
        return {
          done,
          value
        };
      },
      return(value) {
        if (!done) {
          done = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  }
}
class NilImpl {
  constructor() {
    this._tag = "Nil";
    this[List_b] = listVariance;
  }
  toString() {
    return `List.Nil`;
  }
  toJSON() {
    return {
      _tag: "List.Nil"
    };
  }
  [(List_b = ListTypeId, Symbol.for("nodejs.util.inspect.custom"))]() {
    return this.toJSON();
  }
  [Hash_symbol]() {
    return Hash_array(Array.from(this));
  }
  [Equal_symbol](that) {
    return isList(that) && this._tag === that._tag;
  }
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: true,
          value: undefined
        };
      }
    };
  }
}
/**
 * Returns `true` if the specified value is a `List`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const isList = u => typeof u === "object" && u != null && ListTypeId in u;
/**
 * Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const isNil = self => self._tag === "Nil";
/**
 * Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const isCons = self => self._tag === "Cons";
/**
 * Returns the number of elements contained in the specified `List`
 *
 * @since 1.0.0
 * @category getters
 */
const List_length = self => {
  let these = self;
  let len = 0;
  while (!isNil(these)) {
    len += 1;
    these = these.tail;
  }
  return len;
};
/**
 * Returns `true` if the two lists are equal according to the provided function,
 * `false` otherwise.
 *
 * @since 1.0.0
 * @category combinators
 */
const equalsWith = /*#__PURE__*/Dual_dual(3, (self, that, f) => {
  if (self === that) {
    return true;
  }
  if (List_length(self) !== List_length(that)) {
    return false;
  }
  const selfIterator = self[Symbol.iterator]();
  const thatIterator = that[Symbol.iterator]();
  let nextSelf;
  let nextThat;
  while (!(nextSelf = selfIterator.next()).done && !(nextThat = thatIterator.next()).done) {
    if (!f(nextSelf.value, nextThat.value)) {
      return false;
    }
  }
  return true;
});
const _Nil = /*#__PURE__*/new NilImpl();
/**
 * Constructs a new `List.Nil<A>`.
 *
 * @since 1.0.0
 * @category constructors
 */
const nil = () => _Nil;
/**
 * Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.
 *
 * @since 1.0.0
 * @category constructors
 */
const cons = (head, tail) => new ConsImpl(head, tail);
/**
 * Constructs a new empty `List<A>`.
 *
 * @since 1.0.0
 * @category constructors
 */
const List_empty = () => _Nil;
/**
 * Constructs a new `List<A>` from the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
const List_of = value => new ConsImpl(value, _Nil);
/**
 * Constructs a new `List<A>` from the specified `Iterable<A>`.
 *
 * @since 1.0.0
 * @category constructors
 */
const List_fromIterable = prefix => {
  const iterator = prefix[Symbol.iterator]();
  let next;
  if ((next = iterator.next()) && !next.done) {
    const result = new ConsImpl(next.value, _Nil);
    let curr = result;
    while ((next = iterator.next()) && !next.done) {
      const temp = new ConsImpl(next.value, _Nil);
      curr.tail = temp;
      curr = temp;
    }
    return result;
  } else {
    return _Nil;
  }
};
/**
 * Constructs a new `List<A>` from the specified values.
 *
 * @since 1.0.0
 * @category constructors
 */
const List_make = (...elements) => List_fromIterable(elements);
/**
 * Removes all `None` values from the specified list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_compact = self => List_filterMap(self, identity);
/**
 * Concatentates the specified lists together.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_concat = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => List_prependAll(that, self))));
/**
 * Drops the first `n` elements from the specified list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_drop = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => {
  if (n <= 0) {
    return self;
  }
  if (n >= List_length(self)) {
    return _Nil;
  }
  let these = self;
  let i = 0;
  while (!isNil(these) && i < n) {
    these = these.tail;
    i += 1;
  }
  return these;
})));
/**
 * Returns `true` if all elements of the specified list satisfy the specified
 * predicate, `false` otherwise.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_every = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => {
  for (const a of self) {
    if (!predicate(a)) {
      return false;
    }
  }
  return true;
})));
/**
 * Filters a list using the specified predicate.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_filter = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => noneIn(self, predicate, false))));
/**
 * Filters and maps a list using the specified partial function. The resulting
 * list may be smaller than the input list due to the possibility of the partial
 * function not being defined for some elements.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_filterMap = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, pf) => {
  const bs = [];
  for (const a of self) {
    const oa = pf(a);
    if (Option.isSome(oa)) {
      bs.push(oa.value);
    }
  }
  return List_fromIterable(bs);
})));
/**
 * Returns the first element of the specified list that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_findFirst = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => {
  let these = self;
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return Option.some(these.head);
    }
    these = these.tail;
  }
  return Option.none();
})));
/**
 * Flat maps a list using the specified function.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_flatMap = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  let rest = self;
  let head = undefined;
  let tail = undefined;
  while (!isNil(rest)) {
    let bs = f(rest.head);
    while (!isNil(bs)) {
      const next = new ConsImpl(bs.head, _Nil);
      if (tail === undefined) {
        head = next;
      } else {
        tail.tail = next;
      }
      tail = next;
      bs = bs.tail;
    }
    rest = rest.tail;
  }
  if (head === undefined) {
    return _Nil;
  }
  return head;
})));
/**
 * Applies the specified function to each element of the list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_forEach = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  let these = self;
  while (!isNil(these)) {
    f(these.head);
    these = these.tail;
  }
})));
/**
 * Returns the first element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 1.0.0
 * @category getters
 */
const List_head = self => isNil(self) ? Option.none() : Option.some(self.head);
/**
 * Returns the last element of the specified list, or `None` if the list is
 * empty.
 *
 * @since 1.0.0
 * @category getters
 */
const List_last = self => isNil(self) ? Option.none() : Option.some(List_unsafeLast(self));
/**
 * Applies the specified mapping function to each element of the list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_map = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  if (isNil(self)) {
    return self;
  } else {
    const head = new ConsImpl(f(self.head), _Nil);
    let nextHead = head;
    let rest = self.tail;
    while (!isNil(rest)) {
      const next = new ConsImpl(f(rest.head), _Nil);
      nextHead.tail = next;
      nextHead = next;
      rest = rest.tail;
    }
    return head;
  }
})));
/**
 * Partition a list into two lists, where the first list contains all elements
 * that did not satisfy the specified predicate, and the second list contains
 * all elements that did satisfy the specified predicate.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_partition = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => {
  const left = [];
  const right = [];
  for (const a of self) {
    if (predicate(a)) {
      right.push(a);
    } else {
      left.push(a);
    }
  }
  return [List_fromIterable(left), List_fromIterable(right)];
})));
/**
 * Partition a list into two lists, where the first list contains all elements
 * for which the specified function returned a `Left`, and the second list
 * contains all elements for which the specified function returned a `Right`.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_partitionMap = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  const left = [];
  const right = [];
  for (const a of self) {
    const e = f(a);
    if (Either.isLeft(e)) {
      left.push(e.left);
    } else {
      right.push(e.right);
    }
  }
  return [List_fromIterable(left), List_fromIterable(right)];
})));
/**
 * Prepends the specified element to the beginning of the list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_prepend = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, element) => cons(element, self))));
/**
 * Prepends the specified prefix list to the beginning of the specified list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_prependAll = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, prefix) => {
  if (isNil(self)) {
    return prefix;
  } else if (isNil(prefix)) {
    return self;
  } else {
    const result = new ConsImpl(prefix.head, self);
    let curr = result;
    let that = prefix.tail;
    while (!isNil(that)) {
      const temp = new ConsImpl(that.head, self);
      curr.tail = temp;
      curr = temp;
      that = that.tail;
    }
    return result;
  }
})));
/**
 * Prepends the specified prefix list (in reverse order) to the beginning of the
 * specified list.
 *
 * @since 1.0.0
 * @category combinators
 */
const prependAllReversed = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, prefix) => {
  let these = self;
  let pres = prefix;
  while (isCons(pres)) {
    these = new ConsImpl(pres.head, these);
    pres = pres.tail;
  }
  return these;
})));
/**
 * Folds over the elements of the list using the specified function, using the
 * specified initial value.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_reduce = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, zero, f) => {
  let acc = zero;
  let these = self;
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
})));
/**
 * Folds over the elements of the list using the specified function, beginning
 * with the last element of the list, using the specified initial value.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_reduceRight = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, zero, f) => {
  let acc = zero;
  let these = List_reverse(self);
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
})));
/**
 * Returns a new list with the elements of the specified list in reverse order.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_reverse = self => {
  let result = List_empty();
  let these = self;
  while (!isNil(these)) {
    result = List_prepend(result, these.head);
    these = these.tail;
  }
  return result;
};
/**
 * Returns `true` if any element of the specified list satisfies the specified
 * predicate, `false` otherwise.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_some = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, predicate) => {
  let these = self;
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return true;
    }
    these = these.tail;
  }
  return false;
})));
/**
 * Splits the specified list into two lists at the specified index.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_splitAt = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => [List_take(self, n), List_drop(self, n)])));
/**
 * Returns the tail of the specified list, or `None` if the list is empty.
 *
 * @since 1.0.0
 * @category getters
 */
const List_tail = self => isNil(self) ? Option.none() : Option.some(self.tail);
/**
 * Takes the specified number of elements from the beginning of the specified
 * list.
 *
 * @since 1.0.0
 * @category combinators
 */
const List_take = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => {
  if (n <= 0) {
    return _Nil;
  }
  if (n >= List_length(self)) {
    return self;
  }
  let these = List_make(List_unsafeHead(self));
  let current = unsafeTail(self);
  for (let i = 1; i < n; i++) {
    these = new ConsImpl(List_unsafeHead(current), these);
    current = unsafeTail(current);
  }
  return List_reverse(these);
})));
/**
 * Converts the specified list to a `Chunk`.
 *
 * @since 1.0.0
 * @category conversions
 */
const toChunk = self => Chunk.fromIterable(self);
/**
 * Converts the specified list to a `ReadonlyArray`.
 *
 * @since 1.0.0
 * @category conversions
 */
const List_toReadonlyArray = self => Array.from(self);
/**
 * Unsafely returns the first element of the specified `List`.
 *
 * @since 1.0.0
 * @category unsafe
 */
const List_unsafeHead = self => {
  if (isNil(self)) {
    throw new Error("Error: Expected List to be non-empty");
  }
  return self.head;
};
/**
 * Unsafely returns the last element of the specified `List`.
 *
 * @since 1.0.0
 * @category unsafe
 */
const List_unsafeLast = self => {
  if (isNil(self)) {
    throw new Error("Error: Expected List to be non-empty");
  }
  let these = self;
  let scout = self.tail;
  while (!isNil(scout)) {
    these = scout;
    scout = scout.tail;
  }
  return these.head;
};
/**
 * Unsafely returns the tail of the specified `List`.
 *
 * @since 1.0.0
 * @category unsafe
 */
const unsafeTail = self => {
  if (isNil(self)) {
    throw new Error("Error: Expected List to be non-empty");
  }
  return self.tail;
};
const noneIn = (self, predicate, isFlipped) => {
  /* eslint-disable no-constant-condition */
  while (true) {
    if (isNil(self)) {
      return _Nil;
    } else {
      if (predicate(self.head) !== isFlipped) {
        return allIn(self, self.tail, predicate, isFlipped);
      } else {
        self = self.tail;
      }
    }
  }
};
const allIn = (self, remaining, predicate, isFlipped) => {
  /* eslint-disable no-constant-condition */
  while (true) {
    if (isNil(remaining)) {
      return self;
    } else {
      if (predicate(remaining.head) !== isFlipped) {
        remaining = remaining.tail;
      } else {
        return partialFill(self, remaining, predicate, isFlipped);
      }
    }
  }
};
const partialFill = (self, firstMiss, predicate, isFlipped) => {
  const newHead = new ConsImpl(List_unsafeHead(self), _Nil);
  let toProcess = unsafeTail(self);
  let currentLast = newHead;
  while (!(toProcess === firstMiss)) {
    const newElem = new ConsImpl(List_unsafeHead(toProcess), _Nil);
    currentLast.tail = newElem;
    currentLast = unsafeCoerce(newElem);
    toProcess = unsafeCoerce(toProcess.tail);
  }
  let next = firstMiss.tail;
  let nextToCopy = unsafeCoerce(next);
  while (!isNil(next)) {
    const head = List_unsafeHead(next);
    if (predicate(head) !== isFlipped) {
      next = next.tail;
    } else {
      while (!(nextToCopy === next)) {
        const newElem = new ConsImpl(List_unsafeHead(nextToCopy), _Nil);
        currentLast.tail = newElem;
        currentLast = newElem;
        nextToCopy = unsafeCoerce(nextToCopy.tail);
      }
      nextToCopy = unsafeCoerce(next.tail);
      next = next.tail;
    }
  }
  if (!isNil(nextToCopy)) {
    currentLast.tail = nextToCopy;
  }
  return newHead;
};
//# sourceMappingURL=List.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/configProvider/pathPatch.mjs







/** @internal */
const pathPatch_empty = {
  _tag: "Empty"
};
/** @internal */
const pathPatch_andThen = /*#__PURE__*/dual(2, (self, that) => ({
  _tag: "AndThen",
  first: self,
  second: that
}));
/** @internal */
const mapName = /*#__PURE__*/dual(2, (self, f) => pathPatch_andThen(self, {
  _tag: "MapName",
  f
}));
/** @internal */
const pathPatch_nested = /*#__PURE__*/dual(2, (self, name) => pathPatch_andThen(self, {
  _tag: "Nested",
  name
}));
/** @internal */
const unnested = /*#__PURE__*/dual(2, (self, name) => pathPatch_andThen(self, {
  _tag: "Unnested",
  name
}));
/** @internal */
const pathPatch_patch = /*#__PURE__*/dual(2, (path, patch) => {
  let input = List_of(patch);
  let output = path;
  while (isCons(input)) {
    const patch = input.head;
    switch (patch._tag) {
      case "Empty":
        {
          input = input.tail;
          break;
        }
      case "AndThen":
        {
          input = cons(patch.first, cons(patch.second, input.tail));
          break;
        }
      case "MapName":
        {
          output = Chunk_map(output, patch.f);
          input = input.tail;
          break;
        }
      case "Nested":
        {
          output = Chunk_prepend(output, patch.name);
          input = input.tail;
          break;
        }
      case "Unnested":
        {
          const containsName = Option_contains(Equivalence)(patch.name)(Chunk_head(output));
          if (containsName) {
            output = Chunk_tailNonEmpty(output);
            input = input.tail;
          } else {
            return Either_left(MissingData(output, `Expected ${patch.name} to be in path in ConfigProvider#unnested`));
          }
          break;
        }
    }
  }
  return Either_right(output);
});
//# sourceMappingURL=pathPatch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/string-utils.mjs
/**
 * Adapted from the `change-case` library.
 *
 * Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)
 */
/** @internal */
const lowerCase = str => str.toLowerCase();
/** @internal */
const upperCase = str => str.toUpperCase();
/**
 * Replace `re` in the input string with the replacement value.
 */
const string_utils_replace = (input, re, value) => re instanceof RegExp ? input.replace(re, value) : re.reduce((input, re) => input.replace(re, value), input);
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
const noCase = (input, options = {}) => {
  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = " "
  } = options;
  const result = string_utils_replace(string_utils_replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  let start = 0;
  let end = result.length;
  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") {
    start++;
  }
  while (result.charAt(end - 1) === "\0") {
    end--;
  }
  // Transform each token independently.
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
};
const pascalCaseTransform = (input, index) => {
  const firstChar = input.charAt(0);
  const lowerChars = input.substring(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`;
  }
  return `${firstChar.toUpperCase()}${lowerChars}`;
};
/** @internal */
const pascalCase = (input, options = {}) => noCase(input, {
  delimiter: "",
  transform: pascalCaseTransform,
  ...options
});
const camelCaseTransform = (input, index) => index === 0 ? input.toLowerCase() : pascalCaseTransform(input, index);
/** @internal */
const camelCase = (input, options = {}) => pascalCase(input, {
  transform: camelCaseTransform,
  ...options
});
/** @internal */
const constantCase = (input, options = {}) => noCase(input, {
  delimiter: "_",
  transform: upperCase,
  ...options
});
/** @internal */
const kebabCase = (input, options = {}) => noCase(input, {
  delimiter: "-",
  ...options
});
/** @internal */
const snakeCase = (input, options = {}) => noCase(input, {
  delimiter: "_",
  ...options
});
//# sourceMappingURL=string-utils.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/configProvider.mjs













/** @internal */
const configProviderTag = /*#__PURE__*/Tag();
/** @internal */
const ConfigProviderSymbolKey = "@effect/io/Config/Provider";
/** @internal */
const ConfigProviderTypeId = /*#__PURE__*/Symbol.for(ConfigProviderSymbolKey);
/** @internal */
const FlatConfigProviderSymbolKey = "@effect/io/Config/Provider/Flat";
/** @internal */
const FlatConfigProviderTypeId = /*#__PURE__*/Symbol.for(FlatConfigProviderSymbolKey);
/** @internal */
const configProvider_make = /*#__PURE__*/untracedMethod(restore => (load, flattened) => ({
  [ConfigProviderTypeId]: ConfigProviderTypeId,
  load: methodWithTrace(trace => config => restore(load)(config).traced(trace)),
  flattened
}));
/** @internal */
const makeFlat = /*#__PURE__*/untracedMethod(restore => (load, enumerateChildren, patch) => ({
  [FlatConfigProviderTypeId]: FlatConfigProviderTypeId,
  patch,
  load: methodWithTrace(trace => (path, config, split = true) => restore(load)(path, config, split).traced(trace)),
  enumerateChildren: methodWithTrace(trace => path => restore(enumerateChildren)(path).traced(trace))
}));
/** @internal */
const fromFlat = /*#__PURE__*/untracedMethod(() => flat => configProvider_make(config => core_flatMap(fromFlatLoop(flat, Chunk_empty(), config, false), chunk => Option_match(() => core_fail(MissingData(Chunk_empty(), `Expected a single value having structure: ${config}`)), core_succeed)(Chunk_head(chunk))), flat));
/** @internal */
const fromEnv = /*#__PURE__*/untracedMethod(() => (config = {}) => {
  const {
    pathDelim,
    seqDelim
  } = Object.assign({}, {
    pathDelim: "_",
    seqDelim: ","
  }, config);
  const makePathString = path => Chunk_join(pathDelim)(path);
  const unmakePathString = pathString => pathString.split(pathDelim);
  const getEnv = () => typeof process !== "undefined" && "env" in process && typeof process.env === "object" ? process.env : {};
  const load = (path, primitive, split = true) => {
    const pathString = makePathString(path);
    const current = getEnv();
    const valueOpt = pathString in current ? Option_some(current[pathString]) : Option_none();
    return core_flatMap(value => parsePrimitive(value, path, primitive, seqDelim, split))(mapError(() => MissingData(path, `Expected ${pathString} to exist in the process context`))(core_fromOption(valueOpt)));
  };
  const enumerateChildren = path => core_sync(() => {
    const current = getEnv();
    const keys = Object.keys(current);
    const keyPaths = Array.from(keys).map(value => unmakePathString(value.toUpperCase()));
    const filteredKeyPaths = keyPaths.filter(keyPath => {
      for (let i = 0; i < path.length; i++) {
        const pathComponent = Chunk_unsafeGet(i)(path);
        const currentElement = keyPath[i];
        if (currentElement === undefined || pathComponent !== currentElement) {
          return false;
        }
      }
      return true;
    }).flatMap(keyPath => keyPath.slice(path.length, path.length + 1));
    return mjs_HashSet_fromIterable(filteredKeyPaths);
  });
  return fromFlat(makeFlat(load, enumerateChildren, pathPatch_empty));
});
/** @internal */
const fromMap = /*#__PURE__*/untracedMethod(() => (map, config = {}) => {
  const {
    pathDelim,
    seqDelim
  } = Object.assign({}, {
    seqDelim: ",",
    pathDelim: "."
  }, config);
  const makePathString = path => Chunk_join(pathDelim)(path);
  const unmakePathString = pathString => pathString.split(pathDelim);
  const load = (path, primitive, split = true) => {
    const pathString = makePathString(path);
    const valueOpt = map.has(pathString) ? Option_some(map.get(pathString)) : Option_none();
    return core_flatMap(value => parsePrimitive(value, path, primitive, seqDelim, split))(mapError(() => MissingData(path, `Expected ${pathString} to exist in the provided map`))(core_fromOption(valueOpt)));
  };
  const enumerateChildren = path => core_sync(() => {
    const keyPaths = Array.from(map.keys()).map(unmakePathString);
    const filteredKeyPaths = keyPaths.filter(keyPath => {
      for (let i = 0; i < path.length; i++) {
        const pathComponent = Chunk_unsafeGet(i)(path);
        const currentElement = keyPath[i];
        if (currentElement === undefined || pathComponent !== currentElement) {
          return false;
        }
      }
      return true;
    }).flatMap(keyPath => keyPath.slice(path.length, path.length + 1));
    return mjs_HashSet_fromIterable(filteredKeyPaths);
  });
  return fromFlat(makeFlat(load, enumerateChildren, pathPatch_empty));
});
const configProvider_extend = (leftDef, rightDef, left, right) => {
  const leftPad = Chunk_unfold(left.length, index => index >= right.length ? Option_none() : Option_some([leftDef(index), index + 1]));
  const rightPad = Chunk_unfold(right.length, index => index >= left.length ? Option_none() : Option_some([rightDef(index), index + 1]));
  const leftExtension = Chunk_concat(leftPad)(left);
  const rightExtension = Chunk_concat(rightPad)(right);
  return [leftExtension, rightExtension];
};
const fromFlatLoop = (flat, prefix, config, split) => {
  const op = config;
  switch (op._tag) {
    case OP_CONSTANT:
      {
        return core_succeed(Chunk_of(op.value));
      }
    case OP_DESCRIBED:
      {
        return suspendSucceed(() => fromFlatLoop(flat, prefix, op.config, split));
      }
    case OP_FAIL:
      {
        return core_fail(MissingData(prefix, op.message));
      }
    case OP_FALLBACK:
      {
        return core_catchAll(error1 => {
          if (op.condition(error1)) {
            return core_catchAll(error2 => core_fail(Or(error1, error2)))(fromFlatLoop(flat, prefix, op.second, split));
          }
          return core_fail(error1);
        })(suspendSucceed(() => fromFlatLoop(flat, prefix, op.first, split)));
      }
    case OP_LAZY:
      {
        return suspendSucceed(() => fromFlatLoop(flat, prefix, op.config(), split));
      }
    case OP_MAP_OR_FAIL:
      {
        return suspendSucceed(() => core_flatMap(core_forEach(a => mapError(prefixed(prefix))(core_fromEither(op.mapOrFail(a)))))(fromFlatLoop(flat, prefix, op.original, split)));
      }
    case OP_NESTED:
      {
        return suspendSucceed(() => fromFlatLoop(flat, Chunk_concat(Chunk_of(op.name))(prefix), op.config, split));
      }
    case OP_PRIMITIVE:
      {
        return core_flatMap(prefix => core_flatMap(values => {
          if (Chunk_isEmpty(values)) {
            const name = Option_getOrElse(() => "<n/a>")(Chunk_last(prefix));
            return core_fail(missingError(name));
          }
          return core_succeed(values);
        })(flat.load(prefix, op, split)))(core_fromEither(pathPatch_patch(prefix, flat.patch)));
      }
    case OP_SEQUENCE:
      {
        return suspendSucceed(() => core_map(Chunk_of)(fromFlatLoop(flat, prefix, op.config, true)));
      }
    case OP_TABLE:
      {
        return suspendSucceed(() => core_flatMap(prefix => core_flatMap(keys => {
          return core_map(values => {
            if (values.length === 0) {
              return Chunk_of(mjs_HashMap_empty());
            }
            const matrix = toReadonlyArray(values).map(toReadonlyArray);
            return Chunk_map(values => mjs_HashMap_fromIterable(Chunk_zip(Chunk_fromIterable(keys), values)))(unsafeFromArray(transpose(matrix).map(unsafeFromArray)));
          })(core_forEach(key => fromFlatLoop(flat, Chunk_concat(Chunk_of(key))(prefix), op.valueConfig, split))(keys));
        })(flat.enumerateChildren(prefix)))(core_fromEither(pathPatch_patch(prefix, flat.patch))));
      }
    case OP_ZIP_WITH:
      {
        return suspendSucceed(() => core_flatMap(left => core_flatMap(right => {
          if (Either_isLeft(left) && Either_isLeft(right)) {
            return core_fail(And(left.left, right.left));
          }
          if (Either_isLeft(left) && Either_isRight(right)) {
            return core_fail(left.left);
          }
          if (Either_isRight(left) && Either_isLeft(right)) {
            return core_fail(right.left);
          }
          if (Either_isRight(left) && Either_isRight(right)) {
            const path = Chunk_join(".")(prefix);
            const fail = fromFlatLoopFail(prefix, path);
            const [lefts, rights] = configProvider_extend(fail, fail, Chunk_map(Either_right)(left.right), Chunk_map(Either_right)(right.right));
            return core_forEach(([left, right]) => core_map(([left, right]) => op.zip(left, right))(core_zip(core_fromEither(right))(core_fromEither(left))))(Chunk_zip(rights)(lefts));
          }
          throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/io/issues");
        })(core_either(fromFlatLoop(flat, prefix, op.right, split))))(core_either(fromFlatLoop(flat, prefix, op.left, split))));
      }
  }
};
const fromFlatLoopFail = (prefix, path) => index => Either_left(MissingData(prefix, `The element at index ${index} in a sequence at path "${path}" was missing`));
/** @internal */
const contramapPath = /*#__PURE__*/untracedDual(2, restore => (self, f) => fromFlat(contramapPathFlat(self.flattened, restore(f))));
const contramapPathFlat = (self, f) => makeFlat((path, config, split = true) => self.load(path, config, split), path => self.enumerateChildren(path), mapName(self.patch, f));
/** @internal */
const configProvider_nested = /*#__PURE__*/untracedDual(2, () => (self, name) => fromFlat(makeFlat((path, config) => self.flattened.load(path, config, true), path => self.flattened.enumerateChildren(Chunk_prepend(name)(path)), pathPatch_nested(self.flattened.patch, name))));
/** @internal */
const configProvider_unnested = /*#__PURE__*/untracedDual(2, () => (self, name) => fromFlat(makeFlat((path, config) => self.flattened.load(path, config, true), path => self.flattened.enumerateChildren(path), unnested(self.flattened.patch, name))));
/** @internal */
const configProvider_orElse = /*#__PURE__*/untracedDual(2, restore => (self, that) => fromFlat(orElseFlat(self.flattened, () => restore(that)().flattened)));
const orElseFlat = (self, that) => makeFlat((path, config, split) => core_catchAll(error1 => core_flatMap(that => core_catchAll(error2 => core_fail(Or(error1, error2)))(core_flatMap(patch => that.load(patch, config, split))(core_fromEither(pathPatch_patch(path, that.patch)))))(core_sync(that)))(core_flatMap(patch => self.load(patch, config, split))(core_fromEither(pathPatch_patch(path, self.patch)))), path => core_flatMap(left => core_flatMap(that => core_flatMap(right => {
  if (Either_isLeft(left) && Either_isLeft(right)) {
    return core_fail(And(left.left, right.left));
  }
  if (Either_isLeft(left) && Either_isRight(right)) {
    return core_fail(left.left);
  }
  if (Either_isRight(left) && Either_isLeft(right)) {
    return core_fail(right.left);
  }
  if (Either_isRight(left) && Either_isRight(right)) {
    return core_succeed(mjs_HashSet_union(right.right)(left.right));
  }
  throw new Error("BUG: ConfigProvider.orElseFlat - please report an issue at https://github.com/Effect-TS/io/issues");
})(core_either(core_flatMap(patch => that.enumerateChildren(patch))(core_fromEither(pathPatch_patch(path, that.patch))))))(core_sync(that)))(core_either(core_flatMap(patch => self.enumerateChildren(patch))(core_fromEither(pathPatch_patch(path, self.patch))))), pathPatch_empty);
/** @internal */
const configProvider_constantCase = self => contramapPath(self, constantCase);
/** @internal */
const configProvider_kebabCase = self => contramapPath(self, kebabCase);
/** @internal */
const configProvider_lowerCase = self => contramapPath(self, lowerCase);
/** @internal */
const configProvider_snakeCase = self => contramapPath(self, snakeCase);
/** @internal */
const configProvider_upperCase = self => contramapPath(self, upperCase);
/** @internal */
const within = /*#__PURE__*/untracedDual(3, () => (self, path, f) => {
  const unnest = Chunk_reduce(path, self, (provider, name) => configProvider_unnested(provider, name));
  const nest = Chunk_reduceRight(path, f(unnest), (provider, name) => configProvider_nested(provider, name));
  return configProvider_orElse(nest, () => self);
});
const splitPathString = (text, delim) => {
  const split = text.split(new RegExp(`\\s*${escapeRegex(delim)}\\s*`));
  return unsafeFromArray(split);
};
const parsePrimitive = (text, path, primitive, delimiter, split) => {
  if (!split) {
    return mapError(prefixed(path))(core_map(Chunk_of)(core_fromEither(primitive.parse(text))));
  }
  return mapError(prefixed(path))(core_forEach(char => core_fromEither(primitive.parse(char.trim())))(splitPathString(text, delimiter)));
};
const transpose = array => {
  return Object.keys(array[0]).map(column => array.map(row => row[column]));
};
const escapeRegex = string => {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
};
//# sourceMappingURL=configProvider.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/random.mjs
var random_a;





/** @internal */
const RandomSymbolKey = "@effect/io/Random";
/** @internal */
const RandomTypeId = /*#__PURE__*/Symbol.for(RandomSymbolKey);
/** @internal */
const randomTag = /*#__PURE__*/Tag();
/** @internal */
class RandomImpl {
  constructor(seed) {
    this.seed = seed;
    this[random_a] = RandomTypeId;
    this.PRNG = new PCGRandom(seed);
  }
  next() {
    return bodyWithTrace(trace => core_sync(() => this.PRNG.number()).traced(trace));
  }
  nextBoolean() {
    return bodyWithTrace(trace => core_map(this.next(), n => n > 0.5).traced(trace));
  }
  nextInt() {
    return bodyWithTrace(trace => core_sync(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER)).traced(trace));
  }
  nextRange(min, max) {
    return bodyWithTrace(trace => core_map(this.next(), n => (max - min) * n + min).traced(trace));
  }
  nextIntBetween(min, max) {
    return bodyWithTrace(trace => core_sync(() => this.PRNG.integer(1 + max - min) + min).traced(trace));
  }
  shuffle(elements) {
    return bodyWithTrace(trace => shuffleWith(elements, n => this.nextIntBetween(0, n)).traced(trace));
  }
}
random_a = RandomTypeId;
const shuffleWith = (elements, nextIntBounded) => {
  return suspendSucceed(() => core_flatMap(buffer => {
    const numbers = [];
    for (let i = buffer.length; i >= 2; i = i - 1) {
      numbers.push(i);
    }
    return core_as(Chunk_fromIterable(buffer))(forEachDiscard(n => core_map(k => swap(buffer, n - 1, k))(nextIntBounded(n)))(numbers));
  })(core_sync(() => Array.from(elements))));
};
const swap = (buffer, index1, index2) => {
  const tmp = buffer[index1];
  buffer[index1] = buffer[index2];
  buffer[index2] = tmp;
  return buffer;
};
const random_make = seed => new RandomImpl(seed);
//# sourceMappingURL=random.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/defaultServices.mjs






/** @internal */
const liveServices = /*#__PURE__*/mjs_Context_add(configProviderTag, fromEnv())( /*#__PURE__*/mjs_Context_add(randomTag, random_make(Math.random() * 4294967296 >>> 0))( /*#__PURE__*/mjs_Context_add(clockTag, clock_make())( /*#__PURE__*/mjs_Context_empty())));
/**
 * The `FiberRef` holding the default `Effect` services.
 *
 * @since 1.0.0
 * @category fiberRefs
 */
const currentServices = /*#__PURE__*/fiberRefUnsafeMakeContext(liveServices);
// circular with Clock
/** @internal */
const currentTimeMillis = /*#__PURE__*/methodWithTrace(trace => () => clockWith(clock => clock.currentTimeMillis()).traced(trace));
/** @internal */
const sleep = /*#__PURE__*/methodWithTrace(trace => duration => clockWith(clock => clock.sleep(duration)).traced(trace));
/** @internal */
const clockWith = /*#__PURE__*/methodWithTrace((trace, restore) => f => fiberRefGetWith(currentServices, services => restore(f)(mjs_Context_get(clockTag)(services))).traced(trace));
/** @internal */
const withClock = /*#__PURE__*/dualWithTrace(2, trace => (effect, value) => fiberRefLocallyWith(currentServices, mjs_Context_add(clockTag, value))(effect).traced(trace));
// circular with ConfigProvider
/** @internal */
const withConfigProvider = /*#__PURE__*/dualWithTrace(2, trace => (effect, value) => fiberRefLocallyWith(currentServices, mjs_Context_add(configProviderTag, value))(effect).traced(trace));
/** @internal */
const configProviderWith = /*#__PURE__*/methodWithTrace((trace, restore) => f => fiberRefGetWith(currentServices, services => restore(f)(mjs_Context_get(configProviderTag)(services))).traced(trace));
/** @internal */
const config = /*#__PURE__*/methodWithTrace(trace => config => configProviderWith(_ => _.load(config)).traced(trace));
/** @internal */
const configOrDie = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => config => core.orDie(configProviderWith(_ => _.load(config))).traced(trace))));
// circular with Random
/** @internal */
const randomWith = /*#__PURE__*/methodWithTrace((trace, restore) => f => fiberRefGetWith(currentServices, services => restore(f)(mjs_Context_get(randomTag)(services))).traced(trace));
/** @internal */
const next = /*#__PURE__*/methodWithTrace(trace => () => randomWith(random => random.next()).traced(trace));
/** @internal */
const nextInt = /*#__PURE__*/methodWithTrace(trace => () => randomWith(random => random.nextInt()).traced(trace));
/** @internal */
const nextBoolean = /*#__PURE__*/methodWithTrace(trace => () => randomWith(random => random.nextBoolean()).traced(trace));
/** @internal */
const nextRange = /*#__PURE__*/methodWithTrace(trace => (min, max) => randomWith(random => random.nextRange(min, max)).traced(trace));
/** @internal */
const nextIntBetween = /*#__PURE__*/methodWithTrace(trace => (min, max) => randomWith(random => random.nextIntBetween(min, max)).traced(trace));
/** @internal */
const shuffle = /*#__PURE__*/methodWithTrace(trace => elements => randomWith(random => random.shuffle(elements)).traced(trace));
//# sourceMappingURL=defaultServices.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Clock.mjs


/**
 * @since 1.0.0
 * @category symbols
 */
const Clock_ClockTypeId = ClockTypeId;
/**
 * @since 1.0.0
 * @category constructors
 */
const Clock_make = clock_make;
/**
 * @since 1.0.0
 * @category constructors
 */
const Clock_sleep = sleep;
/**
 * @since 1.0.0
 * @category constructors
 */
const Clock_currentTimeMillis = currentTimeMillis;
/**
 * @since 1.0.0
 * @category constructors
 */
const Clock_clockWith = clockWith;
/**
 * @since 1.0.0
 * @category context
 */
const Clock_Tag = clockTag;
//# sourceMappingURL=Clock.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberRefs.mjs
var fiberRefs_a;






/** @internal */
function fiberRefs_unsafeMake(fiberRefLocals) {
  return new FiberRefsImpl(fiberRefLocals);
}
/** @internal */
const FiberRefsSym = /*#__PURE__*/Symbol.for("@effect/io/FiberRefs");
/** @internal */
class FiberRefsImpl {
  constructor(locals) {
    this.locals = locals;
    this[fiberRefs_a] = FiberRefsSym;
  }
}
fiberRefs_a = FiberRefsSym;
/** @internal */
const findAncestor = (_ref, _parentStack, _childStack, _childModified = false) => {
  const ref = _ref;
  let parentStack = _parentStack;
  let childStack = _childStack;
  let childModified = _childModified;
  let ret = undefined;
  while (ret === undefined) {
    if (ReadonlyArray_isNonEmpty(parentStack) && ReadonlyArray_isNonEmpty(childStack)) {
      const parentFiberId = headNonEmpty(parentStack)[0];
      const parentAncestors = tailNonEmpty(parentStack);
      const childFiberId = headNonEmpty(childStack)[0];
      const childRefValue = headNonEmpty(childStack)[1];
      const childAncestors = tailNonEmpty(childStack);
      if (parentFiberId.startTimeMillis < childFiberId.startTimeMillis) {
        childStack = childAncestors;
        childModified = true;
      } else if (parentFiberId.startTimeMillis > childFiberId.startTimeMillis) {
        parentStack = parentAncestors;
      } else {
        if (parentFiberId.id < childFiberId.id) {
          childStack = childAncestors;
          childModified = true;
        } else if (parentFiberId.id > childFiberId.id) {
          parentStack = parentAncestors;
        } else {
          ret = [childRefValue, childModified];
        }
      }
    } else {
      ret = [ref.initial, true];
    }
  }
  return ret;
};
/** @internal */
const joinAs = /*#__PURE__*/dual(3, (self, fiberId, that) => {
  const parentFiberRefs = new Map(self.locals);
  for (const [fiberRef, childStack] of that.locals) {
    const childValue = headNonEmpty(childStack)[1];
    if (!equals(headNonEmpty(childStack)[0], fiberId)) {
      if (!parentFiberRefs.has(fiberRef)) {
        if (equals(childValue, fiberRef.initial)) {
          continue;
        }
        parentFiberRefs.set(fiberRef, [[fiberId, fiberRef.join(fiberRef.initial, childValue)]]);
        continue;
      }
      const parentStack = parentFiberRefs.get(fiberRef);
      const [ancestor, wasModified] = findAncestor(fiberRef, parentStack, childStack);
      if (wasModified) {
        const patch = fiberRef.diff(ancestor, childValue);
        const oldValue = headNonEmpty(parentStack)[1];
        const newValue = fiberRef.join(oldValue, fiberRef.patch(patch)(oldValue));
        if (!equals(oldValue, newValue)) {
          let newStack;
          const parentFiberId = headNonEmpty(parentStack)[0];
          if (equals(parentFiberId, fiberId)) {
            newStack = prepend([parentFiberId, newValue])(tailNonEmpty(parentStack));
          } else {
            newStack = prepend([fiberId, newValue])(parentStack);
          }
          parentFiberRefs.set(fiberRef, newStack);
        }
      }
    }
  }
  return new FiberRefsImpl(new Map(parentFiberRefs));
});
/** @internal */
const forkAs = /*#__PURE__*/dual(2, (self, childId) => {
  const map = new Map();
  for (const [fiberRef, stack] of self.locals.entries()) {
    const oldValue = headNonEmpty(stack)[1];
    const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
    if (equals(oldValue, newValue)) {
      map.set(fiberRef, stack);
    } else {
      map.set(fiberRef, prepend([childId, newValue])(stack));
    }
  }
  return new FiberRefsImpl(map);
});
/** @internal */
const fiberRefs_fiberRefs = self => mjs_HashSet_fromIterable(self.locals.keys());
/** @internal */
const setAll = /*#__PURE__*/methodWithTrace(trace => self => forEachDiscard(fiberRefs_fiberRefs(self), fiberRef => fiberRefSet(fiberRef, getOrDefault(self, fiberRef))).traced(trace));
/** @internal */
const delete_ = /*#__PURE__*/dual(2, (self, fiberRef) => {
  const locals = new Map(self.locals);
  locals.delete(fiberRef);
  return new FiberRefsImpl(locals);
});
/** @internal */
const fiberRefs_get = /*#__PURE__*/dual(2, (self, fiberRef) => {
  if (!self.locals.has(fiberRef)) {
    return Option_none();
  }
  return Option_some(headNonEmpty(self.locals.get(fiberRef))[1]);
});
/** @internal */
const getOrDefault = /*#__PURE__*/dual(2, (self, fiberRef) => Option_getOrElse(() => fiberRef.initial)(fiberRefs_get(self, fiberRef)));
/** @internal */
const updatedAs = /*#__PURE__*/dual(4, (self, fiberId, fiberRef, value) => {
  const oldStack = self.locals.has(fiberRef) ? self.locals.get(fiberRef) : ReadonlyArray_empty();
  let newStack;
  if (ReadonlyArray_isEmpty(oldStack)) {
    newStack = ReadonlyArray_of([fiberId, value]);
  } else {
    const [currentId, currentValue] = headNonEmpty(oldStack);
    if (equals(currentId, fiberId)) {
      if (equals(currentValue, value)) {
        return self;
      } else {
        newStack = prepend([fiberId, value])(tailNonEmpty(oldStack));
      }
    } else {
      newStack = prepend([fiberId, value])(oldStack);
    }
  }
  const locals = new Map(self.locals);
  return new FiberRefsImpl(locals.set(fiberRef, newStack));
});
//# sourceMappingURL=fiberRefs.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/FiberRefs.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const FiberRefs_FiberRefsSym = FiberRefsSym;
const FiberRefs_delete_ = delete_;

/**
 * Returns a set of each `FiberRef` in this collection.
 *
 * @since 1.0.0
 * @category getters
 */
const FiberRefs_fiberRefs = fiberRefs_fiberRefs;
/**
 * Forks this collection of fiber refs as the specified child fiber id. This
 * will potentially modify the value of the fiber refs, as determined by the
 * individual fiber refs that make up the collection.
 *
 * @since 1.0.0
 * @category mutations
 */
const FiberRefs_forkAs = forkAs;
/**
 * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
 * values if it exists or `None` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const FiberRefs_get = fiberRefs_get;
/**
 * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
 * values if it exists or the `initial` value of the `FiberRef` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const FiberRefs_getOrDefault = getOrDefault;
/**
 * Joins this collection of fiber refs to the specified collection, as the
 * specified fiber id. This will perform diffing and merging to ensure
 * preservation of maximum information from both child and parent refs.
 *
 * @since 1.0.0
 * @category mutations
 */
const FiberRefs_joinAs = joinAs;
/**
 * Set each ref to either its value or its default.
 *
 * @since 1.0.0
 * @category mutations
 */
const FiberRefs_setAll = setAll;
/**
 * Updates the value of the specified `FiberRef` using the provided `FiberId`
 *
 * @since 1.0.0
 * @category mutations
 */
const FiberRefs_updatedAs = updatedAs;
/**
 * Note: it will not copy the provided Map, make sure to provide a fresh one.
 *
 * @since 1.0.0
 * @category unsafe
 */
const FiberRefs_unsafeMake = fiberRefs_unsafeMake;
//# sourceMappingURL=FiberRefs.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberRefs/patch.mjs




/** @internal */
const patch_OP_EMPTY = "Empty";
/** @internal */
const OP_ADD = "Add";
/** @internal */
const OP_REMOVE = "Remove";
/** @internal */
const OP_UPDATE = "Update";
/** @internal */
const OP_AND_THEN = "AndThen";
/** @internal */
const patch_empty = () => ({
  _tag: patch_OP_EMPTY
});
/** @internal */
const patch_diff = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch = patch_empty();
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue = headNonEmpty(pairs)[1];
    const old = missingLocals.get(fiberRef);
    if (old !== undefined) {
      const oldValue = headNonEmpty(old)[1];
      if (!equals(oldValue, newValue)) {
        patch = patch_combine({
          _tag: OP_UPDATE,
          fiberRef,
          patch: fiberRef.diff(oldValue, newValue)
        })(patch);
      }
    } else {
      patch = patch_combine({
        _tag: OP_ADD,
        fiberRef,
        value: newValue
      })(patch);
    }
    missingLocals.delete(fiberRef);
  }
  for (const [fiberRef] of missingLocals.entries()) {
    patch = patch_combine({
      _tag: OP_REMOVE,
      fiberRef
    })(patch);
  }
  return patch;
};
/** @internal */
const patch_combine = /*#__PURE__*/dual(2, (self, that) => ({
  _tag: OP_AND_THEN,
  first: self,
  second: that
}));
/** @internal */
const patch_patch = /*#__PURE__*/dual(3, (self, fiberId, oldValue) => {
  let fiberRefs = oldValue;
  let patches = ReadonlyArray_of(self);
  while (ReadonlyArray_isNonEmpty(patches)) {
    const head = headNonEmpty(patches);
    const tail = tailNonEmpty(patches);
    switch (head._tag) {
      case patch_OP_EMPTY:
        {
          patches = tail;
          break;
        }
      case OP_ADD:
        {
          fiberRefs = updatedAs(fiberRefs, fiberId, head.fiberRef, head.value);
          patches = tail;
          break;
        }
      case OP_REMOVE:
        {
          fiberRefs = delete_(fiberRefs, head.fiberRef);
          patches = tail;
          break;
        }
      case OP_UPDATE:
        {
          const value = getOrDefault(fiberRefs, head.fiberRef);
          fiberRefs = updatedAs(fiberRefs, fiberId, head.fiberRef, head.fiberRef.patch(head.patch)(value));
          patches = tail;
          break;
        }
      case OP_AND_THEN:
        {
          patches = prepend(head.first)(prepend(head.second)(tail));
          break;
        }
    }
  }
  return fiberRefs;
});
//# sourceMappingURL=patch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/label.mjs
var label_a;


/** @internal */
const MetricLabelSymbolKey = "@effect/io/Metric/Label";
/** @internal */
const MetricLabelTypeId = /*#__PURE__*/Symbol.for(MetricLabelSymbolKey);
/** @internal */
class MetricLabelImpl {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this[label_a] = MetricLabelTypeId;
  }
  [(label_a = MetricLabelTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.value))(combine(Hash_hash(this.key))(Hash_hash(MetricLabelSymbolKey)));
  }
  [Equal_symbol](that) {
    return isMetricLabel(that) && this.key === that.key && this.value === that.value;
  }
}
/** @internal */
const label_make = (key, value) => {
  return new MetricLabelImpl(key, value);
};
/** @internal */
const isMetricLabel = u => {
  return typeof u === "object" && u != null && MetricLabelTypeId in u;
};
//# sourceMappingURL=label.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/singleShotGen.mjs
/** @internal */
class SingleShotGen {
  constructor(self) {
    this.self = self;
    this.called = false;
  }
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new SingleShotGen(this.self);
  }
}
//# sourceMappingURL=singleShotGen.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/typeclass/Bounded.mjs



/**
 * `Monoid` that returns last minimum of elements.
 *
 * @category constructors
 * @since 1.0.0
 */
const Bounded_min = B => monoid.fromSemigroup(semigroup.min(B), B.maxBound);
/**
 * `Monoid` that returns last maximum of elements.
 *
 * @category constructors
 * @since 1.0.0
 */
const Bounded_max = B => monoid.fromSemigroup(semigroup.max(B), B.minBound);
/**
 * @category instances
 * @since 1.0.0
 */
const Bounded_number = {
  compare: Order_number.compare,
  maxBound: Infinity,
  minBound: -Infinity
};
/**
 * Clamp a value between `minBound` and `maxBound` values.
 *
 * @since 1.0.0
 */
const Bounded_clamp = B => order.clamp(B)(B.minBound, B.maxBound);
/**
 * Reverses the `Order` of a `Bounded` and flips `maxBound` and `minBound` values.
 *
 * @since 1.0.0
 */
const Bounded_reverse = B => ({
  ...order.reverse(B),
  minBound: B.minBound,
  maxBound: B.maxBound
});
//# sourceMappingURL=Bounded.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+core@0.1.1/node_modules/@fp-ts/core/mjs/Number.mjs






/**
 * @category guards
 * @since 1.0.0
 */
const Number_isNumber = isNumber;
/**
 * @since 1.0.0
 */
const sum = that => self => semigroup.numberSum.combine(self, that);
/**
 * @since 1.0.0
 */
const multiply = that => self => semigroup.numberMultiply.combine(self, that);
/**
 * @since 1.0.0
 */
const subtract = that => self => self - that;
/**
 * @since 1.0.0
 */
const divide = that => self => self / that;
/**
 * @since 1.0.0
 */
const Number_increment = n => n + 1;
/**
 * @since 1.0.0
 */
const Number_decrement = n => n - 1;
/**
 * @category instances
 * @since 1.0.0
 */
const Number_Equivalence = number;
/**
 * @category instances
 * @since 1.0.0
 */
const Number_Order = Order_number;
/**
 * @category instances
 * @since 1.0.0
 */
const Bounded = Bounded_number;
/**
 * `number` semigroup under addition.
 *
 * @example
 * import { SemigroupSum } from '@fp-ts/core/Number'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(SemigroupSum.combine(2, 3), 5)
 *
 * @category instances
 * @since 1.0.0
 */
const SemigroupSum = numberSum;
/**
 * @category instances
 * @since 1.0.0
 */
const SemigroupMax = /*#__PURE__*/(/* unused pure expression or super */ null && (semigroup.max(Number_Order)));
/**
 * @category instances
 * @since 1.0.0
 */
const SemigroupMin = /*#__PURE__*/(/* unused pure expression or super */ null && (semigroup.min(Number_Order)));
/**
 * `number` semigroup under multiplication.
 *
 * @example
 * import { SemigroupMultiply } from '@fp-ts/core/Number'
 * import { pipe } from '@fp-ts/core/Function'
 *
 * assert.deepStrictEqual(SemigroupMultiply.combine(2, 3), 6)
 *
 * @category instances
 * @since 1.0.0
 */
const SemigroupMultiply = numberMultiply;
/**
 * `number` monoid under addition.
 *
 * The `empty` value is `0`.
 *
 * @category instances
 * @since 1.0.0
 */
const MonoidSum = Monoid_numberSum;
/**
 * `number` monoid under multiplication.
 *
 * The `empty` value is `1`.
 *
 * @category instances
 * @since 1.0.0
 */
const MonoidMultiply = Monoid_numberMultiply;
/**
 * @category instances
 * @since 1.0.0
 */
const MonoidMax = /*#__PURE__*/(/* unused pure expression or super */ null && (bounded.max(Bounded)));
/**
 * @category instances
 * @since 1.0.0
 */
const MonoidMin = /*#__PURE__*/(/* unused pure expression or super */ null && (bounded.min(Bounded)));
/**
 * @since 1.0.0
 */
const sign = n => n < 0 ? -1 : n > 0 ? 1 : 0;
/*

  Missing:

  - toFixed
  - toPrecision
  - toExponential
  - toLocaleString

*/
//# sourceMappingURL=Number.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Logger/Level.mjs



/**
 * @since 1.0.0
 * @category constructors
 */
const All = logLevelAll;
/**
 * @since 1.0.0
 * @category constructors
 */
const Fatal = logLevelFatal;
/**
 * @since 1.0.0
 * @category constructors
 */
const Level_Error = logLevelError;
/**
 * @since 1.0.0
 * @category constructors
 */
const Warning = logLevelWarning;
/**
 * @since 1.0.0
 * @category constructors
 */
const Info = logLevelInfo;
/**
 * @since 1.0.0
 * @category constructors
 */
const Level_Debug = logLevelDebug;
/**
 * @since 1.0.0
 * @category constructors
 */
const Trace = logLevelTrace;
/**
 * @since 1.0.0
 * @category constructors
 */
const Level_None = logLevelNone;
/**
 * Locally applies the specified `LogLevel` to an `Effect` workflow, reverting
 * to the previous `LogLevel` after the `Effect` workflow completes.
 *
 * @since 1.0.0
 * @category mutations
 */
const locally = level => core.fiberRefLocally(core.currentLogLevel, level);
/**
 * @since 1.0.0
 * @category instances
 */
const Level_Order = /*#__PURE__*/Order_contramap(level => level.ordinal)(Number_Order);
/**
 * @since 1.0.0
 * @category ordering
 */
const Level_lessThan = /*#__PURE__*/(/* unused pure expression or super */ null && (order.lessThan(Level_Order)));
/**
 * @since 1.0.0
 * @category ordering
 */
const lessThanEqual = /*#__PURE__*/(/* unused pure expression or super */ null && (order.lessThanOrEqualTo(Level_Order)));
/**
 * @since 1.0.0
 * @category ordering
 */
const Level_greaterThan = /*#__PURE__*/(/* unused pure expression or super */ null && (order.greaterThan(Level_Order)));
/**
 * @since 1.0.0
 * @category ordering
 */
const greaterThanEqual = /*#__PURE__*/greaterThanOrEqualTo(Level_Order);
/**
 * @since 1.0.0
 * @category conversions
 */
const fromLiteral = _ => {
  switch (_) {
    case "All":
      {
        return All;
      }
    case "Debug":
      {
        return Level_Debug;
      }
    case "Error":
      {
        return Level_Error;
      }
    case "Fatal":
      {
        return Fatal;
      }
    case "Info":
      {
        return Info;
      }
    case "Trace":
      {
        return Trace;
      }
    case "None":
      {
        return Level_None;
      }
    case "Warning":
      {
        return Warning;
      }
  }
};
//# sourceMappingURL=Level.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/logSpan.mjs
/** @internal */
const logSpan_make = (label, startTime) => ({
  label,
  startTime
});
/** @internal */
const logSpan_render = now => {
  return self => {
    const label = self.label.replace(/[\s="]/g, "_");
    return `${label}=${now - self.startTime}ms`;
  };
};
//# sourceMappingURL=logSpan.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Logger/Span.mjs
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category constructors
 */
const Span_make = logSpan_make;
/**
 * @since 1.0.0
 * @category destructors
 */
const Span_render = logSpan_render;
//# sourceMappingURL=Span.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Random.mjs


/**
 * @since 1.0.0
 * @category symbols
 */
const Random_RandomTypeId = RandomTypeId;
/**
 * Returns the next numeric value from the pseudo-random number generator.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_next = next;
/**
 * Returns the next integer value from the pseudo-random number generator.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_nextInt = nextInt;
/**
 * Returns the next boolean value from the pseudo-random number generator.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_nextBoolean = nextBoolean;
/**
 * Returns the next numeric value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_nextRange = nextRange;
/**
 * Returns the next integer value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_nextIntBetween = nextIntBetween;
/**
 * Uses the pseudo-random number generator to shuffle the specified iterable.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_shuffle = shuffle;
/**
 * Retreives the `Random` service from the context and uses it to run the
 * specified workflow.
 *
 * @since 1.0.0
 * @category constructors
 */
const Random_randomWith = randomWith;
//# sourceMappingURL=Random.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/ref.mjs
var ref_a;




/** @internal */
const RefTypeId = /*#__PURE__*/Symbol.for("@effect/io/Ref");
/** @internal */
const refVariance = {
  _A: _ => _
};
class RefImpl {
  constructor(ref) {
    this.ref = ref;
    this[ref_a] = refVariance;
  }
  modify(f) {
    return bodyWithTrace((trace, restore) => core_sync(() => {
      const current = MutableRef_get(this.ref);
      const [b, a] = restore(f)(current);
      if (current !== a) {
        MutableRef_set(a)(this.ref);
      }
      return b;
    }).traced(trace));
  }
}
ref_a = RefTypeId;
/** @internal */
const ref_unsafeMake = value => new RefImpl(MutableRef_make(value));
/** @internal */
const ref_make = /*#__PURE__*/methodWithTrace(trace => value => core_sync(() => ref_unsafeMake(value)).traced(trace));
/** @internal */
const ref_get = /*#__PURE__*/methodWithTrace(trace => self => self.modify(a => [a, a]).traced(trace));
/** @internal */
const ref_set = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => self.modify(() => [void 0, value]).traced(trace));
/** @internal */
const ref_getAndSet = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => self.modify(a => [a, value]).traced(trace));
/** @internal */
const ref_getAndUpdate = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => self.modify(a => [a, restore(f)(a)]).traced(trace));
/** @internal */
const getAndUpdateSome = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => self.modify(value => {
  const option = restore(pf)(value);
  switch (option._tag) {
    case "None":
      {
        return [value, value];
      }
    case "Some":
      {
        return [value, option.value];
      }
  }
}).traced(trace));
/** @internal */
const ref_setAndGet = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => self.modify(() => [value, value]).traced(trace));
/** @internal */
const ref_modify = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => self.modify(restore(f)).traced(trace));
/** @internal */
const modifySome = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, fallback, pf) => self.modify(value => {
  const option = restore(pf)(value);
  switch (option._tag) {
    case "None":
      {
        return [fallback, value];
      }
    case "Some":
      {
        return option.value;
      }
  }
}).traced(trace));
/** @internal */
const ref_update = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => self.modify(a => [void 0, restore(f)(a)]).traced(trace));
/** @internal */
const ref_updateAndGet = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => self.modify(a => {
  const result = restore(f)(a);
  return [result, result];
}).traced(trace));
/** @internal */
const updateSome = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => self.modify(a => [void 0, Option_match(() => a, b => b)(restore(f)(a))]).traced(trace));
/** @internal */
const updateSomeAndGet = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => self.modify(value => {
  const option = restore(pf)(value);
  switch (option._tag) {
    case "None":
      {
        return [value, value];
      }
    case "Some":
      {
        return [option.value, option.value];
      }
  }
}).traced(trace));
/** @internal */
const ref_unsafeGet = self => MutableRef.get(self.ref);
//# sourceMappingURL=ref.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Ref.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const Ref_RefTypeId = RefTypeId;
/**
 * @since 1.0.0
 * @category constructors
 */
const Ref_make = ref_make;
/**
 * @since 1.0.0
 * @category getters
 */
const Ref_get = ref_get;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_getAndSet = ref_getAndSet;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_getAndUpdate = ref_getAndUpdate;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_getAndUpdateSome = getAndUpdateSome;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_modify = ref_modify;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_modifySome = modifySome;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_set = ref_set;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_setAndGet = ref_setAndGet;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_update = ref_update;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_updateAndGet = ref_updateAndGet;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_updateSome = updateSome;
/**
 * @since 1.0.0
 * @category mutations
 */
const Ref_updateSomeAndGet = updateSomeAndGet;
/**
 * @since 1.0.0
 * @category unsafe
 */
const Ref_unsafeMake = ref_unsafeMake;
//# sourceMappingURL=Ref.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/Duration.mjs
/**
 * @since 1.0.0
 */



const Duration_TypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/Duration");
/** @internal */
class DurationImpl {
  constructor(millis) {
    this.millis = millis;
    this._id = Duration_TypeId;
  }
  [Hash_symbol]() {
    return Hash_hash(this.millis);
  }
  [Equal_symbol](that) {
    return isDuration(that) && this.millis === that.millis;
  }
}
/**
 * @since 1.0.0
 * @category guards
 */
const isDuration = u => typeof u === "object" && u != null && "_id" in u && u["_id"] === Duration_TypeId;
/**
 * @since 1.0.0
 * @category constructors
 */
const zero = /*#__PURE__*/new DurationImpl(0);
/**
 * @since 1.0.0
 * @category constructors
 */
const infinity = /*#__PURE__*/new DurationImpl(Infinity);
/**
 * @since 1.0.0
 * @category constructors
 */
const millis = millis => new DurationImpl(millis);
/**
 * @since 1.0.0
 * @category constructors
 */
const seconds = seconds => new DurationImpl(seconds * 1000);
/**
 * @since 1.0.0
 * @category constructors
 */
const minutes = minutes => new DurationImpl(minutes * 60000);
/**
 * @since 1.0.0
 * @category constructors
 */
const hours = hours => new DurationImpl(hours * 3600000);
/**
 * @since 1.0.0
 * @category constructors
 */
const days = days => new DurationImpl(days * 86400000);
/**
 * @since 1.0.0
 * @category constructors
 */
const weeks = weeks => new DurationImpl(weeks * 604800000);
/**
 * @since 1.0.0
 * @category mutations
 */
const times = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, times) => new DurationImpl(self.millis * times))));
/**
 * @since 1.0.0
 * @category mutations
 */
const Duration_add = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => new DurationImpl(self.millis + that.millis))));
/**
 * @since 1.0.0
 * @category mutations
 */
const Duration_subtract = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => new DurationImpl(self.millis - that.millis))));
/**
 * @since 1.0.0
 * @category comparisons
 */
const Duration_lessThan = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => self.millis < that.millis)));
/**
 * @since 1.0.0
 * @category comparisons
 */
const Duration_lessThanOrEqualTo = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => self.millis <= that.millis)));
/**
 * @since 1.0.0
 * @category comparisons
 */
const Duration_greaterThan = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => self.millis > that.millis)));
/**
 * @since 1.0.0
 * @category comparisons
 */
const Duration_greaterThanOrEqualTo = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => self.millis >= that.millis)));
/**
 * @since 1.0.0
 * @category comparisons
 */
const Duration_equals = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, that) => self.millis === that.millis)));
//# sourceMappingURL=Duration.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/effect.mjs






















/* @internal */
const absolve = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(self, core_fromEither).traced(trace));
/* @internal */
const absorb = /*#__PURE__*/methodWithTrace(trace => self => absorbWith(self, Function_identity).traced(trace));
/* @internal */
const absorbWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchEffect(sandbox(self), cause => core_fail(squashWith(restore(f))(cause)), core_succeed).traced(trace));
/* @internal */
const allowInterrupt = /*#__PURE__*/methodWithTrace(trace => () => descriptorWith(descriptor => mjs_HashSet_size(descriptor.interruptors) > 0 ? core_interrupt() : core_unit()).traced(trace));
/* @internal */
const asLeft = /*#__PURE__*/methodWithTrace(trace => self => core_map(Either_left)(self).traced(trace));
/* @internal */
const asLeftError = /*#__PURE__*/methodWithTrace(trace => self => mapError(Either_left)(self).traced(trace));
/* @internal */
const asRight = /*#__PURE__*/methodWithTrace(trace => self => core_map(Either_right)(self).traced(trace));
/* @internal */
const asRightError = /*#__PURE__*/methodWithTrace(trace => self => mapError(Either_right)(self).traced(trace));
/* @internal */
const asSome = /*#__PURE__*/methodWithTrace(trace => self => core_map(Option_some)(self).traced(trace));
/* @internal */
const asSomeError = /*#__PURE__*/methodWithTrace(trace => self => mapError(Option_some)(self).traced(trace));
/* @internal */
const asyncOption = /*#__PURE__*/methodWithTrace((trace, restore) => (register, blockingOn = Id_none) => asyncInterruptEither(cb => {
  const option = restore(register)(cb);
  switch (option._tag) {
    case "None":
      {
        return Either_left(core_unit());
      }
    case "Some":
      {
        return Either_right(option.value);
      }
  }
}, blockingOn).traced(trace));
/* @internal */
const attempt = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => core_sync(() => {
  try {
    return restore(evaluate)();
  } catch (error) {
    throw makeEffectError(cause_fail(error));
  }
}).traced(trace));
/* @internal */
const blocking = /*#__PURE__*/methodWithTrace(trace => self => zipRight(yieldNow("background"), self).traced(trace));
/* @internal */
const _catch = /*#__PURE__*/dualWithTrace(
// @ts-expect-error - TODO: figure out why the above functions do not infer properly (probably a TS bug DF doesn't extend (...args: any[]) => any), but ofc it does)
4, (trace, restore) => (self, tag, k, f) => core_catchAll(self, e => {
  if (typeof e === "object" && e != null && tag in e && e[tag] === k) {
    return restore(f)(e);
  }
  return core_fail(e);
}).traced(trace));
/* @internal */
const catchAllDefect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => catchSomeDefect(self, defect => Option_some(restore(f)(defect))).traced(trace));
/* @internal */
const catchSomeCause = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, cause => {
  const option = restore(f)(cause);
  switch (option._tag) {
    case "None":
      {
        return failCause(cause);
      }
    case "Some":
      {
        return option.value;
      }
  }
}, core_succeed).traced(trace));
/* @internal */
const catchSomeDefect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => core_catchAll(s => s)(unrefineWith(self, restore(pf), core_fail)).traced(trace));
/* @internal */
const catchTag = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, k, f) => core_catchAll(self, e => {
  if ("_tag" in e && e["_tag"] === k) {
    return restore(f)(e);
  }
  return core_fail(e);
}).traced(trace));
/* @internal */
const cause = /*#__PURE__*/methodWithTrace(trace => self => matchCause(Function_identity, () => cause_empty)(self).traced(trace));
/* @internal */
const clock = /*#__PURE__*/methodWithTrace(trace => () => effect_clockWith(core_succeed).traced(trace));
/* @internal */
const effect_clockWith = Clock_clockWith;
/* @internal */
const effect_collectAll = /*#__PURE__*/methodWithTrace(trace => effects => core_forEach(effects, Function_identity).traced(trace));
/* @internal */
const collectAllDiscard = /*#__PURE__*/methodWithTrace(trace => effects => forEachDiscard(effects, Function_identity).traced(trace));
/* @internal */
const collectAllWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, pf) => core_map(effect_collectAll(elements), Chunk_filterMap(restore(pf))).traced(trace));
/* @internal */
const collectAllWithEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => {
  const array = Array.from(elements);
  // Break out early if there are no elements
  if (array.length === 0) {
    return core_succeed(Chunk_empty()).traced(trace);
  }
  // Break out early if there is only one element
  if (array.length === 1) {
    const option = restore(f)(array[0]);
    switch (option._tag) {
      case "None":
        {
          return core_succeed(Chunk_empty()).traced(trace);
        }
      case "Some":
        {
          return core_map(option.value, Chunk_of).traced(trace);
        }
    }
  }
  // Otherwise create the intermediate result structure
  let result = core_succeed(Chunk_empty());
  for (let i = array.length - 1; i >= 0; i--) {
    const option = restore(f)(array[i]);
    if (option._tag === "Some") {
      result = core_zipWith(result, option.value, (list, b) => Chunk_prepend(b)(list));
    }
  }
  return core_map(result, Chunk_fromIterable).traced(trace);
});
/* @internal */
const collectAllSuccesses = /*#__PURE__*/methodWithTrace(trace => as => collectAllWith(exit => isSuccess(exit) ? Option_some(exit.value) : Option_none())(Array.from(as).map(core_exit)).traced(trace));
/* @internal */
const collectFirst = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => collectFirstLoop(restore, elements[Symbol.iterator](), restore(f))).traced(trace));
const collectFirstLoop = (restore, iterator, f) => {
  const next = restore(() => iterator.next())();
  return next.done ? core_succeed(Option_none()) : core_flatMap(option => {
    switch (option._tag) {
      case "None":
        {
          return collectFirstLoop(restore, iterator, f);
        }
      case "Some":
        {
          return core_succeed(option);
        }
    }
  })(f(next.value));
};
/* @internal */
const collectWhile = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => {
  const array = Array.from(elements);
  // Break out early if the input is empty
  if (array.length === 0) {
    return core_succeed(Chunk_empty()).traced(trace);
  }
  // Break out early if there is only one element in the list
  if (array.length === 1) {
    const option = restore(f)(array[0]);
    switch (option._tag) {
      case "None":
        {
          return core_succeed(Chunk_empty()).traced(trace);
        }
      case "Some":
        {
          return core_map(option.value, Chunk_of).traced(trace);
        }
    }
  }
  // Otherwise setup our intermediate result
  let result = core_succeed(Chunk_empty());
  for (let i = array.length - 1; i >= 0; i--) {
    const option = restore(f)(array[i]);
    switch (option._tag) {
      case "None":
        {
          return core_map(result, Chunk_fromIterable).traced(trace);
        }
      case "Some":
        {
          result = core_zipWith(result, option.value, (bs, b) => Chunk_prepend(b)(bs));
        }
    }
  }
  return core_map(result, Chunk_fromIterable).traced(trace);
});
/* @internal */
const cond = /*#__PURE__*/methodWithTrace((trace, restore) => (predicate, result, error) => suspendSucceed(() => restore(predicate)() ? core_sync(restore(result)) : failSync(restore(error))).traced(trace));
/* @internal */
const continueOrFail = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, error, pf) => continueOrFailEffect(self, error, a => Option_map(core_succeed)(restore(pf)(a))).traced(trace));
/* @internal */
const continueOrFailEffect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, error, pf) => core_flatMap(self, value => Option_getOrElse(() => core_fail(error))(restore(pf)(value))).traced(trace));
/* @internal */
const delay = /*#__PURE__*/dualWithTrace(2, trace => (self, duration) => zipRight(Clock_sleep(duration), self).traced(trace));
/* @internal */
const descriptor = /*#__PURE__*/methodWithTrace(trace => () => descriptorWith(core_succeed).traced(trace));
/* @internal */
const descriptorWith = /*#__PURE__*/methodWithTrace((trace, restore) => f => withFiberRuntime((state, status) => restore(f)({
  id: state.id(),
  status,
  interruptors: interruptors(state.getFiberRef(interruptedCause))
})).traced(trace));
/* @internal */
const dieMessage = /*#__PURE__*/methodWithTrace(trace => message => failCauseSync(() => die(RuntimeException(message))).traced(trace));
/* @internal */
const diffFiberRefs = /*#__PURE__*/methodWithTrace(trace => self => summarized(getFiberRefs(), patch_diff)(self).traced(trace));
/* @internal */
const effect_Do = /*#__PURE__*/methodWithTrace(trace => () => core_succeed({}).traced(trace));
/* @internal */
const effect_bind = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, tag, f) => core_flatMap(self, k => core_map(restore(f)(k), a => ({
  ...k,
  [tag]: a
}))).traced(trace));
/* @internal */
const bindValue = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, tag, f) => core_map(self, k => ({
  ...k,
  [tag]: restore(f)(k)
})).traced(trace));
/* @internal */
const dropUntil = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, predicate) => suspendSucceed(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping = core_succeed(false);
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    dropping = core_flatMap(dropping, bool => {
      if (bool) {
        builder.push(a);
        return core_succeed(true);
      }
      return restore(predicate)(a);
    });
  }
  return core_map(dropping, () => unsafeFromArray(builder));
}).traced(trace));
/* @internal */
const effect_dropWhile = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping = core_succeed(true);
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    dropping = core_flatMap(dropping, d => core_map(d ? restore(f)(a) : core_succeed(false), b => {
      if (!b) {
        builder.push(a);
      }
      return b;
    }));
  }
  return core_map(dropping, () => unsafeFromArray(builder));
}).traced(trace));
/* @internal */
const contextWith = /*#__PURE__*/methodWithTrace(trace => f => core_map(context(), f).traced(trace));
/* @internal */
const effect_exists = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => existsLoop(restore, elements[Symbol.iterator](), restore(f))).traced(trace));
const existsLoop = (restore, iterator, f) => {
  const next = restore(() => iterator.next())();
  if (next.done) {
    return core_succeed(false);
  }
  return core_flatMap(b => b ? core_succeed(b) : existsLoop(restore, iterator, f))(f(next.value));
};
/* @internal */
const eventually = /*#__PURE__*/methodWithTrace(trace => self => core_orElse(self, () => core_flatMap(() => eventually(self))(yieldNow())).traced(trace));
/* @internal */
const effect_filter = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => Array.from(elements).reduceRight((effect, a) => core_zipWith(effect, suspendSucceed(() => restore(f)(a)), (list, b) => b ? Chunk_prepend(a)(list) : list), core_sync(() => Chunk_empty()))).traced(trace));
/* @internal */
const filterNot = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => effect_filter(elements, a => core_map(restore(f)(a), b => !b)).traced(trace));
/* @internal */
const filterOrDie = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, defect) => filterOrElse(self, restore(f), () => dieSync(restore(defect))).traced(trace));
/* @internal */
const filterOrDieMessage = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, message) => filterOrElse(self, restore(f), () => dieMessage(message)).traced(trace));
/* @internal */
const filterOrElse = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, orElse) => filterOrElseWith(self, restore(f), orElse).traced(trace));
/* @internal */
const filterOrElseWith = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, orElse) => core_flatMap(self, a => restore(f)(a) ? core_succeed(a) : restore(orElse)(a)).traced(trace));
/* @internal */
const filterOrFail = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, error) => filterOrElse(self, restore(f), () => failSync(restore(error))).traced(trace));
/* @internal */
const effect_find = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => {
  const array = Array.from(elements);
  const iterator = array[Symbol.iterator]();
  const next = restore(() => iterator.next())();
  if (!next.done) {
    return findLoop(restore, iterator, restore(f), next.value);
  }
  return core_succeed(Option_none());
}).traced(trace));
const findLoop = (restore, iterator, f, value) => core_flatMap(f(value), result => {
  if (result) {
    return core_succeed(Option_some(value));
  }
  const next = restore(() => iterator.next())();
  if (!next.done) {
    return findLoop(restore, iterator, f, next.value);
  }
  return core_succeed(Option_none());
});
/* @internal */
const effect_firstSuccessOf = /*#__PURE__*/methodWithTrace(trace => effects => suspendSucceed(() => {
  const list = Chunk_fromIterable(effects);
  if (!Chunk_isNonEmpty(list)) {
    return dieSync(() => IllegalArgumentException(`Received an empty collection of effects`));
  }
  return Chunk_reduce(Chunk_headNonEmpty(list), (left, right) => core_orElse(left, () => right))(Chunk_tailNonEmpty(list));
}).traced(trace));
/* @internal */
const flattenErrorOption = /*#__PURE__*/dualWithTrace(2, trace => (self, fallback) => mapError(self, Option_getOrElse(() => fallback)).traced(trace));
/* @internal */
const flipWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => core_flip(restore(f)(core_flip(self))).traced(trace));
/* @internal */
const effect_match = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, onFailure, onSuccess) => matchEffect(self, e => core_succeed(restore(onFailure)(e)), a => core_succeed(restore(onSuccess)(a))).traced(trace));
/* @internal */
const forAll = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => forAllLoop(restore, elements[Symbol.iterator](), restore(f))).traced(trace));
const forAllLoop = (restore, iterator, f) => {
  const next = restore(() => iterator.next())();
  return next.done ? core_succeed(true) : core_flatMap(b => b ? forAllLoop(restore, iterator, f) : core_succeed(b))(f(next.value));
};
/* @internal */
const effect_forEachEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, () => core_succeed(Option_none()), a => core_map(restore(f)(a), Option_some)).traced(trace));
/* @internal */
const forEachOption = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (option, f) => {
  switch (option._tag) {
    case "None":
      {
        return core_succeed(Option_none()).traced(trace);
      }
    case "Some":
      {
        return core_map(restore(f)(option.value), Option_some).traced(trace);
      }
  }
});
/* @internal */
const effect_forEachWithIndex = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => {
  let index = 0;
  const acc = [];
  return core_map(() => unsafeFromArray(acc))(forEachDiscard(elements, a => core_map(restore(f)(a, index), b => {
    acc.push(b);
    index++;
  })));
}).traced(trace));
/* @internal */
const forever = /*#__PURE__*/methodWithTrace(trace => self => {
  const loop = core_flatMap(() => loop)(core_flatMap(self, () => yieldNow()));
  return loop.traced(trace);
});
/* @internal */
const fromEitherCause = /*#__PURE__*/methodWithTrace(trace => either => {
  switch (either._tag) {
    case "Left":
      {
        return failCause(either.left).traced(trace);
      }
    case "Right":
      {
        return core_succeed(either.right).traced(trace);
      }
  }
});
/** @internal */
class EffectGen {
  constructor(value) {
    this.value = value;
  }
  [Symbol.iterator]() {
    return new SingleShotGen(this);
  }
}
/**
 * Inspired by https://github.com/tusharmath/qio/pull/22 (revised)
  @internal */
const gen = /*#__PURE__*/methodWithTrace((trace, restore) => f => suspendSucceed(() => {
  const iterator = restore(() => f(self => new EffectGen(self)))();
  const state = restore(() => iterator.next())();
  const run = state => state.done ? core_succeed(state.value) : core_flatMap(val => run(restore(() => iterator.next(val))()))(state.value.value);
  return run(state);
}).traced(trace));
/* @internal */
const getFiberRefs = /*#__PURE__*/methodWithTrace(trace => () => withFiberRuntime(state => core_succeed(state.unsafeGetFiberRefs())).traced(trace));
/* @internal */
const getOrFail = /*#__PURE__*/methodWithTrace(trace => option => getOrFailWith(() => NoSuchElementException())(option).traced(trace));
/* @internal */
const getOrFailDiscard = /*#__PURE__*/methodWithTrace(trace => option => getOrFailWith(option, Function_constVoid).traced(trace));
/* @internal */
const getOrFailWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (option, error) => {
  switch (option._tag) {
    case "None":
      {
        return failSync(restore(error)).traced(trace);
      }
    case "Some":
      {
        return core_succeed(option.value).traced(trace);
      }
  }
});
/* @internal */
const effect_head = /*#__PURE__*/methodWithTrace((trace, restore) => self => matchEffect(e => core_fail(Option_some(e)), as => {
  const iterator = restore(() => as[Symbol.iterator]())();
  const next = restore(() => iterator.next())();
  if (next.done) {
    return core_fail(Option_none());
  }
  return core_succeed(next.value);
})(self).traced(trace));
/* @internal */
const ignore = /*#__PURE__*/methodWithTrace(trace => self => effect_match(self, Function_constVoid, Function_constVoid).traced(trace));
/* @internal */
const ignoreLogged = /*#__PURE__*/methodWithTrace(trace => self => matchCauseEffect(self, cause => logDebugCauseMessage("An error was silently ignored because it is not anticipated to be useful", cause), () => core_unit()).traced(trace));
/* @internal */
const inheritFiberRefs = /*#__PURE__*/methodWithTrace(trace => childFiberRefs => updateFiberRefs((parentFiberId, parentFiberRefs) => FiberRefs_joinAs(parentFiberRefs, parentFiberId, childFiberRefs)).traced(trace));
/* @internal */
const effect_isFailure = /*#__PURE__*/methodWithTrace(trace => self => effect_match(self, Function_constTrue, Function_constFalse).traced(trace));
/* @internal */
const effect_isSuccess = /*#__PURE__*/methodWithTrace(trace => self => effect_match(self, Function_constFalse, Function_constTrue).traced(trace));
/* @internal */
const iterate = /*#__PURE__*/methodWithTrace((trace, restore) => (initial, cont, body) => suspendSucceed(() => {
  if (restore(cont)(initial)) {
    return core_flatMap(restore(body)(initial), z2 => iterate(z2, restore(cont), restore(body)));
  }
  return core_succeed(initial);
}).traced(trace));
/* @internal */
const effect_left = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(self, e => core_fail(Either_left(e)), either => {
  switch (either._tag) {
    case "Left":
      {
        return core_succeed(either.left);
      }
    case "Right":
      {
        return core_fail(Either_right(either.right));
      }
  }
}).traced(trace));
/* @internal */
const leftWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => suspendSucceed(() => unleft(restore(f)(effect_left(self)))).traced(trace));
/** @internal */
const someFatal = /*#__PURE__*/Option_some(Fatal);
/** @internal */
const someError = /*#__PURE__*/Option_some(Level_Error);
/** @internal */
const someWarning = /*#__PURE__*/Option_some(Warning);
/** @internal */
const someTrace = /*#__PURE__*/Option_some(Trace);
/** @internal */
const someInfo = /*#__PURE__*/Option_some(Info);
/** @internal */
const someDebug = /*#__PURE__*/Option_some(Level_Debug);
/* @internal */
const log = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, Option_none());
  return core_unit();
}).traced(trace));
/* @internal */
const logDebug = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, someDebug);
  return core_unit();
}).traced(trace));
/* @internal */
const logDebugCause = /*#__PURE__*/methodWithTrace(trace => cause => withFiberRuntime(fiberState => {
  fiberState.log("", cause, someDebug);
  return core_unit();
}).traced(trace));
/* @internal */
const logDebugCauseMessage = /*#__PURE__*/methodWithTrace(trace => (message, cause) => withFiberRuntime(fiberState => {
  fiberState.log(message, cause, someDebug);
  return core_unit();
}).traced(trace));
/* @internal */
const logError = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, someError);
  return core_unit();
}).traced(trace));
/* @internal */
const logErrorCause = /*#__PURE__*/methodWithTrace(trace => cause => withFiberRuntime(fiberState => {
  fiberState.log("", cause, someError);
  return core_unit();
}).traced(trace));
/* @internal */
const logErrorCauseMessage = /*#__PURE__*/methodWithTrace(trace => (message, cause) => withFiberRuntime(fiberState => {
  fiberState.log(message, cause, someError);
  return core_unit();
}).traced(trace));
/* @internal */
const logFatal = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, someFatal);
  return core_unit();
}).traced(trace));
/* @internal */
const logFatalCause = /*#__PURE__*/methodWithTrace(trace => cause => withFiberRuntime(fiberState => {
  fiberState.log("", cause, someFatal);
  return core_unit();
}).traced(trace));
/* @internal */
const logFatalCauseMessage = /*#__PURE__*/methodWithTrace(trace => (message, cause) => withFiberRuntime(fiberState => {
  fiberState.log(message, cause, someFatal);
  return core_unit();
}).traced(trace));
/* @internal */
const logInfo = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, someInfo);
  return core_unit();
}).traced(trace));
/* @internal */
const logInfoCause = /*#__PURE__*/methodWithTrace(trace => cause => withFiberRuntime(fiberState => {
  fiberState.log("", cause, someInfo);
  return core_unit();
}).traced(trace));
/* @internal */
const logInfoCauseMessage = /*#__PURE__*/methodWithTrace(trace => (message, cause) => withFiberRuntime(fiberState => {
  fiberState.log(message, cause, someInfo);
  return core_unit();
}).traced(trace));
/* @internal */
const logWarning = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, someWarning);
  return core_unit();
}).traced(trace));
/* @internal */
const logWarningCause = /*#__PURE__*/methodWithTrace(trace => cause => withFiberRuntime(fiberState => {
  fiberState.log("", cause, someWarning);
  return core_unit();
}).traced(trace));
/* @internal */
const logWarningCauseMessage = /*#__PURE__*/methodWithTrace(trace => (message, cause) => withFiberRuntime(fiberState => {
  fiberState.log(message, cause, someWarning);
  return core_unit();
}).traced(trace));
/* @internal */
const logTrace = /*#__PURE__*/methodWithTrace(trace => message => withFiberRuntime(fiberState => {
  fiberState.log(message, cause_empty, someTrace);
  return core_unit();
}).traced(trace));
/* @internal */
const logTraceCause = /*#__PURE__*/methodWithTrace(trace => cause => withFiberRuntime(fiberState => {
  fiberState.log("", cause, someTrace);
  return core_unit();
}).traced(trace));
/* @internal */
const logTraceCauseMessage = /*#__PURE__*/methodWithTrace(trace => (message, cause) => withFiberRuntime(fiberState => {
  fiberState.log(message, cause, someTrace);
  return core_unit();
}).traced(trace));
/* @internal */
const logSpan = /*#__PURE__*/dualWithTrace(2, trace => (effect, label) => core_flatMap(fiberRefGet(currentLogSpan), stack => core_flatMap(Clock_currentTimeMillis(), now => suspendSucceed(() => {
  const logSpan = Span_make(label, now);
  return fiberRefLocally(currentLogSpan, Chunk_prepend(logSpan)(stack))(effect);
}))).traced(trace));
/* @internal */
const logAnnotate = /*#__PURE__*/dualWithTrace(3, trace => (effect, key, value) => core_flatMap(fiberRefGet(currentLogAnnotations), annotations => suspendSucceed(() => fiberRefLocally(currentLogAnnotations, HashMap_set(key, value)(annotations))(effect))).traced(trace));
/* @internal */
const logAnnotations = /*#__PURE__*/methodWithTrace(trace => () => fiberRefGet(currentLogAnnotations).traced(trace));
/* @internal */
const loop = /*#__PURE__*/methodWithTrace((trace, restore) => (initial, cont, inc, body) => loopInternal(initial, restore(cont), restore(inc), restore(body)).traced(trace));
const loopInternal = (initial, cont, inc, body) => {
  return suspendSucceed(() => {
    return cont(initial) ? core_flatMap(body(initial), a => core_map(loopInternal(inc(initial), cont, inc, body), Chunk_prepend(a))) : core_sync(() => Chunk_empty());
  });
};
/* @internal */
const loopDiscard = /*#__PURE__*/methodWithTrace((trace, restore) => (initial, cont, inc, body) => suspendSucceed(() => restore(cont)(initial) ? core_flatMap(restore(body)(initial), () => loopDiscard(restore(inc)(initial), restore(cont), restore(inc), restore(body))) : core_unit()).traced(trace));
/* @internal */
const effect_mapAccum = /*#__PURE__*/methodWithTrace((trace, restore) => (elements, zero, f) => suspendSucceed(() => {
  const iterator = restore(() => elements[Symbol.iterator]())();
  const builder = [];
  let result = core_succeed(zero);
  let next;
  while (!(next = iterator.next()).done) {
    result = core_flatMap(state => core_map(([z, b]) => {
      builder.push(b);
      return z;
    })(restore(f)(state, next.value)))(result);
  }
  return core_map(result, z => [z, unsafeFromArray(builder)]);
}).traced(trace));
/* @internal */
const effect_mapBoth = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, g) => matchEffect(self, e => failSync(() => restore(f)(e)), a => core_sync(() => restore(g)(a))).traced(trace));
/* @internal */
const effect_mapErrorCause = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, c => failCauseSync(() => restore(f)(c)), core_succeed).traced(trace));
/* @internal */
const mapTryCatch = /*#__PURE__*/dualWithTrace(3, trace => (self, f, onThrow) => core_flatMap(self, a => tryCatch(() => f(a), onThrow)).traced(trace));
/* @internal */
const memoize = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(deferred => core_map(complete => zipRight(core_flatMap(([patch, a]) => core_as(a)(patchFiberRefs(patch)))(deferredAwait(deferred)))(complete))(once(intoDeferred(deferred)(diffFiberRefs(self)))))(deferredMake()).traced(trace));
/* @internal */
const effect_merge = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(e => core_succeed(e), core_succeed)(self).traced(trace));
/* @internal */
const mergeAll = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, zero, f) => Array.from(elements).reduce((acc, a) => core_zipWith(acc, a, restore(f)), core_succeed(zero)).traced(trace));
/* @internal */
const negate = /*#__PURE__*/methodWithTrace(trace => self => core_map(b => !b)(self).traced(trace));
/* @internal */
const effect_none = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(e => core_fail(Option_some(e)), option => {
  switch (option._tag) {
    case "None":
      {
        return core_unit();
      }
    case "Some":
      {
        return core_fail(Option_none());
      }
  }
})(self).traced(trace));
/* @internal */
const noneOrFail = /*#__PURE__*/methodWithTrace(trace => option => core_flip(getOrFailDiscard(option)).traced(trace));
/* @internal */
const noneOrFailWith = /*#__PURE__*/methodWithTrace((trace, restore) => (option, f) => mapError(restore(f))(core_flip(getOrFailDiscard(option))).traced(trace));
/* @internal */
const once = /*#__PURE__*/methodWithTrace(trace => self => core_map(ref => core_asUnit(whenEffect(Ref_getAndSet(ref, false))(self)))(Ref_make(true)).traced(trace));
/* @internal */
const effect_option = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(() => core_succeed(Option_none()), a => core_succeed(Option_some(a)))(self).traced(trace));
/* @internal */
const effect_orElseEither = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, that) => tryOrElse(self, () => core_map(restore(that)(), Either_right), a => core_succeed(Either_left(a))).traced(trace));
/* @internal */
const effect_orElseFail = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, evaluate) => core_orElse(self, () => failSync(restore(evaluate))).traced(trace));
/* @internal */
const orElseOptional = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, that) => core_catchAll(self, option => {
  switch (option._tag) {
    case "None":
      {
        return restore(that)();
      }
    case "Some":
      {
        return core_fail(Option_some(option.value));
      }
  }
}).traced(trace));
/* @internal */
const effect_orElseSucceed = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, evaluate) => core_orElse(self, () => core_sync(restore(evaluate))).traced(trace));
/* @internal */
const parallelErrors = /*#__PURE__*/methodWithTrace(trace => self => matchCauseEffect(self, cause => {
  const errors = Chunk_fromIterable(failures(cause));
  return errors.length === 0 ? failCause(cause) : core_fail(errors);
}, core_succeed).traced(trace));
/* @internal */
const effect_partition = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_map(chunk => core_partitionMap(chunk, Function_identity))(core_forEach(elements, a => core_either(restore(f)(a)))).traced(trace));
/* @internal */
const patchFiberRefs = /*#__PURE__*/methodWithTrace(trace => patch => updateFiberRefs((fiberId, fiberRefs) => patch_patch(fiberId, fiberRefs)(patch)).traced(trace));
/* @internal */
const promise = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => core_async(resolve => {
  restore(evaluate)().then(a => resolve(exitSucceed(a))).catch(e => resolve(exitDie(e)));
}).traced(trace));
/* @internal */
const promiseInterrupt = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => asyncInterruptEither(resolve => {
  const controller = new AbortController();
  restore(evaluate)(controller.signal).then(a => resolve(exitSucceed(a))).catch(e => resolve(exitDie(e)));
  return Either_left(core_sync(() => controller.abort()));
}).traced(trace));
/* @internal */
const provideService = /*#__PURE__*/dualWithTrace(3, trace => (self, tag, service) => provideServiceEffect(self, tag, core_succeed(service)).traced(trace));
/* @internal */
const provideServiceEffect = /*#__PURE__*/dualWithTrace(3, trace => (self, tag, effect) => contextWithEffect(env => core_flatMap(effect, service => provideContext(self, mjs_Context_add(tag, service)(env)))).traced(trace));
/* @internal */
const effect_random = /*#__PURE__*/methodWithTrace(trace => () => effect_randomWith(core_succeed).traced(trace));
/* @internal */
const effect_randomWith = Random_randomWith;
/* @internal */
const effect_reduce = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, zero, f) => Array.from(elements).reduce((acc, el) => core_flatMap(acc, a => restore(f)(a, el)), core_succeed(zero)).traced(trace));
/* @internal */
const reduceAll = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, zero, f) => Array.from(elements).reduce((acc, a) => core_zipWith(acc, a, restore(f)), zero).traced(trace));
/* @internal */
const effect_reduceRight = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, zero, f) => Array.from(elements).reduceRight((acc, el) => core_flatMap(acc, a => restore(f)(el, a)), core_succeed(zero)).traced(trace));
/* @internal */
const reduceWhile = /*#__PURE__*/dualWithTrace(4, (trace, restore) => (elements, zero, predicate, f) => core_flatMap(core_sync(restore(() => elements[Symbol.iterator]())), iterator => reduceWhileLoop(restore, iterator, zero, restore(predicate), restore(f))).traced(trace));
const reduceWhileLoop = (restore, iterator, state, predicate, f) => {
  const next = restore(() => iterator.next())();
  if (!next.done && predicate(state)) {
    return core_flatMap(f(state, next.value), nextState => reduceWhileLoop(restore, iterator, nextState, predicate, f));
  }
  return core_succeed(state);
};
/* @internal */
const refineOrDie = /*#__PURE__*/dualWithTrace(2, trace => (self, pf) => refineOrDieWith(self, pf, Function_identity).traced(trace));
/* @internal */
const refineOrDieWith = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, pf, f) => core_catchAll(self, e => {
  const option = restore(pf)(e);
  switch (option._tag) {
    case "None":
      {
        return core_die(restore(f)(e));
      }
    case "Some":
      {
        return core_fail(option.value);
      }
  }
}).traced(trace));
/* @internal */
const reject = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => rejectEffect(self, a => Option_map(core_fail)(restore(pf)(a))).traced(trace));
/* @internal */
const rejectEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => core_flatMap(self, a => {
  const option = restore(pf)(a);
  switch (option._tag) {
    case "None":
      {
        return core_succeed(a);
      }
    case "Some":
      {
        return core_flatMap(core_fail)(option.value);
      }
  }
}).traced(trace));
/* @internal */
const repeatN = /*#__PURE__*/dualWithTrace(2, trace => (self, n) => suspendSucceed(() => repeatNLoop(self, n)).traced(trace));
/* @internal */
const repeatNLoop = /*#__PURE__*/methodWithTrace(trace => (self, n) => core_flatMap(self, a => n <= 0 ? core_succeed(a) : zipRight(yieldNow(), repeatNLoop(self, n - 1))).traced(trace));
/* @internal */
const effect_replicate = n => {
  return self => {
    return unsafeFromArray(Array.from({
      length: n
    }, () => self));
  };
};
/* @internal */
const replicateEffect = /*#__PURE__*/dualWithTrace(2, trace => (self, n) => effect_collectAll(effect_replicate(n)(self)).traced(trace));
/* @internal */
const replicateEffectDiscard = /*#__PURE__*/dualWithTrace(2, trace => (self, n) => collectAllDiscard(effect_replicate(n)(self)).traced(trace));
/* @internal */
const resurrect = /*#__PURE__*/methodWithTrace(trace => self => unrefineWith(self, Option_some, Function_identity).traced(trace));
/* @internal */
const effect_right = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(self, e => core_fail(Either_right(e)), either => {
  switch (either._tag) {
    case "Left":
      {
        return core_fail(Either_left(either.left));
      }
    case "Right":
      {
        return core_succeed(either.right);
      }
  }
}).traced(trace));
/* @internal */
const rightWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => suspendSucceed(() => unright(restore(f)(effect_right(self)))).traced(trace));
/* @internal */
const sandbox = /*#__PURE__*/methodWithTrace(trace => self => matchCauseEffect(self, core_fail, core_succeed).traced(trace));
/* @internal */
const setFiberRefs = /*#__PURE__*/methodWithTrace(trace => fiberRefs => suspendSucceed(() => FiberRefs_setAll(fiberRefs)).traced(trace));
/* @internal */
const effect_sleep = Clock_sleep;
/* @internal */
const someOrElse = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, orElse) => core_map(self, option => {
  switch (option._tag) {
    case "None":
      {
        return restore(orElse)();
      }
    case "Some":
      {
        return option.value;
      }
  }
}).traced(trace));
/* @internal */
const someOrElseEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, orElse) => core_flatMap(self, option => Option_getOrElse(() => restore(orElse)())(Option_map(core_succeed)(option))).traced(trace));
/* @internal */
const someOrFail = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, orFail) => core_flatMap(self, option => {
  switch (option._tag) {
    case "None":
      {
        return core_flatMap(core_sync(restore(orFail)), core_fail);
      }
    case "Some":
      {
        return core_succeed(option.value);
      }
  }
}).traced(trace));
/* @internal */
const someOrFailException = /*#__PURE__*/methodWithTrace(trace => self => someOrFail(self, () => NoSuchElementException()).traced(trace));
/* @internal */
const succeedLeft = /*#__PURE__*/methodWithTrace(trace => value => core_succeed(Either_left(value)).traced(trace));
/* @internal */
const succeedNone = /*#__PURE__*/methodWithTrace(trace => () => core_succeed(Option_none()).traced(trace));
/* @internal */
const succeedRight = /*#__PURE__*/methodWithTrace(trace => value => core_succeed(Either_right(value)).traced(trace));
/* @internal */
const succeedSome = /*#__PURE__*/methodWithTrace(trace => value => core_succeed(Option_some(value)).traced(trace));
/* @internal */
const summarized = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, summary, f) => core_flatMap(summary, start => core_flatMap(self, value => core_map(summary, end => [restore(f)(start, end), value]))).traced(trace));
/* @internal */
const suspend = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => core_flatMap(attempt(restore(evaluate)), Function_identity).traced(trace));
/* @internal */
const effect_struct = /*#__PURE__*/methodWithTrace(trace => r => core_map(values => {
  const res = {};
  for (const [k, v] of values) {
    res[k] = v;
  }
  return res;
})(core_forEach(Object.entries(r), ([_, e]) => core_map(e, a => [_, a]))).traced(trace));
/* @internal */
const tagged = /*#__PURE__*/dualWithTrace(3, trace => (self, key, value) => taggedWithLabels(self, [label_make(key, value)]).traced(trace));
/* @internal */
const taggedWithLabels = /*#__PURE__*/dualWithTrace(2, trace => (self, labels) => taggedWithLabelSet(self, mjs_HashSet_fromIterable(labels)).traced(trace));
/* @internal */
const taggedWithLabelSet = /*#__PURE__*/dualWithTrace(2, trace => (self, labels) => fiberRefLocallyWith(currentTags, set => mjs_HashSet_union(labels)(set))(self).traced(trace));
/* @internal */
const effect_takeWhile = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, predicate) => suspendSucceed(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let taking = core_succeed(true);
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    taking = core_flatMap(taking, taking => core_map(bool => {
      if (bool) {
        builder.push(a);
      }
      return bool;
    })(taking ? restore(predicate)(a) : core_succeed(false)));
  }
  return core_map(taking, () => unsafeFromArray(builder));
}).traced(trace));
/* @internal */
const tapBoth = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, f, g) => matchCauseEffect(self, cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return zipRight(restore(f)(either.left), failCause(cause));
      }
    case "Right":
      {
        return failCause(cause);
      }
  }
}, a => core_as(restore(g)(a), a)).traced(trace));
/* @internal */
const tapDefect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => catchAllCause(self, cause => Option_match(() => failCause(cause), a => zipRight(restore(f)(a), failCause(cause)))(keepDefects(cause))).traced(trace));
/* @internal */
const tapEither = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return zipRight(restore(f)(either), failCause(cause));
      }
    case "Right":
      {
        return failCause(cause);
      }
  }
}, a => core_as(restore(f)(Either_right(a)), a)).traced(trace));
/* @internal */
const effect_tapError = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return zipRight(restore(f)(either.left), failCause(cause));
      }
    case "Right":
      {
        return failCause(cause);
      }
  }
}, core_succeed).traced(trace));
/* @internal */
const tapErrorCause = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => matchCauseEffect(self, cause => zipRight(restore(f)(cause), failCause(cause)), core_succeed).traced(trace));
/* @internal */
const tapSome = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => core_tap(self, a => Option_getOrElse(() => core_unit())(Option_map(core_asUnit)(restore(pf)(a)))).traced(trace));
/* @internal */
const timed = /*#__PURE__*/methodWithTrace(trace => self => timedWith(self, Clock_currentTimeMillis()).traced(trace));
/* @internal */
const timedWith = /*#__PURE__*/dualWithTrace(2, trace => (self, milliseconds) => summarized(self, milliseconds, (start, end) => millis(end - start)).traced(trace));
/* @internal */
const tryCatch = /*#__PURE__*/methodWithTrace((trace, restore) => (attempt, onThrow) => core_sync(() => {
  try {
    return restore(attempt)();
  } catch (error) {
    throw makeEffectError(cause_fail(restore(onThrow)(error)));
  }
}).traced(trace));
/* @internal */
const tryCatchPromise = /*#__PURE__*/methodWithTrace((trace, restore) => (evaluate, onReject) => core_flatMap(tryCatch(restore(evaluate), restore(onReject)), promise => core_async(resolve => {
  promise.then(a => resolve(exitSucceed(a))).catch(e => resolve(exitFail(restore(onReject)(e))));
})).traced(trace));
/* @internal */
const tryCatchPromiseInterrupt = /*#__PURE__*/methodWithTrace((trace, restore) => (evaluate, onReject) => suspendSucceed(() => {
  const controller = new AbortController();
  return core_flatMap(promise => core_async(resolve => {
    promise.then(a => resolve(exitSucceed(a))).catch(e => resolve(exitFail(restore(onReject)(e))));
  }))(tryCatch(() => restore(evaluate)(controller.signal), restore(onReject)));
}).traced(trace));
/* @internal */
const tryPromise = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => core_flatMap(restore(attempt)(evaluate), promise => core_async(resolve => {
  promise.then(a => resolve(exitSucceed(a))).catch(e => resolve(exitFail(e)));
})).traced(trace));
/* @internal */
const tryPromiseInterrupt = /*#__PURE__*/methodWithTrace((trace, restore) => evaluate => core_flatMap(([controller, promise]) => asyncInterruptEither(resolve => {
  promise.then(a => resolve(exitSucceed(a))).catch(e => resolve(exitFail(e)));
  return Either_left(core_sync(() => controller.abort()));
}))(attempt(() => {
  const controller = new AbortController();
  return [controller, restore(evaluate)(controller.signal)];
})).traced(trace));
/* @internal */
const effect_tuple = /*#__PURE__*/methodWithTrace(trace => (...t) => core_map(effect_collectAll(t), toReadonlyArray).traced(trace));
/* @internal */
const uncause = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(self, cause => cause_isEmpty(cause) ? core_unit() : failCause(cause)).traced(trace));
/* @internal */
const effect_unfold = /*#__PURE__*/methodWithTrace((trace, restore) => (s, f) => core_map(unfoldLoop(s, restore(f), Chunk_empty()), Chunk_reverse).traced(trace));
/* @internal */
const unfoldLoop = (s, f, builder) => core_flatMap(f(s), option => {
  if (Option_isSome(option)) {
    return unfoldLoop(option.value[1], f, Chunk_prepend(option.value[0])(builder));
  } else {
    return core_succeed(builder);
  }
});
/* @internal */
const unleft = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(self, either => {
  switch (either._tag) {
    case "Left":
      {
        return core_fail(either.left);
      }
    case "Right":
      {
        return core_succeed(either);
      }
  }
}, a => core_succeed(Either_left(a))).traced(trace));
/* @internal */
const unless = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, predicate) => suspendSucceed(() => restore(predicate)() ? succeedNone() : asSome(self)).traced(trace));
/* @internal */
const unlessEffect = /*#__PURE__*/dualWithTrace(2, trace => (self, predicate) => core_flatMap(predicate, b => b ? succeedNone() : asSome(self)).traced(trace));
/* @internal */
const unrefine = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => unrefineWith(self, restore(pf), Function_identity).traced(trace));
/* @internal */
const unrefineWith = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, pf, f) => catchAllCause(self, cause => {
  const option = find(cause => isDieType(cause) ? restore(pf)(cause.defect) : Option_none())(cause);
  switch (option._tag) {
    case "None":
      {
        return failCause(cause_map(restore(f))(cause));
      }
    case "Some":
      {
        return core_fail(option.value);
      }
  }
}).traced(trace));
/* @internal */
const unright = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(self, either => {
  switch (either._tag) {
    case "Left":
      {
        return core_succeed(Either_left(either.left));
      }
    case "Right":
      {
        return core_fail(either.right);
      }
  }
}, a => core_succeed(Either_right(a))).traced(trace));
/* @internal */
const unsandbox = /*#__PURE__*/methodWithTrace(trace => self => effect_mapErrorCause(self, cause_flatten).traced(trace));
/* @internal */
const updateFiberRefs = /*#__PURE__*/methodWithTrace((trace, restore) => f => withFiberRuntime(state => {
  state.setFiberRefs(restore(f)(state.id(), state.unsafeGetFiberRefs()));
  return core_unit();
}).traced(trace));
/* @internal */
const updateService = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, tag, f) => contramapContext(self, context => mjs_Context_add(tag, restore(f)(mjs_Context_unsafeGet(context, tag)))(context)).traced(trace));
/* @internal */
const effect_validate = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => validateWith(self, that, (a, b) => [a, b]).traced(trace));
/* @internal */
const validateAll = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_flatMap(effect_partition(elements, restore(f)), ([es, bs]) => Chunk_isEmpty(es) ? core_succeed(bs) : core_fail(es)).traced(trace));
/* @internal */
const validateAllDiscard = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_flatMap(effect_partition(elements, restore(f)), ([es, _]) => Chunk_isEmpty(es) ? core_unit() : core_fail(es)).traced(trace));
/* @internal */
const validateFirst = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_flip(core_forEach(elements, a => core_flip(restore(f)(a)))).traced(trace));
/* @internal */
const validateWith = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, that, f) => core_flatten(core_zipWith(core_exit(self), core_exit(that), (ea, eb) => exitZipWith(eb, restore(f), (ca, cb) => sequential(ca, cb))(ea))).traced(trace));
/* @internal */
const when = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, predicate) => suspendSucceed(() => restore(predicate)() ? core_map(self, Option_some) : core_succeed(Option_none())).traced(trace));
/* @internal */
const whenCase = /*#__PURE__*/methodWithTrace((trace, restore) => (evaluate, pf) => core_flatMap(core_sync(restore(evaluate)), a => Option_getOrElse(() => succeedNone())(Option_map(asSome)(restore(pf)(a)))).traced(trace));
/* @internal */
const whenCaseEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => core_flatMap(self, a => whenCase(() => a, restore(pf))).traced(trace));
/* @internal */
const whenFiberRef = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, fiberRef, predicate) => core_flatMap(fiberRefGet(fiberRef), s => restore(predicate)(s) ? core_map(self, a => [s, Option_some(a)]) : core_succeed([s, Option_none()])).traced(trace));
/* @internal */
const whenRef = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, ref, predicate) => core_flatMap(Ref_get(ref), s => restore(predicate)(s) ? core_map(self, a => [s, Option_some(a)]) : core_succeed([s, Option_none()])).traced(trace));
/* @internal */
const withMetric = /*#__PURE__*/dualWithTrace(2, trace => (self, metric) => metric(self).traced(trace));
//# sourceMappingURL=effect.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberStatus.mjs
var fiberStatus_a, fiberStatus_b, fiberStatus_c;


const FiberStatusSymbolKey = "@effect/io/Fiber/Status";
/** @internal */
const FiberStatusTypeId = /*#__PURE__*/Symbol.for(FiberStatusSymbolKey);
/** @internal */
const OP_DONE = "Done";
/** @internal */
const OP_RUNNING = "Running";
/** @internal */
const OP_SUSPENDED = "Suspended";
/** @internal */
class Done {
  constructor() {
    this[fiberStatus_a] = FiberStatusTypeId;
    this._tag = OP_DONE;
  }
  [(fiberStatus_a = FiberStatusTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this._tag))(Hash_hash(FiberStatusSymbolKey));
  }
  [Equal_symbol](that) {
    return isFiberStatus(that) && that._tag === OP_DONE;
  }
}
/** @internal */
class Running {
  constructor(runtimeFlags) {
    this.runtimeFlags = runtimeFlags;
    this[fiberStatus_b] = FiberStatusTypeId;
    this._tag = OP_RUNNING;
  }
  [(fiberStatus_b = FiberStatusTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.runtimeFlags))(combine(Hash_hash(this._tag))(Hash_hash(FiberStatusSymbolKey)));
  }
  [Equal_symbol](that) {
    return isFiberStatus(that) && that._tag === OP_RUNNING && this.runtimeFlags === that.runtimeFlags;
  }
}
/** @internal */
class Suspended {
  constructor(runtimeFlags, blockingOn) {
    this.runtimeFlags = runtimeFlags;
    this.blockingOn = blockingOn;
    this[fiberStatus_c] = FiberStatusTypeId;
    this._tag = OP_SUSPENDED;
  }
  [(fiberStatus_c = FiberStatusTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.blockingOn))(combine(Hash_hash(this.runtimeFlags))(combine(Hash_hash(this._tag))(Hash_hash(FiberStatusSymbolKey))));
  }
  [Equal_symbol](that) {
    return isFiberStatus(that) && that._tag === OP_SUSPENDED && this.runtimeFlags === that.runtimeFlags && equals(this.blockingOn, that.blockingOn);
  }
}
/** @internal */
const fiberStatus_done = /*#__PURE__*/new Done();
/** @internal */
const running = runtimeFlags => new Running(runtimeFlags);
/** @internal */
const suspended = (runtimeFlags, blockingOn) => new Suspended(runtimeFlags, blockingOn);
/** @internal */
const isFiberStatus = u => typeof u === "object" && u != null && FiberStatusTypeId in u;
/** @internal */
const isDone = self => self._tag === OP_DONE;
/** @internal */
const isRunning = self => self._tag === OP_RUNNING;
/** @internal */
const isSuspended = self => self._tag === OP_SUSPENDED;
//# sourceMappingURL=fiberStatus.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Fiber/Status.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const Status_FiberStatusTypeId = FiberStatusTypeId;
/**
 * @since 1.0.0
 * @category constructors
 */
const Status_done = fiberStatus_done;
/**
 * @since 1.0.0
 * @category constructors
 */
const Status_running = running;
/**
 * @since 1.0.0
 * @category constructors
 */
const Status_suspended = suspended;
/**
 * Returns `true` if the specified value is a `FiberStatus`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Status_isFiberStatus = isFiberStatus;
/**
 * Returns `true` if the specified `FiberStatus` is `Done`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Status_isDone = isDone;
/**
 * Returns `true` if the specified `FiberStatus` is `Running`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Status_isRunning = isRunning;
/**
 * Returns `true` if the specified `FiberStatus` is `Suspended`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Status_isSuspended = isSuspended;
//# sourceMappingURL=Status.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberMessage.mjs
/** @internal */
const OP_INTERRUPT_SIGNAL = "InterruptSignal";
/** @internal */
const OP_STATEFUL = "Stateful";
/** @internal */
const OP_RESUME = "Resume";
/** @internal */
const OP_YIELD_NOW = "YieldNow";
/** @internal */
const interruptSignal = cause => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause
});
/** @internal */
const stateful = onFiber => ({
  _tag: OP_STATEFUL,
  onFiber
});
/** @internal */
const resume = effect => ({
  _tag: OP_RESUME,
  effect
});
/** @internal */
const fiberMessage_yieldNow = priority => ({
  _tag: OP_YIELD_NOW,
  priority
});
//# sourceMappingURL=fiberMessage.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberScope.mjs
var fiberScope_a, fiberScope_b;


/** @internal */
const FiberScopeSymbolKey = "@effect/io/Fiber/Scope";
/** @internal */
const FiberScopeTypeId = /*#__PURE__*/Symbol.for(FiberScopeSymbolKey);
const globalFiberScopeURI = "@effect/io/FiberScope/Global";
/** @internal */
class Global {
  add(_runtimeFlags, child) {
    this.roots.add(child);
    child.unsafeAddObserver(() => {
      this.roots.delete(child);
    });
  }
  constructor() {
    this[fiberScope_a] = FiberScopeTypeId;
    this.fiberId = Id_none;
    this.roots = new Set();
    if (typeof globalThis[globalFiberScopeURI] === "undefined") {
      globalThis[globalFiberScopeURI] = this;
    } else {
      throw new Error("Bug: FiberScope.Global initialized twice (maybe coming from a duplicated module)");
    }
  }
}
fiberScope_a = FiberScopeTypeId;
/** @internal */
class Local {
  constructor(fiberId, parent) {
    this.fiberId = fiberId;
    this.parent = parent;
    this[fiberScope_b] = FiberScopeTypeId;
  }
  add(_runtimeFlags, child) {
    this.parent.tell(stateful(parentFiber => {
      parentFiber.addChild(child);
      child.unsafeAddObserver(() => {
        parentFiber.removeChild(child);
      });
    }));
  }
}
fiberScope_b = FiberScopeTypeId;
/** @internal */
const fiberScope_unsafeMake = fiber => {
  return new Local(fiber.id(), fiber);
};
/** @internal */
const globalScope = /*#__PURE__*/new Global();
//# sourceMappingURL=fiberScope.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiber.mjs














/** @internal */
const FiberSymbolKey = "@effect/io/Fiber";
/** @internal */
const FiberTypeId = /*#__PURE__*/Symbol.for(FiberSymbolKey);
/** @internal */
const fiberVariance = {
  _E: _ => _,
  _A: _ => _
};
/** @internal */
const RuntimeFiberSymbolKey = "@effect/io/Fiber";
/** @internal */
const RuntimeFiberTypeId = /*#__PURE__*/Symbol.for(RuntimeFiberSymbolKey);
/** @internal */
const fiber_Order = /*#__PURE__*/Order_contramap(fiber => [fiber.id().startTimeMillis, fiber.id().id])( /*#__PURE__*/Order_tuple(Number_Order, Number_Order));
/** @internal */
const isFiber = u => typeof u === "object" && u != null && FiberTypeId in u;
/** @internal */
const isRuntimeFiber = self => RuntimeFiberTypeId in self;
/** @internal */
const _await = /*#__PURE__*/methodWithTrace(trace => self => self.await().traced(trace));
/** @internal */
const children = /*#__PURE__*/methodWithTrace(trace => self => self.children().traced(trace));
/** @internal */
const fiber_done = exit => ({
  [FiberTypeId]: fiberVariance,
  id: () => Id_none,
  await: methodWithTrace(trace => () => core_succeed(exit).traced(trace)),
  children: methodWithTrace(trace => () => core_succeed(Chunk_empty()).traced(trace)),
  inheritAll: methodWithTrace(trace => () => core_unit().traced(trace)),
  poll: methodWithTrace(trace => () => core_succeed(Option_some(exit)).traced(trace)),
  interruptAsFork: methodWithTrace(trace => () => core_unit().traced(trace))
});
/** @internal */
const dump = /*#__PURE__*/methodWithTrace(trace => self => core_map(self.status(), status => ({
  id: self.id(),
  status
})).traced(trace));
/** @internal */
const dumpAll = /*#__PURE__*/methodWithTrace(trace => fibers => core_forEach(fibers, dump).traced(trace));
/** @internal */
const fiber_fail = error => {
  return fiber_done(Exit_fail(error));
};
/** @internal */
const fiber_failCause = cause => {
  return fiber_done(Exit_failCause(cause));
};
/** @internal */
const fromEffect = /*#__PURE__*/methodWithTrace(trace => effect => core_map(core_exit(effect), fiber_done).traced(trace));
/** @internal */
const fiber_id = self => {
  return self.id();
};
/** @internal */
const fiber_inheritAll = /*#__PURE__*/methodWithTrace(trace => self => self.inheritAll().traced(trace));
/** @internal */
const interrupted = fiberId => {
  return fiber_done(Exit_interrupt(fiberId));
};
/** @internal */
const interruptAll = /*#__PURE__*/methodWithTrace(trace => fibers => core_flatMap(fiberId(), fiberId => interruptAllWith(fiberId)(fibers)).traced(trace));
/** @internal */
const interruptAllWith = /*#__PURE__*/dualWithTrace(2, trace => (fibers, fiberId) => zipRight(forEachDiscard(_await)(fibers))(forEachDiscard(fibers, interruptAsFork(fiberId))).traced(trace));
/** @internal */
const interruptAsFork = /*#__PURE__*/dualWithTrace(2, trace => (self, fiberId) => self.interruptAsFork(fiberId).traced(trace));
/** @internal */
const fiber_join = /*#__PURE__*/methodWithTrace(trace => self => zipLeft(core_flatten(self.await()), self.inheritAll()).traced(trace));
/** @internal */
const fiber_map = /*#__PURE__*/untracedDual(2, restore => (self, f) => mapEffect(self, a => core_sync(() => restore(f)(a))));
/** @internal */
const mapEffect = /*#__PURE__*/untracedDual(2, restore => (self, f) => ({
  [FiberTypeId]: fiberVariance,
  id: () => self.id(),
  await: methodWithTrace(trace => () => core_flatMap(self.await(), forEachEffect(f)).traced(trace)),
  children: methodWithTrace(trace => () => self.children().traced(trace)),
  inheritAll: methodWithTrace(trace => () => self.inheritAll().traced(trace)),
  poll: methodWithTrace(trace => () => core_flatMap(self.poll(), result => {
    switch (result._tag) {
      case "None":
        {
          return core_succeed(Option_none());
        }
      case "Some":
        {
          return core_map(Option_some)(forEachEffect(result.value, restore(f)));
        }
    }
  }).traced(trace)),
  interruptAsFork: methodWithTrace(trace => id => self.interruptAsFork(id).traced(trace))
}));
/** @internal */
const mapFiber = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => core_map(self.await(), Exit_match(cause => fiber_failCause(cause), a => restore(f)(a))).traced(trace));
/** @internal */
const fiber_match = /*#__PURE__*/untracedDual(3, restore => (self, onFiber, onRuntimeFiber) => {
  if (isRuntimeFiber(self)) {
    return restore(onRuntimeFiber)(self);
  }
  return restore(onFiber)(self);
});
/** @internal */
const fiber_never = () => ({
  [FiberTypeId]: fiberVariance,
  id: () => Id_none,
  await: methodWithTrace(trace => () => never().traced(trace)),
  children: methodWithTrace(trace => () => core_succeed(Chunk_empty()).traced(trace)),
  inheritAll: methodWithTrace(trace => () => never().traced(trace)),
  poll: methodWithTrace(trace => () => core_succeed(Option_none()).traced(trace)),
  interruptAsFork: methodWithTrace(trace => () => never().traced(trace))
});
/** @internal */
const fiber_orElse = /*#__PURE__*/dual(2, (self, that) => ({
  [FiberTypeId]: fiberVariance,
  id: () => Id_getOrElse(self.id(), that.id()),
  await: methodWithTrace(trace => () => core_zipWith(self.await(), that.await(), (exit1, exit2) => isSuccess(exit1) ? exit1 : exit2).traced(trace)),
  children: methodWithTrace(trace => () => self.children().traced(trace)),
  inheritAll: methodWithTrace(trace => () => zipRight(that.inheritAll(), self.inheritAll()).traced(trace)),
  poll: methodWithTrace(trace => () => core_zipWith(self.poll(), that.poll(), (option1, option2) => {
    switch (option1._tag) {
      case "None":
        {
          return Option_none();
        }
      case "Some":
        {
          return isSuccess(option1.value) ? option1 : option2;
        }
    }
  }).traced(trace)),
  interruptAsFork: methodWithTrace(trace => id => core_asUnit(zipRight(interruptAsFiber(id)(that))(interruptAsFiber(self, id))).traced(trace))
}));
/** @internal */
const fiber_orElseEither = /*#__PURE__*/dual(2, (self, that) => fiber_orElse(fiber_map(self, Either_left), fiber_map(that, Either_right)));
/** @internal */
const poll = /*#__PURE__*/methodWithTrace(trace => self => self.poll().traced(trace));
// forked from https://github.com/sindresorhus/parse-ms/blob/4da2ffbdba02c6e288c08236695bdece0adca173/index.js
// MIT License
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
/** @internal */
const parseMs = milliseconds => {
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
    microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
  };
};
/** @internal */
const renderStatus = status => {
  if (Status_isDone(status)) {
    return "Done";
  }
  if (Status_isRunning(status)) {
    return "Running";
  }
  const isInterruptible = interruptible(status.runtimeFlags) ? "interruptible" : "uninterruptible";
  return `Suspended(${isInterruptible})`;
};
/** @internal */
const pretty = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(Clock_currentTimeMillis(), now => core_map(dump(self), dump => {
  const time = now - dump.id.startTimeMillis;
  const {
    days,
    hours,
    milliseconds,
    minutes,
    seconds
  } = parseMs(time);
  const lifeMsg = (days === 0 ? "" : `${days}d`) + (days === 0 && hours === 0 ? "" : `${hours}h`) + (days === 0 && hours === 0 && minutes === 0 ? "" : `${minutes}m`) + (days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? "" : `${seconds}s`) + `${milliseconds}ms`;
  const waitMsg = Status_isSuspended(dump.status) ? (() => {
    const ids = Id_ids(dump.status.blockingOn);
    return mjs_HashSet_size(ids) > 0 ? `waiting on ` + Array.from(ids).map(id => `${id}`).join(", ") : "";
  })() : "";
  const statusMsg = renderStatus(dump.status);
  return `[Fiber](#${dump.id.id}) (${lifeMsg}) ${waitMsg}\n   Status: ${statusMsg}`;
})).traced(trace));
/** @internal */
const roots = /*#__PURE__*/methodWithTrace(trace => () => core_sync(unsafeRoots).traced(trace));
/** @internal */
const unsafeRoots = () => {
  return Chunk_fromIterable(globalScope.roots);
};
/** @internal */
const fiber_status = /*#__PURE__*/methodWithTrace(trace => self => self.status().traced(trace));
/** @internal */
const fiber_succeed = value => {
  return fiber_done(Exit_succeed(value));
};
/** @internal */
const fiber_unit = () => fiber_succeed(void 0);
/** @internal */
const currentFiberURI = "@effect/io/Fiber/Current";
/** @internal */
const getCurrentFiber = () => Option_fromNullable(global[currentFiberURI]);
//# sourceMappingURL=fiber.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Deferred.mjs


/**
 * @since 1.0.0
 * @category symbols
 */
const Deferred_DeferredTypeId = DeferredTypeId;
/**
 * Creates a new `Deferred`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Deferred_make = deferredMake;
/**
 * Creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 1.0.0
 * @category constructors
 */
const makeAs = deferredMakeAs;
const Deferred_await = deferredAwait;

/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * Note that `Deferred.completeWith` will be much faster, so consider using
 * that if you do not need to memoize the result of the specified effect.
 *
 * @since 1.0.0
 * @category mutations
 */
const complete = deferredComplete;
/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * @since 1.0.0
 * @category mutations
 */
const completeWith = deferredCompleteWith;
/**
 * Exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_done = deferredDone;
/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_fail = deferredFail;
/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_failSync = deferredFailSync;
/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_failCause = deferredFailCause;
/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_failCauseSync = deferredFailCauseSync;
/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_die = deferredDie;
/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_dieSync = deferredDieSync;
/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the `FiberId` of the fiber
 * calling this method.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_interrupt = deferredInterrupt;
/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the specified `FiberId`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_interruptWith = deferredInterruptWith;
/**
 * Returns `true` if this `Deferred` has already been completed with a value or
 * an error, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Deferred_isDone = deferredIsDone;
/**
 * Returns a `Some<Effect<R, E, A>>` from the `Deferred` if this `Deferred` has
 * already been completed, `None` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Deferred_poll = deferredPoll;
/**
 * Completes the `Deferred` with the specified value.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_succeed = deferredSucceed;
/**
 * Completes the `Deferred` with the specified value.
 *
 * @since 1.0.0
 * @category mutations
 */
const Deferred_sync = deferredSync;
/**
 * Unsafely creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 1.0.0
 * @category unsafe
 */
const Deferred_unsafeMake = deferredUnsafeMake;
/**
 * Unsafely exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 1.0.0
 * @category unsafe
 */
const unsafeDone = deferredUnsafeDone;
//# sourceMappingURL=Deferred.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/logger.mjs












/** @internal */
const LoggerSymbolKey = "@effect/io/Logger";
/** @internal */
const LoggerTypeId = /*#__PURE__*/Symbol.for(LoggerSymbolKey);
/** @internal */
const loggerVariance = {
  _Message: _ => _,
  _Output: _ => _
};
/** @internal */
const makeLogger = log => ({
  [LoggerTypeId]: loggerVariance,
  log
});
/** @internal */
const stringLogger = /*#__PURE__*/makeLogger((fiberId, logLevel, message, cause, _context, spans, annotations, runtime) => {
  const now = new Date();
  const nowMillis = now.getTime();
  const outputArray = [`timestamp=${now.toISOString()}`, `level=${logLevel.label}`, `fiber=${threadName(fiberId)}`];
  let output = outputArray.join(" ");
  if (message.length > 0) {
    output = output + " message=";
    output = appendQuoted(message, output);
  }
  if (cause != null && cause != cause_empty) {
    output = output + " cause=";
    output = appendQuoted(unsafeRunSync(runtime)(prettySafe(cause)), output);
  }
  if (Chunk_isNonEmpty(spans)) {
    output = output + " ";
    let first = true;
    for (const span of spans) {
      if (first) {
        first = false;
      } else {
        output = output + " ";
      }
      output = output + Span_render(nowMillis)(span);
    }
  }
  if (mjs_HashMap_size(annotations) > 0) {
    output = output + " ";
    let first = true;
    for (const [key, value] of annotations) {
      if (first) {
        first = false;
      } else {
        output = output + " ";
      }
      output = output + filterKeyName(key);
      output = output + "=";
      output = appendQuoted(value, output);
    }
  }
  return output;
});
/** @internal */
const escapeDoubleQuotes = str => `"${str.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
const textOnly = /^[^\s"=]+$/;
/** @internal */
const appendQuoted = (label, output) => output + (label.match(textOnly) ? label : escapeDoubleQuotes(label));
/** @internal */
const logfmtLogger = /*#__PURE__*/(/* unused pure expression or super */ null && (makeLogger((fiberId, logLevel, message, cause, _context, spans, annotations, runtime) => {
  const now = new Date();
  const nowMillis = now.getTime();
  const outputArray = [`timestamp=${now.toISOString()}`, `level=${logLevel.label}`, `fiber=${_fiberId.threadName(fiberId)}`];
  let output = outputArray.join(" ");
  if (message.length > 0) {
    output = output + " message=";
    output = appendQuotedLogfmt(message, output);
  }
  if (cause != null && cause != Cause.empty) {
    output = output + " cause=";
    output = appendQuotedLogfmt(unsafeRunSync(runtime)(Pretty.prettySafe(cause)), output);
  }
  if (Chunk.isNonEmpty(spans)) {
    output = output + " ";
    let first = true;
    for (const span of spans) {
      if (first) {
        first = false;
      } else {
        output = output + " ";
      }
      output = output + renderLogSpanLogfmt(nowMillis)(span);
    }
  }
  if (HashMap.size(annotations) > 0) {
    output = output + " ";
    let first = true;
    for (const [key, value] of annotations) {
      if (first) {
        first = false;
      } else {
        output = output + " ";
      }
      output = output + filterKeyName(key);
      output = output + "=";
      output = appendQuotedLogfmt(value, output);
    }
  }
  return output;
})));
/** @internal */
const filterKeyName = key => key.replace(/[\s="]/g, "_");
/** @internal */
const escapeDoubleQuotesLogfmt = str => JSON.stringify(str);
/** @internal */
const appendQuotedLogfmt = (label, output) => output + (label.match(textOnly) ? label : escapeDoubleQuotesLogfmt(label));
/** @internal */
const renderLogSpanLogfmt = now => self => {
  const label = filterKeyName(self.label);
  return `${label}=${now - self.startTime}ms`;
};
/** @internal */
const logger_contramap = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeLogger((fiberId, logLevel, message, cause, context, spans, annotations, runtime) => self.log(fiberId, logLevel, restore(f)(message), cause, context, spans, annotations, runtime)))));
/** @internal */
const filterLogLevel = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeLogger((fiberId, logLevel, message, cause, context, spans, annotations, runtime) => restore(f)(logLevel) ? Option.some(self.log(fiberId, logLevel, message, cause, context, spans, annotations, runtime)) : Option.none()))));
/** @internal */
const logger_map = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeLogger((fiberId, logLevel, message, cause, context, spans, annotations, runtime) => restore(f)(self.log(fiberId, logLevel, message, cause, context, spans, annotations, runtime))))));
/** @internal */
const logger_none = () => ({
  [LoggerTypeId]: loggerVariance,
  log: constVoid
});
/** @internal */
const simple = log => ({
  [LoggerTypeId]: loggerVariance,
  log: (_fiberId, _logLevel, message, _cause, _context, _spans, _annotations) => {
    return log(message);
  }
});
/** @internal */
const logger_succeed = value => {
  return simple(() => value);
};
/** @internal */
const logger_sync = evaluate => {
  return simple(evaluate);
};
/** @internal */
const logger_zip = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, that) => makeLogger((fiberId, logLevel, message, cause, context, spans, annotations, runtime) => [self.log(fiberId, logLevel, message, cause, context, spans, annotations, runtime), that.log(fiberId, logLevel, message, cause, context, spans, annotations, runtime)]))));
/** @internal */
const logger_zipLeft = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, that) => logger_map(logger_zip(self, that), tuple => tuple[0]))));
/** @internal */
const logger_zipRight = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, that) => logger_map(logger_zip(self, that), tuple => tuple[1]))));
// circular with runtime
/** @internal */
const unsafeRunSyncExit = runtime => effect => {
  const scheduler = new SyncScheduler();
  const fiberRuntime = runtime.unsafeFork(effect, scheduler);
  scheduler.flush();
  const result = fiberRuntime.unsafePoll();
  if (result) {
    return result;
  }
  return Exit_die(new AsyncFiber(fiberRuntime));
};
/** @internal */
class AsyncFiber {
  constructor(fiber) {
    this.fiber = fiber;
    this._tag = "AsyncFiber";
  }
}
/** @internal */
const unsafeRunSync = runtime => effect => {
  const exit = unsafeRunSyncExit(runtime)(effect);
  if (exit._tag === OP_FAILURE) {
    throw squashWith(Function_identity)(exit.cause);
  }
  return exit.value;
};
//# sourceMappingURL=logger.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/main-thread.mjs
/**
 * fork of https://github.com/astoilkov/main-thread-scheduling
 *
 * node compatibility
 * removal of visible priority
 * reversal of task order
 */
/** @internal */
function whenReady() {
  const observers = [];
  const promise = () => new Promise(resolve => observers.push(resolve));
  return {
    promise,
    resolve: value => observers.forEach(observer => observer(value))
  };
}
/** @internal */
const state = {
  tasks: [],
  idleDeadline: undefined,
  frameTimeElapsed: false,
  onIdleCallback: /*#__PURE__*/whenReady(),
  onAnimationFrame: /*#__PURE__*/whenReady(),
  frameWorkStartTime: undefined
};
/** @internal */
function createTask() {
  const wr = whenReady();
  const item = {
    ready: wr.promise,
    resolve: wr.resolve
  };
  state.tasks.push(item);
  if (state.tasks.length === 1) {
    startTracking();
  }
  return item;
}
let isTracking = false;
let idleCallbackId;
/** @internal */
function startTracking() {
  if (isTracking) {
    return;
  }
  isTracking = true;
  const reset = () => {
    state.idleDeadline = undefined;
    state.frameTimeElapsed = false;
    state.frameWorkStartTime = undefined;
  };
  const loop = () => {
    // @ts-expect-error
    if (typeof requestIdleCallback !== "undefined") {
      // @ts-expect-error
      idleCallbackId = requestIdleCallback(deadline => {
        reset();
        state.idleDeadline = deadline;
        state.onIdleCallback.resolve();
        state.onIdleCallback = whenReady();
      });
    }
    const cb = () => {
      reset();
      state.onAnimationFrame.resolve();
      state.onAnimationFrame = whenReady();
      if (state.tasks.length === 0) {
        isTracking = false;
        if (typeof cancelIdleCallback !== "undefined") {
          cancelIdleCallback(idleCallbackId);
        }
      } else {
        loop();
      }
    };
    // @ts-expect-error
    if (typeof requestAnimationFrame !== "undefined") {
      // @ts-expect-error
      requestAnimationFrame(cb);
    } else {
      setTimeout(cb, 16);
    }
  };
  loop();
}
/** @internal */
function removeTask(task) {
  const index = state.tasks.indexOf(task);
  if (index !== -1) {
    state.tasks.splice(index, 1);
  }
}
/** @internal */
function nextTask() {
  if (state.tasks.length > 0) {
    state.tasks[0].resolve();
  }
}
/** @internal */
let lastCallTime = 0;
/** @internal */
let lastResult = false;
/** @internal */
function isTimeToYield() {
  const now = Date.now();
  if (!lastResult && now - lastCallTime === 0) {
    return lastResult;
  }
  lastCallTime = now;
  lastResult = now >= calculateDeadline() ||
  // @ts-expect-error
  typeof navigator !== "undefined" && navigator.scheduling?.isInputPending?.() === true;
  if (lastResult) {
    state.frameTimeElapsed = true;
  }
  return lastResult;
}
/** @internal */
function calculateDeadline() {
  if (state.frameWorkStartTime === undefined) {
    return -1;
  }
  const idleDeadline = state.idleDeadline === undefined ? Number.MAX_SAFE_INTEGER : Date.now() + state.idleDeadline.timeRemaining();
  return Math.min(state.frameWorkStartTime + 5, idleDeadline);
}
let globalId = 0;
const main_thread_running = /*#__PURE__*/new Set();
/** @internal */
function requestPromiseEscape(callback) {
  const id = globalId;
  main_thread_running.add(id);
  Promise.resolve().then(() => {
    Promise.resolve().then(() => {
      if (main_thread_running.has(id)) {
        callback();
        main_thread_running.delete(id);
      }
    });
  });
  globalId += 1;
  return id;
}
/** @internal */
function cancelPromiseEscape(id) {
  if (id !== undefined) {
    main_thread_running.delete(id);
  }
}
/** @internal */
let callbacks = [];
/** @internal */
function requestNextTask(callback) {
  if (callbacks.length === 0) {
    const channel = new MessageChannel();
    channel.port2.postMessage(undefined);
    // @ts-expect-error
    channel.port1.onmessage = () => {
      channel.port1.close();
      channel.port2.close();
      const callbacksCopy = callbacks;
      callbacks = [];
      for (const callback of callbacksCopy) {
        callback();
      }
    };
  }
  callbacks.push(callback);
}
let promiseEscapeId;
/** @internal */
async function yieldControl() {
  cancelPromiseEscape(promiseEscapeId);
  const task = createTask();
  await schedule();
  if (state.tasks[0] !== task) {
    await task.ready();
    if (isTimeToYield()) {
      await schedule();
    }
  }
  removeTask(task);
  cancelPromiseEscape(promiseEscapeId);
  promiseEscapeId = requestPromiseEscape(() => {
    nextTask();
  });
}
async function schedule() {
  if (state.frameTimeElapsed) {
    await state.onAnimationFrame.promise();
  }
  // @ts-expect-error
  if (typeof requestIdleCallback === "undefined") {
    await new Promise(resolve => requestNextTask(resolve));
    // @ts-expect-error
    if (typeof navigator !== "undefined" && navigator.scheduling?.isInputPending?.() === true) {
      await schedule();
    } else if (state.frameWorkStartTime === undefined) {
      state.frameWorkStartTime = Date.now();
    }
  } else {
    await state.onIdleCallback.promise();
    if (state.frameWorkStartTime === undefined) {
      state.frameWorkStartTime = Date.now();
    }
  }
}
/** @internal */
function yieldBackgroundOrContinue() {
  if (isTimeToYield()) {
    return yieldControl();
  }
  return Promise.resolve();
}
//# sourceMappingURL=main-thread.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/keyType.mjs
var keyType_a, keyType_b, keyType_c, _d, _e, _f, _g, _h, _j, _k;


/** @internal */
const MetricKeyTypeSymbolKey = "@effect/io/Metric/KeyType";
/** @internal */
const MetricKeyTypeTypeId = /*#__PURE__*/Symbol.for(MetricKeyTypeSymbolKey);
/** @internal */
const CounterKeyTypeSymbolKey = "effect/io/Metric/KeyType/Counter";
/** @internal */
const CounterKeyTypeTypeId = /*#__PURE__*/Symbol.for(CounterKeyTypeSymbolKey);
/** @internal */
const FrequencyKeyTypeSymbolKey = "effect/io/Metric/KeyType/Frequency";
/** @internal */
const FrequencyKeyTypeTypeId = /*#__PURE__*/Symbol.for(FrequencyKeyTypeSymbolKey);
/** @internal */
const GaugeKeyTypeSymbolKey = "effect/io/Metric/KeyType/Gauge";
/** @internal */
const GaugeKeyTypeTypeId = /*#__PURE__*/Symbol.for(GaugeKeyTypeSymbolKey);
/** @internal */
const HistogramKeyTypeSymbolKey = "effect/io/Metric/KeyType/Histogram";
/** @internal */
const HistogramKeyTypeTypeId = /*#__PURE__*/Symbol.for(HistogramKeyTypeSymbolKey);
/** @internal */
const SummaryKeyTypeSymbolKey = "effect/io/Metric/KeyType/Summary";
/** @internal */
const SummaryKeyTypeTypeId = /*#__PURE__*/Symbol.for(SummaryKeyTypeSymbolKey);
/** @internal */
const metricKeyTypeVariance = {
  _In: _ => _,
  _Out: _ => _
};
/** @internal */
class CounterKeyType {
  constructor() {
    this[keyType_a] = metricKeyTypeVariance;
    this[keyType_b] = CounterKeyTypeTypeId;
  }
  [(keyType_a = MetricKeyTypeTypeId, keyType_b = CounterKeyTypeTypeId, Hash_symbol)]() {
    return Hash_hash(CounterKeyTypeSymbolKey);
  }
  [Equal_symbol](that) {
    return isCounterKey(that);
  }
}
/** @internal */
class FrequencyKeyType {
  constructor() {
    this[keyType_c] = metricKeyTypeVariance;
    this[_d] = FrequencyKeyTypeTypeId;
  }
  [(keyType_c = MetricKeyTypeTypeId, _d = FrequencyKeyTypeTypeId, Hash_symbol)]() {
    return Hash_hash(FrequencyKeyTypeSymbolKey);
  }
  [Equal_symbol](that) {
    return isFrequencyKey(that);
  }
}
/** @internal */
class GaugeKeyType {
  constructor() {
    this[_e] = metricKeyTypeVariance;
    this[_f] = GaugeKeyTypeTypeId;
  }
  [(_e = MetricKeyTypeTypeId, _f = GaugeKeyTypeTypeId, Hash_symbol)]() {
    return Hash_hash(GaugeKeyTypeSymbolKey);
  }
  [Equal_symbol](that) {
    return isGaugeKey(that);
  }
}
/**
 * @category model
 * @since 1.0.0
 */
class HistogramKeyType {
  constructor(boundaries) {
    this.boundaries = boundaries;
    this[_g] = metricKeyTypeVariance;
    this[_h] = HistogramKeyTypeTypeId;
  }
  [(_g = MetricKeyTypeTypeId, _h = HistogramKeyTypeTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.boundaries))(Hash_hash(HistogramKeyTypeSymbolKey));
  }
  [Equal_symbol](that) {
    return isHistogramKey(that) && equals(this.boundaries, that.boundaries);
  }
}
/** @internal */
class SummaryKeyType {
  constructor(maxAge, maxSize, error, quantiles) {
    this.maxAge = maxAge;
    this.maxSize = maxSize;
    this.error = error;
    this.quantiles = quantiles;
    this[_j] = metricKeyTypeVariance;
    this[_k] = SummaryKeyTypeTypeId;
  }
  [(_j = MetricKeyTypeTypeId, _k = SummaryKeyTypeTypeId, Hash_symbol)]() {
    return Hash.combine(Hash.hash(this.quantiles))(Hash.combine(Hash.hash(this.error))(Hash.combine(Hash.hash(this.maxSize))(Hash.combine(Hash.hash(this.maxAge))(Hash.hash(SummaryKeyTypeSymbolKey)))));
  }
  [Equal_symbol](that) {
    return isSummaryKey(that) && Equal.equals(this.maxAge, that.maxAge) && this.maxSize === that.maxSize && this.error === that.error && Equal.equals(this.quantiles, that.quantiles);
  }
}
/**
 * @since 1.0.0
 * @category constructors
 */
const counter = /*#__PURE__*/new CounterKeyType();
/**
 * @since 1.0.0
 * @category constructors
 */
const frequency = /*#__PURE__*/new FrequencyKeyType();
/**
 * @since 1.0.0
 * @category constructors
 */
const gauge = /*#__PURE__*/new GaugeKeyType();
/**
 * @since 1.0.0
 * @category constructors
 */
const histogram = boundaries => {
  return new HistogramKeyType(boundaries);
};
/**
 * @since 1.0.0
 * @category constructors
 */
const summary = (maxAge, maxSize, error, quantiles) => {
  return new SummaryKeyType(maxAge, maxSize, error, quantiles);
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isMetricKeyType = u => {
  return typeof u === "object" && u != null && MetricKeyTypeTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isCounterKey = u => {
  return typeof u === "object" && u != null && CounterKeyTypeTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isFrequencyKey = u => {
  return typeof u === "object" && u != null && FrequencyKeyTypeTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isGaugeKey = u => {
  return typeof u === "object" && u != null && GaugeKeyTypeTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isHistogramKey = u => {
  return typeof u === "object" && u != null && HistogramKeyTypeTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isSummaryKey = u => {
  return typeof u === "object" && u != null && SummaryKeyTypeTypeId in u;
};
//# sourceMappingURL=keyType.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/key.mjs
var key_a;






/** @internal */
const MetricKeySymbolKey = "@effect/io/Metric/Key";
/** @internal */
const MetricKeyTypeId = /*#__PURE__*/Symbol.for(MetricKeySymbolKey);
/** @internal */
const metricKeyVariance = {
  _Type: _ => _
};
/** @internal */
class MetricKeyImpl {
  constructor(name, keyType, tags = mjs_HashSet_empty()) {
    this.name = name;
    this.keyType = keyType;
    this.tags = tags;
    this[key_a] = metricKeyVariance;
  }
  [(key_a = MetricKeyTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.tags))(combine(Hash_hash(this.keyType))(Hash_hash(this.name)));
  }
  [Equal_symbol](u) {
    return isMetricKey(u) && this.name === u.name && equals(this.keyType, u.keyType) && equals(this.tags, u.tags);
  }
}
/** @internal */
const isMetricKey = u => {
  return typeof u === "object" && u != null && MetricKeyTypeId in u;
};
/** @internal */
const key_counter = name => {
  return new MetricKeyImpl(name, counter);
};
/** @internal */
const key_frequency = name => {
  return new MetricKeyImpl(name, metricKeyType.frequency);
};
/** @internal */
const key_gauge = name => {
  return new MetricKeyImpl(name, metricKeyType.gauge);
};
/** @internal */
const key_histogram = (name, boundaries) => {
  return new MetricKeyImpl(name, histogram(boundaries));
};
/** @internal */
const key_summary = (name, maxAge, maxSize, error, quantiles) => {
  return new MetricKeyImpl(name, metricKeyType.summary(maxAge, maxSize, error, quantiles));
};
/** @internal */
const key_tagged = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(3, (self, key, value) => key_taggedWithLabelSet(self, HashSet.make(metricLabel.make(key, value))))));
/** @internal */
const key_taggedWithLabels = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, extraTags) => key_taggedWithLabelSet(self, HashSet.fromIterable(extraTags)))));
/** @internal */
const key_taggedWithLabelSet = /*#__PURE__*/dual(2, (self, extraTags) => mjs_HashSet_size(extraTags) === 0 ? self : new MetricKeyImpl(self.name, self.keyType, mjs_HashSet_union(extraTags)(self.tags)));
//# sourceMappingURL=key.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/state.mjs
var state_a, state_b, state_c, state_d, state_e, state_f, state_g, state_h, state_j, state_k;


/** @internal */
const MetricStateSymbolKey = "@effect/io/Metric/State";
/** @internal */
const MetricStateTypeId = /*#__PURE__*/Symbol.for(MetricStateSymbolKey);
/** @internal */
const CounterStateSymbolKey = "effect/io/Metric/State/Counter";
/** @internal */
const CounterStateTypeId = /*#__PURE__*/Symbol.for(CounterStateSymbolKey);
/** @internal */
const FrequencyStateSymbolKey = "effect/io/Metric/State/Frequency";
/** @internal */
const FrequencyStateTypeId = /*#__PURE__*/Symbol.for(FrequencyStateSymbolKey);
/** @internal */
const GaugeStateSymbolKey = "effect/io/Metric/State/Gauge";
/** @internal */
const GaugeStateTypeId = /*#__PURE__*/Symbol.for(GaugeStateSymbolKey);
/** @internal */
const HistogramStateSymbolKey = "effect/io/Metric/State/Histogram";
/** @internal */
const HistogramStateTypeId = /*#__PURE__*/Symbol.for(HistogramStateSymbolKey);
/** @internal */
const SummaryStateSymbolKey = "effect/io/Metric/State/Summary";
/** @internal */
const SummaryStateTypeId = /*#__PURE__*/Symbol.for(SummaryStateSymbolKey);
/** @internal */
const metricStateVariance = {
  _A: _ => _
};
/** @internal */
class CounterState {
  constructor(count) {
    this.count = count;
    this[state_a] = metricStateVariance;
    this[state_b] = CounterStateTypeId;
  }
  [(state_a = MetricStateTypeId, state_b = CounterStateTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.count))(Hash_hash(CounterStateSymbolKey));
  }
  [Equal_symbol](that) {
    return isCounterState(that) && this.count === that.count;
  }
}
/** @internal */
class FrequencyState {
  constructor(occurrences) {
    this.occurrences = occurrences;
    this[state_c] = metricStateVariance;
    this[state_d] = FrequencyStateTypeId;
  }
  [(state_c = MetricStateTypeId, state_d = FrequencyStateTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.occurrences))(Hash_hash(FrequencyStateSymbolKey));
  }
  [Equal_symbol](that) {
    return isFrequencyState(that) && equals(this.occurrences, that.occurrences);
  }
}
/** @internal */
class GaugeState {
  constructor(value) {
    this.value = value;
    this[state_e] = metricStateVariance;
    this[state_f] = GaugeStateTypeId;
  }
  [(state_e = MetricStateTypeId, state_f = GaugeStateTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.value))(Hash_hash(GaugeStateSymbolKey));
  }
  [Equal_symbol](u) {
    return isGaugeState(u) && this.value === u.value;
  }
}
/** @internal */
class HistogramState {
  constructor(buckets, count, min, max, sum) {
    this.buckets = buckets;
    this.count = count;
    this.min = min;
    this.max = max;
    this.sum = sum;
    this[state_g] = metricStateVariance;
    this[state_h] = HistogramStateTypeId;
  }
  [(state_g = MetricStateTypeId, state_h = HistogramStateTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.sum))(combine(Hash_hash(this.max))(combine(Hash_hash(this.min))(combine(Hash_hash(this.count))(combine(Hash_hash(this.buckets))(Hash_hash(HistogramStateSymbolKey))))));
  }
  [Equal_symbol](that) {
    return isHistogramState(that) && equals(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
}
/** @internal */
class SummaryState {
  constructor(error, quantiles, count, min, max, sum) {
    this.error = error;
    this.quantiles = quantiles;
    this.count = count;
    this.min = min;
    this.max = max;
    this.sum = sum;
    this[state_j] = metricStateVariance;
    this[state_k] = SummaryStateTypeId;
  }
  [(state_j = MetricStateTypeId, state_k = SummaryStateTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.sum))(combine(Hash_hash(this.max))(combine(Hash_hash(this.min))(combine(Hash_hash(this.count))(combine(Hash_hash(this.quantiles))(combine(Hash_hash(this.error))(Hash_hash(SummaryStateSymbolKey)))))));
  }
  [Equal_symbol](that) {
    return isSummaryState(that) && this.error === that.error && equals(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
}
/** @internal */
const state_counter = count => {
  return new CounterState(count);
};
/** @internal */
const state_frequency = occurrences => {
  return new FrequencyState(occurrences);
};
/** @internal */
const state_gauge = value => {
  return new GaugeState(value);
};
/** @internal */
const state_histogram = (buckets, count, min, max, sum) => {
  return new HistogramState(buckets, count, min, max, sum);
};
/** @internal */
const state_summary = (error, quantiles, count, min, max, sum) => {
  return new SummaryState(error, quantiles, count, min, max, sum);
};
/** @internal */
const isMetricState = u => {
  return typeof u === "object" && u != null && MetricStateTypeId in u;
};
/** @internal */
const isCounterState = u => {
  return typeof u === "object" && u != null && CounterStateTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isFrequencyState = u => {
  return typeof u === "object" && u != null && FrequencyStateTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isGaugeState = u => {
  return typeof u === "object" && u != null && GaugeStateTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isHistogramState = u => {
  return typeof u === "object" && u != null && HistogramStateTypeId in u;
};
/**
 * @since 1.0.0
 * @category refinements
 */
const isSummaryState = u => {
  return typeof u === "object" && u != null && SummaryStateTypeId in u;
};
//# sourceMappingURL=state.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/hook.mjs







/** @internal */
const MetricHookSymbolKey = "@effect/io/Metric/Hook";
/** @internal */
const MetricHookTypeId = /*#__PURE__*/Symbol.for(MetricHookSymbolKey);
/** @internal */
const metricHookVariance = {
  _In: _ => _,
  _Out: _ => _
};
/** @internal */
const hook_make = (get, update) => {
  return {
    [MetricHookTypeId]: metricHookVariance,
    update,
    get
  };
};
/** @internal */
const onUpdate = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, f) => ({
  [MetricHookTypeId]: metricHookVariance,
  get: self.get,
  update: input => {
    self.update(input);
    return f(input);
  }
}))));
/** @internal */
const hook_counter = _key => {
  let sum = 0;
  return hook_make(() => state_counter(sum), value => {
    sum = sum + value;
  });
};
/** @internal */
const hook_frequency = _key => {
  let count = 0;
  const values = new Map();
  const update = word => {
    count = count + 1;
    const slotCount = values.get(word) ?? 0;
    values.set(word, slotCount + 1);
  };
  const snapshot = () => mjs_HashMap_fromIterable(Array.from(values.entries()).map(([k, v]) => [k, v]));
  return hook_make(() => state_frequency(snapshot()), update);
};
/** @internal */
const hook_gauge = (_key, startAt) => {
  let value = startAt;
  return hook_make(() => state_gauge(value), v => {
    value = v;
  });
};
/** @internal */
const hook_histogram = key => {
  const bounds = key.keyType.boundaries.values;
  const size = bounds.length;
  const values = Array(size + 1);
  const boundaries = Array(size);
  let count = 0;
  let sum = 0;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  Chunk_mapWithIndex((i, n) => {
    boundaries[i] = n;
  })(Chunk_sort(Number_Order)(bounds));
  // Insert the value into the right bucket with a binary search
  const update = value => {
    let from = 0;
    let to = size;
    while (from !== to) {
      const mid = Math.floor(from + (to - from) / 2);
      const boundary = boundaries[mid];
      if (value <= boundary) {
        to = mid;
      } else {
        from = mid;
      }
      // The special case when to / from have a distance of one
      if (to === from + 1) {
        if (value <= boundaries[from]) {
          to = from;
        } else {
          from = to;
        }
      }
    }
    values[from] = values[from] + 1;
    count = count + 1;
    sum = sum + value;
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  };
  const getBuckets = () => {
    const builder = [];
    let i = 0;
    let cumulated = 0;
    while (i != size) {
      const boundary = boundaries[i];
      const value = values[i];
      cumulated = cumulated + value;
      builder.push([boundary, cumulated]);
      i = i + 1;
    }
    return Chunk_fromIterable(builder);
  };
  return hook_make(() => state_histogram(getBuckets(), count, min, max, sum), update);
};
/** @internal */
const hook_summary = key => {
  const {
    error,
    maxAge,
    maxSize,
    quantiles
  } = key.keyType;
  const sortedQuantiles = Chunk_sort(Number_Order)(quantiles);
  const values = Array(maxSize);
  let head = 0;
  let count = 0;
  let sum = 0;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  // Just before the snapshot we filter out all values older than maxAge
  const snapshot = now => {
    const builder = [];
    // If the buffer is not full yet it contains valid items at the 0..last
    // indices and null values at the rest of the positions.
    //
    // If the buffer is already full then all elements contains a valid
    // measurement with timestamp.
    //
    // At any given point in time we can enumerate all the non-null elements in
    // the buffer and filter them by timestamp to get a valid view of a time
    // window.
    //
    // The order does not matter because it gets sorted before passing to
    // `calculateQuantiles`.
    let i = 0;
    while (i !== maxSize - 1) {
      const item = values[i];
      if (item != null) {
        const [t, v] = item;
        const age = millis(now - t);
        if (age.millis >= 0 && age <= maxAge) {
          builder.push(v);
        }
      }
      i = i + 1;
    }
    return calculateQuantiles(error, sortedQuantiles, Chunk_sort(Number_Order)(Chunk_fromIterable(builder)));
  };
  const observe = (value, timestamp) => {
    if (maxSize > 0) {
      head = head + 1;
      const target = head % maxSize;
      values[target] = [timestamp, value];
    }
    count = count + 1;
    sum = sum + value;
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  };
  return hook_make(() => state_summary(error, snapshot(Date.now()), count, min, max, sum), ([value, timestamp]) => observe(value, timestamp));
};
/** @internal */
const calculateQuantiles = (error, sortedQuantiles, sortedSamples) => {
  // The number of samples examined
  const sampleCount = sortedSamples.length;
  if (Chunk_isEmpty(sortedQuantiles)) {
    return Chunk_empty();
  }
  const head = unsafeHead(sortedQuantiles);
  const tail = Chunk_drop(1)(sortedQuantiles);
  const resolved = Chunk_reduce(Chunk_of(resolveQuantile(error, sampleCount, Option_none(), 0, head, sortedSamples)), (accumulator, quantile) => {
    const h = unsafeHead(accumulator);
    return Chunk_append(resolveQuantile(error, sampleCount, h.value, h.consumed, quantile, h.rest))(accumulator);
  })(tail);
  return Chunk_map(rq => [rq.quantile, rq.value])(resolved);
};
/** @internal */
const resolveQuantile = (error, sampleCount, current, consumed, quantile, rest) => {
  let error_1 = error;
  let sampleCount_1 = sampleCount;
  let current_1 = current;
  let consumed_1 = consumed;
  let quantile_1 = quantile;
  let rest_1 = rest;
  let error_2 = error;
  let sampleCount_2 = sampleCount;
  let current_2 = current;
  let consumed_2 = consumed;
  let quantile_2 = quantile;
  let rest_2 = rest;
  // eslint-disable-next-line no-constant-condition
  while (1) {
    // If the remaining list of samples is empty, there is nothing more to resolve
    if (Chunk_isEmpty(rest_1)) {
      return {
        quantile: quantile_1,
        value: Option_none(),
        consumed: consumed_1,
        rest: Chunk_empty()
      };
    }
    // If the quantile is the 100% quantile, we can take the maximum of all the
    // remaining values as the result
    if (quantile_1 === 1) {
      return {
        quantile: quantile_1,
        value: Option_some(unsafeLast(rest_1)),
        consumed: consumed_1 + rest_1.length,
        rest: Chunk_empty()
      };
    }
    // Split into two chunks - the first chunk contains all elements of the same
    // value as the chunk head
    const sameHead = splitWhere(n => n > unsafeHead(rest_1))(rest_1);
    // How many elements do we want to accept for this quantile
    const desired = quantile_1 * sampleCount_1;
    // The error margin
    const allowedError = error_1 / 2 * desired;
    // Taking into account the elements consumed from the samples so far and the
    // number of same elements at the beginning of the chunk, calculate the number
    // of elements we would have if we selected the current head as result
    const candConsumed = consumed_1 + sameHead[0].length;
    const candError = Math.abs(candConsumed - desired);
    // If we haven't got enough elements yet, recurse
    if (candConsumed < desired - allowedError) {
      error_2 = error_1;
      sampleCount_2 = sampleCount_1;
      current_2 = Chunk_head(rest_1);
      consumed_2 = candConsumed;
      quantile_2 = quantile_1;
      rest_2 = sameHead[1];
      error_1 = error_2;
      sampleCount_1 = sampleCount_2;
      current_1 = current_2;
      consumed_1 = consumed_2;
      quantile_1 = quantile_2;
      rest_1 = rest_2;
      continue;
    }
    // If we have too many elements, select the previous value and hand back the
    // the rest as leftover
    if (candConsumed > desired + allowedError) {
      return {
        quantile: quantile_1,
        value: current_1,
        consumed: consumed_1,
        rest: rest_1
      };
    }
    // If we are in the target interval, select the current head and hand back the leftover after dropping all elements
    // from the sample chunk that are equal to the current head
    switch (current_1._tag) {
      case "None":
        {
          error_2 = error_1;
          sampleCount_2 = sampleCount_1;
          current_2 = Chunk_head(rest_1);
          consumed_2 = candConsumed;
          quantile_2 = quantile_1;
          rest_2 = sameHead[1];
          error_1 = error_2;
          sampleCount_1 = sampleCount_2;
          current_1 = current_2;
          consumed_1 = consumed_2;
          quantile_1 = quantile_2;
          rest_1 = rest_2;
          continue;
        }
      case "Some":
        {
          const prevError = Math.abs(desired - current_1.value);
          if (candError < prevError) {
            error_2 = error_1;
            sampleCount_2 = sampleCount_1;
            current_2 = Chunk_head(rest_1);
            consumed_2 = candConsumed;
            quantile_2 = quantile_1;
            rest_2 = sameHead[1];
            error_1 = error_2;
            sampleCount_1 = sampleCount_2;
            current_1 = current_2;
            consumed_1 = consumed_2;
            quantile_1 = quantile_2;
            rest_1 = rest_2;
            continue;
          }
          return {
            quantile: quantile_1,
            value: Option_some(current_1.value),
            consumed: consumed_1,
            rest: rest_1
          };
        }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/io/issues");
};
//# sourceMappingURL=hook.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/pair.mjs
/** @internal */
const MetricPairSymbolKey = "@effect/io/Metric/Pair";
/** @internal */
const MetricPairTypeId = /*#__PURE__*/Symbol.for(MetricPairSymbolKey);
/** @internal */
const metricPairVariance = {
  _Type: _ => _
};
/** @internal */
const pair_make = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState
  };
};
/** @internal */
const pair_unsafeMake = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState
  };
};
//# sourceMappingURL=pair.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/MutableHashMap.mjs
/**
 * @since 1.0.0
 */




const MutableHashMap_TypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/MutableHashMap");
/** @internal */
class Node {
  constructor(k, v, next) {
    this.k = k;
    this.v = v;
    this.next = next;
  }
  [Symbol.iterator]() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let c = this;
    let n = 0;
    return {
      next: () => {
        if (c) {
          const kv = [c.k, c.v];
          c = c.next;
          n++;
          return {
            value: kv,
            done: false
          };
        } else {
          return {
            value: n,
            done: true
          };
        }
      }
    };
  }
}
/** @internal */
class MutableHashMapImpl {
  constructor() {
    this._id = MutableHashMap_TypeId;
    this.backingMap = new Map();
    this.length = 0;
  }
  [Symbol.iterator]() {
    return Array.from(this.backingMap.values()).flatMap(node => {
      const arr = [[node.k, node.v]];
      let next = node.next;
      while (next) {
        arr.push([next.k, next.v]);
        next = next.next;
      }
      return arr;
    })[Symbol.iterator]();
  }
  toString() {
    return `MutableHashMap(${Array.from(this).map(([k, v]) => `[${String(k)}, ${String(v)}]`).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "MutableHashMap",
      values: Array.from(this)
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}
/**
 * @since 1.0.0
 * @category constructors
 */
const MutableHashMap_empty = () => new MutableHashMapImpl();
/**
 * @since 1.0.0
 * @category constructors
 */
const MutableHashMap_make = (...entries) => MutableHashMap_fromIterable(entries);
/**
 * @since 1.0.0
 * @category conversions
 */
const MutableHashMap_fromIterable = entries => {
  const map = MutableHashMap_empty();
  for (const entry of entries) {
    MutableHashMap_set(map, entry[0], entry[1]);
  }
  return map;
};
/**
 * @since 1.0.0
 * @category elements
 */
const MutableHashMap_get = /*#__PURE__*/Dual_dual(2, (self, key) => {
  const hash = Hash_hash(key);
  const arr = self.backingMap.get(hash);
  if (arr === undefined) {
    return Option_none();
  }
  let c = arr;
  while (c !== undefined) {
    if (equals(key, c.k)) {
      return Option_some(c.v);
    }
    c = c.next;
  }
  return Option_none();
});
/**
 * @since 1.0.0
 * @category elements
 */
const MutableHashMap_has = /*#__PURE__*/Dual_dual(2, (self, key) => Option_isSome(MutableHashMap_get(self, key)));
/**
 * Updates the value of the specified key within the `MutableHashMap` if it exists.
 *
 * @since 1.0.0
 * @category mutations
 */
const MutableHashMap_modify = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, key, f) => {
  const hash = Hash.hash(key);
  const arr = self.backingMap.get(hash);
  if (arr === undefined) {
    return self;
  }
  let c = arr;
  while (c !== undefined) {
    if (Equal.equals(key, c.k)) {
      c.v = f(c.v);
      return self;
    }
    c = c.next;
  }
  return self;
})));
/**
 * Set or remove the specified key in the `MutableHashMap` using the specified
 * update function.
 *
 * @since 1.0.0
 * @category mutations
 */
const MutableHashMap_modifyAt = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(3, (self, key, f) => {
  const result = f(MutableHashMap_get(self, key));
  if (Option.isSome(result)) {
    MutableHashMap_set(self, key, result.value);
  } else {
    MutableHashMap_remove(self, key);
  }
  return self;
})));
/**
 * @since 1.0.0
 * @category mutations
 */
const MutableHashMap_remove = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, key) => {
  const hash = Hash.hash(key);
  const arr = self.backingMap.get(hash);
  if (arr === undefined) {
    return self;
  }
  if (Equal.equals(key, arr.k)) {
    if (arr.next !== undefined) {
      self.backingMap.set(hash, arr.next);
    } else {
      self.backingMap.delete(hash);
    }
    self.length = self.length - 1;
    return self;
  }
  let next = arr.next;
  let curr = arr;
  while (next !== undefined) {
    if (Equal.equals(key, next.k)) {
      curr.next = next.next;
      self.length = self.length - 1;
      return self;
    }
    curr = next;
    next = next.next;
  }
  return self;
})));
/**
 * @since 1.0.0
 * @category mutations
 */
const MutableHashMap_set = /*#__PURE__*/Dual_dual(3, (self, key, value) => {
  const hash = Hash_hash(key);
  const arr = self.backingMap.get(hash);
  if (arr === undefined) {
    self.backingMap.set(hash, new Node(key, value));
    self.length = self.length + 1;
    return self;
  }
  let c = arr;
  let l = arr;
  while (c !== undefined) {
    if (equals(key, c.k)) {
      c.v = value;
      return self;
    }
    l = c;
    c = c.next;
  }
  self.length = self.length + 1;
  l.next = new Node(key, value);
  return self;
});
/**
 * @since 1.0.0
 * @category elements
 */
const MutableHashMap_size = self => self.length;
//# sourceMappingURL=MutableHashMap.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/registry.mjs
var registry_a;






/** @internal */
const MetricRegistrySymbolKey = "@effect/io/Metric/Registry";
/** @internal */
const MetricRegistryTypeId = /*#__PURE__*/Symbol.for(MetricRegistrySymbolKey);
/** @internal */
class MetricRegistryImpl {
  constructor() {
    this[registry_a] = MetricRegistryTypeId;
    this.map = MutableHashMap_empty();
  }
  snapshot() {
    const result = [];
    for (const [key, hook] of this.map) {
      result.push(pair_unsafeMake(key, hook.get()));
    }
    return mjs_HashSet_fromIterable(result);
  }
  get(key) {
    const hook = Option_getOrUndefined(MutableHashMap_get(key)(this.map));
    if (hook == null) {
      if (isCounterKey(key.keyType)) {
        return this.getCounter(key);
      }
      if (isGaugeKey(key.keyType)) {
        return this.getGauge(key);
      }
      if (isFrequencyKey(key.keyType)) {
        return this.getFrequency(key);
      }
      if (isHistogramKey(key.keyType)) {
        return this.getHistogram(key);
      }
      if (isSummaryKey(key.keyType)) {
        return this.getSummary(key);
      }
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/io/issues");
    } else {
      return hook;
    }
  }
  getCounter(key) {
    let value = Option_getOrUndefined(MutableHashMap_get(key)(this.map));
    if (value == null) {
      const counter = hook_counter(key);
      if (!MutableHashMap_has(key)(this.map)) {
        MutableHashMap_set(key, counter)(this.map);
      }
      value = counter;
    }
    return value;
  }
  getFrequency(key) {
    let value = Option_getOrUndefined(MutableHashMap_get(key)(this.map));
    if (value == null) {
      const frequency = hook_frequency(key);
      if (!MutableHashMap_has(key)(this.map)) {
        MutableHashMap_set(key, frequency)(this.map);
      }
      value = frequency;
    }
    return value;
  }
  getGauge(key) {
    let value = Option_getOrUndefined(MutableHashMap_get(key)(this.map));
    if (value == null) {
      const gauge = hook_gauge(key, 0);
      if (!MutableHashMap_has(key)(this.map)) {
        MutableHashMap_set(key, gauge)(this.map);
      }
      value = gauge;
    }
    return value;
  }
  getHistogram(key) {
    let value = Option_getOrUndefined(MutableHashMap_get(key)(this.map));
    if (value == null) {
      const histogram = hook_histogram(key);
      if (!MutableHashMap_has(key)(this.map)) {
        MutableHashMap_set(key, histogram)(this.map);
      }
      value = histogram;
    }
    return value;
  }
  getSummary(key) {
    let value = Option_getOrUndefined(MutableHashMap_get(key)(this.map));
    if (value == null) {
      const summary = hook_summary(key);
      if (!MutableHashMap_has(key)(this.map)) {
        MutableHashMap_set(key, summary)(this.map);
      }
      value = summary;
    }
    return value;
  }
}
registry_a = MetricRegistryTypeId;
/** @internal */
const registry_make = () => {
  return new MetricRegistryImpl();
};
//# sourceMappingURL=registry.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric.mjs












/** @internal */
const MetricSymbolKey = "@effect/io/Metric";
/** @internal */
const MetricTypeId = /*#__PURE__*/Symbol.for(MetricSymbolKey);
/** @internal */
const metricVariance = {
  _Type: _ => _,
  _In: _ => _,
  _Out: _ => _
};
/** @internal */
const globalMetricRegistry = /*#__PURE__*/registry_make();
/** @internal */
const metric_make = function (keyType, unsafeUpdate, unsafeValue) {
  const metric = Object.assign(methodWithTrace((trace, restore) => effect => core_tap(effect, a => core_sync(() => restore(unsafeUpdate)(a, mjs_HashSet_empty()))).traced(trace)), {
    [MetricTypeId]: metricVariance,
    keyType,
    unsafeUpdate,
    unsafeValue
  });
  return metric;
};
/** @internal */
const metric_contramap = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => metric_make(self.keyType, (input, extraTags) => self.unsafeUpdate(restore(f)(input), extraTags), self.unsafeValue))));
/** @internal */
const metric_counter = name => fromMetricKey(key_counter(name));
/** @internal */
const metric_frequency = name => fromMetricKey(metricKey.frequency(name));
/** @internal */
const fromConst = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, input) => metric_contramap(self, restore(input)))));
/** @internal */
const fromMetricKey = key => {
  const hook = extraTags => {
    const fullKey = key_taggedWithLabelSet(extraTags)(key);
    return globalMetricRegistry.get(fullKey);
  };
  return metric_make(key.keyType, (input, extraTags) => hook(extraTags).update(input), extraTags => hook(extraTags).get());
};
/** @internal */
const metric_gauge = name => fromMetricKey(metricKey.gauge(name));
/** @internal */
const metric_histogram = (name, boundaries) => fromMetricKey(key_histogram(name, boundaries));
/* @internal */
const metric_increment = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => self => metric_update(self, 1).traced(trace))));
/* @internal */
const incrementBy = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, amount) => metric_update(self, amount).traced(trace))));
/** @internal */
const metric_map = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => metric_make(self.keyType, self.unsafeUpdate, extraTags => restore(f)(self.unsafeValue(extraTags))))));
/** @internal */
const mapType = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => metric_make(restore(f)(self.keyType), self.unsafeUpdate, self.unsafeValue))));
/* @internal */
const metric_set = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, value) => metric_update(self, value).traced(trace))));
/** @internal */
const snapshot = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => () => core.sync(unsafeSnapshot).traced(trace))));
/** @internal */
const metric_succeed = out => metric_make(void 0, constVoid, () => out);
/** @internal */
const metric_sync = evaluate => metric_make(void 0, constVoid, evaluate);
/** @internal */
const metric_summary = (name, maxAge, maxSize, error, quantiles) => withNow(summaryTimestamp(name, maxAge, maxSize, error, quantiles));
/** @internal */
const summaryTimestamp = (name, maxAge, maxSize, error, quantiles) => fromMetricKey(metricKey.summary(name, maxAge, maxSize, error, quantiles));
/** @internal */
const metric_tagged = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(3, (self, key, value) => metric_taggedWithLabelSet(self, HashSet.make(metricLabel.make(key, value))))));
/** @internal */
const taggedWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => metric_map(metric_make(self.keyType, (input, extraTags) => self.unsafeUpdate(input, HashSet.union(extraTags)(restore(f)(input))), self.unsafeValue), constVoid))));
/** @internal */
const metric_taggedWithLabels = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, extraTags) => metric_taggedWithLabelSet(self, HashSet.fromIterable(extraTags)))));
/** @internal */
const metric_taggedWithLabelSet = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, extraTags) => metric_make(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, HashSet.union(extraTags1)(extraTags)), extraTags1 => self.unsafeValue(HashSet.union(extraTags1)(extraTags))))));
/** @internal */
const timer = name => {
  const boundaries = metricBoundaries.exponential(1, 2, 100);
  const base = metric_tagged("time_unit", "milliseconds")(metric_histogram(name, boundaries));
  return metric_contramap(duration => duration.millis)(base);
};
/** @internal */
const timerWithBoundaries = (name, boundaries) => {
  const base = metric_tagged("time_unit", "milliseconds")(metric_histogram(name, metricBoundaries.fromChunk(boundaries)));
  return metric_contramap(base, duration => duration.millis);
};
/* @internal */
const trackAll = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, input) => effect => Debug.untraced(() => core.matchCauseEffect(effect, cause => {
  self.unsafeUpdate(input, HashSet.empty());
  return core.failCause(cause);
}, value => {
  self.unsafeUpdate(input, HashSet.empty());
  return core.succeed(value);
}).traced(trace)))));
/* @internal */
const trackDefect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, metric) => trackDefectWith(self, metric, identity).traced(trace))));
/* @internal */
const trackDefectWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, (trace, restore) => (self, metric, f) => Debug.untraced(() => {
  const updater = defect => metric.unsafeUpdate(restore(f)(defect), HashSet.empty());
  return _effect.tapDefect(self, cause => core.sync(() => Chunk.forEach(updater)(Cause.defects(cause)))).traced(trace);
}))));
/* @internal */
const trackDuration = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, metric) => trackDurationWith(self, metric, identity).traced(trace))));
/* @internal */
const trackDurationWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, (trace, restore) => (self, metric, f) => Debug.untraced(() => core.suspendSucceed(() => {
  const startTime = Date.now();
  return core.map(self, a => {
    const endTime = Date.now();
    const duration = Duration.millis(endTime - startTime);
    metric.unsafeUpdate(restore(f)(duration), HashSet.empty());
    return a;
  });
}).traced(trace)))));
/* @internal */
const trackError = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, metric) => trackErrorWith(self, metric, a => a).traced(trace))));
/* @internal */
const trackErrorWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, (trace, restore) => (self, metric, f) => Debug.untraced(() => {
  const updater = error => metric_update(metric, restore(f)(error));
  return _effect.tapError(self, updater).traced(trace);
}))));
/* @internal */
const trackSuccess = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, metric) => trackSuccessWith(self, metric, a => a).traced(trace))));
/* @internal */
const trackSuccessWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, (trace, restore) => (self, metric, f) => Debug.untraced(() => {
  const updater = value => metric_update(metric, restore(f)(value));
  return core.tap(self, updater).traced(trace);
}))));
/* @internal */
const metric_update = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, input) => core.fiberRefGetWith(core.currentTags, tags => core.sync(() => self.unsafeUpdate(input, tags))).traced(trace))));
/* @internal */
const metric_value = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => self => core.fiberRefGetWith(core.currentTags, tags => core.sync(() => self.unsafeValue(tags))).traced(trace))));
/** @internal */
const withNow = self => metric_contramap(self, input => [input, Date.now()]);
/** @internal */
const metric_zip = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (self, that) => metric_make([self.keyType, that.keyType], (input, extraTags) => {
  const [l, r] = input;
  self.unsafeUpdate(l, extraTags);
  that.unsafeUpdate(r, extraTags);
}, extraTags => [self.unsafeValue(extraTags), that.unsafeValue(extraTags)]))));
/** @internal */
const unsafeSnapshot = () => globalMetricRegistry.snapshot();
//# sourceMappingURL=metric.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/metric/boundaries.mjs
var boundaries_a;



/** @internal */
const MetricBoundariesSymbolKey = "@effect/io/Metric/Boundaries";
/** @internal */
const MetricBoundariesTypeId = /*#__PURE__*/Symbol.for(MetricBoundariesSymbolKey);
/** @internal */
class MetricBoundariesImpl {
  constructor(values) {
    this.values = values;
    this[boundaries_a] = MetricBoundariesTypeId;
  }
  [(boundaries_a = MetricBoundariesTypeId, Hash_symbol)]() {
    return combine(Hash_hash(this.values))(Hash_hash(MetricBoundariesSymbolKey));
  }
  [Equal_symbol](u) {
    return isMetricBoundaries(u) && equals(this.values, u.values);
  }
}
/** @internal */
const isMetricBoundaries = u => {
  return typeof u === "object" && u != null && MetricBoundariesTypeId in u;
};
/** @internal */
const boundaries_fromChunk = chunk => {
  const values = dedupe(Chunk_concat(Chunk_of(Number.POSITIVE_INFINITY))(chunk));
  return new MetricBoundariesImpl(values);
};
/** @internal */
const linear = (start, width, count) => {
  return boundaries_fromChunk(Chunk.map(i => start + i * width)(Chunk.range(0, count - 1)));
};
/** @internal */
const exponential = (start, factor, count) => {
  return boundaries_fromChunk(Chunk_map(i => start * Math.pow(factor, i))(Chunk_range(0, count - 1)));
};
//# sourceMappingURL=boundaries.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/supervisor.mjs
var supervisor_a, supervisor_b, supervisor_c, supervisor_d, supervisor_e;





/** @internal */
const SupervisorSymbolKey = "@effect/io/Supervisor";
/** @internal */
const SupervisorTypeId = /*#__PURE__*/Symbol.for(SupervisorSymbolKey);
/** @internal */
const supervisorVariance = {
  _T: _ => _
};
/** @internal */
class ProxySupervisor {
  constructor(underlying, value0) {
    this.underlying = underlying;
    this.value0 = value0;
    this[supervisor_a] = supervisorVariance;
  }
  value() {
    return bodyWithTrace(trace => this.value0().traced(trace));
  }
  onStart(context, effect, parent, fiber) {
    this.underlying.onStart(context, effect, parent, fiber);
  }
  onEnd(value, fiber) {
    this.underlying.onEnd(value, fiber);
  }
  onEffect(fiber, effect) {
    this.underlying.onEffect(fiber, effect);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, () => core_map(f)(this.value()));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
supervisor_a = SupervisorTypeId;
/** @internal */
class Zip {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this[supervisor_b] = supervisorVariance;
  }
  value() {
    return bodyWithTrace(trace => core_zip(this.left.value(), this.right.value()).traced(trace));
  }
  onStart(context, effect, parent, fiber) {
    this.left.onStart(context, effect, parent, fiber);
    this.right.onStart(context, effect, parent, fiber);
  }
  onEnd(value, fiber) {
    this.left.onEnd(value, fiber);
    this.right.onEnd(value, fiber);
  }
  onEffect(fiber, effect) {
    this.left.onEffect(fiber, effect);
    this.right.onEffect(fiber, effect);
  }
  onSuspend(fiber) {
    this.left.onSuspend(fiber);
    this.right.onSuspend(fiber);
  }
  onResume(fiber) {
    this.left.onResume(fiber);
    this.right.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, () => core_map(f)(this.value()));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
supervisor_b = SupervisorTypeId;
class Track {
  constructor() {
    this[supervisor_c] = supervisorVariance;
    this.fibers = new Set();
  }
  value() {
    return bodyWithTrace(trace => core_sync(() => Chunk_fromIterable(this.fibers)).traced(trace));
  }
  onStart(_context, _effect, _parent, fiber) {
    this.fibers.add(fiber);
  }
  onEnd(_value, fiber) {
    this.fibers.delete(fiber);
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, () => core_map(f)(this.value()));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
supervisor_c = SupervisorTypeId;
class Const {
  constructor(effect) {
    this.effect = effect;
    this[supervisor_d] = supervisorVariance;
  }
  value() {
    return bodyWithTrace(trace => this.effect.traced(trace));
  }
  onStart(_context, _effect, _parent, _fiber) {
    //
  }
  onEnd(_value, _fiber) {
    //
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, () => core_map(f)(this.value()));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
supervisor_d = SupervisorTypeId;
class FibersIn {
  constructor(ref) {
    this.ref = ref;
    this[supervisor_e] = supervisorVariance;
  }
  value() {
    return Debug.bodyWithTrace(trace => core.sync(() => MutableRef.get(this.ref)).traced(trace));
  }
  onStart(_context, _effect, _parent, fiber) {
    MutableRef.set(SortedSet.add(fiber)(MutableRef.get(this.ref)))(this.ref);
  }
  onEnd(_value, fiber) {
    MutableRef.set(SortedSet.remove(fiber)(MutableRef.get(this.ref)))(this.ref);
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, () => core.map(f)(this.value()));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
supervisor_e = SupervisorTypeId;
/** @internal */
const unsafeTrack = () => {
  return new Track();
};
/** @internal */
const track = /*#__PURE__*/methodWithTrace(trace => () => core_sync(unsafeTrack).traced(trace));
/** @internal */
const supervisor_fromEffect = effect => {
  return new Const(effect);
};
/** @internal */
const supervisor_none = /*#__PURE__*/supervisor_fromEffect( /*#__PURE__*/core_unit());
/** @internal */
const fibersIn = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => ref => core.sync(() => new FibersIn(ref)).traced(trace))));
//# sourceMappingURL=supervisor.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/supervisor/patch.mjs





/** @internal */
const supervisor_patch_OP_EMPTY = "Empty";
/** @internal */
const OP_ADD_SUPERVISOR = "AddSupervisor";
/** @internal */
const OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
/** @internal */
const patch_OP_AND_THEN = "AndThen";
/**
 * The empty `SupervisorPatch`.
 *
 * @internal
 */
const supervisor_patch_empty = {
  _tag: supervisor_patch_OP_EMPTY
};
/**
 * Combines two patches to produce a new patch that describes applying the
 * updates from this patch and then the updates from the specified patch.
 *
 * @internal
 */
const supervisor_patch_combine = (self, that) => {
  return {
    _tag: patch_OP_AND_THEN,
    first: self,
    second: that
  };
};
/**
 * Applies a `SupervisorPatch` to a `Supervisor` to produce a new `Supervisor`.
 *
 * @internal
 */
const supervisor_patch_patch = (self, supervisor) => {
  return patchLoop(supervisor, Chunk_of(self));
};
/** @internal */
const patchLoop = (_supervisor, _patches) => {
  let supervisor = _supervisor;
  let patches = _patches;
  while (Chunk_isNonEmpty(patches)) {
    const head = Chunk_headNonEmpty(patches);
    switch (head._tag) {
      case supervisor_patch_OP_EMPTY:
        {
          patches = Chunk_tailNonEmpty(patches);
          break;
        }
      case OP_ADD_SUPERVISOR:
        {
          supervisor = supervisor.zip(head.supervisor);
          patches = Chunk_tailNonEmpty(patches);
          break;
        }
      case OP_REMOVE_SUPERVISOR:
        {
          supervisor = removeSupervisor(supervisor, head.supervisor);
          patches = Chunk_tailNonEmpty(patches);
          break;
        }
      case patch_OP_AND_THEN:
        {
          patches = Chunk_prepend(head.first)(Chunk_prepend(head.second)(Chunk_tailNonEmpty(patches)));
          break;
        }
    }
  }
  return supervisor;
};
/** @internal */
const removeSupervisor = (self, that) => {
  if (equals(self, that)) {
    return supervisor_none;
  } else {
    if (self instanceof Zip) {
      return removeSupervisor(self.left, that).zip(removeSupervisor(self.right, that));
    } else {
      return self;
    }
  }
};
/** @internal */
const patch_toSet = self => {
  if (equals(self, supervisor_none)) {
    return mjs_HashSet_empty();
  } else {
    if (self instanceof Zip) {
      return mjs_HashSet_union(patch_toSet(self.right))(patch_toSet(self.left));
    } else {
      return mjs_HashSet_make(self);
    }
  }
};
/** @internal */
const supervisor_patch_diff = (oldValue, newValue) => {
  if (equals(oldValue, newValue)) {
    return supervisor_patch_empty;
  }
  const oldSupervisors = patch_toSet(oldValue);
  const newSupervisors = patch_toSet(newValue);
  const added = mjs_HashSet_reduce(supervisor_patch_empty, (patch, supervisor) => supervisor_patch_combine(patch, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  }))(mjs_HashSet_difference(oldSupervisors)(newSupervisors));
  const removed = mjs_HashSet_reduce(supervisor_patch_empty, (patch, supervisor) => supervisor_patch_combine(patch, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  }))(mjs_HashSet_difference(newSupervisors)(oldSupervisors));
  return supervisor_patch_combine(added, removed);
};
/** @internal */
const patch_differ = /*#__PURE__*/mjs_Differ_make({
  empty: supervisor_patch_empty,
  patch: supervisor_patch_patch,
  combine: supervisor_patch_combine,
  diff: supervisor_patch_diff
});
//# sourceMappingURL=patch.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/MutableList.mjs
/**
 * @since 1.0.0
 */

const MutableList_TypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/MutableList");
/** @internal */
class MutableListImpl {
  constructor() {
    this._id = MutableList_TypeId;
    this.head = undefined;
    this.tail = undefined;
    this._length = 0;
  }
  [Symbol.iterator]() {
    let done = false;
    let head = this.head;
    return {
      next() {
        if (done) {
          return this.return();
        }
        if (head == null) {
          done = true;
          return this.return();
        }
        const value = head.value;
        head = head.right;
        return {
          done,
          value
        };
      },
      return(value) {
        if (!done) {
          done = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  }
  toString() {
    return `MutableList(${Array.from(this).map(String).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "MutableList",
      values: Array.from(this)
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}
/** @internal */
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.removed = false;
    this.left = undefined;
    this.right = undefined;
  }
}
/**
 * Creates an empty `MutableList`.
 *
 * @since 1.0.0
 * @category constructors
 */
const MutableList_empty = () => new MutableListImpl();
/**
 * Creates a new `MutableList` from an `Iterable`.
 *
 * @since 1.0.0
 * @category constructors
 */
const from = iterable => {
  const list = new MutableListImpl();
  for (const element of iterable) {
    MutableList_append(list, element);
  }
  return list;
};
/**
 * Creates a new `MutableList` from the specified elements.
 *
 * @since 1.0.0
 * @category constructors
 */
const MutableList_make = (...elements) => from(elements);
/**
 * Returns `true` if the list contains zero elements, `false`, otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const MutableList_isEmpty = self => MutableList_length(self) === 0;
/**
 * Returns the length of the list.
 *
 * @since 1.0.0
 * @category getters
 */
const MutableList_length = self => self._length;
/**
 * Returns the last element of the list, if it exists.
 *
 * @since 1.0.0
 * @category getters
 */
const MutableList_tail = self => self.tail === undefined ? undefined : self.tail.value;
/**
 * Returns the first element of the list, if it exists.
 *
 * @since 1.0.0
 * @category getters
 */
const MutableList_head = self => self.head === undefined ? undefined : self.head.value;
/**
 * Executes the specified function `f` for each element in the list.
 *
 * @since 1.0.0
 * @category traversing
 */
const MutableList_forEach = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, f) => {
  let current = self.head;
  while (current !== undefined) {
    f(current.value);
    current = current.right;
  }
})));
/**
 * Removes all elements from the doubly-linked list.
 *
 * @since 1.0.0
 * @category mutations
 */
const MutableList_reset = self => {
  ;
  self._length = 0;
  self.head = undefined;
  self.tail = undefined;
  return self;
};
/**
 * Appends the specified value to the end of the list.
 *
 * @since 1.0.0
 * @category mutations
 */
const MutableList_append = /*#__PURE__*/Dual_dual(2, (self, value) => {
  const node = new LinkedListNode(value);
  if (self._length === 0) {
    self.head = node;
  }
  if (self.tail === undefined) {
    self.tail = node;
  } else {
    self.tail.right = node;
    node.left = self.tail;
    self.tail = node;
  }
  ;
  self._length += 1;
  return self;
});
/**
 * Removes the first value from the list and returns it, if it exists.
 *
 * @since 0.0.1
 * @category mutations
 */
const shift = self => {
  const head = self.head;
  if (head !== undefined) {
    MutableList_remove(self, head);
    return head.value;
  }
  return undefined;
};
/**
 * Removes the last value from the list and returns it, if it exists.
 *
 * @since 0.0.1
 * @category mutations
 */
const pop = self => {
  const tail = self.tail;
  if (tail !== undefined) {
    MutableList_remove(self, tail);
    return tail.value;
  }
  return undefined;
};
const MutableList_remove = (self, node) => {
  if (node.removed) {
    return;
  }
  node.removed = true;
  if (node.left !== undefined && node.right !== undefined) {
    node.left.right = node.right;
    node.right.left = node.left;
  } else if (node.left !== undefined) {
    self.tail = node.left;
    node.left.right = undefined;
  } else if (node.right !== undefined) {
    self.head = node.right;
    node.right.left = undefined;
  } else {
    self.tail = undefined;
    self.head = undefined;
  }
  if (self._length > 0) {
    ;
    self._length -= 1;
  }
};
//# sourceMappingURL=MutableList.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@fp-ts+data@0.1.1/node_modules/@fp-ts/data/mjs/MutableQueue.mjs
/**
 * @since 1.0.0
 */



const MutableQueue_TypeId = /*#__PURE__*/Symbol.for("@fp-ts/data/MutableQueue");
/**
 * @since 1.0.0
 * @category symbol
 */
const EmptyMutableQueue = /*#__PURE__*/(/* unused pure expression or super */ null && (Symbol.for("@fp-ts/data/mutable/MutableQueue/Empty")));
/** @internal */
class MutableQueueImpl {
  constructor(capacity = undefined) {
    this.capacity = capacity;
    this._tag = "Bounded";
    this._id = MutableQueue_TypeId;
    this.queue = MutableList_empty();
  }
  [Symbol.iterator]() {
    return Array.from(this.queue)[Symbol.iterator]();
  }
  toString() {
    return `MutableQueue(${Array.from(this).map(String).join(", ")})`;
  }
  toJSON() {
    return {
      _tag: "MutableQueue",
      values: Array.from(this)
    };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}
/**
 * Creates a new bounded `MutableQueue`.
 *
 * @since 1.0.0
 * @category constructors
 */
const MutableQueue_bounded = capacity => new MutableQueueImpl(capacity);
/**
 * Creates a new unbounded `MutableQueue`.
 *
 * @since 1.0.0
 * @category constructors
 */
const unbounded = () => new MutableQueueImpl();
/**
 * Returns the current number of elements in the queue.
 *
 * @since 1.0.0
 * @category getters
 */
const MutableQueue_length = self => MutableList.length(self.queue);
/**
 * Returns `true` if the queue is empty, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const MutableQueue_isEmpty = self => MutableList_isEmpty(self.queue);
/**
 * Returns `true` if the queue is full, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const isFull = self => self.capacity === undefined ? false : MutableList.length(self.queue) === self.capacity;
/**
 * The **maximum** number of elements that a queue can hold.
 *
 * **Note**: unbounded queues can still implement this interface with
 * `capacity = Infinity`.
 *
 * @since 1.0.0
 * @category getters
 */
const capacity = self => self.capacity === undefined ? Infinity : self.capacity;
/**
 * Offers an element to the queue.
 *
 * Returns whether the enqueue was successful or not.
 *
 * @since 1.0.0
 * @category mutations
 */
const offer = /*#__PURE__*/Dual_dual(2, (self, value) => {
  const queueLength = MutableList_length(self.queue);
  if (self.capacity !== undefined && queueLength === self.capacity) {
    return false;
  }
  MutableList_append(value)(self.queue);
  return true;
});
/**
 * Enqueues a collection of values into the queue.
 *
 * Returns a `List` of the values that were **not** able to be enqueued.
 *
 * @since 1.0.0
 * @category mutations
 */
const offerAll = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, values) => {
  const iterator = values[Symbol.iterator]();
  let next;
  let remainder = Chunk.empty();
  let offering = true;
  while (offering && (next = iterator.next()) && !next.done) {
    offering = offer(next.value)(self);
  }
  while (next != null && !next.done) {
    remainder = Chunk.prepend(next.value)(remainder);
    next = iterator.next();
  }
  return Chunk.reverse(remainder);
})));
/**
 * Dequeues an element from the queue.
 *
 * Returns either an element from the queue, or the `def` param.
 *
 * **Note**: if there is no meaningful default for your type, you can always
 * use `poll(MutableQueue.EmptyMutableQueue)`.
 *
 * @since 1.0.0
 * @category mutations
 */
const MutableQueue_poll = /*#__PURE__*/Dual_dual(2, (self, def) => {
  if (MutableList_isEmpty(self.queue)) {
    return def;
  }
  return shift(self.queue);
});
/**
 * Dequeues up to `n` elements from the queue.
 *
 * Returns a `List` of up to `n` elements.
 *
 * @since 1.0.0
 * @category mutations
 */
const pollUpTo = /*#__PURE__*/(/* unused pure expression or super */ null && (Dual.dual(2, (self, n) => {
  let result = Chunk.empty();
  let count = 0;
  while (count < n) {
    const element = MutableQueue_poll(EmptyMutableQueue)(self);
    if (element === EmptyMutableQueue) {
      break;
    }
    result = Chunk.prepend(element)(result);
    count += 1;
  }
  return Chunk.reverse(result);
})));
//# sourceMappingURL=MutableQueue.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/fiberRuntime.mjs
var fiberRuntime_a, fiberRuntime_b;

































const fibersStarted = /*#__PURE__*/metric_counter("effect_fiber_started");
const fiberSuccesses = /*#__PURE__*/metric_counter("effect_fiber_successes");
const fiberFailures = /*#__PURE__*/metric_counter("effect_fiber_failures");
const fiberLifetimes = /*#__PURE__*/metric_histogram("effect_fiber_lifetimes", /*#__PURE__*/exponential(1.0, 2.0, 100));
/** @internal */
const EvaluationSignalContinue = "Continue";
/** @internal */
const EvaluationSignalDone = "Done";
/** @internal */
const EvaluationSignalYieldNow = "Yield";
/** @internal */
const EvaluationSignalYieldNowInBackground = "YieldInBackground";
/** @internal */
const runtimeFiberVariance = {
  _E: _ => _,
  _A: _ => _
};
const fiberRuntime_absurd = _ => {
  throw new Error(`BUG: FiberRuntime - ${JSON.stringify(_)} - please report an issue at https://github.com/Effect-TS/io/issues`);
};
const contOpSuccess = {
  [OP_ON_SUCCESS]: (_, cont, value) => {
    return cont.successK(value);
  },
  [OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value) => {
    return cont.successK(value);
  },
  [OP_REVERT_FLAGS]: (self, cont, value) => {
    self.patchRuntimeFlags(self._runtimeFlags, cont.patch);
    if (interruptible(self._runtimeFlags) && self.isInterrupted()) {
      return exitFailCause(self.getInterruptedCause());
    } else {
      return exitSucceed(value);
    }
  },
  [OP_WHILE]: (self, cont, value) => {
    cont.process(value);
    if (cont.check()) {
      self.pushStack(cont);
      return cont.body();
    } else {
      return core_unit();
    }
  }
};
const drainQueueWhileRunningTable = {
  [OP_INTERRUPT_SIGNAL]: (self, runtimeFlags, cur, message) => {
    self.processNewInterruptSignal(message.cause);
    return interruptible(runtimeFlags) ? exitFailCause(message.cause) : cur;
  },
  [OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [OP_STATEFUL]: (self, runtimeFlags, cur, message) => {
    message.onFiber(self, Status_running(runtimeFlags));
    return cur;
  },
  [OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
    return core_flatMap(() => cur)(yieldNow(_message.priority));
  }
};
let globalErrorSeq = 0;
/** @internal */
class FiberRuntime {
  constructor(fiberId, fiberRefs0, runtimeFlags0, runtime) {
    this.runtime = runtime;
    this[fiberRuntime_a] = fiberVariance;
    this[fiberRuntime_b] = runtimeFiberVariance;
    this._queue = unbounded();
    this._children = null;
    this._observers = new Array();
    this._running = false;
    this._stack = [];
    this._asyncInterruptor = null;
    this._asyncBlockingOn = null;
    this._exitValue = null;
    this._traceStack = [];
    this.run = () => {
      this.drainQueueOnCurrentThread();
    };
    this._runtimeFlags = runtimeFlags0;
    this._fiberId = fiberId;
    this._fiberRefs = fiberRefs0;
    if (runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(currentTags);
      fibersStarted.unsafeUpdate(1, tags);
    }
  }
  /**
   * The identity of the fiber.
   */
  id() {
    return this._fiberId;
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume(effect) {
    this.tell(resume(effect));
  }
  /**
   * The status of the fiber.
   */
  status() {
    return this.ask((_, status) => status);
  }
  /**
   * Gets the fiber runtime flags.
   */
  runtimeFlags() {
    return this.ask((state, status) => {
      if (Status_isDone(status)) {
        return state._runtimeFlags;
      }
      return status.runtimeFlags;
    });
  }
  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope() {
    return fiberScope_unsafeMake(this);
  }
  /**
   * Retrieves the immediate children of the fiber.
   */
  children() {
    return this.ask(fiber => Chunk_fromIterable(fiber.getChildren()));
  }
  /**
   * Gets the fiber's set of children.
   */
  getChildren() {
    if (this._children === null) {
      this._children = new Set();
    }
    return this._children;
  }
  /**
   * Retrieves the current supervisor the fiber uses for supervising effects.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getSupervisor() {
    return this.getFiberRef(currentSupervisor);
  }
  /**
   * Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
   * if the fiber has not been interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getInterruptedCause() {
    return this.getFiberRef(interruptedCause);
  }
  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs() {
    return this.ask(fiber => fiber.unsafeGetFiberRefs());
  }
  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask(f) {
    return untraced(() => suspendSucceed(() => {
      const deferred = deferredUnsafeMake(this._fiberId);
      this.tell(stateful((fiber, status) => {
        deferredUnsafeDone(deferred, core_sync(() => f(fiber, status)));
      }));
      return deferredAwait(deferred);
    }));
  }
  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(message) {
    offer(message)(this._queue);
    if (!this._running) {
      this._running = true;
      this.drainQueueLaterOnExecutor("normal");
    }
  }
  await() {
    return untraced(() => asyncInterrupt(resume => {
      const cb = exit => resume(core_succeed(exit));
      this.tell(stateful((fiber, _) => {
        if (fiber._exitValue !== null) {
          cb(this._exitValue);
        } else {
          fiber.unsafeAddObserver(cb);
        }
      }));
      return core_sync(() => this.tell(stateful((fiber, _) => {
        fiber.unsafeRemoveObserver(cb);
      })));
    }, this.id()));
  }
  inheritAll() {
    return untraced(() => withFiberRuntime((parentFiber, parentStatus) => {
      const parentFiberId = parentFiber.id();
      const parentFiberRefs = parentFiber.unsafeGetFiberRefs();
      const parentRuntimeFlags = parentStatus.runtimeFlags;
      const childFiberRefs = this.unsafeGetFiberRefs();
      const updatedFiberRefs = joinAs(parentFiberRefs, parentFiberId, childFiberRefs);
      parentFiber.setFiberRefs(updatedFiberRefs);
      const updatedRuntimeFlags = parentFiber.getFiberRef(currentRuntimeFlags);
      const patch = Patch_exclude(WindDown)(
      // Do not inherit WindDown or Interruption!
      Patch_exclude(Interruption)(runtimeFlags_diff(parentRuntimeFlags, updatedRuntimeFlags)));
      return updateRuntimeFlags(patch);
    }));
  }
  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  poll() {
    return untraced(() => core_sync(() => Option_fromNullable(this._exitValue)));
  }
  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll() {
    return this._exitValue;
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(fiberId) {
    return untraced(() => core_sync(() => this.tell(interruptSignal(interrupt(fiberId)))));
  }
  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeAddObserver(observer) {
    if (this._exitValue !== null) {
      observer(this._exitValue);
    } else {
      this._observers.push(observer);
    }
  }
  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeRemoveObserver(observer) {
    this._observers = this._observers.filter(o => o !== observer);
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  unsafeGetFiberRefs() {
    this.setFiberRef(currentRuntimeFlags, this._runtimeFlags);
    return this._fiberRefs;
  }
  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef(fiberRef) {
    this._fiberRefs = delete_(this._fiberRefs, fiberRef);
  }
  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef(fiberRef) {
    return getOrDefault(this._fiberRefs, fiberRef);
  }
  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef(fiberRef, value) {
    this._fiberRefs = updatedAs(this._fiberRefs, this._fiberId, fiberRef, value);
  }
  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(fiberRefs) {
    this._fiberRefs = fiberRefs;
  }
  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(child) {
    this.getChildren().add(child);
  }
  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(child) {
    this.getChildren().delete(child);
  }
  /**
   * On the current thread, executes all messages in the fiber's inbox. This
   * method may return before all work is done, in the event the fiber executes
   * an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueOnCurrentThread() {
    let recurse = true;
    while (recurse) {
      let evaluationSignal = EvaluationSignalContinue;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        while (evaluationSignal === EvaluationSignalContinue) {
          evaluationSignal = MutableQueue_isEmpty(this._queue) ? EvaluationSignalDone : this.evaluateMessageWhileSuspended(MutableQueue_poll(null)(this._queue));
        }
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
      }
      // Maybe someone added something to the queue between us checking, and us
      // giving up the drain. If so, we need to restart the draining, but only
      // if we beat everyone else to the restart:
      if (!MutableQueue_isEmpty(this._queue) && !this._running) {
        this._running = true;
        if (evaluationSignal === EvaluationSignalYieldNow) {
          this.drainQueueLaterOnExecutor("normal");
          recurse = false;
        } else if (evaluationSignal === EvaluationSignalYieldNowInBackground) {
          this.drainQueueLaterOnExecutor("background");
          recurse = false;
        } else {
          recurse = true;
        }
      } else {
        recurse = false;
      }
    }
  }
  /**
   * Schedules the execution of all messages in the fiber's inbox.
   *
   * This method will return immediately after the scheduling
   * operation is completed, but potentially before such messages have been
   * executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueLaterOnExecutor(priority) {
    if (priority === "normal") {
      this.getFiberRef(currentScheduler).scheduleTask(this.run);
    } else {
      yieldBackgroundOrContinue().then(() => {
        this.run();
      });
    }
  }
  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(runtimeFlags, cur0) {
    let cur = cur0;
    while (!MutableQueue_isEmpty(this._queue)) {
      const message = MutableQueue_poll(void 0)(this._queue);
      // @ts-expect-error
      cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags, cur, message);
    }
    return cur;
  }
  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted() {
    return !cause_isEmpty(this.getFiberRef(interruptedCause));
  }
  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(cause) {
    const oldSC = this.getFiberRef(interruptedCause);
    this.setFiberRef(interruptedCause, sequential(oldSC, cause));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause) {
    this.addInterruptedCause(cause);
    this.sendInterruptSignalToAllChildren();
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0) {
      return false;
    }
    let told = false;
    for (const child of this._children) {
      child.tell(interruptSignal(interrupt(this.id())));
      told = true;
    }
    return told;
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const it = this._children.values();
      this._children = null;
      let isDone = false;
      const body = () => {
        const next = it.next();
        if (!next.done) {
          return core_asUnit(next.value.await());
        } else {
          return core_sync(() => {
            isDone = true;
          });
        }
      };
      return whileLoop(() => !isDone, () => body(), () => {
        //
      });
    }
    return null;
  }
  reportExitValue(exit) {
    if (runtimeMetrics(this._runtimeFlags)) {
      const tags = this.getFiberRef(currentTags);
      switch (exit._tag) {
        case OP_SUCCESS:
          {
            fiberSuccesses.unsafeUpdate(1, tags);
            break;
          }
        case OP_FAILURE:
          {
            fiberFailures.unsafeUpdate(1, tags);
            break;
          }
      }
    }
  }
  setExitValue(exit) {
    this._exitValue = exit;
    if (runtimeMetrics(this._runtimeFlags)) {
      const tags = this.getFiberRef(currentTags);
      const startTimeMillis = this.id().startTimeMillis;
      const endTimeMillis = new Date().getTime();
      fiberLifetimes.unsafeUpdate((endTimeMillis - startTimeMillis) / 1000.0, tags);
    }
    this.reportExitValue(exit);
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit);
    }
  }
  getLoggers() {
    return this.getFiberRef(currentLoggers);
  }
  log(message, cause, overrideLogLevel) {
    const logLevel = Option_isSome(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(currentLogLevel);
    const spans = this.getFiberRef(currentLogSpan);
    const annotations = this.getFiberRef(currentLogAnnotations);
    const loggers = this.getLoggers();
    const contextMap = this.unsafeGetFiberRefs();
    mjs_HashSet_forEach(logger => {
      logger.log(this.id(), logLevel, message, cause, contextMap, spans, annotations, this.runtime);
    })(loggers);
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message) {
    switch (message._tag) {
      case OP_YIELD_NOW:
        {
          return message.priority === "background" ? EvaluationSignalYieldNowInBackground : EvaluationSignalYieldNow;
        }
      case OP_INTERRUPT_SIGNAL:
        {
          this.processNewInterruptSignal(message.cause);
          if (this._asyncInterruptor !== null) {
            this._asyncInterruptor(exitFailCause(message.cause));
            this._asyncInterruptor = null;
          }
          return EvaluationSignalContinue;
        }
      case OP_RESUME:
        {
          this._asyncInterruptor = null;
          this._asyncBlockingOn = null;
          this.evaluateEffect(message.effect);
          return EvaluationSignalContinue;
        }
      case OP_STATEFUL:
        {
          message.onFiber(this, this._exitValue !== null ? Status_done : Status_suspended(this._runtimeFlags, this._asyncBlockingOn));
          return EvaluationSignalContinue;
        }
      default:
        {
          return fiberRuntime_absurd(message);
        }
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0) {
    this.getSupervisor().onResume(this);
    try {
      let effect = interruptible(this._runtimeFlags) && this.isInterrupted() ? exitFailCause(this.getInterruptedCause()) : effect0;
      while (effect !== null) {
        try {
          const exit = this.runLoop(effect);
          this._runtimeFlags = runtimeFlags_enable(WindDown)(this._runtimeFlags);
          const interruption = this.interruptAllChildren();
          if (interruption !== null) {
            effect = untraced(() => core_flatMap(interruption, () => exit));
          } else {
            if (MutableQueue_isEmpty(this._queue)) {
              // No more messages to process, so we will allow the fiber to end life:
              this.setExitValue(exit);
            } else {
              // There are messages, possibly added by the final op executed by
              // the fiber. To be safe, we should execute those now before we
              // allow the fiber to end life:
              this.tell(resume(exit));
            }
            effect = null;
          }
        } catch (e) {
          if (isEffect(e)) {
            if (e._tag === OP_YIELD) {
              if (cooperativeYielding(this._runtimeFlags)) {
                this.tell(fiberMessage_yieldNow(e.priority));
                this.tell(resume(exitUnit()));
                effect = null;
              } else {
                effect = exitUnit();
              }
            } else if (e._tag === OP_ASYNC) {
              // Terminate this evaluation, async resumption will continue evaluation:
              effect = null;
            }
          } else {
            throw e;
          }
        }
      }
    } finally {
      this.getSupervisor().onSuspend(this);
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on the current
   * thread. This can be called to "kick off" execution of a fiber after it has
   * been created, in hopes that the effect can be executed synchronously.
   *
   * This is not the normal way of starting a fiber, but it is useful when the
   * express goal of executing the fiber is to synchronously produce its exit.
   */
  start(effect) {
    if (!this._running) {
      this._running = true;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        this.evaluateEffect(effect);
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
        // Because we're special casing `start`, we have to be responsible
        // for spinning up the fiber if there were new messages added to
        // the queue between the completion of the effect and the transition
        // to the not running state.
        if (!MutableQueue_isEmpty(this._queue)) {
          this.drainQueueLaterOnExecutor("normal");
        }
      }
    } else {
      this.tell(resume(effect));
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(effect) {
    this.tell(resume(effect));
  }
  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(oldRuntimeFlags, patch) {
    const newRuntimeFlags = runtimeFlags_patch(oldRuntimeFlags, patch);
    globalThis[currentFiberURI] = this;
    this._runtimeFlags = newRuntimeFlags;
    return newRuntimeFlags;
  }
  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(runtimeFlags, asyncRegister) {
    let alreadyCalled = false;
    const callback = effect => {
      if (!alreadyCalled) {
        alreadyCalled = true;
        this.tell(resume(effect));
      }
    };
    if (interruptible(runtimeFlags)) {
      this._asyncInterruptor = callback;
    }
    try {
      asyncRegister(callback);
    } catch (e) {
      callback(failCause(die(e)));
    }
  }
  pushStack(cont) {
    this._stack.push(cont);
    if ("trace" in cont && cont.trace) {
      this._traceStack.push(cont.trace);
    }
  }
  popStack() {
    const item = this._stack.pop();
    if (item) {
      if ("trace" in item && item.trace) {
        this._traceStack.pop();
      }
      return item;
    }
    return;
  }
  getNextSuccessCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._tag !== OP_ON_FAILURE && frame._tag !== OP_TRACED) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  getNextFailCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._tag !== OP_ON_SUCCESS && frame._tag !== OP_WHILE && frame._tag !== OP_TRACED) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  [(fiberRuntime_a = FiberTypeId, fiberRuntime_b = RuntimeFiberTypeId, OP_SYNC)](op) {
    const value = op.evaluate();
    const cont = this.getNextSuccessCont();
    if (cont !== undefined) {
      if (!(cont._tag in contOpSuccess)) {
        // @ts-expect-error
        fiberRuntime_absurd(cont);
      }
      // @ts-expect-error
      return contOpSuccess[cont._tag](this, cont, value);
    } else {
      throw exitSucceed(value);
    }
  }
  [OP_SUCCESS](op) {
    const oldCur = op;
    const cont = this.getNextSuccessCont();
    if (cont !== undefined) {
      if (!(cont._tag in contOpSuccess)) {
        // @ts-expect-error
        fiberRuntime_absurd(cont);
      }
      // @ts-expect-error
      return contOpSuccess[cont._tag](this, cont, oldCur.value);
    } else {
      throw oldCur;
    }
  }
  [OP_FAILURE](op) {
    let cause = op.cause;
    if (isAnnotatedType(cause) && isStackAnnotation(cause.annotation)) {
      const stack = cause.annotation.stack;
      const currentStack = this.stackToLines();
      cause = annotated(cause.cause, new StackAnnotation(Chunk_take(Debug_runtimeDebug.traceStackLimit)(dedupeAdjacent(stack.length === 0 ? currentStack : currentStack.length === 0 ? stack : unsafeLast(stack) === unsafeLast(currentStack) ? stack : Chunk_concat(currentStack)(stack))), cause.annotation.seq));
    } else {
      cause = annotated(op.cause, new StackAnnotation(this.stackToLines(), globalErrorSeq++));
    }
    const cont = this.getNextFailCont();
    if (cont !== undefined) {
      switch (cont._tag) {
        case OP_ON_FAILURE:
        case OP_ON_SUCCESS_AND_FAILURE:
          {
            if (!(interruptible(this._runtimeFlags) && this.isInterrupted())) {
              return cont.failK(cause);
            } else {
              return exitFailCause(stripFailures(cause));
            }
          }
        case OP_REVERT_FLAGS:
          {
            this.patchRuntimeFlags(this._runtimeFlags, cont.patch);
            if (interruptible(this._runtimeFlags) && this.isInterrupted()) {
              return exitFailCause(sequential(cause, this.getInterruptedCause()));
            } else {
              return exitFailCause(cause);
            }
          }
        default:
          {
            fiberRuntime_absurd(cont);
          }
      }
    } else {
      throw exitFailCause(cause);
    }
  }
  [OP_WITH_RUNTIME](op) {
    return op.withRuntime(this, Status_running(this._runtimeFlags));
  }
  [OP_UPDATE_RUNTIME_FLAGS](op) {
    if (op.scope === undefined) {
      this.patchRuntimeFlags(this._runtimeFlags, op.update);
      return exitUnit();
    } else {
      const updateFlags = op.update;
      const oldRuntimeFlags = this._runtimeFlags;
      const newRuntimeFlags = runtimeFlags_patch(oldRuntimeFlags, updateFlags);
      if (newRuntimeFlags === oldRuntimeFlags) {
        // No change, short circuit
        return op.scope(oldRuntimeFlags);
      } else {
        // One more chance to short circuit: if we're immediately going
        // to interrupt. Interruption will cause immediate reversion of
        // the flag, so as long as we "peek ahead", there's no need to
        // set them to begin with.
        if (interruptible(newRuntimeFlags) && this.isInterrupted()) {
          return exitFailCause(this.getInterruptedCause());
        } else {
          // Impossible to short circuit, so record the changes
          this.patchRuntimeFlags(this._runtimeFlags, updateFlags);
          // Since we updated the flags, we need to revert them
          const revertFlags = runtimeFlags_diff(newRuntimeFlags, oldRuntimeFlags);
          this.pushStack(new RevertFlags(revertFlags));
          return op.scope(oldRuntimeFlags);
        }
      }
    }
  }
  [OP_ON_SUCCESS](op) {
    this.pushStack(op);
    return op.first;
  }
  [OP_TRACED](op) {
    this.pushStack(op);
    return op.self;
  }
  [OP_ON_FAILURE](op) {
    this.pushStack(op);
    return op.first;
  }
  [OP_ON_SUCCESS_AND_FAILURE](op) {
    this.pushStack(op);
    return op.first;
  }
  [OP_ASYNC](op) {
    this._asyncBlockingOn = op.blockingOn;
    this.initiateAsync(this._runtimeFlags, op.register);
    throw op;
  }
  [OP_YIELD](op) {
    throw op;
  }
  [OP_WHILE](op) {
    const check = op.check;
    const body = op.body;
    if (check()) {
      this.pushStack(op);
      return body();
    } else {
      return exitUnit();
    }
  }
  [OP_COMMIT](op) {
    return op.commit();
  }
  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(effect0) {
    let cur = effect0;
    let ops = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (opSupervision(this._runtimeFlags)) {
        this.getSupervisor().onEffect(this, cur);
      }
      cur = this.drainQueueWhileRunning(this._runtimeFlags, cur);
      ops += 1;
      if (ops >= 2048) {
        ops = 0;
        const oldCur = cur;
        cur = core_flatMap(() => oldCur)(yieldNow());
      }
      try {
        if (!(cur._tag in this)) {
          // @ts-expect-error
          fiberRuntime_absurd(cur);
        }
        // @ts-expect-error
        cur = this[cur._tag](cur);
      } catch (e) {
        if (isEffect(e)) {
          if (e._tag === OP_YIELD || e._tag === OP_ASYNC) {
            throw e;
          }
          if (e._tag === OP_SUCCESS || e._tag === OP_FAILURE) {
            return e;
          }
        } else {
          if (isEffectError(e)) {
            cur = exitFailCause(e.cause);
          } else if (isInterruptedException(e)) {
            cur = exitFailCause(sequential(die(e), interrupt(Id_none)));
          } else {
            cur = exitFailCause(die(e));
          }
        }
      }
    }
  }
  stackToLines() {
    if (this._traceStack.length === 0) {
      return Chunk_empty();
    }
    const lines = [];
    let current = this._stack.length - 1;
    while (current >= 0 && lines.length < Debug_runtimeDebug.traceStackLimit) {
      const value = this._stack[current];
      switch (value._tag) {
        case OP_TRACED:
          {
            if (value.trace) {
              lines.push(value.trace);
            }
            break;
          }
      }
      current = current - 1;
    }
    return unsafeFromArray(lines);
  }
}
// circular with Logger
/** @internal */
const currentMinimumLogLevel = /*#__PURE__*/fiberRefUnsafeMake( /*#__PURE__*/fromLiteral(Debug_runtimeDebug.minumumLogLevel));
/** @internal */
const defaultLogger = /*#__PURE__*/makeLogger((fiberId, logLevel, message, cause, context, spans, annotations, runtime) => {
  const formatted = stringLogger.log(fiberId, logLevel, message, cause, context, spans, annotations, runtime);
  const filter = getOrDefault(context, currentMinimumLogLevel);
  if (greaterThanEqual(filter)(logLevel)) {
    globalThis.console.log(formatted);
  }
});
/** @internal */
const logFmtLogger = /*#__PURE__*/(/* unused pure expression or super */ null && (internalLogger.makeLogger((fiberId, logLevel, message, cause, context, spans, annotations, runtime) => {
  const formatted = internalLogger.logfmtLogger.log(fiberId, logLevel, message, cause, context, spans, annotations, runtime);
  const filter = fiberRefs.getOrDefault(context, currentMinimumLogLevel);
  if (LogLevel.greaterThanEqual(filter)(logLevel)) {
    globalThis.console.log(formatted);
  }
})));
/** @internal */
const currentLoggers = /*#__PURE__*/fiberRefUnsafeMakeHashSet( /*#__PURE__*/mjs_HashSet_make(defaultLogger));
// circular with Effect
/* @internal */
const acquireRelease = /*#__PURE__*/methodWithTrace((trace, restore) => (acquire, release) => uninterruptible(core_tap(acquire, a => addFinalizer(exit => restore(release)(a, exit)))).traced(trace));
/* @internal */
const addFinalizer = /*#__PURE__*/methodWithTrace((trace, restore) => finalizer => core_flatMap(context(), context => core_flatMap(scope(), scope => scopeAddFinalizerExit(scope, exit => core_asUnit(provideContext(context)(restore(finalizer)(exit)))))).traced(trace));
/* @internal */
const collect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_map(Chunk_compact)(core_forEach(elements, a => unsome(restore(f)(a)))).traced(trace));
/* @internal */
const collectPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_map(Chunk_compact)(forEachPar(elements, a => unsome(restore(f)(a)))).traced(trace));
/* @internal */
const fiberRuntime_collectAllPar = /*#__PURE__*/methodWithTrace(trace => effects => forEachPar(effects, Function_identity).traced(trace));
/* @internal */
const collectAllParDiscard = /*#__PURE__*/methodWithTrace(trace => effects => forEachParDiscard(effects, Function_identity).traced(trace));
/* @internal */
const collectAllSuccessesPar = /*#__PURE__*/methodWithTrace(trace => elements => collectAllWithPar(Array.from(elements).map(core_exit), exit => exitIsSuccess(exit) ? Option_some(exit.value) : Option_none()).traced(trace));
/* @internal */
const collectAllWithPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, pf) => core_map(fiberRuntime_collectAllPar(elements), Chunk_filterMap(restore(pf))).traced(trace));
/* @internal */
const daemonChildren = /*#__PURE__*/methodWithTrace(trace => self => {
  const forkScope = fiberRefLocally(forkScopeOverride, Option_some(globalScope));
  return forkScope(self).traced(trace);
});
/** @internal */
const _existsParFound = /*#__PURE__*/Symbol("@effect/io/Effect/existsPar/found");
/* @internal */
const existsPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => matchEffect(forEachPar(elements, a => ifEffect(restore(f)(a), core_fail(_existsParFound), core_unit())), e => e === _existsParFound ? core_succeed(true) : core_fail(e), () => core_succeed(false)).traced(trace));
/* @internal */
const filterPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_map(Chunk_compact)(forEachPar(elements, a => core_map(restore(f)(a), b => b ? Option_some(a) : Option_none()))).traced(trace));
/* @internal */
const filterNotPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => filterPar(elements, a => core_map(restore(f)(a), b => !b)).traced(trace));
/* @internal */
const forEachExec = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, f, strategy) => suspendSucceed(() => ExecutionStrategy_match(() => core_forEach(restore(f))(elements), () => withParallelismUnbounded(forEachPar(restore(f))(elements)), parallelism => withParallelism(parallelism)(forEachPar(restore(f))(elements)))(strategy)).traced(trace));
/* @internal */
const forEachPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => fiberRefGetWith(currentParallelism, o => o._tag === "None" ? forEachParUnbounded(self, restore(f)) : forEachParN(self, o.value, f)).traced(trace));
/* @internal */
const forEachParDiscard = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => fiberRefGetWith(currentParallelism, o => o._tag === "None" ? forEachParUnboundedDiscard(self, restore(f)) : forEachParNDiscard(self, o.value, f)).traced(trace));
/* @internal */
const forEachParUnbounded = (self, f) => suspendSucceed(() => {
  const as = Array.from(self).map((v, i) => [v, i]);
  const array = new Array(as.length);
  const fn = ([a, i]) => core_flatMap(f(a), b => core_sync(() => array[i] = b));
  return zipRight(forEachParUnboundedDiscard(as, fn), core_succeed(unsafeFromArray(array)));
});
/* @internal */
const forEachParUnboundedDiscard = (self, f) => suspendSucceed(() => {
  const as = Array.from(self);
  const size = as.length;
  if (size === 0) {
    return core_unit();
  } else if (size === 1) {
    return core_asUnit(f(as[0]));
  }
  return uninterruptibleMask(restore => {
    const deferred = deferredUnsafeMake(Id_none);
    let ref = 0;
    const process = transplant(graft => core_forEach(as, a => forkDaemon(graft(matchCauseEffect(cause => zipRight(deferredFail(deferred, void 0), failCause(cause)), () => {
      if (ref + 1 === size) {
        deferredUnsafeDone(deferred, core_unit());
      } else {
        ref = ref + 1;
      }
      return core_unit();
    })(restore(suspendSucceed(() => f(a))))))));
    return core_flatMap(process, fibers => matchCauseEffect(restore(deferredAwait(deferred)), cause => core_flatMap(forEachParUnbounded(fibers, interruptFiber), exits => {
      const exit = exitCollectAllPar(exits);
      if (exit._tag === "Some" && exitIsFailure(exit.value)) {
        return failCause(parallel(stripFailures(cause), exit.value.cause));
      } else {
        return failCause(stripFailures(cause));
      }
    }), () => forEachDiscard(fibers, f => f.inheritAll())));
  });
});
/* @internal */
const forEachParN = (self, n, f) => suspendSucceed(() => {
  const as = Array.from(self).map((v, i) => [v, i]);
  const array = new Array(as.length);
  const fn = ([a, i]) => core_map(f(a), b => array[i] = b);
  return zipRight(forEachParNDiscard(as, n, fn), core_succeed(unsafeFromArray(array)));
});
/* @internal */
const forEachParNDiscard = (self, n, f) => suspendSucceed(() => {
  const iterator = self[Symbol.iterator]();
  const worker = core_flatMap(core_sync(() => iterator.next()), next => next.done ? core_unit() : core_flatMap(core_asUnit(f(next.value)), () => worker));
  const effects = [];
  for (let i = 0; i < n; i++) {
    effects.push(worker);
  }
  return forEachParUnboundedDiscard(effects, Function_identity);
});
/* @internal */
const forEachParWithIndex = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => suspendSucceed(() => core_flatMap(core_sync(() => []), array => core_map(forEachParDiscard(Array.from(elements).map((a, i) => [a, i]), ([a, i]) => core_flatMap(suspendSucceed(() => restore(f)(a, i)), b => core_sync(() => {
  array[i] = b;
}))), () => unsafeFromArray(array)))).traced(trace));
/* @internal */
const fork = /*#__PURE__*/methodWithTrace(trace => self => withFiberRuntime((state, status) => core_succeed(unsafeFork(self, state, status.runtimeFlags))).traced(trace));
/* @internal */
const forkAllDiscard = /*#__PURE__*/methodWithTrace(trace => effects => forEachDiscard(effects, fork).traced(trace));
/* @internal */
const forkDaemon = /*#__PURE__*/methodWithTrace(trace => self => forkWithScopeOverride(self, globalScope).traced(trace));
/* @internal */
const forkWithErrorHandler = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, handler) => fork(onError(self, cause => {
  const either = failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      {
        return restore(handler)(either.left);
      }
    case "Right":
      {
        return failCause(either.right);
      }
  }
})).traced(trace));
/** @internal */
const unsafeFork = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect, parentFiber, parentRuntimeFlags, overrideScope);
  childFiber.resume(effect);
  return childFiber;
};
/** @internal */
const unsafeMakeChildFiber = (effect, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childId = Id_unsafeMake();
  const parentFiberRefs = parentFiber.unsafeGetFiberRefs();
  const childFiberRefs = forkAs(parentFiberRefs, childId);
  const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags, parentFiber.runtime);
  const childContext = getOrDefault(childFiberRefs, currentContext);
  const supervisor = childFiber.getSupervisor();
  supervisor.onStart(childContext, effect, Option_some(parentFiber), childFiber);
  childFiber.unsafeAddObserver(exit => supervisor.onEnd(exit, childFiber));
  const parentScope = overrideScope !== null ? overrideScope : Option_getOrElse(() => parentFiber.scope())(parentFiber.getFiberRef(forkScopeOverride));
  parentScope.add(parentRuntimeFlags, childFiber);
  return childFiber;
};
/* @internal */
const forkWithScopeOverride = (self, scopeOverride) => withFiberRuntime((parentFiber, parentStatus) => core_succeed(unsafeFork(self, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
/* @internal */
const mergeAllPar = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, zero, f) => core_flatMap(Ref_make(zero), acc => core_flatMap(forEachParDiscard(elements, core_flatMap(a => Ref_update(acc, b => restore(f)(b, a)))), () => Ref_get(acc))).traced(trace));
/* @internal */
const onDone = /*#__PURE__*/dualWithTrace(3, (trace, restoreTrace) => (self, onError, onSuccess) => uninterruptibleMask(restore => core_asUnit(forkDaemon(matchEffect(restore(self), e => restore(restoreTrace(onError)(e)), a => restore(restoreTrace(onSuccess)(a))))).traced(trace)));
/* @internal */
const onDoneCause = /*#__PURE__*/dualWithTrace(3, (trace, restoreTrace) => (self, onCause, onSuccess) => uninterruptibleMask(restore => core_asUnit(forkDaemon(matchCauseEffect(restore(self), c => restore(restoreTrace(onCause)(c)), a => restore(restoreTrace(onSuccess)(a)))))).traced(trace));
/* @internal */
const partitionPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_map(chunk => core_partitionMap(chunk, Function_identity))(forEachPar(elements, a => core_either(restore(f)(a)))).traced(trace));
/* @internal */
const raceAll = /*#__PURE__*/methodWithTrace(trace => all => {
  const list = Chunk_fromIterable(all);
  if (!Chunk_isNonEmpty(list)) {
    return dieSync(() => IllegalArgumentException(`Received an empty collection of effects`));
  }
  const self = Chunk_headNonEmpty(list);
  const effects = Chunk_tailNonEmpty(list);
  const inheritAll = res => core_as(res[0])(fiber_inheritAll(res[1]));
  return core_flatMap(done => core_flatMap(fails => uninterruptibleMask(restore => core_flatMap(head => core_flatMap(fibers => onInterrupt(() => Chunk_reduce(core_unit(), (effect, fiber) => zipLeft(interruptFiber(fiber))(effect))(fibers))(restore(core_flatMap(inheritAll)(Deferred_await(done)))))(core_tap(fibers => Chunk_reduce(core_unit(), (effect, fiber) => zipRight(core_asUnit(fork(core_flatMap(raceAllArbiter(fibers, fiber, done, fails))(_await(fiber)))))(effect))(fibers))(core_map(tail => Chunk_prepend(head)(tail))(core_forEach(effect => fork(core_interruptible(effect)))(effects)))))(fork(core_interruptible(self)))))(Ref_make(effects.length)))(deferredMake()).traced(trace);
});
/* @internal */
const raceAllArbiter = (fibers, winner, deferred, fails) => exit => exitMatchEffect(cause => core_flatten(Ref_modify(fails, fails => [fails === 0 ? core_asUnit(deferredFailCause(deferred, cause)) : core_unit(), fails - 1])), value => core_flatMap(set => set ? Chunk_reduce(core_unit(), (effect, fiber) => fiber === winner ? effect : zipLeft(interruptFiber(fiber))(effect))(fibers) : core_unit())(deferredSucceed(deferred, [value, winner])))(exit);
/* @internal */
const reduceAllPar = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (elements, zero, f) => suspendSucceed(() => core_map(option => {
  switch (option._tag) {
    case "None":
      {
        throw new Error("BUG: Effect.reduceAllPar - please report an issue at https://github.com/Effect-TS/io/issues");
      }
    case "Some":
      {
        return option.value;
      }
  }
})(mergeAllPar([zero, ...Array.from(elements)], Option_none(), (acc, elem) => {
  switch (acc._tag) {
    case "None":
      {
        return Option_some(elem);
      }
    case "Some":
      {
        return Option_some(restore(f)(acc.value, elem));
      }
  }
}))).traced(trace));
/* @internal */
const parallelFinalizers = /*#__PURE__*/methodWithTrace(trace => self => core_flatMap(scope(), outerScope => core_flatMap(scopeMake(ExecutionStrategy_parallel), innerScope => zipRight(scopeExtend(innerScope)(self))(outerScope.addFinalizer(exit => innerScope.close(exit))))).traced(trace));
/* @internal */
const scope = /*#__PURE__*/methodWithTrace(trace => () => service(scopeTag).traced(trace));
/* @internal */
const scopeWith = /*#__PURE__*/methodWithTrace((trace, restore) => f => serviceWithEffect(scopeTag, restore(f)).traced(trace));
/* @internal */
const scopedEffect = /*#__PURE__*/methodWithTrace(trace => effect => core_flatMap(scopeMake(), scope => scopeUse(scope)(effect)).traced(trace));
/* @internal */
const sequentialFinalizers = /*#__PURE__*/methodWithTrace(trace => self => scopeWith(scope => core_flatMap(scope => scopeExtend(scope)(self))(scopeFork(scope, ExecutionStrategy_sequential))).traced(trace));
/* @internal */
const fiberRuntime_some = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(self, e => core_fail(Option_some(e)), option => {
  switch (option._tag) {
    case "None":
      {
        return core_fail(Option_none());
      }
    case "Some":
      {
        return core_succeed(option.value);
      }
  }
}).traced(trace));
/* @internal */
const someWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => suspendSucceed(() => unsome(restore(f)(fiberRuntime_some(self)))).traced(trace));
/* @internal */
const structPar = /*#__PURE__*/methodWithTrace(trace => r => core_map(values => {
  const res = {};
  for (const [k, v] of values) {
    res[k] = v;
  }
  return res;
})(forEachPar(Object.entries(r), ([_, e]) => core_map(e, a => [_, a]))).traced(trace));
/* @internal */
const taggedScoped = /*#__PURE__*/methodWithTrace(trace => (key, value) => taggedScopedWithLabels([label_make(key, value)]).traced(trace));
/* @internal */
const taggedScopedWithLabels = /*#__PURE__*/methodWithTrace(trace => labels => taggedScopedWithLabelSet(mjs_HashSet_fromIterable(labels)).traced(trace));
/* @internal */
const taggedScopedWithLabelSet = /*#__PURE__*/methodWithTrace(trace => labels => fiberRefLocallyScopedWith(currentTags, set => mjs_HashSet_union(labels)(set)).traced(trace));
/* @internal */
const tuplePar = /*#__PURE__*/methodWithTrace(trace => (...t) => core_map(toReadonlyArray)(fiberRuntime_collectAllPar(t)).traced(trace));
/* @internal */
const using = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, use) => acquireUseRelease(scopeMake(), scope => core_flatMap(restore(use))(scopeExtend(scope)(self)), (scope, exit) => scopeClose(scope, exit)).traced(trace));
/* @internal */
const unsome = /*#__PURE__*/methodWithTrace(trace => self => matchEffect(self, option => {
  switch (option._tag) {
    case "None":
      {
        return core_succeed(Option_none());
      }
    case "Some":
      {
        return core_fail(option.value);
      }
  }
}, a => core_succeed(Option_some(a))).traced(trace));
/* @internal */
const validateAllPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_flatMap(partitionPar(elements, restore(f)), ([es, bs]) => Chunk_isEmpty(es) ? core_succeed(bs) : core_fail(es)).traced(trace));
/* @internal */
const validateAllParDiscard = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_flatMap(partitionPar(elements, restore(f)), ([es, _]) => Chunk_isEmpty(es) ? core_unit() : core_fail(es)).traced(trace));
/* @internal */
const validateFirstPar = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (elements, f) => core_flip(forEachPar(elements, a => core_flip(restore(f)(a)))).traced(trace));
/* @internal */
const withClockScoped = /*#__PURE__*/methodWithTrace(trace => value => fiberRefLocallyScopedWith(currentServices, mjs_Context_add(clockTag, value)).traced(trace));
/* @internal */
const withConfigProviderScoped = /*#__PURE__*/methodWithTrace(trace => value => fiberRefLocallyScopedWith(currentServices, mjs_Context_add(configProviderTag, value)).traced(trace));
/* @internal */
const withEarlyRelease = /*#__PURE__*/methodWithTrace(trace => self => scopeWith(parent => core_flatMap(scopeFork(parent, ExecutionStrategy_sequential), child => core_map(value => [fiberIdWith(fiberId => scopeClose(child, exitInterrupt(fiberId))), value])(scopeExtend(child)(self)))).traced(trace));
/* @internal */
const withRuntimeFlagsScoped = /*#__PURE__*/methodWithTrace(trace => update => {
  if (update === Patch_empty) {
    return core_unit();
  }
  return uninterruptible(core_flatMap(runtimeFlags => {
    const updatedRuntimeFlags = runtimeFlags_patch(runtimeFlags, update);
    const revertRuntimeFlags = runtimeFlags_diff(updatedRuntimeFlags, runtimeFlags);
    return core_asUnit(zipRight(addFinalizer(() => updateRuntimeFlags(revertRuntimeFlags)))(updateRuntimeFlags(update)));
  })(core_runtimeFlags())).traced(trace);
});
// circular with ReleaseMap
/* @internal */
const releaseMapReleaseAll = (strategy, exit) => self => suspendSucceed(() => {
  switch (self.state._tag) {
    case "Exited":
      {
        return core_unit();
      }
    case "Running":
      {
        const finalizersMap = self.state.finalizers;
        const update = self.state.update;
        const finalizers = Array.from(finalizersMap.keys()).sort((a, b) => b - a).map(key => finalizersMap.get(key));
        self.state = {
          _tag: "Exited",
          nextKey: self.state.nextKey,
          exit,
          update
        };
        return ExecutionStrategy_isSequential(strategy) ? core_flatMap(results => Option_getOrElse(() => exitUnit())(Option_map(exitAsUnit)(exitCollectAll(results))))(core_forEach(fin => core_exit(update(fin)(exit)))(finalizers)) : ExecutionStrategy_isParallel(strategy) ? core_flatMap(results => Option_getOrElse(() => exitUnit())(Option_map(exitAsUnit)(exitCollectAllPar(results))))(forEachPar(fin => core_exit(update(fin)(exit)))(finalizers)) : withParallelism(strategy.parallelism)(core_flatMap(results => Option_getOrElse(() => exitUnit())(Option_map(exitAsUnit)(exitCollectAllPar(results))))(forEachPar(fin => core_exit(update(fin)(exit)))(finalizers)));
      }
  }
});
// circular with Scope
/** @internal */
const scopeTag = /*#__PURE__*/Tag();
/* @internal */
const scopeMake = /*#__PURE__*/methodWithTrace(trace => (strategy = ExecutionStrategy_sequential) => core_map(releaseMapMake(), rm => ({
  [ScopeTypeId]: ScopeTypeId,
  [CloseableScopeTypeId]: CloseableScopeTypeId,
  fork: strategy => bodyWithTrace(trace => uninterruptible(core_flatMap(scope => core_as(scope)(core_tap(fin => scopeAddFinalizerExit(scope, fin))(releaseMapAdd(exit => scopeClose(scope, exit))(rm))))(scopeMake(strategy))).traced(trace)),
  close: exit => bodyWithTrace(trace => core_asUnit(releaseMapReleaseAll(strategy, exit)(rm)).traced(trace)),
  addFinalizer: fin => bodyWithTrace(trace => core_asUnit(releaseMapAdd(fin)(rm)).traced(trace))
})).traced(trace));
/* @internal */
const scopeExtend = /*#__PURE__*/dualWithTrace(2, trace => (effect, scope) => contramapContext(effect,
// @ts-expect-error
mjs_Context_merge(mjs_Context_make(scopeTag, scope))).traced(trace));
/* @internal */
const scopeUse = /*#__PURE__*/dualWithTrace(2, trace => (effect, scope) => onExit(exit => scope.close(exit))(scopeExtend(scope)(effect)).traced(trace));
// circular with Supervisor
/** @internal */
const fiberRefUnsafeMakeSupervisor = initial => fiberRefUnsafeMakePatch(initial, patch_differ, supervisor_patch_empty);
// circular with FiberRef
/* @internal */
const fiberRefLocallyScoped = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => core_asUnit(acquireRelease(core_flatMap(oldValue => core_as(oldValue)(fiberRefSet(self, value)))(fiberRefGet(self)), oldValue => fiberRefSet(self, oldValue))).traced(trace));
/* @internal */
const fiberRefLocallyScopedWith = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => fiberRefGetWith(self, a => fiberRefLocallyScoped(self, restore(f)(a))).traced(trace));
/* @internal */
const fiberRefMake = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => (initial, fork = identity, join = (_, a) => a) => fiberRefMakeWith(() => core.fiberRefUnsafeMake(initial, restore(fork), restore(join))).traced(trace))));
/* @internal */
const fiberRefMakeWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace((trace, restore) => ref => acquireRelease(core.tap(core.sync(restore(ref)), ref => core.fiberRefUpdate(ref, identity)), fiberRef => core.fiberRefDelete(fiberRef)).traced(trace))));
/* @internal */
const fiberRefMakeContext = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => initial => fiberRefMakeWith(() => core.fiberRefUnsafeMakeContext(initial)).traced(trace))));
/* @internal */
const fiberRefMakeRuntimeFlags = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => initial => fiberRefMakeWith(() => core.fiberRefUnsafeMakeRuntimeFlags(initial)).traced(trace))));
/** @internal */
const currentRuntimeFlags = /*#__PURE__*/fiberRefUnsafeMakeRuntimeFlags(runtimeFlags_none);
/** @internal */
const currentSupervisor = /*#__PURE__*/fiberRefUnsafeMakeSupervisor(supervisor_none);
// circular with Fiber
/* @internal */
const fiberAwaitAll = /*#__PURE__*/methodWithTrace(trace => fibers => core_asUnit(_await(fiberCollectAll(fibers))).traced(trace));
/** @internal */
const fiberCollectAll = fibers => ({
  [FiberTypeId]: fiberVariance,
  id: () => Array.from(fibers).reduce((id, fiber) => Id_combine(id, fiber.id()), Id_none),
  await: methodWithTrace(trace => () => core_exit(forEachPar(fibers, fiber => core_flatten(fiber.await()))).traced(trace)),
  children: methodWithTrace(trace => () => core_map(forEachPar(fibers, fiber => fiber.children()), Chunk_flatten).traced(trace)),
  inheritAll: methodWithTrace(trace => () => forEachDiscard(fibers, fiber => fiber.inheritAll()).traced(trace)),
  poll: methodWithTrace(trace => () => core_map(core_forEach(fibers, fiber => fiber.poll()), Chunk_reduceRight(Option_some(exitSucceed(Chunk_empty())), (optionB, optionA) => {
    switch (optionA._tag) {
      case "None":
        {
          return Option_none();
        }
      case "Some":
        {
          switch (optionB._tag) {
            case "None":
              {
                return Option_none();
              }
            case "Some":
              {
                return Option_some(exitZipWith(optionB.value, (a, chunk) => Chunk_prepend(a)(chunk), parallel)(optionA.value));
              }
          }
        }
    }
  })).traced(trace)),
  interruptAsFork: methodWithTrace(trace => fiberId => forEachDiscard(fibers, fiber => fiber.interruptAsFork(fiberId)).traced(trace))
});
/* @internal */
const fiberInterruptFork = /*#__PURE__*/methodWithTrace(trace => self => core_asUnit(forkDaemon(interruptFiber(self))).traced(trace));
/* @internal */
const fiberJoinAll = /*#__PURE__*/methodWithTrace(trace => fibers => core_asUnit(fiber_join(fiberCollectAll(fibers))).traced(trace));
/* @internal */
const fiberScoped = /*#__PURE__*/methodWithTrace(trace => self => acquireRelease(core_succeed(self), interruptFiber).traced(trace));
//# sourceMappingURL=fiberRuntime.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/schedule/interval.mjs



/** @internal */
const IntervalSymbolKey = "@effect/io/Schedule/Interval";
/** @internal */
const IntervalTypeId = /*#__PURE__*/Symbol.for(IntervalSymbolKey);
/** @internal */
const interval_empty = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};
/** @internal */
const interval_make = (startMillis, endMillis) => {
  if (startMillis > endMillis) {
    return interval_empty;
  }
  return {
    [IntervalTypeId]: IntervalTypeId,
    startMillis,
    endMillis
  };
};
/** @internal */
const interval_lessThan = /*#__PURE__*/dual(2, (self, that) => interval_min(self, that) === self);
/** @internal */
const interval_min = /*#__PURE__*/dual(2, (self, that) => {
  if (self.endMillis <= that.startMillis) return self;
  if (that.endMillis <= self.startMillis) return that;
  if (self.startMillis < that.startMillis) return self;
  if (that.startMillis < self.startMillis) return that;
  if (self.endMillis <= that.endMillis) return self;
  return that;
});
/** @internal */
const interval_max = /*#__PURE__*/dual(2, (self, that) => interval_min(self, that) === self ? that : self);
/** @internal */
const interval_isEmpty = self => {
  return self.startMillis >= self.endMillis;
};
/** @internal */
const interval_isNonEmpty = self => {
  return !interval_isEmpty(self);
};
/** @internal */
const intersect = /*#__PURE__*/dual(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis);
  const end = Math.min(self.endMillis, that.endMillis);
  return interval_make(start, end);
});
/** @internal */
const interval_size = self => {
  return millis(self.endMillis - self.startMillis);
};
/** @internal */
const interval_union = /*#__PURE__*/dual(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis);
  const end = Math.min(self.endMillis, that.endMillis);
  return start < end ? Option_none() : Option_some(interval_make(start, end));
});
/** @internal */
const after = startMilliseconds => {
  return interval_make(startMilliseconds, Number.POSITIVE_INFINITY);
};
/** @internal */
const before = endMilliseconds => {
  return interval_make(Number.NEGATIVE_INFINITY, endMilliseconds);
};
//# sourceMappingURL=interval.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Schedule/Interval.mjs
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category symbols
 */
const Interval_IntervalTypeId = IntervalTypeId;
/**
 * Constructs a new interval from the two specified endpoints. If the start
 * endpoint greater than the end endpoint, then a zero size interval will be
 * returned.
 *
 * @since 1.0.0
 * @category constructors
 */
const Interval_make = interval_make;
/**
 * An `Interval` of zero-width.
 *
 * @since 1.0.0
 * @category constructors
 */
const Interval_empty = interval_empty;
/**
 * Returns `true` if this `Interval` is less than `that` interval, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category ordering
 */
const Interval_lessThan = interval_lessThan;
/**
 * Returns the minimum of two `Interval`s.
 *
 * @since 1.0.0
 * @category ordering
 */
const Interval_min = interval_min;
/**
 * Returns the maximum of two `Interval`s.
 *
 * @since 1.0.0
 * @category ordering
 */
const Interval_max = interval_max;
/**
 * Returns `true` if the specified `Interval` is empty, `false` otherwise.
 *
 * @since 1.0.0
 * @category ordering
 */
const Interval_isEmpty = interval_isEmpty;
/**
 * Returns `true` if the specified `Interval` is non-empty, `false` otherwise.
 *
 * @since 1.0.0
 * @category ordering
 */
const Interval_isNonEmpty = interval_isNonEmpty;
/**
 * Computes a new `Interval` which is the intersection of this `Interval` and
 * that `Interval`.
 *
 * @since 1.0.0
 * @category ordering
 */
const Interval_intersect = intersect;
/**
 * Calculates the size of the `Interval` as the `Duration` from the start of the
 * interval to the end of the interval.
 *
 * @since 1.0.0
 * @category getters
 */
const Interval_size = interval_size;
/**
 * Computes a new `Interval` which is the union of this `Interval` and that
 * `Interval` as a `Some`, otherwise returns `None` if the two intervals cannot
 * form a union.
 *
 * @since 1.0.0
 * @category mutations
 */
const Interval_union = interval_union;
/**
 * Construct an `Interval` that includes all time equal to and after the
 * specified start time.
 *
 * @since 1.0.0
 * @category constructors
 */
const Interval_after = after;
/**
 * Construct an `Interval` that includes all time equal to and before the
 * specified end time.
 *
 * @category constructors
 * @since 1.0.0
 */
const Interval_before = before;
//# sourceMappingURL=Interval.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/schedule/intervals.mjs




/** @internal */
const IntervalsSymbolKey = "@effect/io/Schedule/Intervals";
/** @internal */
const IntervalsTypeId = /*#__PURE__*/Symbol.for(IntervalsSymbolKey);
/** @internal */
const intervals_make = intervals => {
  return {
    [IntervalsTypeId]: IntervalsTypeId,
    intervals
  };
};
/** @internal */
const intervals_empty = /*#__PURE__*/intervals_make( /*#__PURE__*/Chunk_empty());
/** @internal */
const intervals_fromIterable = intervals => Array.from(intervals).reduce((intervals, interval) => intervals_union(intervals_make(Chunk_of(interval)))(intervals), intervals_empty);
/** @internal */
const intervals_union = /*#__PURE__*/dual(2, (self, that) => {
  if (!Chunk_isNonEmpty(that.intervals)) {
    return self;
  }
  if (!Chunk_isNonEmpty(self.intervals)) {
    return that;
  }
  if (Chunk_headNonEmpty(self.intervals).startMillis < Chunk_headNonEmpty(that.intervals).startMillis) {
    return unionLoop(Chunk_tailNonEmpty(self.intervals), that.intervals, Chunk_headNonEmpty(self.intervals), Chunk_empty());
  }
  return unionLoop(self.intervals, Chunk_tailNonEmpty(that.intervals), Chunk_headNonEmpty(that.intervals), Chunk_empty());
});
/** @internal */
const unionLoop = (_self, _that, _interval, _acc) => {
  let self = _self;
  let that = _that;
  let interval = _interval;
  let acc = _acc;
  while (Chunk_isNonEmpty(self) || Chunk_isNonEmpty(that)) {
    if (!Chunk_isNonEmpty(self) && Chunk_isNonEmpty(that)) {
      if (interval.endMillis < Chunk_headNonEmpty(that).startMillis) {
        acc = Chunk_prepend(interval)(acc);
        interval = Chunk_headNonEmpty(that);
        that = Chunk_tailNonEmpty(that);
        self = Chunk_empty();
      } else {
        interval = Interval_make(interval.startMillis, Chunk_headNonEmpty(that).endMillis);
        that = Chunk_tailNonEmpty(that);
        self = Chunk_empty();
      }
    } else if (Chunk_isNonEmpty(self) && Chunk_isEmpty(that)) {
      if (interval.endMillis < Chunk_headNonEmpty(self).startMillis) {
        acc = Chunk_prepend(interval)(acc);
        interval = Chunk_headNonEmpty(self);
        that = Chunk_empty();
        self = Chunk_tailNonEmpty(self);
      } else {
        interval = Interval_make(interval.startMillis, Chunk_headNonEmpty(self).endMillis);
        that = Chunk_empty();
        self = Chunk_tailNonEmpty(self);
      }
    } else if (Chunk_isNonEmpty(self) && Chunk_isNonEmpty(that)) {
      if (Chunk_headNonEmpty(self).startMillis < Chunk_headNonEmpty(that).startMillis) {
        if (interval.endMillis < Chunk_headNonEmpty(self).startMillis) {
          acc = Chunk_prepend(interval)(acc);
          interval = Chunk_headNonEmpty(self);
          self = Chunk_tailNonEmpty(self);
        } else {
          interval = Interval_make(interval.startMillis, Chunk_headNonEmpty(self).endMillis);
          self = Chunk_tailNonEmpty(self);
        }
      } else if (interval.endMillis < Chunk_headNonEmpty(that).startMillis) {
        acc = Chunk_prepend(interval)(acc);
        interval = Chunk_headNonEmpty(that);
        that = Chunk_tailNonEmpty(that);
      } else {
        interval = Interval_make(interval.startMillis, Chunk_headNonEmpty(that).endMillis);
        that = Chunk_tailNonEmpty(that);
      }
    } else {
      throw new Error("BUG: Intervals.unionLoop - please report an issue at https://github.com/Effect-TS/io/issues");
    }
  }
  return intervals_make(Chunk_reverse(Chunk_prepend(interval)(acc)));
};
/** @internal */
const intervals_intersect = /*#__PURE__*/dual(2, (self, that) => intersectLoop(self.intervals, that.intervals, Chunk_empty()));
/** @internal */
const intersectLoop = (_left, _right, _acc) => {
  let left = _left;
  let right = _right;
  let acc = _acc;
  while (Chunk_isNonEmpty(left) && Chunk_isNonEmpty(right)) {
    const interval = Interval_intersect(Chunk_headNonEmpty(right))(Chunk_headNonEmpty(left));
    const intervals = Interval_isEmpty(interval) ? acc : Chunk_prepend(interval)(acc);
    if (Interval_lessThan(Chunk_headNonEmpty(right))(Chunk_headNonEmpty(left))) {
      left = Chunk_tailNonEmpty(left);
    } else {
      right = Chunk_tailNonEmpty(right);
    }
    acc = intervals;
  }
  return intervals_make(Chunk_reverse(acc));
};
/** @internal */
const start = self => {
  return Option_getOrElse(() => Interval_empty)(Chunk_head(self.intervals)).startMillis;
};
/** @internal */
const end = self => {
  return Option_getOrElse(() => Interval_empty)(Chunk_head(self.intervals)).endMillis;
};
/** @internal */
const intervals_lessThan = /*#__PURE__*/dual(2, (self, that) => start(self) < start(that));
/** @internal */
const intervals_isNonEmpty = self => {
  return Chunk_isNonEmpty(self.intervals);
};
/** @internal */
const intervals_max = /*#__PURE__*/dual(2, (self, that) => intervals_lessThan(self, that) ? that : self);
//# sourceMappingURL=intervals.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Schedule/Intervals.mjs
/**
 * @since 1.0.0
 */

/**
 * @since 1.0.0
 * @category symbols
 */
const Intervals_IntervalsTypeId = IntervalsTypeId;
/**
 * Creates a new `Intervals` from a `List` of `Interval`s.
 *
 * @since 1.0.0
 * @category constructors
 */
const Intervals_make = intervals_make;
/**
 * Constructs an empty list of `Interval`s.
 *
 * @since 1.0.0
 * @category constructors
 */
const Intervals_empty = intervals_empty;
/**
 * Constructs `Intervals` from the specified `Iterable<Interval>`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Intervals_fromIterable = intervals_fromIterable;
/**
 * Computes the union of this `Intervals` and  that `Intervals`
 *
 * @since 1.0.0
 * @category mutations
 */
const Intervals_union = intervals_union;
/**
 * Produces the intersection of this `Intervals` and that `Intervals`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Intervals_intersect = intervals_intersect;
/**
 * The start of the earliest interval in the specified `Intervals`.
 *
 * @since 1.0.0
 * @category getters
 */
const Intervals_start = start;
/**
 * The end of the latest interval in the specified `Intervals`.
 *
 * @since 1.0.0
 * @category getters
 */
const Intervals_end = end;
/**
 * Returns `true` if the start of this `Intervals` is before the start of that
 * `Intervals`, `false` otherwise.
 *
 * @since 1.0.0
 * @category ordering
 */
const Intervals_lessThan = intervals_lessThan;
/**
 * Returns `true` if this `Intervals` is non-empty, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Intervals_isNonEmpty = intervals_isNonEmpty;
/**
 * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
 *
 * @since 1.0.0
 * @category ordering
 */
const Intervals_max = intervals_max;
//# sourceMappingURL=Intervals.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/schedule/decision.mjs


/** @internal */
const OP_CONTINUE = "Continue";
/** @internal */
const decision_OP_DONE = "Done";
/** @internal */
const _continue = intervals => {
  return {
    _tag: OP_CONTINUE,
    intervals
  };
};
/** @internal */
const continueWith = interval => {
  return {
    _tag: OP_CONTINUE,
    intervals: Intervals_make(Chunk_of(interval))
  };
};
/** @internal */
const decision_done = {
  _tag: decision_OP_DONE
};
/** @internal */
const isContinue = self => {
  return self._tag === OP_CONTINUE;
};
/** @internal */
const decision_isDone = self => {
  return self._tag === decision_OP_DONE;
};
//# sourceMappingURL=decision.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Schedule/Decision.mjs
/**
 * @since 1.0.0
 */

const Decision_continue = _continue;

/**
 * @since 1.0.0
 * @category constructors
 */
const Decision_continueWith = continueWith;
/**
 * @since 1.0.0
 * @category constructors
 */
const Decision_done = decision_done;
/**
 * @since 1.0.0
 * @category refinements
 */
const Decision_isContinue = isContinue;
/**
 * @since 1.0.0
 * @category refinements
 */
const Decision_isDone = decision_isDone;
//# sourceMappingURL=Decision.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/schedule.mjs
var schedule_a, schedule_b;

















/** @internal */
const ScheduleSymbolKey = "@effect/io/Schedule";
/** @internal */
const ScheduleTypeId = /*#__PURE__*/Symbol.for(ScheduleSymbolKey);
/** @internal */
const ScheduleDriverSymbolKey = "@effect/io/Schedule/Driver";
/** @internal */
const ScheduleDriverTypeId = /*#__PURE__*/Symbol.for(ScheduleDriverSymbolKey);
/** @internal */
const scheduleVariance = {
  _Env: _ => _,
  _In: _ => _,
  _Out: _ => _
};
const scheduleDriverVariance = {
  _Env: _ => _,
  _In: _ => _,
  _Out: _ => _
};
/** @internal */
class ScheduleImpl {
  constructor(initial, step) {
    this.initial = initial;
    this.step = step;
    this[schedule_a] = scheduleVariance;
  }
}
schedule_a = ScheduleTypeId;
/** @internal */
class ScheduleDriverImpl {
  constructor(schedule, ref) {
    this.schedule = schedule;
    this.ref = ref;
    this[schedule_b] = scheduleDriverVariance;
  }
  state() {
    return bodyWithTrace(trace => core_map(Ref_get(this.ref), tuple => tuple[1]).traced(trace));
  }
  last() {
    return bodyWithTrace(trace => core_flatMap(Ref_get(this.ref), ([element, _]) => {
      switch (element._tag) {
        case "None":
          {
            return failSync(() => NoSuchElementException());
          }
        case "Some":
          {
            return core_succeed(element.value);
          }
      }
    }).traced(trace));
  }
  reset() {
    return bodyWithTrace(trace => Ref_set(this.ref, [Option_none(), this.schedule.initial]).traced(trace));
  }
  next(input) {
    return bodyWithTrace((trace, restore) => core_flatMap(state => core_flatMap(now => core_flatMap(([state, out, decision]) => Decision_isDone(decision) ? zipRight(core_fail(Option_none()))(Ref_set(this.ref, [Option_some(out), state])) : core_as(out)(zipRight(effect_sleep(millis(Intervals_start(decision.intervals) - now)))(Ref_set(this.ref, [Option_some(out), state]))))(suspendSucceed(restore(() => this.schedule.step(now, input, state)))))(Clock_currentTimeMillis()))(core_map(Ref_get(this.ref), tuple => tuple[1])).traced(trace));
  }
}
schedule_b = ScheduleDriverTypeId;
/** @internal */
const makeWithState = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => (initial, step) => new ScheduleImpl(initial, restore(step)))));
/** @internal */
const addDelay = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => addDelayEffect(self, out => core.sync(() => restore(f)(out))))));
/** @internal */
const addDelayEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => modifyDelayEffect(self, (out, duration) => core.map(restore(f)(out), delay => Duration.millis(duration.millis + delay.millis))))));
/** @internal */
const schedule_andThen = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => schedule_map(Either.merge)(andThenEither(self, that)))));
/** @internal */
const andThenEither = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, that) => makeWithState([self.initial, that.initial, true], (now, input, state) => state[2] ? core.flatMap(restore(self.step)(now, input, state[0]), ([lState, out, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.map(that.step(now, input, state[1]), ([rState, out, decision]) => [[lState, rState, false], Either.right(out), decision]);
  }
  return core.succeed([[lState, state[1], true], Either.left(out), decision]);
}) : core.map(that.step(now, input, state[1]), ([rState, out, decision]) => [[state[0], rState, false], Either.right(out), decision])))));
/** @internal */
const schedule_as = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, out) => schedule_map(self, () => out))));
/** @internal */
const schedule_asUnit = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => self => schedule_map(self, constVoid))));
/** @internal */
const bothInOut = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, that) => makeWithState([self.initial, that.initial], (now, [in1, in2], state) => core.zipWith(restore(self.step)(now, in1, state[0]), restore(that.step)(now, in2, state[1]), ([lState, out, lDecision], [rState, out2, rDecision]) => {
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    const interval = Intervals.union(rDecision.intervals)(lDecision.intervals);
    return [[lState, rState], [out, out2], ScheduleDecision.continue(interval)];
  }
  return [[lState, rState], [out, out2], ScheduleDecision.done];
})))));
/** @internal */
const check = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, test) => checkEffect(self, (input, out) => core.sync(() => restore(test)(input, out))))));
/** @internal */
const checkEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, test) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.succeed([state, out, ScheduleDecision.done]);
  }
  return core.map(restore(test)(input, out), cont => cont ? [state, out, decision] : [state, out, ScheduleDecision.done]);
})))));
/** @internal */
const choose = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, that) => makeWithState([self.initial, that.initial], (now, either, state) => {
  switch (either._tag) {
    case "Left":
      {
        return core.map(restore(self.step)(now, either.left, state[0]), ([lState, out, decision]) => [[lState, state[1]], Either.left(out), decision]);
      }
    case "Right":
      {
        return core.map(([rState, out2, decision]) => [[state[0], rState], Either.right(out2), decision])(that.step(now, either.right, state[1]));
      }
  }
}))));
/** @internal */
const chooseMerge = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => schedule_map(choose(self, that), Either.merge))));
/** @internal */
const collectAllInputs = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => collectAllOutputs(schedule_identity()))));
/** @internal */
const collectAllOutputs = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => self => schedule_reduce(self, Chunk.empty(), (outs, out) => Chunk.append(out)(outs)))));
/** @internal */
const collectUntil = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => collectAllOutputs(recurUntil(restore(f))))));
/** @internal */
const collectUntilEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => collectAllOutputs(recurUntilEffect(restore(f))))));
/** @internal */
const schedule_collectWhile = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => collectAllOutputs(recurWhile(restore(f))))));
/** @internal */
const collectWhileEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => collectAllOutputs(recurWhileEffect(restore(f))))));
/** @internal */
const schedule_compose = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, that) => makeWithState([self.initial, that.initial], (now, input, state) => core.flatMap(restore(self.step)(now, input, state[0]), ([lState, out, lDecision]) => core.map(that.step(now, out, state[1]), ([rState, out2, rDecision]) => ScheduleDecision.isDone(lDecision) ? [[lState, rState], out2, ScheduleDecision.done] : ScheduleDecision.isDone(rDecision) ? [[lState, rState], out2, ScheduleDecision.done] : [[lState, rState], out2, ScheduleDecision.continue(Intervals.max(rDecision.intervals)(lDecision.intervals))]))))));
/** @internal */
const schedule_contramap = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => contramapEffect(self, input2 => core.sync(() => restore(f)(input2))))));
/** @internal */
const schedule_contramapContext = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.contramapContext(restore(self.step)(now, input, state), restore(f))))));
/** @internal */
const contramapEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input2, state) => core.flatMap(restore(f)(input2), input => restore(self.step)(now, input, state))))));
/** @internal */
const count = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => schedule_unfold(0, n => n + 1))));
/** @internal */
const dayOfMonth = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => day => {
  return makeWithState([Number.NEGATIVE_INFINITY, 0], (now, _, state) => {
    if (!Number.isInteger(day) || day < 1 || 31 < day) {
      return core.dieSync(() => internalCause.IllegalArgumentException(`Invalid argument in: dayOfMonth(${day}). Must be in range 1...31`));
    }
    const n = state[1];
    const initial = n === 0;
    const day0 = nextDayOfMonth(now, day, initial);
    const start = beginningOfDay(day0);
    const end = endOfDay(day0);
    const interval = Interval.make(start, end);
    return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
  });
})));
/** @internal */
const dayOfWeek = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => day => {
  return makeWithState([Number.MIN_SAFE_INTEGER, 0], (now, _, state) => {
    if (!Number.isInteger(day) || day < 1 || 7 < day) {
      return core.dieSync(() => internalCause.IllegalArgumentException(`Invalid argument in: dayOfWeek(${day}). Must be in range 1 (Monday)...7 (Sunday)`));
    }
    const n = state[1];
    const initial = n === 0;
    const day0 = nextDay(now, day, initial);
    const start = beginningOfDay(day0);
    const end = endOfDay(day0);
    const interval = Interval.make(start, end);
    return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
  });
})));
/** @internal */
const delayed = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => delayedEffect(self, duration => core.sync(() => restore(f)(duration))))));
/** @internal */
const delayedEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => modifyDelayEffect(self, (_, delay) => restore(f)(delay)))));
/** @internal */
const delayedSchedule = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => schedule => addDelay(schedule, x => x))));
/** @internal */
const delays = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => self => makeWithState(self.initial, (now, input, state) => core.flatMap(([state, _, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.succeed([state, Duration.zero, decision]);
  }
  return core.succeed([state, Duration.millis(Intervals.start(decision.intervals) - now), decision]);
})(restore(self.step)(now, input, state))))));
/** @internal */
const dimap = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, f, g) => schedule_map(restore(g))(schedule_contramap(self, restore(f))))));
/** @internal */
const dimapEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, f, g) => schedule_mapEffect(restore(g))(contramapEffect(self, restore(f))))));
/** @internal */
const driver = /*#__PURE__*/methodWithTrace(trace => self => core_map(ref => new ScheduleDriverImpl(self, ref))(Ref_make([Option_none(), self.initial])).traced(trace));
/** @internal */
const duration = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => duration => makeWithState(true, (now, _, state) => core.succeed(state ? [false, duration, ScheduleDecision.continueWith(Interval.after(now + duration.millis))] : [false, Duration.zero, ScheduleDecision.done])))));
/** @internal */
const schedule_either = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => schedule_union(self, that))));
/** @internal */
const eitherWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, that, f) => unionWith(self, that, restore(f)))));
/** @internal */
const elapsed = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => makeWithState(Option.none(), (now, _, state) => {
  switch (state._tag) {
    case "None":
      {
        return core.succeed([Option.some(now), Duration.zero, ScheduleDecision.continueWith(Interval.after(now))]);
      }
    case "Some":
      {
        return core.succeed([Option.some(state.value), Duration.millis(now - state.value), ScheduleDecision.continueWith(Interval.after(now))]);
      }
  }
}))));
/** @internal */
const ensuring = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, finalizer) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => ScheduleDecision.isDone(decision) ? core.as(finalizer, [state, out, decision]) : core.succeed([state, out, decision]))))));
/** @internal */
const schedule_exponential = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => (base, factor = 2.0) => delayedSchedule(schedule_map(i => Duration.millis(base.millis * Math.pow(factor, i)))(schedule_forever())))));
/** @internal */
const fibonacci = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => one => delayedSchedule(schedule_map(out => out[0])(schedule_unfold([one, one], ([a, b]) => [b, Duration.add(b)(a)]))))));
/** @internal */
const fixed = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => interval => makeWithState([Option.none(), 0], (now, _, [option, n]) => core.sync(() => {
  const intervalMillis = interval.millis;
  switch (option._tag) {
    case "None":
      {
        return [[Option.some([now, now + intervalMillis]), n + 1], n, ScheduleDecision.continueWith(Interval.after(now + intervalMillis))];
      }
    case "Some":
      {
        const [startMillis, lastRun] = option.value;
        const runningBehind = now > lastRun + intervalMillis;
        const boundary = Equal.equals(interval, Duration.zero) ? interval : Duration.millis(intervalMillis - (now - startMillis) % intervalMillis);
        const sleepTime = Equal.equals(boundary, Duration.zero) ? interval : boundary;
        const nextRun = runningBehind ? now : now + sleepTime.millis;
        return [[Option.some([startMillis, nextRun]), n + 1], n, ScheduleDecision.continueWith(Interval.after(nextRun))];
      }
  }
})))));
/** @internal */
const schedule_forever = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => schedule_unfold(0, n => n + 1))));
/** @internal */
const fromDelay = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => delay => duration(delay))));
/** @internal */
const fromDelays = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => (delay, ...delays) => makeWithState([[delay, ...delays], true], (now, _, [durations, cont]) => core.sync(() => {
  if (cont) {
    const x = durations[0];
    const interval = Interval.after(now + x.millis);
    if (durations.length >= 2) {
      return [[durations.slice(1), true], x, ScheduleDecision.continueWith(interval)];
    }
    const y = durations.slice(1);
    return [[[x, ...y], false], x, ScheduleDecision.continueWith(interval)];
  }
  return [[durations, false], Duration.zero, ScheduleDecision.done];
})))));
/** @internal */
const fromFunction = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => schedule_map(restore(f))(schedule_identity()))));
/** @internal */
const hourOfDay = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => hour => makeWithState([Number.NEGATIVE_INFINITY, 0], (now, _, state) => {
  if (!Number.isInteger(hour) || hour < 0 || 23 < hour) {
    return core.dieSync(() => internalCause.IllegalArgumentException(`Invalid argument in: hourOfDay(${hour}). Must be in range 0...23`));
  }
  const n = state[1];
  const initial = n === 0;
  const hour0 = nextHour(now, hour, initial);
  const start = beginningOfHour(hour0);
  const end = endOfHour(hour0);
  const interval = Interval.make(start, end);
  return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
}))));
/** @internal */
const schedule_identity = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => makeWithState(void 0, (now, input, state) => core.succeed([state, input, ScheduleDecision.continueWith(Interval.after(now))])))));
/** @internal */
const schedule_intersect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => intersectWith(self, that, (selfIntervals, thatIntervals) => Intervals.intersect(thatIntervals)(selfIntervals)))));
/** @internal */
const intersectWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, that, f) => makeWithState([self.initial, that.initial], (now, input, state) => core.flatMap(([[lState, out, lDecision], [rState, out2, rDecision]]) => {
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    return intersectWithLoop(self, that, input, lState, out, lDecision.intervals, rState, out2, rDecision.intervals, restore(f));
  }
  return core.succeed([[lState, rState], [out, out2], ScheduleDecision.done]);
})(core.zipWith(restore(self.step)(now, input, state[0]), restore(that.step)(now, input, state[1]), (a, b) => [a, b]))))));
/** @internal */
const intersectWithLoop = (self, that, input, lState, out, lInterval, rState, out2, rInterval, f) => {
  const combined = f(lInterval, rInterval);
  if (Intervals.isNonEmpty(combined)) {
    return core.succeed([[lState, rState], [out, out2], ScheduleDecision.continue(combined)]);
  }
  if (Intervals.lessThan(rInterval)(lInterval)) {
    return core.flatMap(self.step(Intervals.end(lInterval), input, lState), ([lState, out, decision]) => {
      if (ScheduleDecision.isDone(decision)) {
        return core.succeed([[lState, rState], [out, out2], ScheduleDecision.done]);
      }
      return intersectWithLoop(self, that, input, lState, out, decision.intervals, rState, out2, rInterval, f);
    });
  }
  return core.flatMap(that.step(Intervals.end(rInterval), input, rState), ([rState, out2, decision]) => {
    if (ScheduleDecision.isDone(decision)) {
      return core.succeed([[lState, rState], [out, out2], ScheduleDecision.done]);
    }
    return intersectWithLoop(self, that, input, lState, out, lInterval, rState, out2, decision.intervals, f);
  });
};
/** @internal */
const jittered = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => self => jitteredWith(self, {
  min: 0.8,
  max: 1.2
}))));
/** @internal */
const jitteredWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, options) => {
  const {
    max,
    min
  } = Object.assign({
    min: 0.8,
    max: 1.2
  }, options);
  return delayedEffect(self, duration => core.map(Random.next(), random => {
    const d = duration.millis;
    const jittered = d * min * (1 - random) + d * max * random;
    return Duration.millis(jittered);
  }));
})));
/** @internal */
const schedule_left = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => self => choose(self, schedule_identity()))));
/** @internal */
const schedule_linear = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => base => delayedSchedule(schedule_map(i => Duration.millis(base.millis * (i + 1)))(schedule_forever())))));
/** @internal */
const schedule_map = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => schedule_mapEffect(self, out => core.sync(() => restore(f)(out))))));
/** @internal */
const schedule_mapEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => core.map(restore(f)(out), out2 => [state, out2, decision]))))));
/** @internal */
const minuteOfHour = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => minute => makeWithState([Number.MIN_SAFE_INTEGER, 0], (now, _, state) => {
  if (!Number.isInteger(minute) || minute < 0 || 59 < minute) {
    return core.dieSync(() => internalCause.IllegalArgumentException(`Invalid argument in: minuteOfHour(${minute}). Must be in range 0...59`));
  }
  const n = state[1];
  const initial = n === 0;
  const minute0 = nextMinute(now, minute, initial);
  const start = beginningOfMinute(minute0);
  const end = endOfMinute(minute0);
  const interval = Interval.make(start, end);
  return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
}))));
/** @internal */
const modifyDelay = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => modifyDelayEffect(self, (out, duration) => core.sync(() => restore(f)(out, duration))))));
/** @internal */
const modifyDelayEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => {
  if (ScheduleDecision.isDone(decision)) {
    return core.succeed([state, out, decision]);
  }
  const intervals = decision.intervals;
  const delay = Interval.size(Interval.make(now, Intervals.start(intervals)));
  return core.map(restore(f)(out, delay), duration => {
    const oldStart = Intervals.start(intervals);
    const newStart = now + duration.millis;
    const delta = newStart - oldStart;
    const newEnd = Math.min(Math.max(0, Intervals.end(intervals) + delta), Number.MAX_SAFE_INTEGER);
    const newInterval = Interval.make(newStart, newEnd);
    return [state, out, ScheduleDecision.continueWith(newInterval)];
  });
})))));
/** @internal */
const onDecision = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => core.as(restore(f)(out, decision), [state, out, decision]))))));
/** @internal */
const schedule_once = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => schedule_asUnit(recurs(1)))));
/** @internal */
const passthrough = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => self => makeWithState(self.initial, (now, input, state) => core.map(([state, _, decision]) => [state, input, decision])(restore(self.step)(now, input, state))))));
/** @internal */
const schedule_provideContext = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, context) => makeWithState(self.initial, (now, input, state) => core.provideContext(restore(self.step)(now, input, state), context)))));
/** @internal */
const schedule_provideService = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, tag, service) => makeWithState(self.initial, (now, input, state) => core.contextWithEffect(env => core.provideContext(
// @ts-expect-error
restore(self.step)(now, input, state), Context.add(tag, service)(env)))))));
/** @internal */
const reconsider = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => reconsiderEffect(self, (out, decision) => core.sync(() => restore(f)(out, decision))))));
/** @internal */
const reconsiderEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => ScheduleDecision.isDone(decision) ? core.map(restore(f)(out, decision), either => {
  switch (either._tag) {
    case "Left":
      {
        return [state, either.left, ScheduleDecision.done];
      }
    case "Right":
      {
        const [out2] = either.right;
        return [state, out2, ScheduleDecision.done];
      }
  }
}) : core.map(restore(f)(out, decision), either => {
  switch (either._tag) {
    case "Left":
      {
        return [state, either.left, ScheduleDecision.done];
      }
    case "Right":
      {
        const [out2, interval] = either.right;
        return [state, out2, ScheduleDecision.continueWith(interval)];
      }
  }
}))))));
/** @internal */
const recurUntil = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => untilInput(schedule_identity(), restore(f)))));
/** @internal */
const recurUntilEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => untilInputEffect(schedule_identity(), restore(f)))));
/** @internal */
const recurUntilEquals = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => value => untilInput(schedule_identity(), input => Equal.equals(input, value)))));
/** @internal */
const recurUntilOption = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => pf => untilOutput(Option.isSome)(schedule_map(restore(pf))(schedule_identity())))));
/** @internal */
const recurUpTo = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => duration => whileOutput(elapsed(), elapsed => Duration.lessThan(duration)(elapsed)))));
/** @internal */
const recurWhile = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => whileInput(schedule_identity(), restore(f)))));
/** @internal */
const recurWhileEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => f => whileInputEffect(schedule_identity(), restore(f)))));
/** @internal */
const recurWhileEquals = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => value => whileInput(input => Equal.equals(input, value))(schedule_identity()))));
/** @internal */
const recurs = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => n => whileOutput(schedule_forever(), out => out < n))));
/** @internal */
const schedule_reduce = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, zero, f) => reduceEffect(self, zero, (z, out) => core.sync(() => restore(f)(z, out))))));
/** @internal */
const reduceEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, zero, f) => makeWithState([self.initial, zero], (now, input, [s, z]) => core.flatMap(restore(self.step)(now, input, s), ([s, out, decision]) => ScheduleDecision.isDone(decision) ? core.succeed([[s, z], z, decision]) : core.map(restore(f)(z, out), z2 => [[s, z2], z, decision]))))));
/** @internal */
const repeatForever = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => self => makeWithState(self.initial, (now, input, state) => {
  const step = (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => ScheduleDecision.isDone(decision) ? step(now, input, self.initial) : core.succeed([state, out, decision]));
  return step(now, input, state);
}))));
/** @internal */
const repetitions = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => self => schedule_reduce(self, 0, (n, _) => n + 1))));
/** @internal */
const resetAfter = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, duration) => schedule_map(out => out[0])(resetWhen(([, time]) => Duration.greaterThanOrEqualTo(duration)(time))(schedule_intersect(elapsed())(self))))));
/** @internal */
const resetWhen = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.flatMap(restore(self.step)(now, input, state), ([state, out, decision]) => restore(f)(out) ? restore(self.step)(now, input, self.initial) : core.succeed([state, out, decision]))))));
/** @internal */
const schedule_right = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => self => choose(schedule_identity(), self))));
/** @internal */
const run = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, trace => (self, now, input) => core.map(list => Chunk.reverse(list))(runLoop(self, now, Chunk.fromIterable(input), self.initial, Chunk.empty())).traced(trace))));
/** @internal */
const runLoop = (self, now, inputs, state, acc) => {
  if (!Chunk.isNonEmpty(inputs)) {
    return core.succeed(acc);
  }
  const input = Chunk.headNonEmpty(inputs);
  const nextInputs = Chunk.tailNonEmpty(inputs);
  return core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
    if (ScheduleDecision.isDone(decision)) {
      return core.sync(() => Chunk.prepend(out)(acc));
    }
    return runLoop(self, Intervals.start(decision.intervals), nextInputs, state, Chunk.prepend(out)(acc));
  });
};
/** @internal */
const secondOfMinute = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => second => makeWithState([Number.NEGATIVE_INFINITY, 0], (now, _, state) => {
  if (!Number.isInteger(second) || second < 0 || 59 < second) {
    return core.dieSync(() => internalCause.IllegalArgumentException(`Invalid argument in: secondOfMinute(${second}). Must be in range 0...59`));
  }
  const n = state[1];
  const initial = n === 0;
  const second0 = nextSecond(now, second, initial);
  const start = beginningOfSecond(second0);
  const end = endOfSecond(second0);
  const interval = Interval.make(start, end);
  return core.succeed([[end, n + 1], n, ScheduleDecision.continueWith(interval)]);
}))));
/** @internal */
const spaced = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => duration => addDelay(schedule_forever(), () => duration))));
/** @internal */
const stop = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => schedule_asUnit(recurs(0)))));
/** @internal */
const schedule_succeed = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => value => schedule_map(schedule_forever(), () => value))));
/** @internal */
const schedule_sync = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => evaluate => schedule_map(schedule_forever(), restore(evaluate)))));
/** @internal */
const tapInput = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.zipRight(restore(f)(input), restore(self.step)(now, input, state))))));
/** @internal */
const tapOutput = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => makeWithState(self.initial, (now, input, state) => core.tap(restore(self.step)(now, input, state), ([, out]) => restore(f)(out))))));
/** @internal */
const schedule_unfold = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(restore => (initial, f) => makeWithState(initial, (now, _, state) => core.sync(() => [restore(f)(state), state, ScheduleDecision.continueWith(Interval.after(now))])))));
/** @internal */
const schedule_union = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => unionWith(self, that, (selfIntervals, thatIntervals) => Intervals.union(thatIntervals)(selfIntervals)))));
/** @internal */
const unionWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, that, f) => makeWithState([self.initial, that.initial], (now, input, state) => core.zipWith(restore(self.step)(now, input, state[0]), restore(that.step)(now, input, state[1]), ([lState, l, lDecision], [rState, r, rDecision]) => {
  if (ScheduleDecision.isDone(lDecision) && ScheduleDecision.isDone(rDecision)) {
    return [[lState, rState], [l, r], ScheduleDecision.done];
  }
  if (ScheduleDecision.isDone(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    return [[lState, rState], [l, r], ScheduleDecision.continue(rDecision.intervals)];
  }
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isDone(rDecision)) {
    return [[lState, rState], [l, r], ScheduleDecision.continue(lDecision.intervals)];
  }
  if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
    const combined = restore(f)(lDecision.intervals, rDecision.intervals);
    return [[lState, rState], [l, r], ScheduleDecision.continue(combined)];
  }
  throw new Error("BUG: Schedule.unionWith - please report an issue at https://github.com/Effect-TS/io/issues");
})))));
/** @internal */
const untilInput = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => check(self, (input, _) => !restore(f)(input)))));
/** @internal */
const untilInputEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => checkEffect(self, (input, _) => effect.negate(restore(f)(input))))));
/** @internal */
const untilOutput = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => check(self, (_, out) => !restore(f)(out)))));
/** @internal */
const untilOutputEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => checkEffect(self, (_, out) => effect.negate(restore(f)(out))))));
/** @internal */
const upTo = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, duration) => schedule_zipLeft(self, recurUpTo(duration)))));
/** @internal */
const whileInput = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => check(self, (input, _) => restore(f)(input)))));
/** @internal */
const whileInputEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => checkEffect(self, (input, _) => restore(f)(input)))));
/** @internal */
const whileOutput = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => check(self, (_, out) => restore(f)(out)))));
/** @internal */
const whileOutputEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, restore => (self, f) => checkEffect(self, (_, out) => restore(f)(out)))));
/** @internal */
const windowed = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => interval => {
  const millis = interval.millis;
  return makeWithState([Option.none(), 0], (now, _, [option, n]) => {
    switch (option._tag) {
      case "None":
        {
          return core.succeed([[Option.some(now), n + 1], n, ScheduleDecision.continueWith(Interval.after(now + millis))]);
        }
      case "Some":
        {
          return core.succeed([[Option.some(option.value), n + 1], n, ScheduleDecision.continueWith(Interval.after(now + (millis - (now - option.value) % millis)))]);
        }
    }
  });
})));
/** @internal */
const schedule_zipLeft = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => schedule_map(out => out[0])(schedule_intersect(self, that)))));
/** @internal */
const schedule_zipRight = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(2, () => (self, that) => schedule_map(out => out[1])(schedule_intersect(self, that)))));
/** @internal */
const schedule_zipWith = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedDual(3, restore => (self, that, f) => schedule_map(([out, out2]) => restore(f)(out, out2))(schedule_intersect(self, that)))));
// -----------------------------------------------------------------------------
// Seconds
// -----------------------------------------------------------------------------
/** @internal */
const beginningOfSecond = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0).getTime();
};
/** @internal */
const endOfSecond = now => {
  const date = new Date(beginningOfSecond(now));
  return date.setSeconds(date.getSeconds() + 1);
};
/** @internal */
const nextSecond = (now, second, initial) => {
  const date = new Date(now);
  if (date.getSeconds() === second && initial) {
    return now;
  }
  if (date.getSeconds() < second) {
    return date.setSeconds(second);
  }
  // Set seconds to the provided value and add one minute
  const newDate = new Date(date.setSeconds(second));
  return newDate.setTime(newDate.getTime() + 1000 * 60);
};
// -----------------------------------------------------------------------------
// Minutes
// -----------------------------------------------------------------------------
/** @internal */
const beginningOfMinute = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0).getTime();
};
/** @internal */
const endOfMinute = now => {
  const date = new Date(beginningOfMinute(now));
  return date.setMinutes(date.getMinutes() + 1);
};
/** @internal */
const nextMinute = (now, minute, initial) => {
  const date = new Date(now);
  if (date.getMinutes() === minute && initial) {
    return now;
  }
  if (date.getMinutes() < minute) {
    return date.setMinutes(minute);
  }
  // Set minutes to the provided value and add one hour
  const newDate = new Date(date.setMinutes(minute));
  return newDate.setTime(newDate.getTime() + 1000 * 60 * 60);
};
// -----------------------------------------------------------------------------
// Hours
// -----------------------------------------------------------------------------
/** @internal */
const beginningOfHour = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0).getTime();
};
/** @internal */
const endOfHour = now => {
  const date = new Date(beginningOfHour(now));
  return date.setHours(date.getHours() + 1);
};
/** @internal */
const nextHour = (now, hour, initial) => {
  const date = new Date(now);
  if (date.getHours() === hour && initial) {
    return now;
  }
  if (date.getHours() < hour) {
    return date.setHours(hour);
  }
  // Set hours to the provided value and add one day
  const newDate = new Date(date.setHours(hour));
  return newDate.setTime(newDate.getTime() + 1000 * 60 * 60 * 24);
};
// -----------------------------------------------------------------------------
// Days
// -----------------------------------------------------------------------------
/** @internal */
const beginningOfDay = now => {
  const date = new Date(now);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();
};
/** @internal */
const endOfDay = now => {
  const date = new Date(beginningOfDay(now));
  return date.setDate(date.getDate() + 1);
};
/** @internal */
const nextDay = (now, dayOfWeek, initial) => {
  const date = new Date(now);
  if (date.getDay() === dayOfWeek && initial) {
    return now;
  }
  const nextDayOfWeek = (7 + dayOfWeek - date.getDay()) % 7;
  return date.setDate(date.getDate() + (nextDayOfWeek === 0 ? 7 : nextDayOfWeek));
};
/** @internal */
const nextDayOfMonth = (now, day, initial) => {
  const date = new Date(now);
  if (date.getDate() === day && initial) {
    return now;
  }
  if (date.getDate() < day) {
    return date.setDate(day);
  }
  return findNextMonth(now, day, 1);
};
/** @internal */
const findNextMonth = (now, day, months) => {
  const d = new Date(now);
  const tmp1 = new Date(d.setDate(day));
  const tmp2 = new Date(tmp1.setMonth(tmp1.getMonth() + months));
  if (tmp2.getDate() === day) {
    const d2 = new Date(now);
    const tmp3 = new Date(d2.setDate(day));
    return tmp3.setMonth(tmp3.getMonth() + months);
  }
  return findNextMonth(now, day, months + 1);
};
// circular with Effect
/** @internal */
const repeat_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, schedule) => repeatOrElse_Effect(self, schedule, (e, _) => core_fail(e)).traced(trace));
/** @internal */
const repeatOrElse_Effect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, schedule, orElse) => core_map(repeatOrElseEither_Effect(self, schedule, restore(orElse)), merge).traced(trace));
/** @internal */
const repeatOrElseEither_Effect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, schedule, orElse) => core_flatMap(driver(schedule), driver => matchEffect(self, error => core_map(Either_left)(restore(orElse)(error, Option_none())), value => repeatOrElseEitherEffectLoop(self, driver, restore(orElse), value))).traced(trace));
/** @internal */
const repeatOrElseEitherEffectLoop = (self, driver, orElse, value) => {
  return matchEffect(() => core_map(Either_right)(orDie(driver.last())), b => matchEffect(error => core_map(Either_left)(orElse(error, Option_some(b))), value => repeatOrElseEitherEffectLoop(self, driver, orElse, value))(self))(driver.next(value));
};
/** @internal */
const repeatUntil_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => repeatUntilEffect_Effect(self, a => core_sync(() => restore(f)(a))).traced(trace));
/** @internal */
const repeatUntilEffect_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => core_flatMap(self, a => core_flatMap(f(a), result => result ? core_succeed(a) : zipRight(yieldNow(), repeatUntilEffect_Effect(self, restore(f))))).traced(trace));
/** @internal */
const repeatUntilEquals_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => repeatUntil_Effect(self, a => equals(a, value)).traced(trace));
/** @internal */
const repeatWhile_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => repeatWhileEffect_Effect(self, a => core_sync(() => restore(f)(a))).traced(trace));
/** @internal */
const repeatWhileEffect_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => repeatUntilEffect_Effect(self, a => negate(restore(f)(a))).traced(trace));
/** @internal */
const repeatWhileEquals_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, value) => repeatWhile_Effect(self, a => equals(a, value)).traced(trace));
/** @internal */
const retry_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, policy) => retryOrElse_Effect(self, policy, (e, _) => core_fail(e)).traced(trace));
/** @internal */
const retryN_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, n) => retryN_EffectLoop(self, n).traced(trace));
/** @internal */
const retryN_EffectLoop = (self, n) => {
  return core_catchAll(self, e => n < 0 ? core_fail(e) : core_flatMap(yieldNow(), () => retryN_EffectLoop(self, n - 1)));
};
/** @internal */
const retryOrElse_Effect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, policy, orElse) => core_map(retryOrElseEither_Effect(self, policy, restore(orElse)), merge).traced(trace));
/** @internal */
const retryOrElseEither_Effect = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, policy, orElse) => core_flatMap(driver(policy), driver => retryOrElseEither_EffectLoop(self, driver, restore(orElse))).traced(trace));
/** @internal */
const retryOrElseEither_EffectLoop = (self, driver, orElse) => {
  return core_catchAll(e => matchEffect(() => core_flatMap(out => core_map(Either_left)(orElse(e, out)))(orDie(driver.last())), () => retryOrElseEither_EffectLoop(self, driver, orElse))(driver.next(e)))(core_map(Either_right)(self));
};
/** @internal */
const retryUntil_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => retryUntilEffect_Effect(self, e => core_sync(() => restore(f)(e))).traced(trace));
/** @internal */
const retryUntilEffect_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => core_catchAll(self, e => core_flatMap(restore(f)(e), b => b ? core_fail(e) : core_flatMap(yieldNow(), () => retryUntilEffect_Effect(self, restore(f))))).traced(trace));
/** @internal */
const retryUntilEquals_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, e) => retryUntil_Effect(self, _ => equals(_, e)).traced(trace));
/** @internal */
const retryWhile_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => retryWhileEffect_Effect(self, e => core_sync(() => restore(f)(e))).traced(trace));
/** @internal */
const retryWhileEffect_Effect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => retryUntilEffect_Effect(self, e => negate(restore(f)(e))).traced(trace));
/** @internal */
const retryWhileEquals_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, e) => retryWhile_Effect(self, err => equals(e, err)).traced(trace));
/** @internal */
const schedule_Effect = /*#__PURE__*/dualWithTrace(2, trace => (self, schedule) => scheduleFrom_Effect(self, void 0, schedule).traced(trace));
/** @internal */
const scheduleFrom_Effect = /*#__PURE__*/dualWithTrace(3, trace => (self, initial, schedule) => core_flatMap(driver(schedule), driver => scheduleFrom_EffectLoop(self, initial, driver)).traced(trace));
/** @internal */
const scheduleFrom_EffectLoop = (self, initial, driver) => matchEffect(() => orDie(driver.last()), () => core_flatMap(a => scheduleFrom_EffectLoop(self, a, driver))(self))(driver.next(initial));
//# sourceMappingURL=schedule.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/effect/circular.mjs
var circular_a, circular_b;


















/** @internal */
class Semaphore {
  constructor(permits) {
    this.permits = permits;
    this.waiters = new Array();
    this.taken = 0;
    this.take = n => bodyWithTrace(trace => asyncInterruptEither(resume => {
      if (this.free < n) {
        const observer = () => {
          if (this.free >= n) {
            const observerIndex = this.waiters.findIndex(cb => cb === observer);
            if (observerIndex !== -1) {
              this.waiters.splice(observerIndex, 1);
            }
            this.taken += n;
            resume(core_succeed(n));
          }
        };
        this.waiters.push(observer);
        return Either_left(core_sync(() => {
          const observerIndex = this.waiters.findIndex(cb => cb === observer);
          if (observerIndex !== -1) {
            this.waiters.splice(observerIndex, 1);
          }
        }));
      }
      this.taken += n;
      return Either_right(core_succeed(n));
    }).traced(trace));
    this.release = n => bodyWithTrace(trace => withFiberRuntime(fiber => {
      this.taken -= n;
      fiber.getFiberRef(currentScheduler).scheduleTask(() => {
        this.waiters.forEach(wake => wake());
      });
      return core_unit();
    }).traced(trace));
    this.withPermits = n => bodyWithTrace(trace => self => untraced(() => uninterruptibleMask(restore => core_flatMap(restore(this.take(n)), permits => circular_ensuring(restore(self), this.release(permits))))).traced(trace));
  }
  get free() {
    return this.permits - this.taken;
  }
}
/** @internal */
const unsafeMakeSemaphore = leases => {
  return new Semaphore(leases);
};
/** @internal */
const makeSemaphore = /*#__PURE__*/methodWithTrace(trace => permits => core_sync(() => unsafeMakeSemaphore(permits)).traced(trace));
/** @internal */
const acquireReleaseInterruptible = /*#__PURE__*/methodWithTrace((trace, restore) => (acquire, release) => circular_ensuring(acquire, addFinalizer(restore(release))).traced(trace));
/** @internal */
const awaitAllChildren = /*#__PURE__*/methodWithTrace(trace => self => ensuringChildren(self, fiberAwaitAll).traced(trace));
/** @internal */
const cached = /*#__PURE__*/dualWithTrace(2, trace => (self, timeToLive) => core_map(cachedInvalidate(self, timeToLive), tuple => tuple[0]).traced(trace));
/** @internal */
const cachedInvalidate = /*#__PURE__*/dualWithTrace(2, trace => (self, timeToLive) => core_flatMap(context(), env => core_map(makeSynchronized(Option_none()), cache => [provideContext(getCachedValue(self, timeToLive, cache), env), invalidateCache(cache)])).traced(trace));
/** @internal */
const computeCachedValue = (self, timeToLive, start) => core_map(deferred => Option_some([start + timeToLive.millis, deferred]))(core_tap(deferred => intoDeferred(self, deferred))(deferredMake()));
/** @internal */
const getCachedValue = (self, timeToLive, cache) => uninterruptibleMask(restore => core_flatMap(option => Option_isNone(option) ? dieMessage("BUG: Effect.cachedInvalidate - please report an issue at https://github.com/Effect-TS/io/issues") : restore(deferredAwait(option.value[1])))(core_flatMap(time => updateSomeAndGetEffectSynchronized(cache, option => {
  switch (option._tag) {
    case "None":
      {
        return Option_some(computeCachedValue(self, timeToLive, time));
      }
    case "Some":
      {
        const [end] = option.value;
        return end - time <= 0 ? Option_some(computeCachedValue(self, timeToLive, time)) : Option_none();
      }
  }
}))(effect_clockWith(clock => clock.currentTimeMillis()))));
/** @internal */
const invalidateCache = cache => ref_set(cache, Option_none());
/** @internal */
const disconnect = /*#__PURE__*/methodWithTrace(trace => self => uninterruptibleMask(restore => fiberIdWith(fiberId => core_flatMap(forkDaemon(restore(self)), fiber => onInterrupt(() => interruptAsFork(fiberId)(fiber))(restore(fiber_join(fiber)))))).traced(trace));
/** @internal */
const circular_ensuring = /*#__PURE__*/dualWithTrace(2, trace => (self, finalizer) => uninterruptibleMask(restore => matchCauseEffect(restore(self), cause1 => matchCauseEffect(finalizer, cause2 => failCause(sequential(cause1, cause2)), () => failCause(cause1)), a => core_as(finalizer, a))).traced(trace));
/** @internal */
const ensuringChild = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => ensuringChildren(self, children => restore(f)(fiberCollectAll(children))).traced(trace));
/** @internal */
const ensuringChildren = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, children) => core_flatMap(track(), supervisor => circular_ensuring(core_flatMap(supervisor.value(), restore(children)))(supervised(supervisor)(self))).traced(trace));
/** @internal */
const forkAll = /*#__PURE__*/methodWithTrace(trace => effects => core_map(core_forEach(effects, fork), fiberCollectAll).traced(trace));
/** @internal */
const forkIn = /*#__PURE__*/dualWithTrace(2, trace => (self, scope) => uninterruptibleMask(restore => core_flatMap(scope.fork(ExecutionStrategy_sequential), child => core_tap(fiber => child.addFinalizer(() => fiberIdWith(fiberId => equals(fiberId, fiber.id()) ? core_unit() : core_asUnit(interruptFiber(fiber)))))(forkDaemon(onExit(exit => child.close(exit))(restore(self)))))).traced(trace));
/** @internal */
const forkScoped = /*#__PURE__*/methodWithTrace(trace => self => scopeWith(scope => forkIn(self, scope)).traced(trace));
/** @internal */
const fromFiber = /*#__PURE__*/methodWithTrace(trace => fiber => fiber_join(fiber).traced(trace));
/** @internal */
const fromFiberEffect = /*#__PURE__*/methodWithTrace(trace => fiber => suspendSucceed(() => core_flatMap(fiber, fiber_join)).traced(trace));
/** @internal */
const memoizeFunction = /*#__PURE__*/methodWithTrace(trace => f => core_map(ref => a => core_flatMap(([patch, b]) => core_as(b)(patchFiberRefs(patch)))(core_flatMap(deferredAwait)(ref.modifyEffect(map => {
  const result = MutableHashMap_get(a)(map);
  if (Option_isNone(result)) {
    return core_map(deferred => [deferred, MutableHashMap_set(a, deferred)(map)])(core_tap(deferred => fork(intoDeferred(deferred)(diffFiberRefs(f(a)))))(deferredMake()));
  }
  return core_succeed([result.value, map]);
}))))(core_flatMap(makeSynchronized)(core_sync(() => {
  return MutableHashMap_empty();
}))).traced(trace));
/** @internal */
const race = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => checkInterruptible(isInterruptible => raceAwait(raceDisconnect(that, isInterruptible))(raceDisconnect(self, isInterruptible))).traced(trace));
/** @internal */
const raceDisconnect = (self, isInterruptible) => isInterruptible ? disconnect(self) : core_interruptible(disconnect(uninterruptible(self)));
/** @internal */
const raceAwait = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => fiberIdWith(parentFiberId => raceWith(that, (exit, right) => exitMatchEffect(cause => effect_mapErrorCause(cause2 => parallel(cause, cause2))(fiber_join(right)), value => core_as(value)(interruptAsFiber(parentFiberId)(right)))(exit), (exit, left) => exitMatchEffect(cause => effect_mapErrorCause(cause2 => parallel(cause2, cause))(fiber_join(left)), value => core_as(value)(interruptAsFiber(parentFiberId)(left)))(exit))(self)).traced(trace));
/** @internal */
const raceEither = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => race(core_map(self, Either_left), core_map(that, Either_right)).traced(trace));
/** @internal */
const raceFirst = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => (effect => core_flatten(effect))(race(core_exit(that))(core_exit(self))).traced(trace));
/** @internal */
const raceFibersWith = /*#__PURE__*/dualWithTrace(4, (trace, restore) => (self, that, selfWins, thatWins) => withFiberRuntime((parentFiber, parentStatus) => {
  const parentRuntimeFlags = parentStatus.runtimeFlags;
  const raceIndicator = MutableRef_make(true);
  const leftFiber = unsafeMakeChildFiber(self, parentFiber, parentRuntimeFlags);
  const rightFiber = unsafeMakeChildFiber(that, parentFiber, parentRuntimeFlags);
  leftFiber.startFork(self);
  rightFiber.startFork(that);
  leftFiber.setFiberRef(forkScopeOverride, Option_some(parentFiber.scope()));
  rightFiber.setFiberRef(forkScopeOverride, Option_some(parentFiber.scope()));
  return core_async(cb => {
    leftFiber.unsafeAddObserver(() => completeRace(leftFiber, rightFiber, restore(selfWins), raceIndicator, cb));
    rightFiber.unsafeAddObserver(() => completeRace(rightFiber, leftFiber, restore(thatWins), raceIndicator, cb));
  }, Id_combine(rightFiber.id())(leftFiber.id()));
}).traced(trace));
/** @internal */
const completeRace = (winner, loser, cont, ab, cb) => {
  if (compareAndSet(true, false)(ab)) {
    cb(cont(winner, loser));
  }
};
/** @internal */
const raceWith = /*#__PURE__*/dualWithTrace(4, (trace, restore) => (self, that, leftDone, rightDone) => raceFibersWith(self, that, (winner, loser) => core_flatMap(winner.await(), exit => {
  switch (exit._tag) {
    case OP_SUCCESS:
      {
        return core_flatMap(winner.inheritAll(), () => restore(leftDone)(exit, loser));
      }
    case OP_FAILURE:
      {
        return restore(leftDone)(exit, loser);
      }
  }
}), (winner, loser) => core_flatMap(winner.await(), exit => {
  switch (exit._tag) {
    case OP_SUCCESS:
      {
        return core_flatMap(winner.inheritAll(), () => restore(rightDone)(exit, loser));
      }
    case OP_FAILURE:
      {
        return restore(rightDone)(exit, loser);
      }
  }
})).traced(trace));
/** @internal */
const scheduleForked = /*#__PURE__*/dualWithTrace(2, trace => (self, schedule) => forkScoped(schedule_Effect(schedule)(self)).traced(trace));
/** @internal */
const supervised = /*#__PURE__*/dualWithTrace(2, trace => (self, supervisor) => {
  const supervise = fiberRefLocallyWith(currentSupervisor, s => s.zip(supervisor));
  return supervise(self).traced(trace);
});
/** @internal */
const timeout = /*#__PURE__*/dualWithTrace(2, trace => (self, duration) => timeoutTo(self, Option_none(), Option_some, duration).traced(trace));
/** @internal */
const timeoutFail = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, evaluate, duration) => core_flatten(timeoutTo(self, failSync(restore(evaluate)), core_succeed, duration)).traced(trace));
/** @internal */
const timeoutFailCause = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, evaluate, duration) => core_flatten(timeoutTo(self, failCauseSync(restore(evaluate)), core_succeed, duration)).traced(trace));
/** @internal */
const timeoutTo = /*#__PURE__*/dualWithTrace(4, (trace, restore) => (self, def, f, duration) => raceFirst(core_map(self, restore(f)), core_interruptible(core_as(def)(effect_sleep(duration)))).traced(trace));
/** @internal */
const validatePar = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => validateWithPar(self, that, (a, b) => [a, b]).traced(trace));
/** @internal */
const validateWithPar = /*#__PURE__*/dualWithTrace(3, (trace, restore) => (self, that, f) => core_flatten(zipWithPar(core_exit(self), core_exit(that), (ea, eb) => exitZipWith(eb, restore(f), (ca, cb) => parallel(ca, cb))(ea))).traced(trace));
/** @internal */
const circular_zipPar = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => zipWithPar(self, that, (a, b) => [a, b]).traced(trace));
/** @internal */
const circular_zipParLeft = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => zipWithPar(self, that, (a, _) => a).traced(trace));
/** @internal */
const circular_zipParRight = /*#__PURE__*/dualWithTrace(2, trace => (self, that) => zipWithPar(self, that, (_, b) => b).traced(trace));
/** @internal */
const zipWithPar = /*#__PURE__*/dualWithTrace(3, (trace, restoreTrace) => (self, that, f) => uninterruptibleMask(restore => transplant(graft => {
  const deferred = deferredUnsafeMake(Id_none);
  const ref = MutableRef_make(false);
  return core_flatMap(([left, right]) => matchCauseEffect(cause => zipRight(core_flatMap(([left, right]) => exitMatch(causes => failCause(parallel(stripFailures(cause), causes)), () => failCause(stripFailures(cause)))(exitZipWith(right, f, parallel)(left)))(core_zip(_await(right))(_await(left))))(zipRight(fiberInterruptFork(right))(fiberInterruptFork(left))), () => core_zipWith(fiber_join(left), fiber_join(right), restoreTrace(f)))(restore(deferredAwait(deferred))))(core_zip(forkZipWithPar(that, graft, restore, deferred, ref))(forkZipWithPar(self, graft, restore, deferred, ref)));
})).traced(trace));
/** @internal */
const forkZipWithPar = (self, graft, restore, deferred, ref) => forkDaemon(matchCauseEffect(graft(restore(self)), cause => zipRight(deferredFail(deferred, void 0), failCause(cause)), value => {
  const flag = MutableRef_get(ref);
  if (flag) {
    deferredUnsafeDone(deferred, core_unit());
    return core_succeed(value);
  }
  MutableRef_set(true)(ref);
  return core_succeed(value);
}));
// circular with Synchronized
/** @internal */
const SynchronizedSymbolKey = "@effect/io/Ref/Synchronized";
/** @internal */
const SynchronizedTypeId = /*#__PURE__*/Symbol.for(SynchronizedSymbolKey);
/** @internal */
const synchronizedVariance = {
  _A: _ => _
};
/** @internal */
class SynchronizedImpl {
  constructor(ref, withLock) {
    this.ref = ref;
    this.withLock = withLock;
    this[circular_a] = synchronizedVariance;
    this[circular_b] = refVariance;
  }
  modify(f) {
    return bodyWithTrace((trace, restore) => this.modifyEffect(a => core_succeed(restore(f)(a))).traced(trace));
  }
  modifyEffect(f) {
    return bodyWithTrace((trace, restore) => this.withLock(core_flatMap(([b, a]) => core_as(ref_set(this.ref, a), b))(core_flatMap(ref_get(this.ref), restore(f)))).traced(trace));
  }
}
circular_a = SynchronizedTypeId, circular_b = RefTypeId;
/** @internal */
const makeSynchronized = /*#__PURE__*/methodWithTrace(trace => value => core_sync(() => unsafeMakeSynchronized(value)).traced(trace));
/** @internal */
const unsafeMakeSynchronized = value => {
  const ref = ref_unsafeMake(value);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};
/** @internal */
const updateSomeAndGetEffectSynchronized = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, pf) => self.modifyEffect(value => {
  const result = restore(pf)(value);
  switch (result._tag) {
    case "None":
      {
        return core_succeed([value, value]);
      }
    case "Some":
      {
        return core_map(result.value, a => [a, a]);
      }
  }
}).traced(trace));
// circular with Fiber
/** @internal */
const zipFiber = /*#__PURE__*/untracedDual(2, () => (self, that) => zipWithFiber(self, that, (a, b) => [a, b]));
/** @internal */
const zipLeftFiber = /*#__PURE__*/untracedDual(2, () => (self, that) => zipWithFiber(self, that, (a, _) => a));
/** @internal */
const zipRightFiber = /*#__PURE__*/untracedDual(2, () => (self, that) => zipWithFiber(self, that, (_, b) => b));
/** @internal */
const zipWithFiber = /*#__PURE__*/untracedDual(3, restore => (self, that, f) => ({
  [FiberTypeId]: fiberVariance,
  id: () => Id_getOrElse(that.id())(self.id()),
  await: methodWithTrace(trace => () => core_exit(zipWithPar(core_flatten(that.await()), restore(f))(core_flatten(self.await()))).traced(trace)),
  children: methodWithTrace(trace => () => self.children().traced(trace)),
  inheritAll: methodWithTrace(trace => () => zipRight(that.inheritAll(), self.inheritAll()).traced(trace)),
  poll: methodWithTrace(trace => () => core_zipWith(self.poll(), that.poll(), (optionA, optionB) => Option_flatMap(exitA => Option_map(exitB => Exit_zipWith(exitB, restore(f), parallel)(exitA))(optionB))(optionA)).traced(trace)),
  interruptAsFork: methodWithTrace(trace => id => zipRight(self.interruptAsFork(id), that.interruptAsFork(id)).traced(trace))
}));
//# sourceMappingURL=circular.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Fiber.mjs




/**
 * @since 1.0.0
 * @category symbols
 */
const Fiber_FiberTypeId = FiberTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Fiber_RuntimeFiberTypeId = RuntimeFiberTypeId;
/**
 * @since 1.0.0
 * @category instances
 */
const Fiber_Order = fiber_Order;
/**
 * Returns `true` if the specified value is a `Fiber`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Fiber_isFiber = isFiber;
/**
 * Returns `true` if the specified `Fiber` is a `RuntimeFiber`, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Fiber_isRuntimeFiber = isRuntimeFiber;
/**
 * The identity of the fiber.
 *
 * @since 1.0.0
 * @category getters
 */
const Fiber_id = fiber_id;
const Fiber_await = _await;

/**
 * Awaits on all fibers to be completed, successfully or not.
 *
 * @since 1.0.0
 * @category destructors
 */
const awaitAll = fiberAwaitAll;
/**
 * Retrieves the immediate children of the fiber.
 *
 * @since 1.0.0
 * @category getters
 */
const Fiber_children = children;
/**
 * Collects all fibers into a single fiber producing an in-order list of the
 * results.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_collectAll = fiberCollectAll;
/**
 * A fiber that is done with the specified `Exit` value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_done = fiber_done;
/**
 * @since 1.0.0
 * @category destructors
 */
const Fiber_dump = dump;
/**
 * @since 1.0.0
 * @category destructors
 */
const Fiber_dumpAll = dumpAll;
/**
 * A fiber that has already failed with the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_fail = fiber_fail;
/**
 * Creates a `Fiber` that has already failed with the specified cause.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_failCause = fiber_failCause;
/**
 * Lifts an `Effect` into a `Fiber`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Fiber_fromEffect = fromEffect;
/**
 * Gets the current fiber if one is running.
 *
 * @since 1.0.0
 * @category utilities
 */
const Fiber_getCurrentFiber = getCurrentFiber;
/**
 * Inherits values from all `FiberRef` instances into current fiber. This
 * will resume immediately.
 *
 * @since 1.0.0
 * @category destructors
 */
const inheritAll = fiber_inheritAll;
/**
 * Interrupts the fiber from whichever fiber is calling this method. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 1.0.0
 * @category interruption
 */
const Fiber_interrupt = interruptFiber;
/**
 * Constructrs a `Fiber` that is already interrupted.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_interrupted = interrupted;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 1.0.0
 * @category interruption
 */
const interruptAs = interruptAsFiber;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 1.0.0
 * @category interruption
 */
const Fiber_interruptAsFork = interruptAsFork;
/**
 * Interrupts all fibers, awaiting their interruption.
 *
 * @since 1.0.0
 * @category interruption
 */
const Fiber_interruptAll = interruptAll;
/**
 * Interrupts all fibers as by the specified fiber, awaiting their
 * interruption.
 *
 * @since 1.0.0
 * @category interruption
 */
const Fiber_interruptAllWith = interruptAllWith;
/**
 * Interrupts the fiber from whichever fiber is calling this method. The
 * interruption will happen in a separate daemon fiber, and the returned
 * effect will always resume immediately without waiting.
 *
 * @since 1.0.0
 * @category interruption
 */
const interruptFork = fiberInterruptFork;
/**
 * Joins the fiber, which suspends the joining fiber until the result of the
 * fiber has been determined. Attempting to join a fiber that has erred will
 * result in a catchable error. Joining an interrupted fiber will result in an
 * "inner interruption" of this fiber, unlike interruption triggered by
 * another fiber, "inner interruption" can be caught and recovered.
 *
 * @since 1.0.0
 * @category destructors
 */
const Fiber_join = fiber_join;
/**
 * Joins all fibers, awaiting their _successful_ completion. Attempting to
 * join a fiber that has erred will result in a catchable error, _if_ that
 * error does not result from interruption.
 *
 * @since 1.0.0
 * @category destructors
 */
const joinAll = fiberJoinAll;
/**
 * Maps over the value the Fiber computes.
 *
 * @since 1.0.0
 * @category mapping
 */
const Fiber_map = fiber_map;
/**
 * Effectually maps over the value the fiber computes.
 *
 * @since 1.0.0
 * @category mapping
 */
const Fiber_mapEffect = mapEffect;
/**
 * Passes the success of this fiber to the specified callback, and continues
 * with the fiber that it returns.
 *
 * @since 1.0.0
 * @category mapping
 */
const Fiber_mapFiber = mapFiber;
/**
 * Folds over the `Fiber` or `RuntimeFiber`.
 *
 * @since 1.0.0
 * @category folding
 */
const Fiber_match = fiber_match;
/**
 * A fiber that never fails or succeeds.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_never = fiber_never;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Fiber_orElse = fiber_orElse;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Fiber_orElseEither = fiber_orElseEither;
/**
 * Tentatively observes the fiber, but returns immediately if it is not
 * already done.
 *
 * @since 1.0.0
 * @category getters
 */
const Fiber_poll = poll;
/**
 * Pretty-prints a `RuntimeFiber`.
 *
 * @since 1.0.0
 * @category destructors
 */
const Fiber_pretty = pretty;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_roots = roots;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_unsafeRoots = unsafeRoots;
/**
 * Converts this fiber into a scoped effect. The fiber is interrupted when the
 * scope is closed.
 *
 * @since 1.0.0
 * @category destructors
 */
const scoped = fiberScoped;
/**
 * Returns the `FiberStatus` of a `RuntimeFiber`.
 *
 * @since 1.0.0
 * @category getters
 */
const Fiber_status = fiber_status;
/**
 * Returns a fiber that has already succeeded with the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_succeed = fiber_succeed;
/**
 * A fiber that has already succeeded with unit.
 *
 * @since 1.0.0
 * @category constructors
 */
const Fiber_unit = fiber_unit;
/**
 * Zips this fiber and the specified fiber together, producing a tuple of
 * their output.
 *
 * @since 1.0.0
 * @category zipping
 */
const Fiber_zip = zipFiber;
/**
 * Same as `zip` but discards the output of that `Fiber`.
 *
 * @since 1.0.0
 * @category zipping
 */
const Fiber_zipLeft = zipLeftFiber;
/**
 * Same as `zip` but discards the output of this `Fiber`.
 *
 * @since 1.0.0
 * @category zipping
 */
const Fiber_zipRight = zipRightFiber;
/**
 * Zips this fiber with the specified fiber, combining their results using the
 * specified combiner function. Both joins and interruptions are performed in
 * sequential order from left to right.
 *
 * @since 1.0.0
 * @category zipping
 */
const Fiber_zipWith = zipWithFiber;
//# sourceMappingURL=Fiber.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/runtime.mjs
















/** @internal */
const runtime_unsafeFork = runtime => (effect, scheduler) => runtime.unsafeFork(effect, scheduler);
/** @internal */
const unsafeRunCallback = runtime => (effect, onExit) => {
  const fiberRuntime = runtime_unsafeFork(runtime)(effect);
  if (onExit) {
    fiberRuntime.unsafeAddObserver(exit => {
      onExit(exit);
    });
  }
  return (id, onExitInterrupt) => unsafeRunCallback(runtime)(interruptAs(id ?? Id_none)(fiberRuntime), onExitInterrupt ? exit => {
    return onExitInterrupt(Exit_flatten(exit));
  } : void 0);
};
/** @internal */
const unsafeRunSyncEither = runtime => effect => untraced(() => unsafeRunSync(runtime)(core_either(effect)));
/** @internal */
const unsafeRunPromise = runtime => effect => {
  return new Promise((resolve, reject) => {
    unsafeRunCallback(runtime)(effect, exit => {
      switch (exit._tag) {
        case OP_SUCCESS:
          {
            resolve(exit.value);
            break;
          }
        case OP_FAILURE:
          {
            reject(squashWith(Function_identity)(exit.cause));
            break;
          }
      }
    });
  });
};
/** @internal */
const unsafeRunPromiseExit = runtime => effect => {
  return new Promise(resolve => {
    unsafeRunCallback(runtime)(effect, exit => {
      resolve(exit);
    });
  });
};
/** @internal */
const unsafeRunPromiseEither = runtime => effect => unsafeRunPromise(runtime)(core_either(effect));
/** @internal */
class RuntimeImpl {
  constructor(context, runtimeFlags, fiberRefs) {
    this.context = context;
    this.runtimeFlags = runtimeFlags;
    this.fiberRefs = fiberRefs;
  }
  unsafeFork(effect, scheduler) {
    const fiberId = Id_unsafeMake();
    let fiberRefs = FiberRefs_updatedAs(this.fiberRefs, fiberId, currentContext, this.context);
    if (scheduler) {
      fiberRefs = FiberRefs_updatedAs(fiberRefs, fiberId, currentScheduler, scheduler);
    }
    const fiberRuntime = new FiberRuntime(fiberId, FiberRefs_forkAs(fiberRefs, fiberId), this.runtimeFlags, this);
    const supervisor = fiberRuntime.getSupervisor();
    if (supervisor !== supervisor_none) {
      supervisor.onStart(this.context, effect, Option_none(), fiberRuntime);
      fiberRuntime.unsafeAddObserver(exit => supervisor.onEnd(exit, fiberRuntime));
    }
    globalScope.add(this.runtimeFlags, fiberRuntime);
    fiberRuntime.start(effect);
    return fiberRuntime;
  }
}
/** @internal */
const runtime_make = (context, runtimeFlags, fiberRefs) => new RuntimeImpl(context, runtimeFlags, fiberRefs);
/** @internal */
const runtime_runtime = /*#__PURE__*/methodWithTrace(trace => () => withFiberRuntime((state, status) => core_succeed(new RuntimeImpl(state.getFiberRef(currentContext), status.runtimeFlags, state.unsafeGetFiberRefs()))).traced(trace));
/** @internal */
const defaultRuntimeFlags = /*#__PURE__*/runtimeFlags_make(Interruption, CooperativeYielding);
/** @internal */
const defaultRuntime = /*#__PURE__*/runtime_make( /*#__PURE__*/mjs_Context_empty(), defaultRuntimeFlags, /*#__PURE__*/FiberRefs_unsafeMake( /*#__PURE__*/new Map()));
/** @internal */
const unsafeRunEffect = /*#__PURE__*/unsafeRunCallback(defaultRuntime);
/** @internal */
const unsafeForkEffect = /*#__PURE__*/runtime_unsafeFork(defaultRuntime);
/** @internal */
const unsafeRunPromiseEffect = /*#__PURE__*/unsafeRunPromise(defaultRuntime);
/** @internal */
const unsafeRunPromiseEitherEffect = /*#__PURE__*/unsafeRunPromiseEither(defaultRuntime);
/** @internal */
const unsafeRunPromiseExitEffect = /*#__PURE__*/unsafeRunPromiseExit(defaultRuntime);
/** @internal */
const unsafeRunSyncEffect = /*#__PURE__*/unsafeRunSync(defaultRuntime);
/** @internal */
const unsafeRunSyncExitEffect = /*#__PURE__*/unsafeRunSyncExit(defaultRuntime);
/** @internal */
const unsafeRunSyncEitherEffect = /*#__PURE__*/unsafeRunSyncEither(defaultRuntime);
// circular with Effect
/** @internal */
const asyncEffect = /*#__PURE__*/methodWithTrace((trace, restoreTrace) => register => core_flatMap(deferredMake(), deferred => core_flatMap(runtime_runtime(), runtime => uninterruptibleMask(restore => zipRight(fork(restore(catchAllCause(restoreTrace(register)(cb => unsafeRunCallback(runtime)(intoDeferred(deferred)(cb))), cause => deferredFailCause(deferred, cause)))), restore(deferredAwait(deferred)))))).traced(trace));
//# sourceMappingURL=runtime.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/cause-pretty-run.mjs


/** @internal */
const cause_pretty_run_pretty = cause => unsafeRunSyncEffect(prettySafe(cause));
//# sourceMappingURL=cause-pretty-run.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Cause.mjs


/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_CauseTypeId = CauseTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_RuntimeExceptionTypeId = RuntimeExceptionTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_InterruptedExceptionTypeId = InterruptedExceptionTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_IllegalArgumentExceptionTypeId = IllegalArgumentExceptionTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_NoSuchElementExceptionTypeId = NoSuchElementExceptionTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_InvalidHubCapacityExceptionTypeId = InvalidHubCapacityExceptionTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Cause_StackAnnotationTypeId = StackAnnotationTypeId;
/**
 * Constructs a new `Empty` cause.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_empty = cause_empty;
/**
 * Constructs a new `Fail` cause from the specified `error`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_fail = cause_fail;
/**
 * Constructs a new `Die` cause from the specified `defect`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_die = die;
/**
 * Constructs a new `Interrupt` cause from the specified `fiberId`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_interrupt = interrupt;
/**
 * Constructs a new `Annotated` cause from the specified `annotation`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_annotated = annotated;
/**
 * Constructs a new `Parallel` cause from the specified `left` and `right`
 * causes.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_parallel = parallel;
/**
 * Constructs a new `Sequential` cause from the specified pecified `left` and
 * `right` causes.
 *
 * @since 1.0.0
 * @category constructors
 */
const Cause_sequential = sequential;
/**
 * Returns `true` if the specified value is a `Cause`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isCause = isCause;
/**
 * Returns `true` if the specified `Cause` is an `Empty` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isEmptyType = isEmptyType;
/**
 * Returns `true` if the specified `Cause` is a `Fail` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isFailType = isFailType;
/**
 * Returns `true` if the specified `Cause` is a `Die` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isDieType = isDieType;
/**
 * Returns `true` if the specified `Cause` is an `Interrupt` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isInterruptType = isInterruptType;
/**
 * Returns `true` if the specified `Cause` is an `Annotated` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isAnnotatedType = isAnnotatedType;
/**
 * Returns `true` if the specified `Cause` is a `Sequential` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isSequentialType = isSequentialType;
/**
 * Returns `true` if the specified `Cause` is a `Parallel` type, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Cause_isParallelType = isParallelType;
/**
 * Returns the size of the cause, calculated as the number of individual `Cause`
 * nodes found in the `Cause` semiring structure.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_size = cause_size;
/**
 * Returns `true` if the specified cause is empty, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_isEmpty = cause_isEmpty;
/**
 * Returns `true` if the specified cause contains a failure, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_isFailure = isFailure;
/**
 * Returns `true` if the specified cause contains a defect, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_isDie = isDie;
/**
 * Returns `true` if the specified cause contains an interruption, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_isInterrupted = isInterrupted;
/**
 * Returns `true` if the specified cause contains only interruptions (without
 * any `Die` or `Fail` causes), `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_isInterruptedOnly = isInterruptedOnly;
/**
 * Returns a `List` of all recoverable errors of type `E` in the specified
 * cause.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_failures = failures;
/**
 * Returns a `List` of all unrecoverable defects in the specified cause.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_defects = defects;
/**
 * Returns a `HashSet` of `FiberId`s for all fibers that interrupted the fiber
 * described by the specified cause.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_interruptors = interruptors;
/**
 * Returns the `E` associated with the first `Fail` in this `Cause`, if one
 * exists.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_failureOption = failureOption;
/**
 * Returns the first checked error on the `Left` if available, if there are
 * no checked errors return the rest of the `Cause` that is known to contain
 * only `Die` or `Interrupt` causes.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_failureOrCause = failureOrCause;
/**
 * Converts the specified `Cause<Option<E>>` to an `Option<Cause<E>>` by
 * recursively stripping out any failures with the error `None`.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_flipCauseOption = flipCauseOption;
/**
 * Returns the defect associated with the first `Die` in this `Cause`, if one
 * exists.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_dieOption = dieOption;
/**
 * Returns the `FiberId` associated with the first `Interrupt` in the specified
 * cause, if one exists.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_interruptOption = interruptOption;
/**
 * Remove all `Fail` and `Interrupt` nodes from the specified cause, and return
 * a cause containing only `Die` cause/finalizer defects.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_keepDefects = keepDefects;
/**
 * Linearizes the specified cause into a `HashSet` of parallel causes where each
 * parallel cause contains a linear sequence of failures.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_linearize = linearize;
/**
 * Remove all `Fail` and `Interrupt` nodes from the specified cause, and return
 * a cause containing only `Die` cause/finalizer defects.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_stripFailures = stripFailures;
/**
 * Remove all `Die` causes that the specified partial function is defined at,
 * returning `Some` with the remaining causes or `None` if there are no
 * remaining causes.
 *
 * @since 1.0.0
 * @category getters
 */
const Cause_stripSomeDefects = stripSomeDefects;
/**
 * @since 1.0.0
 * @category mapping
 */
const Cause_as = cause_as;
/**
 * @since 1.0.0
 * @category mapping
 */
const Cause_map = cause_map;
/**
 * @since 1.0.0
 * @category sequencing
 */
const Cause_flatMap = cause_flatMap;
/**
 * @since 1.0.0
 * @category sequencing
 */
const Cause_flatten = cause_flatten;
/**
 * Returns `true` if the `self` cause contains or is equal to `that` cause,
 * `false` otherwise.
 *
 * @since 1.0.0
 * @category elements
 */
const Cause_contains = cause_contains;
/**
 * Squashes a `Cause` down to a single defect, chosen to be the "most important"
 * defect.
 *
 * @since 1.0.0
 * @category destructors
 */
const Cause_squash = squash;
/**
 * Squashes a `Cause` down to a single defect, chosen to be the "most important"
 * defect. If a recoverable error is found, the provided function will be used
 * to map the error a defect, and the resulting value will be returned.
 *
 * @since 1.0.0
 * @category destructors
 */
const Cause_squashWith = squashWith;
/**
 * Uses the provided partial function to search the specified cause and attempt
 * to extract information from it.
 *
 * @since 1.0.0
 * @category elements
 */
const Cause_find = find;
/**
 * Filters causes which match the provided predicate out of the specified cause.
 *
 * @since 1.0.0
 * @category filtering
 */
const Cause_filter = cause_filter;
/**
 * Folds the specified cause into a value of type `Z`.
 *
 * @since 1.0.0
 * @category folding
 */
const Cause_match = cause_match;
/**
 * Reduces the specified cause into a value of type `Z`, beginning with the
 * provided `zero` value.
 *
 * @since 1.0.0
 * @category folding
 */
const Cause_reduce = cause_reduce;
/**
 * Reduces the specified cause into a value of type `Z` using a `Cause.Reducer`.
 * Also allows for accessing the provided context during reduction.
 *
 * @since 1.0.0
 * @category folding
 */
const Cause_reduceWithContext = cause_reduceWithContext;
/**
 * Represents a checked exception which occurs when a `Fiber` is interrupted.
 *
 * @since 1.0.0
 * @category errors
 */
const Cause_InterruptedException = InterruptedException;
/**
 * Returns `true` if the specified value is an `InterruptedException`, `false`
 * otherwise.

 * @since 1.0.0
 * @category refinements
 */
const Cause_isInterruptedException = isInterruptedException;
/**
 * Represents a checked exception which occurs when an invalid argument is
 * provided to a method.
 *
 * @since 1.0.0
 * @category errors
 */
const Cause_IllegalArgumentException = IllegalArgumentException;
/**
 * Returns `true` if the specified value is an `IllegalArgumentException`, `false`
 * otherwise.

 * @since 1.0.0
 * @category refinements
 */
const Cause_isIllegalArgumentException = isIllegalArgumentException;
/**
 * Represents a checked exception which occurs when an expected element was
 * unable to be found.
 *
 * @since 1.0.0
 * @category errors
 */
const Cause_NoSuchElementException = NoSuchElementException;
/**
  * Returns `true` if the specified value is an `IllegalArgumentException`, `false`
  * otherwise.

  * @since 1.0.0
  * @category refinements
  */
const Cause_isNoSuchElementException = isNoSuchElementException;
/**
 * Represents a generic checked exception which occurs at runtime.
 *
 * @since 1.0.0
 * @category errors
 */
const Cause_RuntimeException = RuntimeException;
/**
  * Returns `true` if the specified value is an `RuntimeException`, `false`
  * otherwise.

  * @since 1.0.0
  * @category refinements
  */
const Cause_isRuntimeException = isRuntimeException;
/**
 * Returns the specified `Cause` as a pretty-printed string.
 *
 * @since 1.0.0
 * @category rendering
 */
const Cause_pretty = cause_pretty_run_pretty;
/**
 * Checks if an annotation is a StackAnnotation
 *
 * @since 1.0.0
 * @category guards
 */
const Cause_isStackAnnotation = isStackAnnotation;
/**
 * Removes any annotation from the cause
 *
 * @since 1.0.0
 * @category filtering
 */
const Cause_unannotate = unannotate;
//# sourceMappingURL=Cause.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/opCodes/layer.mjs
/** @internal */
const OP_EXTEND_SCOPE = "ExtendScope";
/** @internal */
const OP_FOLD = "Fold";
/** @internal */
const OP_FRESH = "Fresh";
/** @internal */
const OP_FROM_EFFECT = "FromEffect";
/** @internal */
const OP_SCOPED = "Scoped";
/** @internal */
const OP_SUSPEND = "Suspend";
/** @internal */
const OP_PROVIDE_TO = "ProvideTo";
/** @internal */
const layer_OP_ZIP_WITH = "ZipWith";
/** @internal */
const OP_ZIP_WITH_PAR = "ZipWithPar";
//# sourceMappingURL=layer.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/synchronizedRef.mjs



/** @internal */
const getAndUpdateEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, (trace, restore) => (self, f) => self.modifyEffect(value => core.map(restore(f)(value), result => [value, result])).traced(trace))));
/** @internal */
const getAndUpdateSomeEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, (trace, restore) => (self, pf) => self.modifyEffect(value => {
  const result = restore(pf)(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([value, value]);
      }
    case "Some":
      {
        return core.map(result.value, newValue => [value, newValue]);
      }
  }
}).traced(trace))));
/** @internal */
const synchronizedRef_modify = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, (trace, restore) => (self, f) => self.modify(restore(f)).traced(trace))));
/** @internal */
const modifyEffect = /*#__PURE__*/dualWithTrace(2, (trace, restore) => (self, f) => self.modifyEffect(restore(f)).traced(trace));
/** @internal */
const modifySomeEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(3, (trace, restore) => (self, fallback, pf) => self.modifyEffect(value => Option.getOrElse(() => core.succeed([fallback, value]))(restore(pf)(value))).traced(trace))));
/** @internal */
const updateEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, (trace, restore) => (self, f) => self.modifyEffect(value => core.map(restore(f)(value), result => [undefined, result])).traced(trace))));
/** @internal */
const updateAndGetEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, (trace, restore) => (self, f) => self.modifyEffect(value => core.map(restore(f)(value), result => [result, result])).traced(trace))));
/** @internal */
const updateSomeEffect = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, (trace, restore) => (self, pf) => self.modifyEffect(value => {
  const result = restore(pf)(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([void 0, value]);
      }
    case "Some":
      {
        return core.map(result.value, a => [void 0, a]);
      }
  }
}).traced(trace))));
//# sourceMappingURL=synchronizedRef.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Scope.mjs
/**
 * @since 1.0.0
 */


/**
 * @since 1.0.0
 * @category symbols
 */
const Scope_ScopeTypeId = ScopeTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Scope_CloseableScopeTypeId = CloseableScopeTypeId;
/**
 * @since 1.0.0
 * @category context
 */
const Scope_Tag = scopeTag;
/**
 * Adds a finalizer to this scope. The finalizer is guaranteed to be run when
 * the scope is closed.
 *
 * @since 1.0.0
 * @category mutations
 */
const Scope_addFinalizer = scopeAddFinalizer;
/**
 * A simplified version of `addFinalizerWith` when the `finalizer` does not
 * depend on the `Exit` value that the scope is closed with.
 *
 * @since 1.0.0
 * @category mutations
 */
const addFinalizerExit = scopeAddFinalizerExit;
/**
 * Closes a scope with the specified exit value, running all finalizers that
 * have been added to the scope.
 *
 * @since 1.0.0
 * @category destructors
 */
const Scope_close = scopeClose;
/**
 * Extends the scope of an `Effect` workflow that needs a scope into this
 * scope by providing it to the workflow but not closing the scope when the
 * workflow completes execution. This allows extending a scoped value into a
 * larger scope.
 *
 * @since 1.0.0
 * @category mutations
 */
const Scope_extend = scopeExtend;
/**
 * Forks a new scope that is a child of this scope. The child scope will
 * automatically be closed when this scope is closed.
 *
 * @since 1.0.0
 * @category mutations
 */
const Scope_fork = scopeFork;
/**
 * Uses the scope by providing it to an `Effect` workflow that needs a scope,
 * guaranteeing that the scope is closed with the result of that workflow as
 * soon as the workflow completes execution, whether by success, failure, or
 * interruption.
 *
 * @since 1.0.0
 * @category destructors
 */
const use = scopeUse;
/**
 * Creates a Scope where Finalizers will run according to the `ExecutionStrategy`.
 *
 * If an ExecutionStrategy is not provided `sequential` will be used.
 *
 * @since 1.0.0
 * @category constructors
 */
const Scope_make = scopeMake;
//# sourceMappingURL=Scope.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/layer.mjs

















/** @internal */
const LayerSymbolKey = "@effect/io/Layer";
/** @internal */
const LayerTypeId = /*#__PURE__*/Symbol.for(LayerSymbolKey);
/** @internal */
const layerVariance = {
  _RIn: _ => _,
  _E: _ => _,
  _ROut: _ => _
};
/** @internal */
const layer_proto = {
  [LayerTypeId]: layerVariance
};
/** @internal */
const isLayer = u => {
  return typeof u === "object" && u != null && LayerTypeId in u;
};
/** @internal */
const isFresh = self => {
  return self._tag === OP_FRESH;
};
// -----------------------------------------------------------------------------
// MemoMap
// -----------------------------------------------------------------------------
/** @internal */
class MemoMap {
  constructor(ref) {
    this.ref = ref;
  }
  /**
   * Checks the memo map to see if a layer exists. If it is, immediately
   * returns it. Otherwise, obtains the layer, stores it in the memo map,
   * and adds a finalizer to the `Scope`.
   */
  getOrElseMemoize(layer, scope) {
    return core_flatten(modifyEffect(this.ref, map => {
      const inMap = map.get(layer);
      if (inMap !== undefined) {
        const [acquire, release] = inMap;
        const cached = onExit(exitMatch(() => core_unit(), () => scopeAddFinalizerExit(scope, release)))(core_flatMap(([patch, b]) => core_as(b)(patchFiberRefs(patch)))(acquire));
        return core_succeed([cached, map]);
      }
      return core_flatMap(observers => core_flatMap(deferred => core_map(finalizerRef => {
        const resource = uninterruptibleMask(restore => core_flatMap(innerScope => core_flatMap(exit => {
          switch (exit._tag) {
            case OP_FAILURE:
              {
                return zipRight(failCause(exit.cause))(zipRight(scopeClose(innerScope, exit))(deferredFailCause(deferred, exit.cause)));
              }
            case OP_SUCCESS:
              {
                return core_as(exit.value[1])(zipRight(deferredSucceed(deferred, exit.value))(zipRight(scopeAddFinalizerExit(scope, exit => core_flatMap(finalizer => finalizer(exit))(ref_get(finalizerRef))))(zipRight(ref_update(observers, n => n + 1))(ref_set(finalizerRef, exit => core_asUnit(whenEffect(ref_modify(observers, n => [n === 1, n - 1]))(scopeClose(innerScope, exit))))))));
              }
          }
        })(core_exit(restore(core_flatMap(withScope(layer, innerScope), f => diffFiberRefs(f(this)))))))(scopeMake()));
        const memoized = [onExit(exitMatchEffect(() => core_unit(), () => ref_update(observers, n => n + 1)))(deferredAwait(deferred)), exit => core_flatMap(finalizer => finalizer(exit))(ref_get(finalizerRef))];
        return [resource, isFresh(layer) ? map : map.set(layer, memoized)];
      })(ref_make(() => core_unit())))(deferredMake()))(ref_make(0));
    }));
  }
}
const makeMemoMap = () => {
  return core_map(ref => new MemoMap(ref))(makeSynchronized(new Map()));
};
/** @internal */
const build = /*#__PURE__*/methodWithTrace(trace => self => scopeWith(scope => buildWithScope(scope)(self)).traced(trace));
/** @internal */
const buildWithScope = /*#__PURE__*/dualWithTrace(2, trace => (self, scope) => core_flatMap(makeMemoMap(), memoMap => core_flatMap(withScope(self, scope), run => run(memoMap))).traced(trace));
const withScope = (self, scope) => {
  const op = self;
  switch (op._tag) {
    case OP_EXTEND_SCOPE:
      {
        return core_sync(() => memoMap => scopeWith(scope => memoMap.getOrElseMemoize(op.layer, scope)));
      }
    case OP_FOLD:
      {
        return core_sync(() => memoMap => matchCauseEffect(cause => memoMap.getOrElseMemoize(op.failureK(cause), scope), value => memoMap.getOrElseMemoize(op.successK(value), scope))(memoMap.getOrElseMemoize(op.layer, scope)));
      }
    case OP_FRESH:
      {
        return core_sync(() => _ => buildWithScope(scope)(op.layer));
      }
    case OP_FROM_EFFECT:
      {
        return core_sync(() => _ => op.effect);
      }
    case OP_PROVIDE_TO:
      {
        return core_sync(() => memoMap => core_flatMap(env => provideContext(env)(memoMap.getOrElseMemoize(op.second, scope)))(memoMap.getOrElseMemoize(op.first, scope)));
      }
    case OP_SCOPED:
      {
        return core_sync(() => _ => scopeExtend(op.effect, scope));
      }
    case OP_SUSPEND:
      {
        return core_sync(() => memoMap => memoMap.getOrElseMemoize(op.evaluate(), scope));
      }
    case layer_OP_ZIP_WITH:
      {
        return core_sync(() => memoMap => core_zipWith(memoMap.getOrElseMemoize(op.second, scope), op.zipK)(memoMap.getOrElseMemoize(op.first, scope)));
      }
    case OP_ZIP_WITH_PAR:
      {
        return core_sync(() => memoMap => zipWithPar(memoMap.getOrElseMemoize(op.second, scope), op.zipK)(memoMap.getOrElseMemoize(op.first, scope)));
      }
  }
};
// -----------------------------------------------------------------------------
// Layer
// -----------------------------------------------------------------------------
/** @internal */
const layer_catchAll = /*#__PURE__*/untracedDual(2, restore => (self, onError) => matchLayer(self, restore(onError), succeedContext));
/** @internal */
const layer_catchAllCause = /*#__PURE__*/untracedDual(2, restore => (self, onError) => matchCauseLayer(self, restore(onError), succeedContext));
/** @internal */
const layer_die = defect => layer_failCause(Cause_die(defect));
/** @internal */
const layer_dieSync = evaluate => layer_failCauseSync(() => Cause_die(evaluate()));
/** @internal */
const discard = self => layer_map(self, () => mjs_Context_empty());
/** @internal */
const layer_context = () => fromEffectContext(context());
/** @internal */
const extendScope = self => {
  const extendScope = Object.create(layer_proto);
  extendScope._tag = OP_EXTEND_SCOPE;
  extendScope.layer = self;
  return extendScope;
};
/** @internal */
const layer_fail = error => layer_failCause(Cause_fail(error));
/** @internal */
const layer_failSync = evaluate => layer_failCauseSync(() => Cause_fail(evaluate()));
/** @internal */
const layer_failCause = cause => fromEffectContext(failCause(cause));
/** @internal */
const layer_failCauseSync = evaluate => fromEffectContext(failCauseSync(evaluate));
/** @internal */
const layer_flatMap = /*#__PURE__*/untracedDual(2, restore => (self, f) => matchLayer(self, layer_fail, restore(f)));
/** @internal */
const layer_flatten = /*#__PURE__*/dual(2, (self, tag) => layer_flatMap(self, mjs_Context_get(tag)));
/** @internal */
const fresh = self => {
  const fresh = Object.create(layer_proto);
  fresh._tag = OP_FRESH;
  fresh.layer = self;
  return fresh;
};
/** @internal */
const layer_fromEffect = (tag, effect) => fromEffectContext(core_map(effect, service => mjs_Context_make(tag, service)));
/** @internal */
const fromEffectDiscard = effect => fromEffectContext(core_map(effect, () => mjs_Context_empty()));
/** @internal */
function fromEffectContext(effect) {
  const fromEffect = Object.create(layer_proto);
  fromEffect._tag = OP_FROM_EFFECT;
  fromEffect.effect = effect;
  return fromEffect;
}
/** @internal */
const layer_fromFunction = (tagA, tagB, f) => fromEffectContext(serviceWith(tagA, a => mjs_Context_make(tagB, f(a))));
/** @internal */
const launch = /*#__PURE__*/methodWithTrace(trace => self => scopedEffect(zipRight(scopeWith(scope => buildWithScope(scope)(self)), never())).traced(trace));
/** @internal */
const layer_map = /*#__PURE__*/untracedDual(2, restore => (self, f) => layer_flatMap(self, context => succeedContext(restore(f)(context))));
/** @internal */
const layer_mapError = /*#__PURE__*/untracedDual(2, restore => (self, f) => layer_catchAll(self, error => layer_failSync(() => restore(f)(error))));
/** @internal */
const matchCauseLayer = /*#__PURE__*/untracedDual(3, restore => (self, onFailure, onSuccess) => {
  const fold = Object.create(layer_proto);
  fold._tag = OP_FOLD;
  fold.layer = self;
  fold.failureK = restore(onFailure);
  fold.successK = restore(onSuccess);
  return fold;
});
/** @internal */
const matchLayer = /*#__PURE__*/untracedDual(3, restore => (self, onFailure, onSuccess) => matchCauseLayer(self, cause => {
  const failureOrCause = Cause_failureOrCause(cause);
  switch (failureOrCause._tag) {
    case "Left":
      {
        return restore(onFailure)(failureOrCause.left);
      }
    case "Right":
      {
        return layer_failCause(failureOrCause.right);
      }
  }
}, restore(onSuccess)));
/** @internal */
const layer_memoize = /*#__PURE__*/methodWithTrace(trace => self => scopeWith(scope => core_map(fromEffectContext)(memoize(buildWithScope(self, scope)))).traced(trace));
/** @internal */
const layer_merge = /*#__PURE__*/dual(2, (self, that) => layer_zipWithPar(self, that, (a, b) => mjs_Context_merge(b)(a)));
/** @internal */
const layer_mergeAll = (...layers) => {
  let final = layers[0];
  for (let i = 1; i < layers.length; i++) {
    final = layer_merge(layers[i])(final);
  }
  return final;
};
/** @internal */
const layer_orDie = self => layer_catchAll(self, defect => layer_die(defect));
/** @internal */
const layer_orElse = /*#__PURE__*/untracedDual(2, restore => (self, that) => layer_catchAll(self, restore(that)));
/** @internal */
const layer_passthrough = self => layer_merge(layer_context(), self);
/** @internal */
const project = /*#__PURE__*/untracedDual(4, restore => (self, tagA, tagB, f) => layer_map(self, context => mjs_Context_make(tagB, restore(f)(mjs_Context_unsafeGet(context, tagA)))));
/** @internal */
const provide = /*#__PURE__*/dual(2, (self, that) => layer_suspend(() => {
  const provideTo = Object.create(layer_proto);
  provideTo._tag = OP_PROVIDE_TO;
  provideTo.first = Object.create(layer_proto, {
    _tag: {
      value: layer_OP_ZIP_WITH,
      enumerable: true
    },
    first: {
      value: layer_context(),
      enumerable: true
    },
    second: {
      value: self
    },
    zipK: {
      value: (a, b) => mjs_Context_merge(b)(a)
    }
  });
  provideTo.second = that;
  return provideTo;
}));
/** @internal */
const provideMerge = /*#__PURE__*/dual(2, (self, that) => {
  const zipWith = Object.create(layer_proto);
  zipWith._tag = layer_OP_ZIP_WITH;
  zipWith.first = self;
  zipWith.second = provide(that)(self);
  zipWith.zipK = (a, b) => {
    return mjs_Context_merge(b)(a);
  };
  return zipWith;
});
/** @internal */
const retry = /*#__PURE__*/dual(2, (self, schedule) => layer_suspend(() => {
  const stateTag = Tag();
  return layer_flatMap(env => retryLoop(self, schedule, stateTag, mjs_Context_get(stateTag)(env).state))(layer_succeed(stateTag, {
    state: schedule.initial
  }));
}));
/** @internal */
const retryLoop = (self, schedule, stateTag, state) => {
  return layer_catchAll(error => layer_flatMap(env => fresh(retryLoop(self, schedule, stateTag, mjs_Context_get(stateTag)(env).state)))(retryUpdate(schedule, stateTag, error, state)))(self);
};
/** @internal */
const retryUpdate = (schedule, stateTag, error, state) => {
  return layer_fromEffect(stateTag, core_flatMap(now => core_flatMap(([state, _, decision]) => Decision_isDone(decision) ? core_fail(error) : core_as({
    state
  })(Clock_sleep(millis(Intervals_start(decision.intervals) - now))))(schedule.step(now, error, state)))(Clock_currentTimeMillis()));
};
/** @internal */
const layer_scope = () => {
  return scopedContext(core_map(scope => mjs_Context_make(Scope_Tag, scope))(acquireRelease(scopeMake(), (scope, exit) => scope.close(exit))));
};
/** @internal */
const layer_scoped = (tag, effect) => {
  return scopedContext(core_map(effect, service => mjs_Context_make(tag, service)));
};
/** @internal */
const scopedDiscard = effect => {
  return scopedContext(core_as(mjs_Context_empty())(effect));
};
/** @internal */
const scopedContext = effect => {
  const scoped = Object.create(layer_proto);
  scoped._tag = OP_SCOPED;
  scoped.effect = effect;
  return scoped;
};
/** @internal */
const layer_service = tag => {
  return layer_fromEffect(tag, service(tag));
};
/** @internal */
const layer_succeed = (tag, resource) => {
  return fromEffectContext(core_succeed(mjs_Context_make(tag, resource)));
};
/** @internal */
const succeedContext = context => {
  return fromEffectContext(core_succeed(context));
};
/** @internal */
const layer_suspend = evaluate => {
  const suspend = Object.create(layer_proto);
  suspend._tag = OP_SUSPEND;
  suspend.evaluate = evaluate;
  return suspend;
};
/** @internal */
const layer_sync = (tag, evaluate) => {
  return fromEffectContext(core_sync(() => mjs_Context_make(tag, evaluate())));
};
/** @internal */
const syncContext = evaluate => {
  return fromEffectContext(core_sync(evaluate));
};
/** @internal */
const layer_tap = /*#__PURE__*/untracedDual(2, restore => (self, f) => layer_flatMap(self, context => fromEffectContext(core_as(restore(f)(context), context))));
/** @internal */
const layer_tapError = /*#__PURE__*/untracedDual(2, restore => (self, f) => layer_catchAll(self, e => fromEffectContext(core_flatMap(restore(f)(e), () => core_fail(e)))));
/** @internal */
const layer_tapErrorCause = /*#__PURE__*/untracedDual(2, restore => (self, f) => layer_catchAllCause(self, cause => fromEffectContext(core_flatMap(restore(f)(cause), () => failCause(cause)))));
/** @internal */
const toRuntime = self => {
  return core_flatMap(context => provideContext(context)(runtime_runtime()))(scopeWith(scope => buildWithScope(scope)(self)));
};
/** @internal */
const layer_use = /*#__PURE__*/dual(2, (that, self) => layer_suspend(() => {
  const provideTo = Object.create(layer_proto);
  provideTo._tag = OP_PROVIDE_TO;
  provideTo.first = Object.create(layer_proto, {
    _tag: {
      value: layer_OP_ZIP_WITH,
      enumerable: true
    },
    first: {
      value: layer_context(),
      enumerable: true
    },
    second: {
      value: self
    },
    zipK: {
      value: (a, b) => mjs_Context_merge(b)(a)
    }
  });
  provideTo.second = that;
  return provideTo;
}));
/** @internal */
const useMerge = /*#__PURE__*/dual(2, (that, self) => {
  const zipWith = Object.create(layer_proto);
  zipWith._tag = layer_OP_ZIP_WITH;
  zipWith.first = self;
  zipWith.second = provide(that)(self);
  zipWith.zipK = (a, b) => {
    return mjs_Context_merge(b)(a);
  };
  return zipWith;
});
/** @internal */
const layer_zipWithPar = /*#__PURE__*/untracedDual(3, restore => (self, that, f) => layer_suspend(() => {
  const zipWithPar = Object.create(layer_proto);
  zipWithPar._tag = OP_ZIP_WITH_PAR;
  zipWithPar.first = self;
  zipWithPar.second = that;
  zipWithPar.zipK = restore(f);
  return zipWithPar;
}));
// circular with Effect
/** @internal */
const provideLayer = /*#__PURE__*/dualWithTrace(2, trace => (self, layer) => acquireUseRelease(scopeMake(), scope => core_flatMap(buildWithScope(layer, scope), context => provideContext(self, context)), (scope, exit) => scopeClose(scope, exit)).traced(trace));
/** @internal */
const provideSomeLayer = /*#__PURE__*/dualWithTrace(2, trace => (self, layer) =>
// @ts-expect-error
provideLayer(self, layer_merge(layer)(layer_context())).traced(trace));
/** @internal */
const toLayer = /*#__PURE__*/dual(2, (self, tag) => layer_fromEffect(tag, self));
/** @internal */
const toLayerScoped = /*#__PURE__*/dual(2, (self, tag) => layer_scoped(tag, self));
//# sourceMappingURL=layer.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Layer.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const Layer_LayerTypeId = LayerTypeId;
/**
 * Returns `true` if the specified value is a `Layer`, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Layer_isLayer = isLayer;
/**
 * Returns `true` if the specified `Layer` is a fresh version that will not be
 * shared, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
const Layer_isFresh = isFresh;
/**
 * Builds a layer into a scoped value.
 *
 * @since 1.0.0
 * @category destructors
 */
const Layer_build = build;
/**
 * Builds a layer into an `Effect` value. Any resources associated with this
 * layer will be released when the specified scope is closed unless their scope
 * has been extended. This allows building layers where the lifetime of some of
 * the services output by the layer exceed the lifetime of the effect the
 * layer is provided to.
 *
 * @since 1.0.0
 * @category destructors
 */
const Layer_buildWithScope = buildWithScope;
/**
 * Recovers from all errors.
 *
 * @since 1.0.0
 * @category error handling
 */
const Layer_catchAll = layer_catchAll;
/**
 * Recovers from all errors.
 *
 * @since 1.0.0
 * @category error handling
 */
const Layer_catchAllCause = layer_catchAllCause;
/**
 * Constructs a `Layer` that passes along the specified context as an
 * output.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_context = layer_context;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_die = layer_die;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_dieSync = layer_dieSync;
/**
 * Replaces the layer's output with `void` and includes the layer only for its
 * side-effects.
 *
 * @since 1.0.0
 * @category mapping
 */
const Layer_discard = discard;
/**
 * Constructs a layer from the specified effect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_effect = layer_fromEffect;
/**
 * Constructs a layer from the specified effect discarding it's output.
 *
 * @since 1.0.0
 * @category constructors
 */
const effectDiscard = fromEffectDiscard;
/**
 * Constructs a layer from the specified effect, which must return one or more
 * services.
 *
 * @since 1.0.0
 * @category constructors
 */
const effectContext = fromEffectContext;
/**
 * Extends the scope of this layer, returning a new layer that when provided
 * to an effect will not immediately release its associated resources when
 * that effect completes execution but instead when the scope the resulting
 * effect depends on is closed.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_extendScope = extendScope;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_fail = layer_fail;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_failSync = layer_failSync;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_failCause = layer_failCause;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_failCauseSync = layer_failCauseSync;
/**
 * Constructs a layer dynamically based on the output of this layer.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Layer_flatMap = layer_flatMap;
/**
 * Flattens layers nested in the context of an effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Layer_flatten = layer_flatten;
/**
 * Creates a fresh version of this layer that will not be shared.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_fresh = fresh;
const Layer_fromFunction = layer_fromFunction;

/**
 * Builds this layer and uses it until it is interrupted. This is useful when
 * your entire application is a layer, such as an HTTP server.
 *
 * @since 1.0.0
 * @category conversions
 */
const Layer_launch = launch;
/**
 * Returns a new layer whose output is mapped by the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Layer_map = layer_map;
/**
 * Returns a layer with its error channel mapped using the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Layer_mapError = layer_mapError;
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 1.0.0
 * @category folding
 */
const Layer_matchLayer = matchLayer;
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 1.0.0
 * @category folding
 */
const Layer_matchCauseLayer = matchCauseLayer;
/**
 * Returns a scoped effect that, if evaluated, will return the lazily computed
 * result of this layer.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_memoize = layer_memoize;
/**
 * Combines this layer with the specified layer, producing a new layer that
 * has the inputs and outputs of both.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_merge = layer_merge;
/**
 * Merges all the layers together in parallel.
 *
 * @since 1.0.0
 * @category zipping
 */
const Layer_mergeAll = layer_mergeAll;
/**
 * Translates effect failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the layer.
 *
 * @since 1.0.0
 * @category error handling
 */
const Layer_orDie = layer_orDie;
/**
 * Executes this layer and returns its output, if it succeeds, but otherwise
 * executes the specified layer.
 *
 * @since 1.0.0
 * @category error handling
 */
const Layer_orElse = layer_orElse;
/**
 * Returns a new layer that produces the outputs of this layer but also
 * passes through the inputs.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_passthrough = layer_passthrough;
/**
 * Projects out part of one of the services output by this layer using the
 * specified function.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_project = project;
/**
 * Feeds the output services of this builder into the input of the specified
 * builder, resulting in a new builder with the inputs of this builder as
 * well as any leftover inputs, and the outputs of the specified builder.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_provide = provide;
/**
 * Feeds the output services of this layer into the input of the specified
 * layer, resulting in a new layer with the inputs of this layer, and the
 * outputs of both layers.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_provideMerge = provideMerge;
/**
 * Retries constructing this layer according to the specified schedule.
 *
 * @since 1.0.0
 * @category retrying
 */
const Layer_retry = retry;
/**
 * A layer that constructs a scope and closes it when the workflow the layer
 * is provided to completes execution, whether by success, failure, or
 * interruption. This can be used to close a scope when providing a layer to a
 * workflow.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_scope = layer_scope;
/**
 * Constructs a layer from the specified scoped effect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_scoped = layer_scoped;
/**
 * Constructs a layer from the specified scoped effect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_scopedDiscard = scopedDiscard;
/**
 * Constructs a layer from the specified scoped effect, which must return one
 * or more services.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_scopedContext = scopedContext;
/**
 * Constructs a layer that accesses and returns the specified service from the
 * context.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_service = layer_service;
/**
 * Constructs a layer from the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_succeed = layer_succeed;
/**
 * Constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_succeedContext = succeedContext;
/**
 * Lazily constructs a layer. This is useful to avoid infinite recursion when
 * creating layers that refer to themselves.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_suspend = layer_suspend;
/**
 * Lazily constructs a layer from the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_sync = layer_sync;
/**
 * Lazily constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 1.0.0
 * @category constructors
 */
const Layer_syncContext = syncContext;
/**
 * Performs the specified effect if this layer succeeds.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Layer_tap = layer_tap;
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Layer_tapError = layer_tapError;
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Layer_tapErrorCause = layer_tapErrorCause;
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 1.0.0
 * @category conversions
 */
const Layer_toRuntime = toRuntime;
/**
 * Feeds the output services of this builder into the input of the specified
 * builder, resulting in a new builder with the inputs of this builder as
 * well as any leftover inputs, and the outputs of the specified builder.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_use = layer_use;
/**
 * Feeds the output services of this layer into the input of the specified
 * layer, resulting in a new layer with the inputs of this layer, and the
 * outputs of both layers.
 *
 * @since 1.0.0
 * @category mutations
 */
const Layer_useMerge = useMerge;
/**
 * Combines this layer the specified layer, producing a new layer that has the
 * inputs of both, and the outputs of both combined using the specified
 * function.
 *
 * @since 1.0.0
 * @category zipping
 */
const Layer_zipWithPar = layer_zipWithPar;
//# sourceMappingURL=Layer.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/internal_effect_untraced/layer/circular.mjs








// circular with Logger
/** @internal */
const minimumLogLevel = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => level => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScoped(fiberRuntime.currentMinimumLogLevel, level)))));
/** @internal */
const withMinimumLogLevel = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dualWithTrace(2, trace => (self, level) => core.fiberRefLocally(fiberRuntime.currentMinimumLogLevel, level)(self).traced(trace))));
/** @internal */
const addLogger = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.methodWithTrace(trace => logger => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentLoggers, HashSet.add(logger)).traced(trace)))));
/** @internal */
const removeLogger = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => logger => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentLoggers, HashSet.remove(logger))))));
/** @internal */
const replaceLogger = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.dual(2, (logger, that) => layer.flatMap(removeLogger(logger), () => addLogger(that)))));
/** @internal */
const addSupervisor = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => supervisor => layer.scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(fiberRuntime.currentSupervisor, current => new _supervisor.Zip(current, supervisor))))));
/** @internal */
const enableCooperativeYielding = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.enable(runtimeFlags.CooperativeYielding))))));
/** @internal */
const enableInterruption = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.enable(runtimeFlags.Interruption))))));
/** @internal */
const enableOpSupervision = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.enable(runtimeFlags.OpSupervision))))));
/** @internal */
const enableRuntimeMetrics = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.enable(runtimeFlags.RuntimeMetrics))))));
/** @internal */
const enableWindDown = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.enable(runtimeFlags.WindDown))))));
/** @internal */
const disableCooperativeYielding = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.disable(runtimeFlags.CooperativeYielding))))));
/** @internal */
const disableInterruption = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.disable(runtimeFlags.Interruption))))));
/** @internal */
const disableOpSupervision = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.disable(runtimeFlags.OpSupervision))))));
/** @internal */
const disableRuntimeMetrics = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.disable(runtimeFlags.RuntimeMetrics))))));
/** @internal */
const disableWindDown = /*#__PURE__*/(/* unused pure expression or super */ null && (Debug.untracedMethod(() => () => layer.scopedDiscard(fiberRuntime.withRuntimeFlagsScoped(runtimeFlagsPatch.disable(runtimeFlags.WindDown))))));
/** @internal */
const setConfigProvider = /*#__PURE__*/untracedMethod(() => configProvider => scopedDiscard(withConfigProviderScoped(configProvider)));
//# sourceMappingURL=circular.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Effect.mjs









/**
 * @since 1.0.0
 * @category symbols
 */
const Effect_EffectTypeId = EffectTypeId;
/**
 * This function returns `true` if the specified value is an `Effect` value,
 * `false` otherwise.
 *
 * This function can be useful for checking the type of a value before
 * attempting to operate on it as an `Effect` value. For example, you could
 * use `isEffect` to check the type of a value before using it as an
 * argument to a function that expects an `Effect` value.
 *
 * @param u - The value to check for being an `Effect` value.
 *
 * @returns `true` if the specified value is an `Effect` value, `false`
 * otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
const Effect_isEffect = isEffect;
/**
 * This function adds a finalizer to the scope of the calling `Effect` value.
 * The finalizer is guaranteed to be run when the scope is closed, and it may
 * depend on the `Exit` value that the scope is closed with.
 *
 * @param finalizer - The finalizer to add to the scope of the calling
 * `Effect` value. This function must take an `Exit` value as its parameter,
 * and return a new `Effect` value.
 *
 * @returns A new `Effect` value that represents the addition of the finalizer
 * to the scope of the calling `Effect` value.
 *
 * @since 1.0.0
 * @category finalization
 */
const Effect_addFinalizer = addFinalizer;
/**
 * This function submerges the error case of an `Either` value into an
 * `Effect` value. It is the inverse operation of `either`.
 *
 * If the `Either` value is a `Right` value, then the `Effect` value will
 * succeed with the value contained in the `Right`. If the `Either` value
 * is a `Left` value, then the `Effect` value will fail with the error
 * contained in the `Left`.
 *
 * @param self - The `Effect` value that contains an `Either` value as its
 * result.
 *
 * @returns A new `Effect` value that has the same context as the original
 * `Effect` value, but has the error case of the `Either` value submerged
 * into it.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_absolve = absolve;
/**
 * This function transforms an `Effect` value that may fail with a defect
 * into a new `Effect` value that may fail with an unknown error.
 *
 * The resulting `Effect` value will have the same context and success
 * type as the original `Effect` value, but it will have a more general
 * error type that allows it to fail with any type of error.
 *
 * @param self - The `Effect` value to transform.
 *
 * @returns A new `Effect` value that has the same context and success
 * type as the original `Effect` value, but a more general error type that
 * allows it to fail with any type of error.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_absorb = absorb;
/**
 * This function takes a mapping function `f` and returns a new function
 * that transforms an `Effect` value that may fail with a defect into a new
 * `Effect` value that may fail with an unknown error.
 *
 * If the original `Effect` value fails with a known error, then the
 * mapping function `f` will be applied to the error to convert it to an
 * unknown structure.
 *
 * The resulting `Effect` value will have the same context and success
 * type as the original `Effect` value, but it will have a more general
 * error type that allows it to fail with any type of error.
 *
 * @param f - The mapping function to apply to known errors. This function
 * must take an error of type `E` and return an unknown structure.
 *
 * @returns A new function that transforms an `Effect` value that may fail
 * with a defect into a new `Effect` value that may fail with an unknown
 * error.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_absorbWith = absorbWith;
/**
 * This function constructs a scoped resource from an `acquire` and `release`
 * `Effect` value.
 *
 * If the `acquire` `Effect` value successfully completes execution, then the
 * `release` `Effect` value will be added to the finalizers associated with the
 * scope of this `Effect` value, and it is guaranteed to be run when the scope
 * is closed.
 *
 * The `acquire` and `release` `Effect` values will be run uninterruptibly.
 * Additionally, the `release` `Effect` value may depend on the `Exit` value
 * specified when the scope is closed.
 *
 * @param acquire - The `Effect` value that acquires the resource.
 * @param release - The `Effect` value that releases the resource.
 *
 * @returns A new `Effect` value that represents the scoped resource.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_acquireRelease = acquireRelease;
/**
 * This function is a variant of `acquireRelease` that allows the `acquire`
 * `Effect` value to be interruptible.
 *
 * Since the `acquire` `Effect` value could be interrupted after partially
 * acquiring resources, the `release` `Effect` value is not allowed to access
 * the resource produced by `acquire` and must independently determine what
 * finalization, if any, needs to be performed (e.g. by examining in memory
 * state).
 *
 * Additionally, the `release` `Effect` value may depend on the `Exit` value
 * specified when the scope is closed.
 *
 * @param acquire - The interruptible `Effect` value that acquires the
 * resource.
 * @param release - The `Effect` value that releases the resource. This function
 * must take an `Exit` value as its parameter, and return a new `Effect` value.
 *
 * @returns A new `Effect` value that represents the interruptible scoped
 * resource.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_acquireReleaseInterruptible = acquireReleaseInterruptible;
/**
 * This function is used to ensure that an `Effect` value that represents the
 * acquisition of a resource (for example, opening a file, launching a thread,
 * etc.) will not be interrupted, and that the resource will always be released
 * when the `Effect` value completes execution.
 *
 * `acquireUseRelease` does the following:
 *
 *   1. Ensures that the `Effect` value that acquires the resource will not be
 *      interrupted. Note that acquisition may still fail due to internal
 *      reasons (such as an uncaught exception).
 *   2. Ensures that the `release` `Effect` value will not be interrupted,
 *      and will be executed as long as the acquisition `Effect` value
 *      successfully acquires the resource.
 *
 * During the time period between the acquisition and release of the resource,
 * the `use` `Effect` value will be executed.
 *
 * If the `release` `Effect` value fails, then the entire `Effect` value will
 * fail, even if the `use` `Effect` value succeeds. If this fail-fast behavior
 * is not desired, errors produced by the `release` `Effect` value can be caught
 * and ignored.
 *
 * @param acquire - The `Effect` value that acquires the resource.
 * @param use - The `Effect` value that is executed between the acquisition
 * and release of the resource.
 * @param release - The `Effect` value that releases the resource.
 *
 * @returns A new `Effect` value that represents the acquisition, use, and
 * release of the resource.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_acquireUseRelease = acquireUseRelease;
/**
 * This function checks if any fibers are attempting to interrupt the current
 * fiber, and if so, performs self-interruption.
 *
 * Note that this allows for interruption to occur in uninterruptible regions.
 *
 * @returns A new `Effect` value that represents the check for interruption
 * and the potential self-interruption of the current fiber.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_allowInterrupt = allowInterrupt;
/**
 * This function maps the success value of an `Effect` value to a specified
 * constant value.
 *
 * @param value - The constant value that the success value of the `Effect`
 * value will be mapped to.
 * @param self - The `Effect` value whose success value will be mapped to the
 * specified constant value.
 *
 * @returns A new `Effect` value that represents the mapping of the success
 * value of the original `Effect` value to the specified constant value.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_as = core_as;
/**
 * This function maps the success value of an `Effect` value to a `Left` value
 * in an `Either` value.
 *
 * @param self - The `Effect` value whose success value will be mapped to a
 * `Left` value in an `Either` value.
 *
 * @returns A new `Effect` value that represents the mapping of the success
 * value of the original `Effect` value to a `Left` value in an `Either`
 * value.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_asLeft = asLeft;
/**
 * This function maps the error value of an `Effect` value to a `Left` value
 * in an `Either` value.
 *
 * @param self - The `Effect` value whose error value will be mapped to a
 * `Left` value in an `Either` value.
 *
 * @returns A new `Effect` value that represents the mapping of the error
 * value of the original `Effect` value to a `Left` value in an `Either`
 * value.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_asLeftError = asLeftError;
/**
 * This function maps the success value of an `Effect` value to a `Right` value
 * in an `Either` value.
 *
 * @param self - The `Effect` value whose success value will be mapped to a
 * `Right` value in an `Either` value.
 *
 * @returns A new `Effect` value that represents the mapping of the success
 * value of the original `Effect` value to a `Right` value in an `Either`
 * value.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_asRight = asRight;
/**
 * This function maps the error value of an `Effect` value to a `Right` value
 * in an `Either` value.
 *
 * @param self - The `Effect` value whose error value will be mapped to a
 * `Right` value in an `Either` value.
 *
 * @returns A new `Effect` value that represents the mapping of the error
 * value of the original `Effect` value to a `Right` value in an `Either`
 * value.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_asRightError = asRightError;
/**
 * This function maps the success value of an `Effect` value to a `Some` value
 * in an `Option` value. If the original `Effect` value fails, the returned
 * `Effect` value will also fail.
 *
 * @param self - The `Effect` value whose success value will be mapped to a
 * `Some` value in an `Option` value.
 *
 * @returns A new `Effect` value that represents the mapping of the success
 * value of the original `Effect` value to a `Some` value in an `Option`
 * value. The returned `Effect` value may fail if the original `Effect` value
 * fails.
 *
 * @category mapping
 * @since 1.0.0
 */
const Effect_asSome = asSome;
/**
 * This function maps the error value of an `Effect` value to a `Some` value
 * in an `Option` value. If the original `Effect` value succeeds, the returned
 * `Effect` value will also succeed.
 *
 * @param self - The `Effect` value whose error value will be mapped to a
 * `Some` value in an `Option` value.
 *
 * @returns A new `Effect` value that represents the mapping of the error
 * value of the original `Effect` value to a `Some` value in an `Option`
 * value. The returned `Effect` value may succeed if the original `Effect`
 * value succeeds.
 *
 * @category mapping
 * @since 1.0.0
 */
const Effect_asSomeError = asSomeError;
/**
 * This function maps the success value of an `Effect` value to `void`. If the
 * original `Effect` value succeeds, the returned `Effect` value will also
 * succeed. If the original `Effect` value fails, the returned `Effect` value
 * will fail with the same error.
 *
 * @param self - The `Effect` value whose success value will be mapped to `void`.
 *
 * @returns A new `Effect` value that represents the mapping of the success
 * value of the original `Effect` value to `void`.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_asUnit = core_asUnit;
/**
 * Imports an asynchronous side-effect into a pure `Effect` value. See
 * `asyncMaybe` for the more expressive variant of this function that can
 * return a value synchronously.
 *
 * The callback function `Effect<R, E, A> => void` must be called at most once.
 *
 * The `FiberId` of the fiber that may complete the async callback may be
 * provided to allow for better diagnostics.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_async = core_async;
/**
 * Converts an asynchronous, callback-style API into an `Effect`, which will
 * be executed asynchronously.
 *
 * With this variant, the registration function may return a an `Effect`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_asyncEffect = asyncEffect;
/**
 * Imports an asynchronous effect into a pure `Effect` value, possibly returning
 * the value synchronously.
 *
 * If the register function returns a value synchronously, then the callback
 * function `Effect<R, E, A> => void` must not be called. Otherwise the callback
 * function must be called at most once.
 *
 * The `FiberId` of the fiber that may complete the async callback may be
 * provided to allow for better diagnostics.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_asyncOption = asyncOption;
/**
 * Imports an asynchronous side-effect into an effect. It has the option of
 * returning the value synchronously, which is useful in cases where it cannot
 * be determined if the effect is synchronous or asynchronous until the register
 * is actually executed. It also has the option of returning a canceler,
 * which will be used by the runtime to cancel the asynchronous effect if the fiber
 * executing the effect is interrupted.
 *
 * If the register function returns a value synchronously, then the callback
 * function `Effect<R, E, A> => void` must not be called. Otherwise the callback
 * function must be called at most once.
 *
 * The `FiberId` of the fiber that may complete the async callback may be
 * provided to allow for better diagnostics.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_asyncInterruptEither = asyncInterruptEither;
/**
 * Imports an asynchronous side-effect into an effect allowing control of interruption.
 *
 * The `FiberId` of the fiber that may complete the async callback may be
 * provided to allow for better diagnostics.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_asyncInterrupt = asyncInterrupt;
/**
 * Imports a synchronous side-effect into a pure `Effect` value, translating any
 * thrown exceptions into typed failed effects creating with `Effect.fail`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_attempt = attempt;
/**
 * Returns a new effect that will not succeed with its value before first
 * waiting for the end of all child fibers forked by the effect.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_awaitAllChildren = awaitAllChildren;
/**
 * Returns an effect that, if evaluated, will return the cached result of this
 * effect. Cached results will expire after `timeToLive` duration.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_cached = cached;
/**
 * Returns an effect that, if evaluated, will return the cached result of this
 * effect. Cached results will expire after `timeToLive` duration. In
 * addition, returns an effect that can be used to invalidate the current
 * cached value before the `timeToLive` duration expires.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_cachedInvalidate = cachedInvalidate;
const Effect_catch = _catch;

/**
 * Recovers from all recoverable errors.
 *
 * **Note**: that `Effect.catchAll` will not recover from unrecoverable defects. To
 * recover from both recoverable and unrecoverable errors use
 * `Effect.catchAllCause`.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchAll = core_catchAll;
/**
 * Recovers from both recoverable and unrecoverable errors.
 *
 * See `absorb`, `sandbox`, `mapErrorCause` for other functions that can
 * recover from defects.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchAllCause = catchAllCause;
/**
 * Recovers from all defects with provided function.
 *
 * **WARNING**: There is no sensible way to recover from defects. This
 * method should be used only at the boundary between Effect and an external
 * system, to transmit information on a defect for diagnostic or explanatory
 * purposes.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchAllDefect = catchAllDefect;
/**
 * Recovers from some or all of the error cases.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchSome = catchSome;
/**
 * Recovers from some or all of the error cases with provided cause.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchSomeCause = catchSomeCause;
/**
 * Recovers from some or all of the defects with provided partial function.
 *
 * **WARNING**: There is no sensible way to recover from defects. This
 * method should be used only at the boundary between Effect and an external
 * system, to transmit information on a defect for diagnostic or explanatory
 * purposes.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchSomeDefect = catchSomeDefect;
/**
 * Recovers from specified tagged error.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_catchTag = catchTag;
/**
 * Returns an effect that succeeds with the cause of failure of this effect,
 * or `Cause.empty` if the effect did succeed.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_cause = cause;
/**
 * Checks the interrupt status, and produces the effect returned by the
 * specified callback.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_checkInterruptible = checkInterruptible;
/**
 * Retreives the `Clock` service from the context
 *
 * @since 1.0.0
 * @category context
 */
const Effect_clock = clock;
/**
 * Retreives the `Clock` service from the context and provides it to the
 * specified effectful function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_clockWith = effect_clockWith;
/**
 * Uses the default config provider to load the specified config, or fail with
 * an error of type Config.Error.
 *
 * @since 1.0.0
 * @category config
 */
const Effect_config = config;
/**
 * Retrieves the default config provider, and passes it to the specified
 * function, which may return an effect that uses the provider to perform some
 * work or compute some value.
 *
 * @since 1.0.0
 * @category config
 */
const Effect_configProviderWith = configProviderWith;
/**
 * Evaluate each effect in the structure from left to right, collecting the
 * the successful values and discarding the empty cases. For a parallel version, see `collectPar`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collect = collect;
/**
 * Evaluate each effect in the structure from left to right, and collect the
 * results. For a parallel version, see `collectAllPar`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAll = effect_collectAll;
/**
 * Evaluate each effect in the structure from left to right, and discard the
 * results. For a parallel version, see `collectAllParDiscard`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllDiscard = collectAllDiscard;
/**
 * Evaluate each effect in the structure in parallel, and collect the results.
 * For a sequential version, see `collectAll`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllPar = fiberRuntime_collectAllPar;
/**
 * Evaluate each effect in the structure in parallel, and discard the results.
 * For a sequential version, see `collectAllDiscard`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllParDiscard = collectAllParDiscard;
/**
 * Evaluate each effect in the structure with `collectAll`, and collect the
 * results with given partial function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllWith = collectAllWith;
/**
 * Evaluate each effect in the structure with `collectAllPar`, and collect
 * the results with given partial function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllWithPar = collectAllWithPar;
/**
 * Returns a filtered, mapped subset of the elements of the iterable based on a
 * partial function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllWithEffect = collectAllWithEffect;
/**
 * Evaluate and run each effect in the structure and collect the results,
 * discarding results from failed effects.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllSuccesses = collectAllSuccesses;
/**
 * Evaluate and run each effect in the structure in parallel and collect the
 * results, discarding results from failed effects.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectAllSuccessesPar = collectAllSuccessesPar;
/**
 * Collects the first element of the `Collection<A?` for which the effectual
 * function `f` returns `Some`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectFirst = collectFirst;
/**
 * Evaluate each effect in the structure in parallel, collecting the successful
 * values and discarding the empty cases.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectPar = collectPar;
/**
 * Transforms all elements of the chunk for as long as the specified partial
 * function is defined.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_collectWhile = collectWhile;
/**
 * Evaluate the predicate, return the given `A` as success if predicate returns
 * true, and the given `E` as error otherwise
 *
 * For effectful conditionals, see `ifEffect`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_cond = cond;
/**
 * @since 1.0.0
 * @category context
 */
const Effect_context = context;
/**
 * Accesses the context of the effect.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_contextWith = contextWith;
/**
 * Effectually accesses the context of the effect.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_contextWithEffect = contextWithEffect;
/**
 * Fail with the specifed `error` if the supplied partial function does not
 * match, otherwise continue with the returned value.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_continueOrFail = continueOrFail;
/**
 * Fail with the specifed `error` if the supplied partial function does not
 * match, otherwise continue with the returned value.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_continueOrFailEffect = continueOrFailEffect;
/**
 * Returns a new workflow that will not supervise any fibers forked by this
 * workflow.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_daemonChildren = daemonChildren;
/**
 * Returns an effect that is delayed from this effect by the specified
 * `Duration`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_delay = delay;
/**
 * Constructs an effect with information about the current `Fiber`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_descriptor = descriptor;
/**
 * Constructs an effect based on information about the current `Fiber`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_descriptorWith = descriptorWith;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_die = core_die;
/**
 * Returns an effect that dies with a `RuntimeException` having the specified
 * text message. This method can be used for terminating a fiber because a
 * defect has been detected in the code.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_dieMessage = dieMessage;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_dieSync = dieSync;
/**
 * Returns an effect whose interruption will be disconnected from the
 * fiber's own interruption, being performed in the background without
 * slowing down the fiber's interruption.
 *
 * This method is useful to create "fast interrupting" effects. For
 * example, if you call this on a bracketed effect, then even if the
 * effect is "stuck" in acquire or release, its interruption will return
 * immediately, while the acquire / release are performed in the
 * background.
 *
 * See timeout and race for other applications.
 *
 * @since 1.0.0
 * @category interruption
 */
const Effect_disconnect = disconnect;
/**
 * Returns a new workflow that executes this one and captures the changes in
 * `FiberRef` values.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_diffFiberRefs = diffFiberRefs;
/**
 * Binds an effectful value in a `do` scope
 *
 * @since 1.0.0
 * @category do notation
 */
const Effect_bind = effect_bind;
/**
 * Like bind for values
 *
 * @since 1.0.0
 * @category do notation
 */
const Effect_bindValue = bindValue;
/**
 * @since 1.0.0
 * @category do notation
 */
const Effect_Do = effect_Do;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_done = core_done;
/**
 * Drops all elements until the effectful predicate returns true.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_dropUntil = dropUntil;
/**
 * Drops all elements so long as the predicate returns true.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_dropWhile = effect_dropWhile;
/**
 * Returns an effect whose failure and success have been lifted into an
 * `Either`. The resulting effect cannot fail, because the failure case has
 * been exposed as part of the `Either` success case.
 *
 * This method is useful for recovering from effects that may fail.
 *
 * The error parameter of the returned `Effect` is `never`, since it is
 * guaranteed the effect does not model failure.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_either = core_either;
/**
 * Returns an effect that, if this effect _starts_ execution, then the
 * specified `finalizer` is guaranteed to be executed, whether this effect
 * succeeds, fails, or is interrupted.
 *
 * For use cases that need access to the effect's result, see `onExit`.
 *
 * Finalizers offer very powerful guarantees, but they are low-level, and
 * should generally not be used for releasing resources. For higher-level
 * logic built on `ensuring`, see the `acquireRelease` family of methods.
 *
 * @since 1.0.0
 * @category finalization
 */
const Effect_ensuring = circular_ensuring;
/**
 * Acts on the children of this fiber (collected into a single fiber),
 * guaranteeing the specified callback will be invoked, whether or not this
 * effect succeeds.
 *
 * @since 1.0.0
 * @category finalization
 */
const Effect_ensuringChild = ensuringChild;
/**
 * Acts on the children of this fiber, guaranteeing the specified callback
 * will be invoked, whether or not this effect succeeds.
 *
 * @since 1.0.0
 * @category finalization
 */
const Effect_ensuringChildren = ensuringChildren;
/**
 * Returns an effect that ignores errors and runs repeatedly until it
 * eventually succeeds.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_eventually = eventually;
/**
 * Determines whether any element of the `Iterable<A>` satisfies the effectual
 * predicate `f`, working sequentially.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_exists = effect_exists;
/**
 * Determines whether any element of the `Iterable<A>` satisfies the effectual
 * predicate `f`, working in parallel. Interrupts all effects on any failure or
 * finding an element that satisfies the predicate.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_existsPar = existsPar;
/**
 * @since 1.0.0
 * @category utilities
 */
const exit = core_exit;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_fail = core_fail;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_failSync = failSync;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_failCause = failCause;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_failCauseSync = failCauseSync;
/**
 * @since 1.0.0
 * @category utilities
 */
const Effect_fiberId = fiberId;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_fiberIdWith = fiberIdWith;
/**
 * Filters the collection using the specified effectful predicate.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filter = effect_filter;
/**
 * Filters the collection in parallel using the specified effectual predicate.
 * See `filter` for a sequential version of it.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterPar = filterPar;
/**
 * Filters the collection using the specified effectual predicate, removing
 * all elements that satisfy the predicate.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterNot = filterNot;
/**
 * Filters the collection in parallel using the specified effectual predicate.
 * See `filterNot` for a sequential version.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterNotPar = filterNotPar;
/**
 * Filter the specified effect with the provided function, dying with specified
 * defect if the predicate fails.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterOrDie = filterOrDie;
/**
 * Filter the specified effect with the provided function, dying with specified
 * message if the predicate fails.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterOrDieMessage = filterOrDieMessage;
/**
 * Filters the specified effect with the provided function returning the value
 * of the effect if it is successful, otherwise returns the value of `orElse`.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterOrElse = filterOrElse;
/**
 * Filters the specified effect with the provided function returning the value
 * of the effect if it is successful, otherwise returns the value of `orElse`.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterOrElseWith = filterOrElseWith;
/**
 * Filter the specified effect with the provided function, failing with specified
 * error if the predicate fails.
 *
 * @since 1.0.0
 * @category filtering
 */
const Effect_filterOrFail = filterOrFail;
/**
 * Returns the first element that satisfies the effectful predicate.
 *
 * @since 1.0.0
 * @category elements
 */
const Effect_find = effect_find;
/**
 * This function takes an iterable of `Effect` values and returns a new
 * `Effect` value that represents the first `Effect` value in the iterable
 * that succeeds. If all of the `Effect` values in the iterable fail, then
 * the resulting `Effect` value will fail as well.
 *
 * This function is sequential, meaning that the `Effect` values in the
 * iterable will be executed in sequence, and the first one that succeeds
 * will determine the outcome of the resulting `Effect` value.
 *
 * @param effects - The iterable of `Effect` values to evaluate.
 *
 * @returns A new `Effect` value that represents the first successful
 * `Effect` value in the iterable, or a failed `Effect` value if all of the
 * `Effect` values in the iterable fail.
 *
 * @since 1.0.0
 * @category elements
 */
const Effect_firstSuccessOf = effect_firstSuccessOf;
/**
 * This function is a pipeable operator that maps over an `Effect` value,
 * flattening the result of the mapping function into a new `Effect` value.
 *
 * @param f - The mapping function to apply to the `Effect` value.
 * This function must return another `Effect` value.
 *
 * @returns A new `Effect` value that is the result of flattening the
 * mapped `Effect` value.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_flatMap = core_flatMap;
/**
 * @since 1.0.0
 * @category sequencing
 */
const Effect_flatten = core_flatten;
/**
 * Unwraps the optional error, defaulting to the provided value.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_flattenErrorOption = flattenErrorOption;
/**
 * Returns an effect that swaps the error/success cases. This allows you to
 * use all methods on the error channel, possibly before flipping back.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_flip = core_flip;
/**
 * Swaps the error/value parameters, applies the function `f` and flips the
 * parameters back
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_flipWith = flipWith;
/**
 * Determines whether all elements of the `Collection<A>` satisfies the effectual
 * predicate `f`.
 *
 * @since 1.0.0
 * @category elements
 */
const Effect_forAll = forAll;
/**
 * Returns a new effect that will pass the success value of this effect to the
 * provided callback. If this effect fails, then the failure will be ignored.
 *
 * @since 1.0.0
 * @category elements
 */
const Effect_forEachEffect = effect_forEachEffect;
/**
 * Applies the function `f` if the argument is non-empty and returns the
 * results in a new `Option<B>`.
 *
 * @since 1.0.0
 * @category elements
 */
const Effect_forEachOption = forEachOption;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_forEach = core_forEach;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_forEachDiscard = forEachDiscard;
/**
 * Applies the function `f` to each element of the `Collection<A>` and returns
 * the result in a new `Chunk<B>` using the specified execution strategy.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_forEachExec = forEachExec;
/**
 * Same as `forEach`, except that the function `f` is supplied
 * a second argument that corresponds to the index (starting from 0)
 * of the current element being iterated over.
 *
 * @since 1.0.0
 * @category traversing
 */
const Effect_forEachWithIndex = effect_forEachWithIndex;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_forEachPar = forEachPar;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_forEachParDiscard = forEachParDiscard;
/**
 * Same as `forEachPar`, except that the function `f` is supplied
 * a second argument that corresponds to the index (starting from 0)
 * of the current element being iterated over.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_forEachParWithIndex = forEachParWithIndex;
/**
 * Repeats this effect forever (until the first error).
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_forever = forever;
/**
 * Returns an effect that forks this effect into its own separate fiber,
 * returning the fiber immediately, without waiting for it to begin executing
 * the effect.
 *
 * You can use the `fork` method whenever you want to execute an effect in a
 * new fiber, concurrently and without "blocking" the fiber executing other
 * effects. Using fibers can be tricky, so instead of using this method
 * directly, consider other higher-level methods, such as `raceWith`,
 * `zipPar`, and so forth.
 *
 * The fiber returned by this method has methods to interrupt the fiber and to
 * wait for it to finish executing the effect. See `Fiber` for more
 * information.
 *
 * Whenever you use this method to launch a new fiber, the new fiber is
 * attached to the parent fiber's scope. This means when the parent fiber
 * terminates, the child fiber will be terminated as well, ensuring that no
 * fibers leak. This behavior is called "auto supervision", and if this
 * behavior is not desired, you may use the `forkDaemon` or `forkIn` methods.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_fork = fork;
/**
 * Forks the effect into a new fiber attached to the global scope. Because the
 * new fiber is attached to the global scope, when the fiber executing the
 * returned effect terminates, the forked fiber will continue running.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_forkDaemon = forkDaemon;
/**
 * Returns an effect that forks all of the specified values, and returns a
 * composite fiber that produces a list of their results, in order.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_forkAll = forkAll;
/**
 * Returns an effect that forks all of the specified values, and returns a
 * composite fiber that produces unit. This version is faster than `forkAll`
 * in cases where the results of the forked fibers are not needed.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_forkAllDiscard = forkAllDiscard;
/**
 * Forks the effect in the specified scope. The fiber will be interrupted
 * when the scope is closed.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_forkIn = forkIn;
/**
 * Forks the fiber in a `Scope`, interrupting it when the scope is closed.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_forkScoped = forkScoped;
/**
 * Like fork but handles an error with the provided handler.
 *
 * @since 1.0.0
 * @category supervision
 */
const Effect_forkWithErrorHandler = forkWithErrorHandler;
/**
 * Lifts an `Either<E, A>` into an `Effect<never, E, A>`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_fromEither = core_fromEither;
/**
 * Lifts an `Either<Cause<E>, A>` into an `Effect<never, E, A>`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_fromEitherCause = fromEitherCause;
/**
 * Creates an `Effect` value that represents the exit value of the specified
 * fiber.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_fromFiber = fromFiber;
/**
 * Creates an `Effect` value that represents the exit value of the specified
 * fiber.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_fromFiberEffect = fromFiberEffect;
/**
 * Lifts an `Option` into an `Effect` but preserves the error as an option in
 * the error channel, making it easier to compose in some scenarios.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_fromOption = core_fromOption;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_gen = gen;
/**
 * Returns a collection of all `FiberRef` values for the fiber running this
 * effect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_getFiberRefs = getFiberRefs;
/**
 * Lifts an `Option` into an `Effect`, if the option is not defined it fails
 * with `NoSuchElementException`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_getOrFail = getOrFail;
/**
 * Lifts an `Option` into a `IO`, if the option is not defined it fails with
 * `void`.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_getOrFailDiscard = getOrFailDiscard;
/**
 * Lifts an `Maybe` into an `Effect`. If the option is not defined, fail with
 * the specified `e` value.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_getOrFailWith = getOrFailWith;
/**
 * Returns a successful effect with the head of the collection if the collection
 * is non-empty, or fails with the error `None` if the collection is empty.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_head = effect_head;
/**
 * Runs `onTrue` if the result of `self` is `true` and `onFalse` otherwise.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_ifEffect = ifEffect;
/**
 * Returns a new effect that ignores the success or failure of this effect.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_ignore = ignore;
/**
 * Returns a new effect that ignores the success or failure of this effect,
 * but which also logs failures at the Debug level, just in case the failure
 * turns out to be important.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_ignoreLogged = ignoreLogged;
/**
 * Inherits values from all `FiberRef` instances into current fiber.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_inheritFiberRefs = inheritFiberRefs;
/**
 * @since 1.0.0
 * @category interruption
 */
const Effect_interrupt = core_interrupt;
/**
 * @since 1.0.0
 * @category interruption
 */
const Effect_interruptWith = interruptWith;
/**
 * @since 1.0.0
 * @category interruption
 */
const Effect_interruptible = core_interruptible;
/**
 * @since 1.0.0
 * @category interruption
 */
const Effect_interruptibleMask = interruptibleMask;
/**
 * @since 1.0.0
 * @category utilities
 */
const Effect_intoDeferred = intoDeferred;
/**
 * Returns `true` if this effect is a failure, `false` otherwise.
 *
 * @since 1.0.0
 * @category getter
 */
const Effect_isFailure = effect_isFailure;
/**
 * Returns `true` if this effect is a success, `false` otherwise.
 *
 * @since 1.0.0
 * @category getter
 */
const Effect_isSuccess = effect_isSuccess;
/**
 * Iterates with the specified effectual function. The moral equivalent of:
 *
 * ```ts
 * let s = initial
 *
 * while (cont(s)) {
 *   s = body(s)
 * }
 *
 * return s
 * ```
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_iterate = iterate;
/**
 * "Zooms in" on the value in the `Left` side of an `Either`, moving the
 * possibility that the value is a `Right` to the error channel.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_left = effect_left;
/**
 * Performs the specified operation while "zoomed in" on the `Left` case of an
 * `Either`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_leftWith = leftWith;
/**
 * Logs the specified message at the current log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_log = log;
/**
 * Logs the specified message at the debug log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logDebug = logDebug;
/**
 * Logs the specified cause at the debug log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logDebugCause = logDebugCause;
/**
 * Logs the specified message and cause at the debug log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logDebugCauseMessage = logDebugCauseMessage;
/**
 * Logs the specified message at the error log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logError = logError;
/**
 * Logs the specified cause at the error log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logErrorCause = logErrorCause;
/**
 * Logs the specified message and cause at the error log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logErrorCauseMessage = logErrorCauseMessage;
/**
 * Logs the specified message at the fatal log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logFatal = logFatal;
/**
 * Logs the specified cause at the fatal log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logFatalCause = logFatalCause;
/**
 * Logs the specified message and cause at the fatal log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logFatalCauseMessage = logFatalCauseMessage;
/**
 * Logs the specified message at the informational log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logInfo = logInfo;
/**
 * Logs the specified cause at the informational log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logInfoCause = logInfoCause;
/**
 * Logs the specified message and cause at the informational log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logInfoCauseMessage = logInfoCauseMessage;
/**
 * Logs the specified message at the warning log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logWarning = logWarning;
/**
 * Logs the specified cause at the warning log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logWarningCause = logWarningCause;
/**
 * Logs the specified message and cause at the warning log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logWarningCauseMessage = logWarningCauseMessage;
/**
 * Logs the specified message at the trace log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logTrace = logTrace;
/**
 * Logs the specified cause at the trace log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logTraceCause = logTraceCause;
/**
 * Logs the specified message and cause at the trace log level.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logTraceCauseMessage = logTraceCauseMessage;
/**
 * Adjusts the label for the current logging span.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logSpan = logSpan;
/**
 * Annotates each log in this effect with the specified log annotation.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logAnnotate = logAnnotate;
/**
 * Retrieves the log annotations associated with the current scope.
 *
 * @since 1.0.0
 * @category logging
 */
const Effect_logAnnotations = logAnnotations;
/**
 * Loops with the specified effectual function, collecting the results into a
 * list. The moral equivalent of:
 *
 * ```ts
 * let s  = initial
 * let as = [] as readonly A[]
 *
 * while (cont(s)) {
 *   as = [body(s), ...as]
 *   s  = inc(s)
 * }
 *
 * A.reverse(as)
 * ```
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_loop = loop;
/**
 * Loops with the specified effectual function purely for its effects. The
 * moral equivalent of:
 *
 * ```ts
 * let s = initial
 *
 * while (cont(s)) {
 *   body(s)
 *   s = inc(s)
 * }
 * ```
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_loopDiscard = loopDiscard;
/**
 * @since 1.0.0
 * @category mapping
 */
const Effect_map = core_map;
/**
 * Statefully and effectfully maps over the elements of this chunk to produce
 * new elements.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_mapAccum = effect_mapAccum;
/**
 * Returns an effect whose failure and success channels have been mapped by
 * the specified pair of functions, `f` and `g`.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_mapBoth = effect_mapBoth;
/**
 * Returns an effect with its error channel mapped using the specified function.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_mapError = mapError;
/**
 * Returns an effect with its full cause of failure mapped using the specified
 * function. This can be used to transform errors while preserving the
 * original structure of `Cause`.
 *
 * See `absorb`, `sandbox`, `catchAllCause` for other functions for dealing
 * with defects.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_mapErrorCause = effect_mapErrorCause;
/**
 * Returns an effect whose success is mapped by the specified side effecting
 * `f` function, translating any thrown exceptions into typed failed effects.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_mapTryCatch = mapTryCatch;
/**
 * Folds over the failure value or the success value to yield an effect that
 * does not fail, but succeeds with the value returned by the left or right
 * function passed to `match`.
 *
 * @since 1.0.0
 * @category folding
 */
const Effect_match = effect_match;
/**
 * @since 1.0.0
 * @category error handling
 */
const Effect_matchCause = matchCause;
/**
 * @since 1.0.0
 * @category error handling
 */
const Effect_matchCauseEffect = matchCauseEffect;
/**
 * @since 1.0.0
 * @category error handling
 */
const Effect_matchEffect = matchEffect;
/**
 * Returns an effect that, if evaluated, will return the lazily computed
 * result of this effect.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_memoize = memoize;
/**
 * Returns a memoized version of the specified effectual function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_memoizeFunction = memoizeFunction;
/**
 * Returns a new effect where the error channel has been merged into the
 * success channel to their common combined type.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_merge = effect_merge;
/**
 * Merges an `Iterable<Effect<R, E, A>>` to a single effect, working
 * sequentially.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_mergeAll = mergeAll;
/**
 * Merges an `Iterable<Effect<R, E, A>>` to a single effect, working in
 * parallel.
 *
 * Due to the parallel nature of this combinator, `f` must be both:
 * - commutative: `f(a, b) == f(b, a)`
 * - associative: `f(a, f(b, c)) == f(f(a, b), c)`
 *
 * It's unsafe to execute side effects inside `f`, as `f` may be executed
 * more than once for some of `in` elements during effect execution.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_mergeAllPar = mergeAllPar;
/**
 * Returns a new effect where boolean value of this effect is negated.
 *
 * @since 1.0.0
 * @category mapping
 */
const Effect_negate = negate;
/**
 * Returns a effect that will never produce anything. The moral equivalent of
 * `while(true) {}`, only without the wasted CPU cycles.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_never = never;
/**
 * Requires the option produced by this value to be `None`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_none = effect_none;
/**
 * Lifts an `Option` into a `Effect`. If the option is empty it succeeds with
 * `void`. If the option is defined it fails with the content.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_noneOrFail = noneOrFail;
/**
 * Lifts an `Option` into a `Effect`. If the option is empty it succeeds with
 * `undefined`. If the option is defined it fails with an error computed by
 * the specified function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_noneOrFailWith = noneOrFailWith;
/**
 * @since 1.0.0
 * @category mutations
 */
const Effect_onDone = onDone;
/**
 * @since 1.0.0
 * @category mutations
 */
const Effect_onDoneCause = onDoneCause;
/**
 * Runs the specified effect if this effect fails, providing the error to the
 * effect if it exists. The provided effect will not be interrupted.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_onError = onError;
/**
 * Ensures that a cleanup functions runs, whether this effect succeeds, fails,
 * or is interrupted.
 *
 * @category finalization
 * @since 1.0.0
 */
const Effect_onExit = onExit;
/**
 * @since 1.0.0
 * @category finalization
 */
const Effect_onInterrupt = onInterrupt;
/**
 * Returns an effect that will be executed at most once, even if it is
 * evaluated multiple times.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_once = once;
/**
 * Executes this effect, skipping the error but returning optionally the
 * success.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_option = effect_option;
/**
 * Translates effect failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the effect.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orDie = orDie;
/**
 * Keeps none of the errors, and terminates the fiber with them, using the
 * specified function to convert the `E` into a `Throwable`.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orDieWith = orDieWith;
/**
 * Executes this effect and returns its value, if it succeeds, but otherwise
 * executes the specified effect.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orElse = core_orElse;
/**
 * Returns an effect that will produce the value of this effect, unless it
 * fails, in which case, it will produce the value of the specified effect.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orElseEither = effect_orElseEither;
/**
 * Executes this effect and returns its value, if it succeeds, but otherwise
 * fails with the specified error.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orElseFail = effect_orElseFail;
/**
 * Returns an effect that will produce the value of this effect, unless it
 * fails with the `None` value, in which case it will produce the value of
 * the specified effect.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orElseOptional = orElseOptional;
/**
 * Executes this effect and returns its value, if it succeeds, but
 * otherwise succeeds with the specified value.
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_orElseSucceed = effect_orElseSucceed;
/**
 * Exposes all parallel errors in a single call.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_parallelErrors = parallelErrors;
/**
 * @since 1.0.0
 * @category mutations
 */
const Effect_parallelFinalizers = parallelFinalizers;
/**
 * Feeds elements of type `A` to a function `f` that returns an effect.
 * Collects all successes and failures in a tupled fashion.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_partition = effect_partition;
/**
 * Feeds elements of type `A` to a function `f` that returns an effect.
 * Collects all successes and failures in parallel and returns the result as a
 * tuple.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_partitionPar = partitionPar;
/**
 * Applies the specified changes to the `FiberRef` values for the fiber
 * running this workflow.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_patchFiberRefs = patchFiberRefs;
/**
 * Like `tryPromise` but produces a defect in case of errors.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_promise = promise;
/**
 * Like `promise` but allows for interruption via AbortSignal
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_promiseInterrupt = promiseInterrupt;
/**
 * Provides the effect with its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_provideContext = provideContext;
/**
 * Provides a layer to the effect, which translates it to another level.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_provideLayer = provideLayer;
/**
 * Provides the effect with the single service it requires. If the effect
 * requires more than one service use `provideContext` instead.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_provideService = provideService;
/**
 * Provides the effect with the single service it requires. If the effect
 * requires more than one service use `provideContext` instead.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_provideServiceEffect = provideServiceEffect;
/**
 * Provides some of the context required to run this effect,
 * leaving the remainder `R0`.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_contramapContext = contramapContext;
/**
 * Splits the context into two parts, providing one part using the
 * specified layer and leaving the remainder `R0`.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_provideSomeLayer = provideSomeLayer;
/**
 * Returns an effect that races this effect with the specified effect,
 * returning the first successful `A` from the faster side. If one effect
 * succeeds, the other will be interrupted. If neither succeeds, then the
 * effect will fail with some error.
 *
 * Note that both effects are disconnected before being raced. This means that
 * interruption of the loser will always be performed in the background. If this
 * behavior is not desired, you can use `Effect.raceWith`, which will not
 * disconnect or interrupt losers.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_race = race;
/**
 * Returns an effect that races this effect with all the specified effects,
 * yielding the value of the first effect to succeed with a value. Losers of
 * the race will be interrupted immediately
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_raceAll = raceAll;
/**
 * Returns an effect that races this effect with the specified effect,
 * returning the first successful `A` from the faster side. If one effect
 * succeeds, the other will be interrupted. If neither succeeds, then the
 * effect will fail with some error.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_raceAwait = raceAwait;
/**
 * Returns an effect that races this effect with the specified effect,
 * yielding the first result to succeed. If neither effect succeeds, then the
 * composed effect will fail with some error.
 *
 * WARNING: The raced effect will safely interrupt the "loser", but will not
 * resume until the loser has been cleanly terminated.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_raceEither = raceEither;
/**
 * Forks this effect and the specified effect into their own fibers, and races
 * them, calling one of two specified callbacks depending on which fiber wins
 * the race. This method does not interrupt, join, or otherwise do anything
 * with the fibers. It can be considered a low-level building block for
 * higher-level operators like `race`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_raceFibersWith = raceFibersWith;
/**
 * Returns an effect that races this effect with the specified effect,
 * yielding the first result to complete, whether by success or failure. If
 * neither effect completes, then the composed effect will not complete.
 *
 * WARNING: The raced effect will safely interrupt the "loser", but will not
 * resume until the loser has been cleanly terminated. If early return is
 * desired, then instead of performing `l raceFirst r`, perform
 * `l.disconnect raceFirst r.disconnect`, which disconnects left and right
 * interrupt signal, allowing a fast return, with interruption performed
 * in the background.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_raceFirst = raceFirst;
/**
 * Returns an effect that races this effect with the specified effect, calling
 * the specified finisher as soon as one result or the other has been computed.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_raceWith = raceWith;
/**
 * Retreives the `Random` service from the context.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_random = effect_random;
/**
 * Retreives the `Random` service from the context and uses it to run the
 * specified workflow.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_randomWith = effect_randomWith;
/**
 * Folds an `Iterable<A>` using an effectual function f, working sequentially
 * from left to right.
 *
 * @since 1.0.0
 * @category folding
 */
const Effect_reduce = effect_reduce;
/**
 * Reduces an `Iterable<Effect<R, E, A>>` to a single effect, working
 * sequentially.
 *
 * @since 1.0.0
 * @category folding
 */
const Effect_reduceAll = reduceAll;
/**
 * Reduces an `Iterable<Effect<R, E, A>>` to a single effect, working in
 * parallel.
 *
 * @since 1.0.0
 * @category folding
 */
const Effect_reduceAllPar = reduceAllPar;
/**
 * Folds an `Iterable<A>` using an effectual function f, working sequentially from left to right.
 *
 * @since 1.0.0
 * @category folding
 */
const Effect_reduceRight = effect_reduceRight;
/**
 * Folds over the elements in this chunk from the left, stopping the fold early
 * when the predicate is not satisfied.
 *
 * @since 1.0.0
 * @category folding
 */
const Effect_reduceWhile = reduceWhile;
/**
 * Keeps some of the errors, and terminates the fiber with the rest
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_refineOrDie = refineOrDie;
/**
 * Keeps some of the errors, and terminates the fiber with the rest, using
 * the specified function to convert the `E` into a defect.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_refineOrDieWith = refineOrDieWith;
/**
 * Fail with the returned value if the `PartialFunction` matches, otherwise
 * continue with our held value.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_reject = reject;
/**
 * Continue with the returned computation if the `PartialFunction` matches,
 * translating the successful match into a failure, otherwise continue with
 * our held value.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_rejectEffect = rejectEffect;
/**
 * Returns a new effect that repeats this effect according to the specified
 * schedule or until the first failure. Scheduled recurrences are in addition
 * to the first execution, so that `io.repeat(Schedule.once)` yields an effect
 * that executes `io`, and then if that succeeds, executes `io` an additional
 * time.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_repeat = repeat_Effect;
/**
 * Returns a new effect that repeats this effect the specified number of times
 * or until the first failure. Repeats are in addition to the first execution,
 * so that `io.repeatN(1)` yields an effect that executes `io`, and then if
 * that succeeds, executes `io` an additional time.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_repeatN = repeatN;
/**
 * Returns a new effect that repeats this effect according to the specified
 * schedule or until the first failure, at which point, the failure value and
 * schedule output are passed to the specified handler.
 *
 * Scheduled recurrences are in addition to the first execution, so that
 * `pipe(effect, Effect.repeat(Schedule.once()))` yields an effect that executes
 * `effect`, and then if that succeeds, executes `effect` an additional time.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatOrElse = repeatOrElse_Effect;
/**
 * Returns a new effect that repeats this effect according to the specified
 * schedule or until the first failure, at which point, the failure value and
 * schedule output are passed to the specified handler.
 *
 * Scheduled recurrences are in addition to the first execution, so that
 * `pipe(effect, Effect.repeat(Schedule.once()))` yields an effect that executes
 * `effect`, and then if that succeeds, executes `effect` an additional time.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatOrElseEither = repeatOrElseEither_Effect;
/**
 * Repeats this effect until its value satisfies the specified predicate or
 * until the first failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatUntil = repeatUntil_Effect;
/**
 * Repeats this effect until its value satisfies the specified effectful
 * predicate or until the first failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatUntilEffect = repeatUntilEffect_Effect;
/**
 * Repeats this effect until its value is equal to the specified value or
 * until the first failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatUntilEquals = repeatUntilEquals_Effect;
/**
 * Repeats this effect while its value satisfies the specified effectful
 * predicate or until the first failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatWhile = repeatWhile_Effect;
/**
 * Repeats this effect while its value satisfies the specified effectful
 * predicate or until the first failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatWhileEffect = repeatWhileEffect_Effect;
/**
 * Repeats this effect for as long as its value is equal to the specified
 * value or until the first failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const repeatWhileEquals = repeatWhileEquals_Effect;
/**
 * Retries with the specified retry policy. Retries are done following the
 * failure of the original `io` (up to a fixed maximum with `once` or `recurs`
 * for example), so that that `io.retry(Schedule.once)` means "execute `io`
 * and in case of failure, try again once".
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_retry = retry_Effect;
/**
 * Retries this effect the specified number of times.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryN = retryN_Effect;
/**
 * Retries with the specified schedule, until it fails, and then both the
 * value produced by the schedule together with the last error are passed to
 * the recovery function.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryOrElse = retryOrElse_Effect;
/**
 * Retries with the specified schedule, until it fails, and then both the
 * value produced by the schedule together with the last error are passed to
 * the recovery function.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryOrElseEither = retryOrElseEither_Effect;
/**
 * Retries this effect until its error satisfies the specified predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryUntil = retryUntil_Effect;
/**
 * Retries this effect until its error satisfies the specified effectful
 * predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryUntilEffect = retryUntilEffect_Effect;
/**
 * Retries this effect until its error is equal to the specified error.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryUntilEquals = retryUntilEquals_Effect;
/**
 * Retries this effect while its error satisfies the specified predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryWhile = retryWhile_Effect;
/**
 * Retries this effect while its error satisfies the specified effectful
 * predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryWhileEffect = retryWhileEffect_Effect;
/**
 * Retries this effect for as long as its error is equal to the specified
 * error.
 *
 * @since 1.0.0
 * @category mutations
 */
const retryWhileEquals = retryWhileEquals_Effect;
/**
 * Replicates the given effect `n` times.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_replicate = effect_replicate;
/**
 * Performs this effect the specified number of times and collects the
 * results.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_replicateEffect = replicateEffect;
/**
 * Performs this effect the specified number of times, discarding the
 * results.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_replicateEffectDiscard = replicateEffectDiscard;
/**
 * Unearth the unchecked failure of the effect (opposite of `orDie`).
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_resurrect = resurrect;
/**
 * "Zooms in" on the value in the `Right` side of an `Either`, moving the
 * possibility that the value is a `Left` to the error channel.
 *
 * @since 1.0.0
 * @category getters
 */
const Effect_right = effect_right;
/**
 * Performs the specified operation while "zoomed in" on the `Right` case of an
 * `Either`.
 *
 * @since 1.0.0
 * @category getters
 */
const Effect_rightWith = rightWith;
/**
 * Returns an effect that accesses the runtime, which can be used to
 * (unsafely) execute tasks. This is useful for integration with legacy code
 * that must call back into Effect code.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_runtime = runtime_runtime;
/**
 * Retrieves an effect that succeeds with the current runtime flags, which
 * govern behavior and features of the runtime system.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_runtimeFlags = core_runtimeFlags;
/**
 * Exposes the full `Cause` of failure for the specified effect.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_sandbox = sandbox;
/**
 * Runs this effect according to the specified schedule.
 *
 * See `scheduleFrom` for a variant that allows the schedule's decision to
 * depend on the result of this effect.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_schedule = schedule_Effect;
/**
 * Runs this effect according to the specified schedule in a new fiber
 * attached to the current scope.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_scheduleForked = scheduleForked;
/**
 * Runs this effect according to the specified schedule starting from the
 * specified input value.
 *
 * @since 1.0.0
 * @category mutations
 */
const scheduleFrom = scheduleFrom_Effect;
/**
 * @since 1.0.0
 * @category context
 */
const Effect_scope = scope;
/**
 * Accesses the current scope and uses it to perform the specified effect.
 *
 * @since 1.0.0
 * @category scoping
 */
const Effect_scopeWith = scopeWith;
/**
 * Scopes all resources uses in this workflow to the lifetime of the workflow,
 * ensuring that their finalizers are run as soon as this workflow completes
 * execution, whether by success, failure, or interruption.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_scoped = scopedEffect;
/**
 * Returns a new scoped workflow that runs finalizers added to the scope of
 * this workflow sequentially in the reverse of the order in which they were
 * added. Note that finalizers are run sequentially by default so this only
 * has meaning if used within a scope where finalizers are being run in
 * parallel.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_sequentialFinalizers = sequentialFinalizers;
/**
 * Extracts the specified service from the context of the effect.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_service = service;
/**
 * Accesses the specified service in the context of the effect.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_serviceWith = serviceWith;
/**
 * Effectfully accesses the specified service in the context of the effect.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_serviceWithEffect = serviceWithEffect;
/**
 * Sets the current `ConfigProvider`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_setConfigProvider = setConfigProvider;
/**
 * Sets the `FiberRef` values for the fiber running this effect to the values
 * in the specified collection of `FiberRef` values.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_setFiberRefs = setFiberRefs;
/**
 * Returns an effect that suspends for the specified duration. This method is
 * asynchronous, and does not actually block the fiber executing the effect.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_sleep = effect_sleep;
/**
 * Converts an option on values into an option on errors.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_some = fiberRuntime_some;
/**
 * Extracts the optional value, or returns the given 'orElse'.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_someOrElse = someOrElse;
/**
 * Extracts the optional value, or executes the given 'orElse' effect.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_someOrElseEffect = someOrElseEffect;
/**
 * Extracts the optional value, or fails with the given error 'e'.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_someOrFail = someOrFail;
/**
 * Extracts the optional value, or fails with a `NoSuchElementException`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_someOrFailException = someOrFailException;
/**
 * Perfoms the specified operation while "zoomed in" on the `Some` case of an
 * `Option`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_someWith = someWith;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_struct = effect_struct;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_structPar = structPar;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_succeed = core_succeed;
/**
 * Returns an effect which succeeds with the value wrapped in a `Left`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_succeedLeft = succeedLeft;
/**
 * Returns an effect which succeeds with `None`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_succeedNone = succeedNone;
/**
 * Returns an effect which succeeds with the value wrapped in a `Right`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_succeedRight = succeedRight;
/**
 * Returns an effect which succeeds with the value wrapped in a `Some`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_succeedSome = succeedSome;
/**
 * Summarizes a effect by computing some value before and after execution, and
 * then combining the values to produce a summary, together with the result of
 * execution.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_summarized = summarized;
/**
 * Returns an effect with the behavior of this one, but where all child fibers
 * forked in the effect are reported to the specified supervisor.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_supervised = supervised;
/**
 * Returns a lazily constructed effect, whose construction may itself require
 * effects. When no context is required (i.e., when `R == unknown`) it is
 * conceptually equivalent to `flatten(succeed(io))`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_suspend = suspend;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_suspendSucceed = suspendSucceed;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_sync = core_sync;
/**
 * Takes all elements so long as the effectual predicate returns true.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_takeWhile = effect_takeWhile;
/**
 * Tags each metric in this effect with the specific tag.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_tagged = tagged;
/**
 * Tags each metric in this effect with the specific tag.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_taggedWithLabels = taggedWithLabels;
/**
 * Tags each metric in this effect with the specific tag.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_taggedWithLabelSet = taggedWithLabelSet;
/**
 * Tags each metric in a scope with a the specific tag.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_taggedScoped = taggedScoped;
/**
 * Tags each metric in a scope with a the specific tag.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_taggedScopedWithLabels = taggedScopedWithLabels;
/**
 * Tags each metric in a scope with a the specific tag.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_taggedScopedWithLabelSet = taggedScopedWithLabelSet;
/**
 * Retrieves the metric tags associated with the current scope.
 *
 * @since 1.0.0
 * @category getters
 */
const Effect_tags = tags;
/**
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tap = core_tap;
/**
 * Returns an effect that effectfully "peeks" at the failure or success of
 * this effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tapBoth = tapBoth;
/**
 * Returns an effect that effectually "peeks" at the defect of this effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tapDefect = tapDefect;
/**
 * Returns an effect that effectfully "peeks" at the result of this effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tapEither = tapEither;
/**
 * Returns an effect that effectfully "peeks" at the failure of this effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tapError = effect_tapError;
/**
 * Returns an effect that effectually "peeks" at the cause of the failure of
 * this effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tapErrorCause = tapErrorCause;
/**
 * Returns an effect that effectfully "peeks" at the success of this effect.
 * If the partial function isn't defined at the input, the result is
 * equivalent to the original effect.
 *
 * @since 1.0.0
 * @category sequencing
 */
const Effect_tapSome = tapSome;
/**
 * Returns a new effect that executes this one and times the execution.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_timed = timed;
/**
 * A more powerful variation of `timed` that allows specifying the clock.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_timedWith = timedWith;
/**
 * Returns an effect that will timeout this effect, returning `None` if the
 * timeout elapses before the effect has produced a value; and returning
 * `Some` of the produced value otherwise.
 *
 * If the timeout elapses without producing a value, the running effect will
 * be safely interrupted.
 *
 * WARNING: The effect returned by this method will not itself return until
 * the underlying effect is actually interrupted. This leads to more
 * predictable resource utilization. If early return is desired, then instead
 * of using `effect.timeout(d)`, use `effect.disconnect.timeout(d)`, which
 * first disconnects the effect's interruption signal before performing the
 * timeout, resulting in earliest possible return, before an underlying effect
 * has been successfully interrupted.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_timeout = timeout;
/**
 * The same as `timeout`, but instead of producing a `None` in the event of
 * timeout, it will produce the specified error.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_timeoutFail = timeoutFail;
/**
 * The same as `timeout`, but instead of producing a `None` in the event of
 * timeout, it will produce the specified failure.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_timeoutFailCause = timeoutFailCause;
/**
 * Returns an effect that will timeout this effect, returning either the
 * default value if the timeout elapses before the effect has produced a
 * value or returning the result of applying the function `f` to the
 * success value of the effect.
 *
 * If the timeout elapses without producing a value, the running effect will
 * be safely interrupted.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_timeoutTo = timeoutTo;
/**
 * Constructs a layer from this effect.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_toLayer = toLayer;
/**
 * Constructs a layer from this effect.
 *
 * @since 1.0.0
 * @category conversions
 */
const toLayerContext = fromEffectContext;
/**
 * Constructs a layer from this effect.
 *
 * @since 1.0.0
 * @category conversions
 */
const toLayerDiscard = fromEffectDiscard;
/**
 * Constructs a layer from this effect.
 *
 * @since 1.0.0
 * @category conversions
 */
const toLayerScopedDiscard = scopedDiscard;
/**
 * Constructs a layer from this effect.
 *
 * @since 1.0.0
 * @category conversions
 */
const Effect_toLayerScoped = toLayerScoped;
/**
 * Transplants specified effects so that when those effects fork other
 * effects, the forked effects will be governed by the scope of the fiber that
 * executes this effect.
 *
 * This can be used to "graft" deep grandchildren onto a higher-level scope,
 * effectively extending their lifespans into the parent scope.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_transplant = transplant;
/**
 * Imports a synchronous side-effect into a pure value, translating any
 * thrown exceptions into typed failed effects.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tryCatch = tryCatch;
/**
 * Create an `Effect` that when executed will construct `promise` and wait for
 * its result, errors will be handled using `onReject`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tryCatchPromise = tryCatchPromise;
/**
 * Like `tryCatchPromise` but allows for interruption via AbortSignal
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tryCatchPromiseInterrupt = tryCatchPromiseInterrupt;
/**
 * Executed `that` in case `self` fails with a `Cause` that doesn't contain
 * defects, executes `success` in case of successes
 *
 * @since 1.0.0
 * @category alternatives
 */
const Effect_tryOrElse = tryOrElse;
/**
 * Create an `Effect` that when executed will construct `promise` and wait for
 * its result, errors will produce failure as `unknown`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tryPromise = tryPromise;
/**
 * Like `tryPromise` but allows for interruption via AbortSignal
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tryPromiseInterrupt = tryPromiseInterrupt;
/**
 * Like `forEach` + `identity` with a tuple type.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tuple = effect_tuple;
/**
 * Like tuple but parallel, same as `forEachPar` + `identity` with a tuple type.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_tuplePar = tuplePar;
/**
 * Used to unify functions that would otherwise return `Effect<A, B, C> | Effect<D, E, F>`
 *
 * @category utilities
 * @since 1.0.0
 */
const Effect_unified = unified;
/**
 * When this effect succeeds with a cause, then this method returns a new
 * effect that either fails with the cause that this effect succeeded with, or
 * succeeds with unit, depending on whether the cause is empty.
 *
 * This operation is the opposite of `cause`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_uncause = uncause;
/**
 * Constructs a `Chunk` by repeatedly applying the effectual function `f` as
 * long as it returns `Some`.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_unfold = effect_unfold;
/**
 * @since 1.0.0
 * @category interruption
 */
const Effect_uninterruptible = uninterruptible;
/**
 * @since 1.0.0
 * @category interruption
 */
const Effect_uninterruptibleMask = uninterruptibleMask;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_unit = core_unit;
/**
 * Converts a `Effect<R, Either<E, B>, A>` into a `Effect<R, E, Either<A, B>>`.
 * The inverse of `left`.
 *
 * @since 1.0.0
 * @category getters
 */
const Effect_unleft = unleft;
/**
 * The moral equivalent of `if (!p) exp`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_unless = unless;
/**
 * The moral equivalent of `if (!p) exp` when `p` has side-effects.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_unlessEffect = unlessEffect;
/**
 * Takes some fiber failures and converts them into errors.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_unrefine = unrefine;
/**
 * Takes some fiber failures and converts them into errors, using the specified
 * function to convert the `E` into an `E1 | E2`.
 *
 * @since 1.0.0
 * @category error handling
 */
const Effect_unrefineWith = unrefineWith;
/**
 * Converts a `Effect<R, Either<B, E>, A>` into a `Effect<R, E, Either<B, A>>`.
 * The inverse of `right`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_unright = unright;
/**
 * Unsafely creates a new Semaphore
 *
 * @since 1.0.0
 * @category locking
 */
const Effect_unsafeMakeSemaphore = unsafeMakeSemaphore;
/**
 * Creates a new Semaphore
 *
 * @since 1.0.0
 * @category locking
 */
const Effect_makeSemaphore = makeSemaphore;
/**
 * @since 1.0.0
 * @category execution
 */
const runFork = unsafeForkEffect;
/**
 * @since 1.0.0
 * @category execution
 */
const runCallback = unsafeRunEffect;
/**
 * @since 1.0.0
 * @category execution
 */
const runPromiseEither = unsafeRunPromiseEitherEffect;
/**
 * Runs an `Effect` workflow, returning a `Promise` which resolves with the
 * result of the workflow or rejects with an error.
 *
 * @since 1.0.0
 * @category execution
 */
const runPromise = unsafeRunPromiseEffect;
/**
 * Runs an `Effect` workflow, returning a `Promise` which resolves with the
 * `Exit` value of the workflow.
 *
 * @since 1.0.0
 * @category execution
 */
const runPromiseExit = unsafeRunPromiseExitEffect;
/**
 * @since 1.0.0
 * @category execution
 */
const runSync = unsafeRunSyncEffect;
/**
 * @since 1.0.0
 * @category execution
 */
const runSyncExit = unsafeRunSyncExitEffect;
/**
 * @since 1.0.0
 * @category execution
 */
const runSyncEither = unsafeRunSyncEitherEffect;
/**
 * The inverse operation `sandbox(effect)`
 *
 * Terminates with exceptions on the `Left` side of the `Either` error, if it
 * exists. Otherwise extracts the contained `Effect< R, E, A>`
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_unsandbox = unsandbox;
/**
 * Scopes all resources acquired by `resource` to the lifetime of `use`
 * without effecting the scope of any resources acquired by `use`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_using = using;
/**
 * Converts an option on errors into an option on values.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_unsome = unsome;
/**
 * Updates the `FiberRef` values for the fiber running this effect using the
 * specified function.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_updateFiberRefs = updateFiberRefs;
/**
 * @since 1.0.0
 * @category runtime
 */
const Effect_updateRuntimeFlags = updateRuntimeFlags;
/**
 * Updates the service with the required service entry.
 *
 * @since 1.0.0
 * @category context
 */
const Effect_updateService = updateService;
/**
 * Sequentially zips the this result with the specified result. Combines both
 * `Cause`s when both effects fail.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validate = effect_validate;
/**
 * Returns an effect that executes both this effect and the specified effect,
 * in parallel. Combines both Cause<E1>` when both effects fail.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validatePar = validatePar;
/**
 * Feeds elements of type `A` to `f` and accumulates all errors in error
 * channel or successes in success channel.
 *
 * This combinator is lossy meaning that if there are errors all successes
 * will be lost. To retain all information please use `partition`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateAll = validateAll;
/**
 * Feeds elements of type `A` to `f `and accumulates, in parallel, all errors
 * in error channel or successes in success channel.
 *
 * This combinator is lossy meaning that if there are errors all successes
 * will be lost. To retain all information please use [[partitionPar]].
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateAllPar = validateAllPar;
/**
 * Feeds elements of type `A` to `f` and accumulates all errors, discarding
 * the successes.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateAllDiscard = validateAllDiscard;
/**
 * Feeds elements of type `A` to `f` in parallel and accumulates all errors,
 * discarding the successes.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateAllParDiscard = validateAllParDiscard;
/**
 * Feeds elements of type `A` to `f` until it succeeds. Returns first success
 * or the accumulation of all errors.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateFirst = validateFirst;
/**
 * Feeds elements of type `A` to `f` until it succeeds. Returns first success
 * or the accumulation of all errors.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateFirstPar = validateFirstPar;
/**
 * Sequentially zips this effect with the specified effect using the specified
 * combiner function. Combines the causes in case both effect fail.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateWith = validateWith;
/**
 * Returns an effect that executes both this effect and the specified effect,
 * in parallel, combining their results with the specified `f` function. If
 * both sides fail, then the cause will be combined.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_validateWithPar = validateWithPar;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_whileLoop = whileLoop;
/**
 * The moral equivalent of `if (p) exp`.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_when = when;
/**
 * Runs an effect when the supplied partial function matches for the given
 * value, otherwise does nothing.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_whenCase = whenCase;
/**
 * Runs an effect when the supplied partial function matches for the given
 * value, otherwise does nothing.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_whenCaseEffect = whenCaseEffect;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_whenEffect = whenEffect;
/**
 * Executes this workflow when value of the specified `FiberRef` satisfies the
 * predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_whenFiberRef = whenFiberRef;
/**
 * Executes this workflow when the value of the `Ref` satisfies the predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_whenRef = whenRef;
/**
 * Executes the specified workflow with the specified implementation of the
 * clock service.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_withClock = withClock;
/**
 * Sets the implementation of the clock service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_withClockScoped = withClockScoped;
/**
 * Executes the specified workflow with the specified configuration provider.
 *
 * @since 1.0.0
 * @category config
 */
const Effect_withConfigProvider = withConfigProvider;
/**
 * Sets the configuration provider to the specified value and restores it to its original value
 * when the scope is closed.
 *
 * @since 1.0.0
 * @category config
 */
const Effect_withConfigProviderScoped = withConfigProviderScoped;
/**
 * Returns a new scoped workflow that returns the result of this workflow as
 * well as a finalizer that can be run to close the scope of this workflow.
 *
 * @since 1.0.0
 * @category mutations
 */
const Effect_withEarlyRelease = withEarlyRelease;
/**
 * @since 1.0.0
 * @category mutations
 */
const Effect_withMetric = withMetric;
/**
 * @since 1.0.0
 * @category concurrency
 */
const Effect_withParallelism = withParallelism;
/**
 * Runs the specified effect with an unbounded maximum number of fibers for
 * parallel operations.
 *
 * @since 1.0.0
 * @category aspects
 */
const Effect_withParallelismUnbounded = withParallelismUnbounded;
/**
 * @since 1.0.0
 * @category runtime
 */
const Effect_withRuntimeFlags = withRuntimeFlags;
/**
 * @since 1.0.0
 * @category runtime
 */
const Effect_withRuntimeFlagsScoped = withRuntimeFlagsScoped;
/**
 * @since 1.0.0
 * @category constructors
 */
const Effect_yieldNow = yieldNow;
/**
 * @since 1.0.0
 * @category products
 */
const Effect_zip = core_zip;
/**
 * @since 1.0.0
 * @category products
 */
const Effect_zipLeft = zipLeft;
/**
 * @since 1.0.0
 * @category products
 */
const Effect_zipRight = zipRight;
/**
 * @since 1.0.0
 * @category products
 */
const Effect_zipWith = core_zipWith;
/**
 * Zips this effect and that effect in parallel.
 *
 * @since 1.0.0
 * @category zipping
 */
const Effect_zipPar = circular_zipPar;
/**
 * Returns an effect that executes both this effect and the specified effect,
 * in parallel, returning result of that effect. If either side fails,
 * then the other side will be interrupted.
 *
 * @since 1.0.0
 * @category zipping
 */
const Effect_zipParLeft = circular_zipParLeft;
/**
 * Returns an effect that executes both this effect and the specified effect,
 * in parallel, returning result of the provided effect. If either side fails,
 * then the other side will be interrupted.
 *
 * @since 1.0.0
 * @category zipping
 */
const Effect_zipParRight = circular_zipParRight;
/**
 * Sequentially zips this effect with the specified effect using the
 * specified combiner function.
 *
 * @since 1.0.0
 * @category zipping
 */
const Effect_zipWithPar = zipWithPar;
/**
 * Schedules a potentially blocking effect to occur with background priority.
 *
 * Note: this is equivalent to pipe(yieldNow("background"), zipRight(self))
 *
 * @since 1.0.0
 * @category constructors
 */
const Effect_blocking = blocking;
//# sourceMappingURL=Effect.mjs.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@effect+io@0.1.8/node_modules/@effect/io/mjs/Config/Provider.mjs

/**
 * @since 1.0.0
 * @category symbols
 */
const Provider_ConfigProviderTypeId = ConfigProviderTypeId;
/**
 * @since 1.0.0
 * @category symbols
 */
const Provider_FlatConfigProviderTypeId = FlatConfigProviderTypeId;
/**
 * The service tag for `ConfigProvider`.
 *
 * @since 1.0.0
 * @category context
 */
const Provider_Tag = configProviderTag;
/**
 * Creates a new config provider.
 *
 * @since 1.0.0
 * @category constructors
 */
const Provider_make = configProvider_make;
/**
 * Creates a new flat config provider.
 *
 * @since 1.0.0
 * @category constructors
 */
const Provider_makeFlat = makeFlat;
/**
 * A config provider that loads configuration from context variables,
 * using the default System service.
 *
 * @since 1.0.0
 * @category constructors
 */
const Provider_fromEnv = fromEnv;
/**
 * Constructs a new `ConfigProvider` from a key/value (flat) provider, where
 * nesting is embedded into the string keys.
 *
 * @since 1.0.0
 * @category constructors
 */
const Provider_fromFlat = fromFlat;
/**
 * Constructs a ConfigProvider using a map and the specified delimiter string,
 * which determines how to split the keys in the map into path segments.
 *
 * @since 1.0.0
 * @category constructors
 */
const Provider_fromMap = fromMap;
/**
 * Returns a new config provider that will automatically convert all property
 * names to constant case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 1.0.0
 * @category combinators
 */
const Provider_constantCase = configProvider_constantCase;
/**
 * Returns a new config provider that will automatically tranform all path
 * configuration names with the specified function. This can be utilized to
 * adapt the names of configuration properties from one naming convention to
 * another.
 *
 * @since 1.0.0
 * @category mutations
 */
const Provider_contramapPath = contramapPath;
/**
 * Returns a new config provider that will automatically convert all property
 * names to kebab case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 1.0.0
 * @category combinators
 */
const Provider_kebabCase = configProvider_kebabCase;
/**
 * Returns a new config provider that will automatically convert all property
 * names to lower case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 1.0.0
 * @category combinators
 */
const Provider_lowerCase = configProvider_lowerCase;
/**
 * Returns a new config provider that will automatically nest all
 * configuration under the specified property name. This can be utilized to
 * aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 1.0.0
 * @category mutations
 */
const Provider_nested = configProvider_nested;
/**
 * Returns a new config provider that preferentially loads configuration data
 * from this one, but which will fall back to the specified alternate provider
 * if there are any issues loading the configuration from this provider.
 *
 * @since 1.0.0
 * @category mutations
 */
const Provider_orElse = configProvider_orElse;
/**
 * Returns a new config provider that will automatically un-nest all
 * configuration under the specified property name. This can be utilized to
 * de-aggregate separate configuration sources that are all required to load a
 * single configuration value.
 *
 * @since 1.0.0
 * @category mutations
 */
const Provider_unnested = configProvider_unnested;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 1.0.0
 * @category combinators
 */
const Provider_snakeCase = configProvider_snakeCase;
/**
 * Returns a new config provider that will automatically convert all property
 * names to upper case. This can be utilized to adapt the names of
 * configuration properties from the default naming convention of camel case
 * to the naming convention of a config provider.
 *
 * @since 1.0.0
 * @category combinators
 */
const Provider_upperCase = configProvider_upperCase;
/**
 * Returns a new config provider that transforms the config provider with the
 * specified function within the specified path.
 *
 * @since 1.0.0
 * @category combinators
 */
const Provider_within = within;
//# sourceMappingURL=Provider.mjs.map
// EXTERNAL MODULE: ./node_modules/.pnpm/dotenv@16.0.3/node_modules/dotenv/lib/main.js
var main = __nccwpck_require__(717);
;// CONCATENATED MODULE: ./build/main.js









main.config();
const GitLive = _common.Git.makeLayer({
    userName: Config_string("github_actor"),
    userEmail: Config_map(Config_string("github_actor"), (_) => `${_}@users.noreply.github.com`),
    git: Config_succeed({}),
});
const GithubLive = _common.Github.makeLayer(Config_nested(Config_struct({
    token: Config_secret("token"),
}), "input"));
const GistLive = Layer_provide(_common.Gist.GistLive)((Layer_merge(GithubLive)(GitLive)));
const program = Effect_flatMap(Effect_service(_common.Gist.Gist), gist => Effect_flatMap(Effect_config(Config_nested(Config_struct({
    name: Config_optional(Config_string("name")),
    path: Config_string("path"),
}), "input")), ({ name, path }) => Effect_flatMap(gist.createAndAdd(path, Option_getOrUndefined(name)), info => Effect_map(Effect_logInfo(`Created gist: ${info.html_url}`), () => void 0))));
runCallback(Effect_withConfigProvider(Effect_provideLayer(program, GistLive), Provider_upperCase(Provider_fromEnv())), (exit) => {
    if (Exit_isFailure(exit)) {
        console.log(Cause_squash(exit.cause));
    }
});
//# sourceMappingURL=main.js.map
})();


//# sourceMappingURL=index.js.map
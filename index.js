const js = require('@eslint/js');
const globals = require('globals');
const pluginImport = require('eslint-plugin-import');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = [
    js.configs.recommended,
    pluginImport.flatConfigs.recommended,
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },

            ecmaVersion: 'latest',
            sourceType: 'module',
        },

        plugins: {
            'simple-import-sort': simpleImportSort,
        },

        rules: {
            // ─── Modern JS / hygiene ───────────────────────────────────────
            // Always require strict equality (with the exception of `== null`).
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            // No `var` — use `let` / `const`.
            'no-var': 'error',
            // Prefer `const` for variables that are never reassigned.
            'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
            // Prefer template literals over string concatenation.
            'prefer-template': 'error',
            // Prefer arrow functions for callbacks.
            'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
            // Use rest parameters instead of `arguments`.
            'prefer-rest-params': 'error',
            // Use spread instead of `.apply()`.
            'prefer-spread': 'error',
            // Use object spread instead of `Object.assign({}, ...)`.
            'prefer-object-spread': 'error',
            // Use `0b`, `0o`, `0x` literals instead of `parseInt('...', 2/8/16)`.
            'prefer-numeric-literals': 'error',
            // Use `**` instead of `Math.pow`.
            'prefer-exponentiation-operator': 'error',
            // Use shorthand object property/method syntax.
            'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
            // No `{ foo: foo }` renames or `import { foo as foo }`.
            'no-useless-rename': 'error',
            // No `{ ['foo']: 1 }`.
            'no-useless-computed-key': 'error',
            // No `'a' + 'b'`.
            'no-useless-concat': 'error',
            // No `return;` at the end of a function.
            'no-useless-return': 'error',
            // Use `Object.{create,assign}` instead of `new Object()`.
            'no-object-constructor': 'error',
            // No `new Array()`.
            'no-array-constructor': 'error',

            // ─── Defensive / bug-catching ──────────────────────────────────
            // Don't reassign function parameters; mutating their props is allowed for common
            // accumulator/context names.
            'no-param-reassign': ['error', {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc', 'accumulator', 'e', 'ctx', 'context', 'req', 'request', 'res', 'response',
                ],
            }],
            // Either always return a value or never. Catches accidentally falling through.
            'consistent-return': 'error',
            // Require a `default` case in `switch` (or a `// no default` comment).
            'default-case': ['error', { commentPattern: '^no default$' }],
            // `default` must be the last case.
            'default-case-last': 'error',
            // Require explicit radix for `parseInt`.
            radix: 'error',
            // Throw `Error` instances, not strings.
            'no-throw-literal': 'error',
            // No assignment in `return` (`return x = 1;`).
            'no-return-assign': ['error', 'always'],
            // No expressions used as statements (e.g. `foo && bar();`).
            'no-unused-expressions': ['error', {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            }],
            // No variable shadowing — TS files override this in ts.js with the typescript-eslint version.
            'no-shadow': 'error',
            // Array methods like `.map()`, `.filter()`, `.reduce()` must return a value from the callback.
            'array-callback-return': ['error', { allowImplicit: true }],
            // No `return` from a Promise executor function.
            'no-promise-executor-return': 'error',
            // No `${...}` in plain (non-template) strings — usually a typo.
            'no-template-curly-in-string': 'error',
            // No functions declared inside loops that capture loop variables.
            'no-loop-func': 'error',
            // No `return` from a constructor.
            'no-constructor-return': 'error',
            // No `new` for side effects only.
            'no-new': 'error',
            // No `new String()`, `new Number()`, `new Boolean()`.
            'no-new-wrappers': 'error',
            // No `x === x`.
            'no-self-compare': 'error',
            // No comma operator (`return (a, b)`).
            'no-sequences': 'error',
            // No `a ? a : b` (use `a || b`).
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            // No nested ternaries.
            'no-nested-ternary': 'error',
            // No `else { if (...) }` — use `else if`.
            'no-lonely-if': 'error',
            // No `a = b = c`.
            'no-multi-assign': 'error',
            // No `else { return ... }` after `if { return ... }`.
            'no-else-return': ['error', { allowElseIf: false }],
            // Empty function bodies — TS files override this in ts.js to allow empty methods.
            'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
            // `Promise.reject()` should reject with an `Error`.
            'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
            // No vars referenced before they're declared inside their block.
            'block-scoped-var': 'error',
            // No `var x; if (...) { x = 1; }` style (though `no-var` handles most of this).
            'vars-on-top': 'error',
            // Default parameters must come last — TS files override this in ts.js with the typescript-eslint version.
            'default-param-last': 'error',
            // Prefer `/abc/` over `new RegExp('abc')` when the pattern is static.
            'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
            // Constructors must be PascalCase, non-constructors must not.
            'new-cap': ['error', { newIsCap: true, capIsNew: false }],
            // Getter/setter pairs should be defined together.
            'grouped-accessor-pairs': 'error',

            // ─── Security ──────────────────────────────────────────────────
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-new-func': 'error',
            'no-script-url': 'error',
            'no-proto': 'error',
            'no-extend-native': 'error',
            'no-caller': 'error',
            'no-iterator': 'error',

            // ─── Quality / readability ─────────────────────────────────────
            // Prefer `obj.foo` over `obj['foo']` when possible.
            'dot-notation': ['error', { allowKeywords: true }],
            // Require a guard (`hasOwnProperty` etc.) inside `for...in`.
            'guard-for-in': 'error',
            // No `alert()` / `confirm()` / `prompt()` — useful even server-side as a typo catch.
            'no-alert': 'warn',
            // No bitwise operators (almost always a typo for `&&` / `||`).
            'no-bitwise': 'error',
            // No labeled statements.
            'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
            // Restrict the legacy `isFinite` / `isNaN` globals — use the `Number.*` versions.
            'no-restricted-globals': [
                'error',
                { name: 'isFinite', message: 'Use Number.isFinite instead.' },
                { name: 'isNaN', message: 'Use Number.isNaN instead.' },
            ],
            // No multiline strings via `\` — use template literals.
            'no-multi-str': 'error',
            // No `'\8'` / `'\9'` octal escapes.
            'no-octal-escape': 'error',
            // `let foo = undefined;` → `let foo;`.
            'no-undef-init': 'error',
            // Symbols should have a description for debugging.
            'symbol-description': 'error',

            // ─── Imports ───────────────────────────────────────────────────
            // All imports must come before any other statements.
            'import/first': 'error',
            // No circular imports.
            'import/no-cycle': ['error', { maxDepth: '∞' }],
            // No importing yourself.
            'import/no-self-import': 'error',
            // Exported `let` / `var` is almost always a mistake.
            'import/no-mutable-exports': 'error',
            // No `./../../foo` if you can write `../foo`.
            'import/no-useless-path-segments': ['error', { commonjs: true }],
            // No `import '/abs/path'`.
            'import/no-absolute-path': 'error',
            // No `require(variable)`.
            'import/no-dynamic-require': 'error',
            // Require a blank line after the import block.
            'import/newline-after-import': 'error',

            // ─── Apify-specific overrides (existing) ───────────────────────
            indent: ['error', 4, {
                SwitchCase: 1,
            }],
            // Allow underscore dangle for a few specific properties, mainly `_id`.
            'no-underscore-dangle': [2, {
                allow: [
                    '_id',
                    '_outputSeqNo',
                    '_queueOrderNo',
                    '_skipOutput',
                    '_retryCount',
                    '_crashesCount',
                    '_pageFailed',
                    '_pageCrashed',
                ],
                allowAfterThis: true,
            }],
            // Error on console usage to prevent accidental debug logging in production code.
            'no-console': 'error',
            // ++ and -- are fine.
            'no-plusplus': 'off',
            quotes: ['error', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],
            // It's ok to use functions before they are defined.
            'no-use-before-define': ['error', {
                'functions': false,
                'classes': true,
                'variables': true,
                'allowNamedExports': false,
            }],
            // Disable as forcing names for function expression doesn't bring much value.
            'func-names': 'off',
            // Disable as this rule is overly strict and can cause breaking changes.
            'class-methods-use-this': 'off',
            // Forcing "use strict" is not necessary.
            strict: 'off',
            // We don't want to force newlines before and after curly braces.
            'object-curly-newline': ['error', { 'consistent': true }],
            // It's fine to use await in loops, e.g. for loop with awaits in it for sequential execution.
            'no-await-in-loop': 'off',
            // It's fine to use continue in loops.
            'no-continue': 'off',
            // It's fine to use "void" to explicitly indicate that we're not awaiting a promise.
            'no-void': ['error', { allowAsStatement: true }],
            'arrow-body-style': 'off',
            'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
            // Set max line length to 160 characters.
            'max-len': ['error', {
                code: 160,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            }],
            // Allow less strict formatting of function parentheses.
            'function-paren-newline': 'off',
            // Prefer destructuring for certain cases only. Forcing destructuring for arrays can make the code less readable.
            'prefer-destructuring': ['error', {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            }, {
                enforceForRenamedProperties: false,
            }],
            // So that the functions calling return show up in stack traces in case of an error.
            'no-return-await': 'off',
            // Do not enforce newlines between class members if they have a single line.
            'lines-between-class-members': ['error', 'always', {
                exceptAfterSingleLine: true,
            }],
            // Allow to use underscore as a way to ignore unused args. Allow unused vars from destructuring.
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }],

            // Rules related to eslint-plugin-import.
            // Force external modules to be specified in the package.json.
            'import/no-extraneous-dependencies': ['error', {
                // Allow devDependencies in test files and folders. Also in eslint config files.
                devDependencies: ['**/*.spec.*', '**/*.test.*', '**/test/**', '**/tests/**', 'eslint.config.{mjs,js,cjs,ts,mts,cts}'],
            }],
            // Force the use of named exports.
            'import/no-default-export': 'error',
            // It's ok to not have a default export and we force named exports anyway.
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off',
            // Force extensions for imports. Helps to prevent ESM issues.
            'import/extensions': ['error', 'always', {
                // Force extensions for type imports as well to be consistent.
                checkTypeImports: true,
            }],
            // Enforce the use of "node:" prefix for Node.js built-in modules.
            'import/enforce-node-protocol-usage': ['error', 'always'],
            // Force ordering of imports.
            'import/order': 'off',
            'simple-import-sort/imports': ['error', {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Node.js builtins prefixed with `node:`.
                    ['^node:'],
                    // Anything not matched in another group.
                    ['^'],
                    // Public Apify packages.
                    ['^@apify/'],
                    // Private Apify packages.
                    ['^@apify-packages/'],
                    // Relative imports.
                    // Anything that starts with a dot.
                    ['^\\.'],
                ],
            }],
            'import/no-import-module-exports': 'off',
        },
    },
];

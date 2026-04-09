# apify-eslint-config

This repository contains a shared eslint config used across [Apify](https://apify.com/). It offers several configs:
- JavaScript config `@apify/eslint-config/js`
- [TypeScript](https://www.npmjs.com/package/typescript) config that also includes JavaScript config `@apify/eslint-config/ts`
- [Jest](https://www.npmjs.com/package/jest) config that only applies to test files and folders `@apify/eslint-config/jest`
- [Vitest](https://www.npmjs.com/package/vitest) config that only applies to test files and folders `@apify/eslint-config/vitest`
- Opt-in stylistic rules `@apify/eslint-config/style` (see below)

## How to add to your project

First install the packages as development dependencies:

```bash
npm install --save-dev @apify/eslint-config eslint
```

Optionally, you can install:
- `typescript-eslint` if you intend to use [TypeScript](https://www.npmjs.com/package/typescript),
- `eslint-plugin-jest` if you intend to use [Jest](https://www.npmjs.com/package/jest) for testing,
- `@vitest/eslint-plugin` if you intend to use [Vitest](https://www.npmjs.com/package/vitest) for testing.

Add `eslint.config.js` file, here's an example configuration for a TypeScript project using ESM and Jest for tests:

```js
import apifyTypescriptConfig from '@apify/eslint-config/ts';
// Optional
import apifyJestConfig from '@apify/eslint-config/jest';

export default [
    ...apifyTypescriptConfig,
    ...apifyJestConfig,
    {
        languageOptions: {
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];

```

An example configuration for a JavaScript project using CommonJS without Jest:
```js
const apifyJsConfig = require('@apify/eslint-config/js');

module.exports = [
    ...apifyJsConfig,
];

```

An example configuration for a JavaScript project using ESM and Vitest for tests:
```js
import apifyJsConfig from '@apify/eslint-config/js';
import apifyVitestConfig from '@apify/eslint-config/vitest';

export default [
    ...apifyJsConfig,
    ...apifyVitestConfig,
];
```

## Stylistic rules (opt-in)

The base config does **not** enforce stylistic / formatting rules — Prettier (or any other formatter) is the recommended way to handle those. If you have a strong reason not to use a formatter and want to keep the airbnb-style stylistic ruleset, install [`@stylistic/eslint-plugin`](https://eslint.style) and add the opt-in `@apify/eslint-config/style` config:

```bash
npm install --save-dev @stylistic/eslint-plugin
```

```js
import apifyTypescriptConfig from '@apify/eslint-config/ts';
import apifyStyleConfig from '@apify/eslint-config/style';

export default [
    ...apifyTypescriptConfig,
    ...apifyStyleConfig,
];
```

This adds 58 stylistic rules (`indent`, `quotes`, `semi`, `comma-dangle`, `space-before-blocks`, `keyword-spacing`, `max-len`, etc.) with the same options `eslint-config-airbnb-base` used to enforce, rewritten as `@stylistic/*` rules so they work with eslint v9 + flat config. If you're using Prettier, do **not** include this config — the rules will conflict with your formatter.

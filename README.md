# apify-eslint-config

This repository contains a shared eslint config used across [Apify](https://apify.com/). It offers several configs:
- JavaScript config `@apify/eslint-config/js`
- [TypeScript](https://www.npmjs.com/package/typescript) config that also includes JavaScript config `@apify/eslint-config/ts`
- [Jest](https://www.npmjs.com/package/jest) config that only applies to test files and folders `@apify/eslint-config/jest`

## How to add to your project

First install the packages as development dependencies:

```bash
npm install --save-dev @apify/eslint-config eslint
```

Optionally, you can install `typescript-eslint` or `eslint-plugin-jest` if you intend to use [TypeScript](https://www.npmjs.com/package/typescript) or [Jest](https://www.npmjs.com/package/jest).

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

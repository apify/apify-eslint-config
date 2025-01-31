# apify-eslint-config

This repository contains a shared eslint config used across [Apify](https://apify.com/). The default export contains the JavaScript config. You can also access [TypeScript](https://www.npmjs.com/package/typescript) config via `@apify/eslint-config/ts` and [Jest](https://www.npmjs.com/package/jest) config via `@apify/eslint-config/jest`.

## How to add to your project

First install the packages as development dependencies:

```bash
npm install --save-dev @apify/eslint-config eslint
```

Optionally, you can install `typescript-eslint` or `eslint-plugin-jest` if you intend to use [TypeScript](https://www.npmjs.com/package/typescript) or [Jest](https://www.npmjs.com/package/jest).

Add `eslint.config.js` file, here's an example configuration for a TypeScript project using ESM:

```js
import apify from '@apify/eslint-config';
// Optional
import apifyTypescript from '@apify/eslint-config/ts';
import apifyJest from '@apify/eslint-config/jest';

export default [
    ...apify,
    ...apifyTypescript,
    ...apifyJest,
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

# apify-eslint-config

This repository contains a shared eslint config used across Apify. It contains both JS and TS configs.

## How to add to your project

First install the packages as development dependencies:

```bash
npm install --save-dev @apify/eslint-config eslint typescript-eslint
```

Add `eslint.config.js` file, here's an example configuration for a TypeScript project using ESM:

```js
import apify from '@apify/eslint-config';

export default [
    ...apify,
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

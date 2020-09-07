# Usage

Install:

```bash
npm install --save-dev @apify/eslint-config eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

Add `.eslintrc` file:

```json
{
  "extends": "@apify"
}
```



## To use typescript with eslint

Create `tsconfig.json` file in the root of the project and add:
```
{}
```
List of all options https://www.typescriptlang.org/tsconfig

Example setup (used on Web)
```json
{
    "compilerOptions": {
        // Skips typechecking of 3rd party libraries declaration files (extension .d.ts) since they may have different tsconfig
        "skipLibCheck": true,
        // Allows eg "import React from 'react'" instead of "import * as React from 'react'"
        "esModuleInterop": true,
        // Allows use of JSX tags
        "jsx": "preserve",
        // Error on unused variables
        "noUnusedLocals": true,
        // Error on unused function params
        "noUnusedParameters": true
    },
    "exclude": [
        "node_modules",
    ],
    "include": [
        "**/*.ts",
        "**/*.tsx"
    ]
}
```

Edit eslint npm script to include .ts, .tsx files and to run typescript validation
```json
"eslint --ext .js,.jsx,.ts,.tsx ; tsc --noemit"
```
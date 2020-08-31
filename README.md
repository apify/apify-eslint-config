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

Create `tsconfig.json` file in the root of the project and add:

```json
{
    "compilerOptions": {
        "target": "es5",
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "noUnusedLocals": true,
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

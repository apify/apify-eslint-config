module.exports = {
    "extends": [
        "airbnb-base"
    ],
    "plugins": [
        "import"
    ],
    "env": {
        "node": true,
        "browser": true
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-underscore-dangle": [2, {
            "allow": ["_id", "_outputSeqNo", "_queueOrderNo", "_skipOutput", "_retryCount", "_crashesCount", "_pageFailed", "_pageCrashed"],
            "allowAfterThis": true
        }],
        "no-use-before-define": 0,
        "no-param-reassign": 0,
        "consistent-return": 0,
        "array-callback-return": 0,
        "no-plusplus": 0,
        "max-len": ["error", 150],
        "func-names": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "import/prefer-default-export": 0,
        "import/no-unresolved": 0,
        "class-methods-use-this": 0,
        "strict": 0,
        "object-curly-newline": 0,
        "no-await-in-loop": 0,
        "arrow-body-style": 0,
        "import/no-named-as-default": 0,
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
        "no-prototype-builtins": 1,

        //Listed extensions are not linted on import
        //
        // imports cannot have .ts and .tsx extensions as it is default typescript behavior which cannot be changed at the moment
        // and therefore it is listed so it will not be linted by eslint
        //
        // Correct: import Component from "path/to/Component.jsx"
        // Correct: import jsFile from "path/to/jsFile"
        // Wrong: import jsFile from "path/to/jsFile.js"
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "project": "./tsconfig.json"
            }
        }
    },
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.tsx"],
            "env": { "browser": true, "es6": true, "node": true },
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": "./tsconfig.json"
            },
            "plugins": ["@typescript-eslint"],
            "rules": {
                "react/prop-types": "off",
                // note you must disable the base rule as it can report incorrect errors
                "no-unused-vars": "off",
                // This rule extends the base eslint/no-unused-vars rule. It adds support for TypeScript features, such as types.
                "@typescript-eslint/no-unused-vars": ["error"]
            }
        }
    ]
}

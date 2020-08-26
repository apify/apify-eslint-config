module.exports = {
    "extends": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
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
        // disable the rule for all files
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off"
    },
    "overrides": [
        {
            // enable the rule specifically for jsx files
            "files": [
                "*.jsx"
            ],
            "rules": {
                "react/prop-types": [
                    "error"
                ]
            }
        },
        {
            // enable the rule specifically for TypeScript files
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "rules": {
                "@typescript-eslint/explicit-module-boundary-types": [
                    "error"
                ],
                "@typescript-eslint/no-var-requires": [
                    "error"
                ]
            }
        }
    ]
};

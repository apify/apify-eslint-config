module.exports = {
    "extends": ["airbnb-base"],
    "plugins": [
        "import"
    ],
    "env": {
        "node": true,
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 2022,
    },
    "reportUnusedDisableDirectives": true,
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
        "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "func-names": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "import/prefer-default-export": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/order": ["error", {
            "groups": ["builtin", "external", ["parent", "sibling"], "index", "object"],
            "alphabetize": { "order": "asc", "caseInsensitive": true },
            "newlines-between": "always",
        }],
        "class-methods-use-this": 0,
        "strict": 0,
        "object-curly-newline": 0,
        "no-await-in-loop": 0,
        "arrow-body-style": 0,
        "import/no-named-as-default": 0,
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
        "no-prototype-builtins": 0,
        "max-len": ["error", {
            "code": 160,
            "ignoreUrls": true
        }],
        "no-continue": "off",
        "function-paren-newline": 0,
        "import/no-import-module-exports": 0,
        "no-promise-executor-return": 0,
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
                "array": false,
                "object": true,
            },
            "AssignmentExpression": {
                "array": false,
                "object": false,
            }
        }, {
            "enforceForRenamedProperties": false,
        }],
        "no-return-await": 0, // So that the functions calling return show up in stack traces in case of an error
    }
};

const pluginJest = require('eslint-plugin-jest');

// Configuration for Jest test files only.
module.exports = [
    {
        files: ['**/*.spec.{js,ts}', '**/*.test.{js,ts}'],
        ...pluginJest.configs['flat/recommended'],
        languageOptions: {
            globals: pluginJest.environments.globals.globals,
          },
          rules: {
            ...pluginJest.configs['flat/recommended'].rules
          },
    },
];

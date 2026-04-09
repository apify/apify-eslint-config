const pluginVitest = require('@vitest/eslint-plugin');

// Configuration for Vitest test files only.
module.exports = [
    {
        files: ['**/*.spec.*', '**/*.test.*', '**/test/**', '**/tests/**'],
        plugins: {
            vitest: pluginVitest,
        },
        rules: {
            // Use the recommended rules, but override a few to keep consistent with the Jest configuration.
            ...pluginVitest.configs.recommended.rules,
            // Disallow alias methods like `toBeCalledTimes()` in favor of the more explicit `toHaveBeenCalledTimes()`.
            'vitest/no-alias-methods': 'error',
            // Disallow disabled tests.
            'vitest/no-disabled-tests': 'error',
        },
    },
];

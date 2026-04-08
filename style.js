const stylistic = require('@stylistic/eslint-plugin');

// Opt-in stylistic rules — preserves the formatting/style opinions that
// `eslint-config-airbnb-base` used to enforce, rewritten as `@stylistic/*`
// rules so they work with eslint v9 + flat config.
//
// Most consumers should NOT need this — adopt a formatter (Prettier,
// dprint, Biome) instead. This config is provided for projects that
// have a strong reason not to use a formatter and want to keep airbnb's
// stylistic ruleset.
//
// Usage:
//
//     import apifyJs from '@apify/eslint-config/js';
//     import apifyStyle from '@apify/eslint-config/style';
//
//     export default [
//         ...apifyJs,
//         ...apifyStyle,
//     ];
//
// Requires `@stylistic/eslint-plugin` to be installed in the consumer.
module.exports = [
    {
        plugins: {
            '@stylistic': stylistic,
        },

        rules: {
            '@stylistic/array-bracket-spacing': ['error','never'],
            '@stylistic/arrow-parens': ['error','always'],
            '@stylistic/arrow-spacing': ['error',{before:true,after:true}],
            '@stylistic/block-spacing': ['error','always'],
            '@stylistic/brace-style': ['error','1tbs',{allowSingleLine:true}],
            '@stylistic/comma-dangle': ['error',{arrays:'always-multiline',objects:'always-multiline',imports:'always-multiline',exports:'always-multiline',functions:'always-multiline'}],
            '@stylistic/comma-spacing': ['error',{before:false,after:true}],
            '@stylistic/comma-style': ['error','last',{exceptions:{ArrayExpression:false,ArrayPattern:false,ArrowFunctionExpression:false,CallExpression:false,FunctionDeclaration:false,FunctionExpression:false,ImportDeclaration:false,ObjectExpression:false,ObjectPattern:false,VariableDeclaration:false,NewExpression:false}}],
            '@stylistic/computed-property-spacing': ['error','never'],
            '@stylistic/dot-location': ['error','property'],
            '@stylistic/eol-last': ['error','always'],
            '@stylistic/function-call-spacing': ['error','never'],
            '@stylistic/function-call-argument-newline': ['error','consistent'],
            '@stylistic/function-paren-newline': ['error','multiline-arguments'],
            '@stylistic/generator-star-spacing': ['error',{before:false,after:true}],
            '@stylistic/implicit-arrow-linebreak': ['error','beside'],
            '@stylistic/indent': ['error',2,{SwitchCase:1,VariableDeclarator:1,outerIIFEBody:1,FunctionDeclaration:{parameters:1,body:1},FunctionExpression:{parameters:1,body:1},CallExpression:{arguments:1},ArrayExpression:1,ObjectExpression:1,ImportDeclaration:1,flatTernaryExpressions:false,ignoredNodes:['JSXElement','JSXElement > *','JSXAttribute','JSXIdentifier','JSXNamespacedName','JSXMemberExpression','JSXSpreadAttribute','JSXExpressionContainer','JSXOpeningElement','JSXClosingElement','JSXFragment','JSXOpeningFragment','JSXClosingFragment','JSXText','JSXEmptyExpression','JSXSpreadChild'],ignoreComments:false}],
            '@stylistic/key-spacing': ['error',{beforeColon:false,afterColon:true}],
            '@stylistic/keyword-spacing': ['error',{before:true,after:true,overrides:{return:{after:true},throw:{after:true},case:{after:true}}}],
            '@stylistic/linebreak-style': ['error','unix'],
            '@stylistic/lines-between-class-members': ['error','always',{exceptAfterSingleLine:false}],
            '@stylistic/max-len': ['error',100,2,{ignoreUrls:true,ignoreComments:false,ignoreRegExpLiterals:true,ignoreStrings:true,ignoreTemplateLiterals:true}],
            '@stylistic/new-parens': 'error',
            '@stylistic/newline-per-chained-call': ['error',{ignoreChainWithDepth:4}],
            '@stylistic/no-confusing-arrow': ['error',{allowParens:true}],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-operators': ['error',{groups:[['%','**'],['%','+'],['%','-'],['%','*'],['%','/'],['/','*'],['&','|','<<','>>','>>>'],['==','!=','===','!=='],['&&','||']],allowSamePrecedence:false}],
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/no-multi-spaces': ['error',{ignoreEOLComments:false}],
            '@stylistic/no-multiple-empty-lines': ['error',{max:1,maxBOF:0,maxEOF:0}],
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-trailing-spaces': ['error',{skipBlankLines:false,ignoreComments:false}],
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/nonblock-statement-body-position': ['error','beside',{overrides:{}}],
            '@stylistic/object-curly-newline': ['error',{ObjectExpression:{minProperties:4,multiline:true,consistent:true},ObjectPattern:{minProperties:4,multiline:true,consistent:true},ImportDeclaration:{minProperties:4,multiline:true,consistent:true},ExportDeclaration:{minProperties:4,multiline:true,consistent:true}}],
            '@stylistic/object-curly-spacing': ['error','always'],
            '@stylistic/object-property-newline': ['error',{allowAllPropertiesOnSameLine:true}],
            '@stylistic/one-var-declaration-per-line': ['error','always'],
            '@stylistic/operator-linebreak': ['error','before',{overrides:{'=':'none'}}],
            '@stylistic/padded-blocks': ['error',{blocks:'never',classes:'never',switches:'never'},{allowSingleLineBlocks:true}],
            '@stylistic/quote-props': ['error','as-needed',{keywords:false,unnecessary:true,numbers:false}],
            '@stylistic/quotes': ['error','single',{avoidEscape:true}],
            '@stylistic/rest-spread-spacing': ['error','never'],
            '@stylistic/semi': ['error','always'],
            '@stylistic/semi-spacing': ['error',{before:false,after:true}],
            '@stylistic/semi-style': ['error','last'],
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': ['error',{anonymous:'always',named:'never',asyncArrow:'always'}],
            '@stylistic/space-in-parens': ['error','never'],
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/space-unary-ops': ['error',{words:true,nonwords:false,overrides:{}}],
            '@stylistic/spaced-comment': ['error','always',{line:{exceptions:['-','+'],markers:['=','!','/']},block:{exceptions:['-','+'],markers:['=','!',':','::'],balanced:true}}],
            '@stylistic/switch-colon-spacing': ['error',{after:true,before:false}],
            '@stylistic/template-curly-spacing': 'error',
            '@stylistic/template-tag-spacing': ['error','never'],
            '@stylistic/wrap-iife': ['error','outside',{functionPrototypeMethods:false}],
            '@stylistic/yield-star-spacing': ['error','after'],
        },
    },
];

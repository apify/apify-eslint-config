# Changelog

## 1.2.0 - 2025-12-05

### Features
- Test release notes generation

### Bug Fixes
- Fix release notes format
- Fix changelog formatting
- More fixes
- Don't cache NPM
- Fix release notes formatting
- Fix missing quote

### Chores
- Update `eslint-plugin-import` (#31)
- `error` for `no-console` rule (#33)
- Testing
- Fix tag generation


## 1.1.0 - 2025-06-08

### Features
- Force extensions for type imports (#28)

### Chores
- Allow `void` for statements (#29)
- Disable `import/named` for TypeScript files (#30)


## 1.0.0 - 2025-03-20

### Features
- Flat config + v9 support, rule unification, add TS config (#14)
- Allow _ args to be unused, stricter devDeps check (#21)
- Split config into subpath exports (#24)
- Allow empty constructors (#26)
- Improve import sorting, add `node:` prefix (#27)

### Bug Fixes
- Allow unused vars from destructuring (#22)

### Chores
- Add CI action to publish a beta version (#15)
- Add changelog (#16)
- Use `npm install` instead of `npm ci` (#17)
- Add path groups for apify and apify-packages (#18)
- Enable `import/extensions`, relax `no-use-before-define` (#20)
- Allow devDependencies in eslint.config.mjs (#23)


## 0.4.0 - 2023-07-21

### Features
- Enable alphabetize for imports (#13)


## 0.3.4 - 2023-06-06

### Bug Fixes
- Turn off import/extensions completely


## 0.3.3 - 2023-05-25

### Bug Fixes
- Ignore package extensions that prevent imports

### Chores
- Bump version


## 0.3.2 - 2023-05-25

### Bug Fixes
- Bump parser version to allow top level await (#11)


## 0.3.0 - 2022-03-29

### Features
- Add `reportUnusedDisableDirectives: true` (#8)


## 0.2.4 - 2022-03-21

### Features
- Bump `ecmaVersion` to 2021 to allow optional chaining (#7)

### Chores
- Bump version


## 0.2.3 - 2022-03-15

### Chores
- Disable `prefer-destructuring` for arrays (#6)


## 0.2.2 - 2021-11-15

### Chores
- Disable eslint-plugin-promise plugin


## 0.2.1 - 2021-11-15

### Chores
- Disable some rules to remove BCs


## 0.2.0 - 2021-11-15

### Chores
- Update versions + disable `no-continue` rule


## 0.1.4 - 2021-04-17

### Bug Fixes
- Wrong prototype builtin rule, bump version


## 0.0.1 - 2019-07-29

Initial release.



# eslint-config-dc
Personal ESLint Configs


## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-dc
```

If you're using npm < v3 you'll also need to install all of the dependencies of this project:

```bash
$ npm install --save-dev eslint eslint-config-strict eslint-plugin-filenames
```

## Usage

This set of configs is based off of [`eslint-config-strict`](https://github.com/keithamus/eslint-config-strict) with a few customized options.

This package includes the following configurations:

- `dc` (alias for `dc/es6`)
- `dc/es6` (uses `eslint-config-strict/es6` with a few tweaks)
- `dc/browser` (simply sets `env.browser` to true)
- `dc/jest` (sets `jest` globals)

### How to use

Simply define your `.eslintrc` (or add a `eslintConfig` object to `package.json`)
like so:

```json
{
  "extends": ["dc"]
}
```

Add any additional plugins you want, for example:

```json
{
  "extends": ["dc", "dc/browser"]
}
```

For more details about how shareable configs work, see the
[ESLint documentation][extend].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
[extend]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files

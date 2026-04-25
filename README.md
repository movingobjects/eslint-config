# @movingobjects/eslint-config

ESLint flat config for Moving Objects projects, covering JavaScript, TypeScript, and React (JSX/TSX).

## Requirements

- ESLint 9+
- Node.js 18+

## Installation

```sh
npm install --save-dev @movingobjects/eslint-config
```

## Usage

```js
// eslint.config.js
import movingObjectsConfig from '@movingobjects/eslint-config';

export default [
  ...movingObjectsConfig,
];
```

To extend or override:

```js
import movingObjectsConfig from '@movingobjects/eslint-config';

export default [
  ...movingObjectsConfig,
  {
    rules: {
      // your overrides
    },
  },
];
```

## What's included

- [`@eslint/js`](https://github.com/eslint/eslint) recommended rules
- [`@typescript-eslint`](https://typescript-eslint.io) for TypeScript files, including type-aware rules
- [`@stylistic`](https://eslint.style) for formatting
- [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) for import ordering
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) + [`react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) + [`react-refresh`](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
- [`eslint-plugin-modules-newlines`](https://github.com/pathsage/eslint-plugin-modules-newlines) for consistent multiline imports/exports

# Pollen

TypeScript linter + formatter, based on ESLint &amp; Prettier

## Usage

Add as a dependency, along with peer dependencies:

```bash
pnpm add -D @still-forest/pollen eslint prettier typescript --save-exact
```

### Configure package.json

Add scripts to your `package.json` file, e.g.:

```jsonc
// package.json
"scripts": {
  "format": "prettier --write .",
  "lint": "eslint --ext .js,.ts .",
  "lint:ci": "eslint --ext .js,.ts --quiet .",
  "lint:fix": "eslint --ext .js,.ts --fix .",
}
```

### Configure ESLint

Add a `eslint.config.js|mjs` file with:

```js
// Base config (JS/TS)
export { base as default } from "@still-forest/pollen";

// React config (base + JSX/TSX + React)
export { react as default } from "@still-forest/pollen";
```

### Configure Prettier

#### Option 1: package.json reference

```jsonc
// package.json
"prettier": "@still-forest/pollen/prettier"
```

#### Option 2: ES module

Add a `prettier.config.js|mjs` file with:

```js
export { prettier as default } from "@still-forest/pollen";
```

## Local testing

Test this package in a local downstream project with `npm pack`

### Pack this package (pollen)

```bash
pnpm pack
```

### Install downstream

Taking note of the `.tgz` file (likely named with the format `still-forest-pollen-1.2.3.tgz`), install it:

```bash
# From another repo, install with:
pn add ~/Development/pollen/still-forest-pollen-0.1.0.tgz
```

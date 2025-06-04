# Pollen

TypeScript linter + formatter, based on ESLint &amp; Prettier

## Usage

Add as a dependency:

```bash
pnpm add -D @still-forest/pollen --save-exact
```

### Configure ESLint

Add a `eslint.config.js|mjs` file with:

```js
export { eslintConfig as default } "@still-forest/pollen";
```

### Configure Prettier

#### Option 1: package.json reference

```jsonc
// in package.json
"prettier": "@yourname/lint-config/prettier"
```

#### Option 2: ES module

Add a `prettier.config.js|mjs` file with:

```js
export { prettierConfig as default } "@still-forest/pollen";
```

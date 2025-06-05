import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(tseslint.configs.recommended, {
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
  },
  ...prettier,
});

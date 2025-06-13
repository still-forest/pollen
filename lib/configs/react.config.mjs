import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default tseslint.config(tseslint.configs.recommended, {
  files: ["**/*.{ts,tsx,js,jsx}"],
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    "@typescript-eslint/consistent-type-assertions": "off",
    "react/prop-types": "off", // Using TypeScript for prop validation
  },
  ...prettier,
});

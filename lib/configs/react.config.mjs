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
    "@typescript-eslint/consistent-type-assertions": "off",
    "react/prop-types": "off", // Using TypeScript for prop validation
    ...reactHooks.configs.recommended.rules,
  },
  ...prettier,
});

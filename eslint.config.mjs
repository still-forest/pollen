import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  // Base configuration for all files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    rules: {
      // Recommended rules
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      ...typescript.configs["recommended-requiring-type-checking"].rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Custom rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "react/react-in-jsx-scope": "off", // React 17+
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Specific overrides for different file types
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      // Disable TypeScript-specific rules for JS files
      "@typescript-eslint/no-var-requires": "off",
    },
  },

  // Config files
  {
    files: ["*.config.{js,ts}", ".eslintrc.{js,ts}"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },

  // Test files
  {
    files: ["**/*.test.{js,ts,tsx}", "**/*.spec.{js,ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // Prettier must be last to override conflicting rules
  prettier,
];

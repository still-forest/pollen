// local config
import { base } from "./lib/index.mjs";

export default [
  ...base,
  {
    files: ["**/*.mjs"],
    rules: {
      // Relax some rules for config files
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      // Turn off most rules for declaration files
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

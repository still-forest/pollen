declare module "@still-forest/pollen" {
  import type { ESLint } from "eslint";
  import type { Config as PrettierConfig } from "prettier";

  export const base: ESLint.ConfigData[];
  export const typescript: ESLint.ConfigData[];
  export const react: ESLint.ConfigData[];
  export const node: ESLint.ConfigData[];
  export const prettier: PrettierConfig;
}

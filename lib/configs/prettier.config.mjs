const config = {
  semi: true, // semicolons
  singleQuote: false, // double quotes
  arrowParens: "always", // always add parentheses to arrow functions
  useTabs: false, // use spaces for indentation
  tabWidth: 2, // 2 spaces for indentation
  trailingComma: "es5", // es5 trailing comma
  printWidth: 120, // 120 characters for line length
};

export const prettierWithTailwind = {
  ...config,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;

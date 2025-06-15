/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: "es5",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // needs to be last
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

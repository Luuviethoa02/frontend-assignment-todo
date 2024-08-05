/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  "endOfLine": "auto"
}

module.exports = config

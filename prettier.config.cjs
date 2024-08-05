/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: false,
  quoteProps: 'consistent',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}

module.exports = config

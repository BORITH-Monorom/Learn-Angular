import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode : 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
  plugin(function ({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.2xl') },
      'h2': { fontSize: theme('fontSize.xl') },
      'h3': { fontSize: theme('fontSize.lg') },
      'h4': { fontSize: theme('fontSize.md') },
      'h5': { fontSize: theme('fontSize.sm') },
      'h6': { fontSize: theme('fontSize.xs') },
    })
  })
  ]
}





// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./src/**/*.{html,ts}",
// ]
// export const darkMode = 'class'
// export const safelist = []
// export const theme = {
//   colors:{
//           // Light theme colors
//           'primary': '#2577c1',
//           'secondary-bg': '#fff',
//           'theme': '#fff',
//           'header-color': '#c23fe2',
//           'route-link-active': '#fff',
//           'link-color': '#555050',
//           'border-color': '#555050',

//           // Dark theme colors
//           'dark-primary': '#ff500b',
//           'dark-secondary-bg': '#424242',
//           'dark-theme': '#424242',
//           'dark-header-color': '#424242',
//           'dark-route-link-active': '#ff500b',
//           'dark-link-color': '#fff',
//           'dark-border-color': '#1cd61c',
//   },
//   extend: {},
// }

// export const plugins = [
//   plugin(function ({ addBase, theme }) {
//     addBase({
//       'h1': { fontSize: theme('fontSize.2xl') },
//       'h2': { fontSize: theme('fontSize.xl') },
//       'h3': { fontSize: theme('fontSize.lg') },
//       'h4': { fontSize: theme('fontSize.md') },
//       'h5': { fontSize: theme('fontSize.sm') },
//       'h6': { fontSize: theme('fontSize.xs') },
//     })
//   }
//   )
// ]


/** @type {import('tailwindcss').Config} */
module.exports = { content: [ './app/**/*.{html,js,jsx}', './pages/blog/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}', './sections/**/*.{html,js,jsx}', './styles/**/*.{js,jsx}', ],
  mode: 'jit', theme: { extend: {
    colors: {
      'primary-black': '#111111',
      'secondary-white': '#F1E1D1',
      }, transitionTimingFunction: { 'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)', }, }, }, plugins: [], };

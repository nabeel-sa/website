module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:next/recommended",
    "airbnb",
  ],
  plugins: ['react', 'react-hooks', 'next', 'import', 'jsx-a11y'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/no-unescaped-entities': 0,
    'eslintreact/no-danger': 0,
  },
};

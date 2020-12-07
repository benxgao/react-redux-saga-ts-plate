import prettierRules from './.prettierrc.json';

module.exports = {
  env: { jest: true, browser: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/prettier",
    'prettier/react'
  ],
  plugins: ['jest', 'prettier'],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    parser: 'babel-eslint', // the typescript-parser for eslint, instead of tslint
    sourceType: 'module', // allow the use of imports statements
    ecmaVersion: 2020, // allow the parsing of modern ecmascript
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/extensions': ['.ts', 'tsx'],
    react: {
      version: "detect"
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierRules],
  },
};

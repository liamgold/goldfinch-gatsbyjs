module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier', 'react'],
      rules: {
        indent: ['error', 2, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/no-explicit-any': 0,
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          { allowExpressions: true },
        ],
      },
    },
  ],
};

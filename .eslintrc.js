module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
      es6: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
    plugins: ['prettier'],
    extends: ['prettier'],
    rules: {
      'prettier/prettier': 2, // Means error
      'import/order': 'off',
      'max-len': ['error', { code: 120 }],
      '@typescript-eslint/no-unused-vars': ['off'],
      indent: 'off',
      semi: 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  }
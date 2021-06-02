const path = require('path');

module.exports = {
  plugins: ['react-hooks', 'relay', 'jest-dom'],
  extends: ['react-app', path.resolve(__dirname, '.eslintrc.js')],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-console': 'error',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ], // Also want to use with ".tsx".
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off', // This rule conflicts with prettier/prettier.
    'react/prop-types': 'off', // Is this incompatible with TS props type?
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off', // Problems with function components.
    'react-hooks/rules-of-hooks': 'error',
  },
};

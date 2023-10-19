module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    __dirname: false,
  },
  rules: {
    'no-undefined': 'warn',
    'no-debugger': 'off',
    'react/no-unknown-property': ['error', { ignore: ['styleName'] }],
    complexity: ['error', { max: 99 }],
    indent: [
      1,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/no-string-refs': 1,
    'no-template-curly-in-string': 1,
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-dupplicate-imports': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'react/no-unsafe': 'off',
    '@typescript-eslint/no-valid-this': 'off',
    'react/jsx-key': 0,
    'no-undef': 0,
  },
};

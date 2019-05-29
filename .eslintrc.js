module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};

const config = require('./tsconfig.json');
const alias = Object.entries(config.compilerOptions.paths).reduce((acc, [key, path]) => {
  acc.push([key, `./${path[0]}`]);
  return acc;
}, []);

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    // 'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'block-scoped-var': 'error',
    curly: 'error',
    'default-case': 'warn',
    eqeqeq: 'error',
    'func-names': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'no-alert': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': 'warn',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-restricted-globals': [
      'error',
      {
        name: '$',
        message: 'The use of jQuery is not allowed',
      },
      {
        name: 'jQuery',
        message: 'The use of JQuery is not allowed',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@material-ui/*'],
      },
    ],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prop-types': [
      'warn',
      {
        skipUndeclared: true,
        ignore: ['classes', 'className', 'children'],
      },
    ],
    'require-await': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['*.stories.[tj]sx'],
      rules: {
        'react/no-multi-comp': 'off',
      },
    },
    {
      files: ['*.config.js', '.eslintrc.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: alias,
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
    },
  },
};

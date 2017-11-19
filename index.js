module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jquery: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  globals: {
    React: false,
    ReactDOM: false,
    _: false,
    $: false,
    renderer: false,
    shallowRenderer: false,
    createClass: false, // from "create-react-class"
    PropTypes: false, // from "prop-types
  },
  plugins: ['react', 'standard', 'jest'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      spread: true,
    },
    sourceType: 'module',
  },
  extends: ['standard', 'plugin:react/recommended'],
  rules: {
    /*
    /   STANDARD overrides (https://standardjs.com/rules.html)
    */
    'comma-dangle': ['error', 'always-multiline'],
    camelcase: ['error', { properties: 'never' }],
    /*
    /   REACT/JSX (https://github.com/yannickcr/eslint-plugin-react#recommended)
    */
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': [0, 'always'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-curly-spacing': [1, 'never'],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-handler-names': [
      1,
      { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' },
    ], // enforce event handler naming conventions
    'react/jsx-indent': [0, 2],
    'react/jsx-max-props-per-line': [0, { maximum: 3 }],
    'react/jsx-no-bind': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-pascal-case': 2,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
    'react/jsx-wrap-multilines': 1,
    'react/no-children-prop': 2,
    'react/no-danger': 0,
    'react/no-unescaped-entities': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 1,
    'react/no-multi-comp': 2,
    'react/no-string-refs': 1,
    'react/no-unused-prop-types': [2, { skipShapeProps: true }],
    'react/prefer-es6-class': [1, 'always'],
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'react/require-optimization': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 2,
    'react/style-prop-object': 2,
    /*
     *   JEST (https: //www.npmjs.com/package/eslint-plugin-jest)
     */
    'jest/no-disabled-tests': 0,
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
  },
}

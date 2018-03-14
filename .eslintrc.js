// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 0,
    'no-new': 'off',
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'semi': [2, 'never'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    "no-var": "error",    
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    '$$': true,
  }
}
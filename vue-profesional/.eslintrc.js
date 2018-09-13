module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'no-tabs': 0,
    'indent': [ 'error' , 'tab'],
    'no-mixed-spaces-and-tabs': 0,
    'no-trailing-spaces': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

module.exports = {
  'extends': 'strict',
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'arrow-body-style': [2, 'as-needed'],
    'camelcase': [2, { properties: 'never' }],
    'comma-dangle': [2, 'never'],
    'id-blacklist': [0],
    'id-length': [2, { 'min': 2, 'max': 26, 'properties': 'never', 'exceptions': ['l', 'r', 'e', 'i', 'x', 'y'] }],
    'id-match': [0],
    'max-len': [2, 140],
    'newline-after-var': [0],
    'no-magic-numbers': [2, { 'ignoreArrayIndexes': true, 'ignore': [-1, 0, 1, 2] }],
    'no-underscore-dangle': [0],
    'no-warning-comments': [1],
    'template-curly-spacing': [2, 'never']
  }
}

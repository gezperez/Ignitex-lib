const { peerDependencies } = require('./package.json')

module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['import', 'react-native', 'simple-import-sort'],
  settings: {
    react: {
      version: '>=16.9.0',
    },
    'import/ignore': ['react-native'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'consistent-return': ['error'],
    curly: ['error', 'all'],
    'import/named': ['error'],
    'import/no-cycle': ['warn'],
    'import/no-duplicates': ['error'],
    'import/no-unresolved': ['error', { ignore: Object.keys(peerDependencies).concat('date-fns/locale/es') }],
    'import/no-named-as-default': ['error'],
    'import/order': 'off',
    'lines-between-class-members': ['error'],
    'no-console': ['error'],
    'no-else-return': ['error'],
    'no-lonely-if': ['error'],
    'no-nested-ternary': ['error'],
    'no-param-reassign': ['warn'],
    'no-restricted-syntax': ['warn'],
    'no-unused-expressions': ['error'],
    'no-unused-vars': ['error'],
    'object-shorthand': ['error'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'react/no-array-index-key': ['warn'],
    'react/jsx-boolean-value': ['error'],
    'react/jsx-wrap-multilines': ['error'],
    'react-native/no-color-literals': ['error'],
    'sort-imports': 'off',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // Packages. `react` related packages come first.
          // Internal packages.
          // Root imports with babel-plugin-root-import (~/).
          // Parent imports. Put `..` last.
          // Other relative imports. Put same-folder imports and `.` last.
          // Side effect imports.
          [
            `^(${require('module').builtinModules.join('|')})(/|$)`,
            '^react',
            '^@?\\w',
            '^(@)(/.*|$)',
            '^~/',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^\\u0000',
          ],
        ],
      },
    ],
  },
}

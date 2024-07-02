module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],
    'import/order': [
      'error',
      {
        'groups': [
          ['builtin'],
          ['external'],
          ['internal'],
          'parent',
          'type',
          'sibling',
          'object',
          'index',
          'unknown'
        ],
        'newlines-between': 'always',
        'pathGroups': [
          {
            'pattern': './**/**.module.less',
            'group': 'unknown',
            'position': 'after'
          }
        ]
      }
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true
      }
    ],
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'react/prop-types': 'off',
    'import/export': 'error',
  },
}

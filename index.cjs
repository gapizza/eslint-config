module.exports = {
  env: {
    browser: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'plugin:lodash/recommended',
    'plugin:mocha/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['tsconfig.*', '.eslintrc.*'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'error',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['mocha', 'lodash', 'sort-keys-fix', 'prefer-arrow'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'callback-return': 'error',
    camelcase: 'warn',
    'capitalized-comments': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'handle-callback-err': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      { devDependencies: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}', '**/*.unit.{js,ts}', '**/*.it.{js,ts}', 'tests/**/*', 'test/**/*'] },
    ],
    'import/prefer-default-export': 'off',
    'lodash/import-scope': ['error', 'member'],
    'lodash/prefer-constant': 'off',
    'lodash/prefer-includes': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-some': 'off',
    'lodash/prefer-startsWith': 'off',
    'lodash/preferred-alias': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 3],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 5],
    'mocha/handle-done-callback': 'error',
    'mocha/max-top-level-suites': 'off',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-hooks-for-single-case': 'off',
    'mocha/no-identical-title': 'error',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',
    'no-console': 'error',
    'no-continue': 'off',
    'no-magic-numbers': [
      'error',
      {
        enforceConst: true,
        ignore: [0, 1],
      },
    ],
    'no-nested-ternary': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-underscore-dangle': 'off',
    'no-useless-call': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        allowStandaloneDeclarations: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        singleReturnOnly: false,
      },
    ],
    'quote-props': ['error', 'as-needed'],
    quotes: ['warn', 'single'],
    'require-jsdoc': 'off',
    strict: ['error', 'global'],
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'valid-jsdoc': 'off',
  },
};

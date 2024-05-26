module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        createDefaultProgram: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@angular-eslint/component-class-suffix': [
          'error',
          {
            suffixes: ['Page', 'Component']
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        'require-await': 'error',
        'no-return-await': 'error',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        quotes: ['error', 'single', { avoidEscape: true }]
      }
    },
    {
      files: ['*.html'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
        'plugin:prettier/recommended'
      ],
      rules: {}
    }
  ]
};

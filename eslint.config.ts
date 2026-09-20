import stylistic from '@stylistic/eslint-plugin'
import storybook from 'eslint-plugin-storybook'
import tseslint from 'typescript-eslint'

const controlFlowStatements = ['if', 'for', 'while', 'switch', 'try'] as const

export default [
  {
    ignores: ['dist/**', 'dist-storybook/**', 'node_modules/**', 'package-lock.json']
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: controlFlowStatements
        },
        {
          blankLine: 'always',
          prev: controlFlowStatements,
          next: '*'
        }
      ]
    }
  },
  ...storybook.configs['flat/recommended']
]

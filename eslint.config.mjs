import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import reactMemo from 'eslint-plugin-react-memo';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: ['*/public', '*/node_modules/*', '*/.next/*', '*/dist/*'],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-memo': reactMemo,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react/display-name': 'off',
      'react-memo/require-usememo': 'error',
      'react-memo/require-memo': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          interfaces: ['signature', 'method', 'constructor', 'field'],
          typeLiterals: ['signature', 'method', 'constructor', 'field'],
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': 'off',
      'no-irregular-whitespace': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      'object-curly-spacing': ['error', 'never'],
      'react/jsx-curly-brace-presence': [2, 'never'],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-sort-props': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
      'jsx-a11y/no-onchange': 'off',
      'jsx-a11y/no-autofocus': 'off',
      '@next/next/no-img-element': 'off',
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];

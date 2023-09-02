import { IBlogPost } from '../../../types/IBlogPost';

const setupAReactApplication: IBlogPost = {
  id: 2,
  title: 'Setup a React Application.',
  description:
    'A streamline process for setting up a React application, including Eslint, Vite and Prettier.',
  body: [
    {
      type: 'subheading',
      content:
        'Create root level folder where the entire project will live on your local machine.',
    },
    { type: 'p', content: 'Run: mkdir projectname (eg. portfolio)' },
    { type: 'subheading', content: 'Create application' },
    { type: 'p', content: 'Run: npm create vite@latest' },
    { type: 'subheading', content: 'Install packages' },
    { type: 'p', content: 'Run: cd portfolio-ui' },
    { type: 'p', content: 'Run: npm i' },
    { type: 'subheading', content: 'Open application' },
    { type: 'p', content: 'Run cd ..' },
    { type: 'p', content: 'Run: code .' },
    { type: 'subheading', content: 'Add Eslint' },
    { type: 'p', content: 'Run: npm i -D eslint' },
    { type: 'p', content: 'Run: npx eslint --init' },
    {
      type: 'ul',
      content: [
        { type: 'li', content: 'To check syntax and find problems' },
        { type: 'li', content: 'Javascript modules (import/export)' },
        { type: 'li', content: 'React' },
        { type: 'li', content: 'Typescript? Yes' },
        { type: 'li', content: 'Where? Browser' },
        { type: 'li', content: 'Config file? Javascript' },
        { type: 'li', content: 'Install? Yes' },
      ],
    },
    {
      type: 'p',
      content: 'Run: npx install-peerdeps --dev eslint-config-airbnb ',
    },
    { type: 'p', content: 'Run: npm i -D eslint-config-airbnb-typescript' },
    {
      type: 'p',
      content: `Add: 'airbnb', 'airbnb/hooks', 'airbnb-typescript' to extends in .eslintrc.cjs (This entry point enables the linting rules for React hooks)`,
    },
    {
      type: 'p',
      content: `8. Add: '.eslintrc.cjs' to include in tsconfig.json`,
    },
    { type: 'p', content: 'Add:' },
    {
      type: 'code',
      content: `parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
}`,
    },
    { type: 'p', content: 'to module.exports in eslintrc.cjs' },
    { type: 'subheading', content: 'Add Prettier' },
    {
      type: 'p',
      content:
        'Run: npm i -D prettier eslint-config-prettier eslint-plugin-prettier',
    },
    {
      type: 'p',
      content: 'Create: .prettierrc.cjs file in root of projects directory',
    },
    { type: 'p', content: 'Add:' },
    {
      type: 'code',
      content: `module.exports = {
    trailingComma: 'all',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    endOfLine: 'auto',
};`,
    },
    { type: 'p', content: 'to .prettierrc.cjs ' },
    {
      type: 'p',
      content: `Add: 'plugin:prettier/recommended' - to extends - in .eslintrc.cjs`,
    },
    { type: 'p', content: `Add: 'prettier' - to  plugins - in .eslintrc.cjs` },
    { type: 'subheading', content: `Extra Eslint rules` },
    {
      type: 'code',
      content: `rules: {
  'react/react-in-jsx-scope': 0,
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  '@typescript-eslint/no-unused-vars': 1,
  '@typescript-eslint/lines-between-class-members': 0,
  'prefer-destructuring': 0,
  'no-unused-vars': 'warn',
  'react/no-array-index-key': 0,
},`,
    },
  ],
};

export default setupAReactApplication;

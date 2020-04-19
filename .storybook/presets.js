module.exports = [
  '@storybook/addon-docs/react/preset',
  {
    name: '@storybook/preset-create-react-app',
    options: {
      tsDocgenLoaderOptions: {}
    }
  },
  '@storybook/addon-knobs/register'
]

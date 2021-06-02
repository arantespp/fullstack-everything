module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    /**
     * @todo Remove this config @see https://github.com/storybookjs/storybook/issues/15067
     */
    reactDocgen: 'none',
  },
};

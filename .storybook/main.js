module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
    ],
    framework: {
      name: '@storybook/nextjs',
      options: {},
    },
    presets: ['@storybook/nextjs/preset'],
  };
  
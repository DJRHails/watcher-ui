const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]]
          }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
          }
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};

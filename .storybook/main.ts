import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Configuration, RuleSetRule } from "webpack";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (webpackConfig) => {
    const config = webpackConfig as Configuration;

    config.resolve = {
      ...config.resolve,
      extensions: [...(config.resolve?.extensions ?? []), ".ts", ".tsx"]
    };

    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: "automatic"
                  }
                }
              }
            }
          }
        } satisfies RuleSetRule
      ]
    };

    return config;
  }
};

export default config;

import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";

const rootDir = process.cwd();

export default {
  entry: path.resolve(rootDir, "src/main.tsx"),
  output: {
    clean: true,
    filename: "assets/[name].[contenthash].js",
    path: path.resolve(rootDir, "dist")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /\.stories\.tsx$/],
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
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "src/assets/index.html")
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 3000
  }
};

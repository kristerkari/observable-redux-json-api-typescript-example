const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const babelLoader = {
  loader: "babel-loader",
  query: {
    babelrc: false,
    presets: ["es2015", "react"],
    plugins: ["react-hot-loader/babel"],
  },
};

const tsLoader = {
  loader: "ts-loader",
  options: {
    compilerOptions: {
      target: "es5",
    },
  },
};

const devSettings = {
  entry: ["react-hot-loader/patch", "./src/browser/index.tsx"],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      files: {
        js: ["main.js"],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [babelLoader, tsLoader],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    mainFields: ["jsnext:main", "browser", "main"],
  },
};

const analyzeSettings = {
  entry: ["./src/browser/index.tsx"],
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [babelLoader, tsLoader],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    mainFields: ["jsnext:main", "browser", "main"],
  },
};

module.exports = process.env.BUNDLE_ANALYZE ? analyzeSettings : devSettings;

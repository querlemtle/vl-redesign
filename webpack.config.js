const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // Configure Webpack for code splitting: https://github.com/webpack/webpack/discussions/15762
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/favicon.svg",
    }),
    new StylelintPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    // https://webpack.js.org/configuration/dev-server/#devserveropen
    open: ["/#/"],
    port: 6060,
    // https://stackoverflow.com/questions/71734070/webpack-5-react-router-v6-blank-page-on-build
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new MiniCssExtractPlugin(),
    ],
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        // `asset` automatically chooses between exporting a data URI and emitting a separate file.
        test: /\.(jpe?g|png|svg|gif|ogg|mp3|mp4|webp|wav)$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  // https://adamrackis.dev/blog/css-modules
                  modules: true,
                  // https://github.com/webpack-contrib/css-loader/issues/228#issuecomment-312885975
                  importLoaders: 1,
                  // https://stackoverflow.com/questions/57899750/error-while-configuring-css-modules-with-webpack
                  modules: {
                    localIdentName: "[local]_[hash:base64:6]",
                  },
                },
              },
            ],
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
          },
        ],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};

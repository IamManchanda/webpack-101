const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = () => ({
  plugins: [
    new MiniCssExtractPlugin(),
    new CompressionWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
});

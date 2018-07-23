const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = () => ({
  output: {
    filename: 'script-[chunkhash].js',
  },
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

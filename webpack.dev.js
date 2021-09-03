const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './images/[name].[hash].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // * order in which the loaders are applied are reversed
        // * here we go from sass-loader to css-loader to style-loader
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

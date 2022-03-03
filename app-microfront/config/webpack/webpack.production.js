const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const jsonminify = require('jsonminify');
const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    ...commonConfig.plugins,
    new BrotliPlugin({
      asset: '[path].gz[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../../public/locales/**/*.json'),
        context: path.resolve(__dirname, '../../public/locales/'),
        to: path.resolve(__dirname, '../../dist/locales/'),
        transform: async function(content) {
          return jsonminify(content.toString());
        }
      }, {
        from: path.resolve(__dirname, '../../public/assets/**/*.*'),
        context: path.resolve(__dirname, '../../public/assets/'),
        to: path.resolve(__dirname, '../../dist/assets/')
      }]
    }),
    new GenerateSW({ include: [/\.js$/, /\.css$/] })
  ]
};

module.exports = config;

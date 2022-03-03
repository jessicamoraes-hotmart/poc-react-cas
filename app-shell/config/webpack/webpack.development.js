const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    contentBase: './public',
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    compress: true,
    historyApiFallback: true,
    hot: true
  }
};

module.exports = config;

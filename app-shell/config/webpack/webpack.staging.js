const productionConfig = require('./webpack.production');

const config = {
  ...productionConfig,
  devtool: 'inline-source-map'
};

module.exports = config;

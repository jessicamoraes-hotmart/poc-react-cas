const config = require('./webpack.production');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.plugins.push(new BundleAnalyzerPlugin());
module.exports = config;

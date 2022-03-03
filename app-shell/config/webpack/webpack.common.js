const path = require('path');
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const shared = require('../../package.json').dependencies;

require('dotenv')
  .config({
    path: path.resolve(__dirname, `../../env/.${process.env.NODE_ENV}`)
  });

const common = {
  entry: './src/app/app.ts',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      app: path.resolve(__dirname, '../../src/app/'),
      components: path.resolve(__dirname, '../../src/components/'),
      modules: path.resolve(__dirname, '../../src/modules/'),
      pages: path.resolve(__dirname, '../../src/pages/'),
      store: path.resolve(__dirname, '../../src/store/'),
      '@cosmos': '@hotmart/cosmos/dist'
    },
    unsafeCache: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false
          }
        }
      },
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfront',
      remotes: {
        microfront: `microfront@//${process.env.APP_HOST}:3001/remoteEntry.js`
      },
      shared
    }),
    new HtmlWebpackPlugin({
      isProd: process.env.NODE_ENV === 'production',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.EnvironmentPlugin([
      'APP_HOST',
      'APP_PORT',
      'AUTH_CLIENT_ID'
    ])
  ]
};

module.exports = common;

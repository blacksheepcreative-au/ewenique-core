// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    style: './src/css/style.css',
    main: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true, // clears old dist files on rebuild
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new BrowserSyncPlugin({
      proxy: 'http://ewenique-blueprint.local', // your LocalWP site URL
      files: ['**/*.php', 'dist/*.css', 'dist/*.js'],
      injectChanges: true,
      open: false,
    }),
  ],
  mode: 'development', // switch to 'production' for live builds
  devtool: 'source-map',
  watch: false, // set to true if you want automatic rebuilds
};
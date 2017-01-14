var autoprefixer = require('autoprefixer');
var path         = require('path');
var webpack      = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss-loader',
    },
    {
      test: /\.jpg$/,
      loader: "url-loader?limit=100000&minetype=image/jpg"
    },
    {
      test: /\.png$/,
      loader: "url-loader?limit=10000&minetype=image/png"
    },
    {
      test: /\.svg$/,
      loader: "file-loader"
    }]
  },
  postcss: function () {
    return [ autoprefixer ];
  }
};

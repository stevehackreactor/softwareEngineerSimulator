const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'min.js'
  },
  devServer: {
    contentBase: './views',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [
        path.resolve(__dirname, 'node_modules/')
      ],
      use: ['babel-loader']
    }]
  }
};
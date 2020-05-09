let path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
          }
      ]
  }
};

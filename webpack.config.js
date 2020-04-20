var path = require('path');

module.exports = {
  mode: 'development',
  entry: './scripts/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

const path = require('path')

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '__build__.js'
  },
  devServer: {
    contentBase: 'js'
  }
}

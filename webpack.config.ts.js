const path = require('path')

module.exports = {
  entry: './ts/main.ts',
  output: {
    path: path.resolve(__dirname, 'ts'),
    filename: '__build__.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  devServer: {
    contentBase: 'ts'
  }
}

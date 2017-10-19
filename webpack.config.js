const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [new HTMLWebpackPlugin({
    template: './src/template.html'
  })]
}
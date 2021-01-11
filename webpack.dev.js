const path    = require('path')
const { merge }   = require('webpack-merge')
const common  = require('./webpack.config.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8080,
    host: "localhost",
    hot: true
  }
})

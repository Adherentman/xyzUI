const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')

// 开发环境
const devConfig = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  // 开发中Server
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './dist')
  }
})

module.exports = devConfig

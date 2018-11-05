const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './packages/typography/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'xyz-ui-typography',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            'targets': {
              'browsers': [
                'last 2 versions',
                'Firefox ESR',
                '> 1%',
                'ie >= 9',
                'iOS >= 8',
                'Android >= 4'
              ]
            }
          }],
          '@babel/preset-react'],
          plugins: [
            'emotion',
            '@babel/plugin-proposal-object-rest-spread'
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          // creates style nodes from JS strings
          'css-loader?minimize&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}

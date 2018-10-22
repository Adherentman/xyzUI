const path = require('path')

module.exports = {
	mode: 'development',
	entry: './packages/typography/index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: 'ty',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader?minimize&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS, using Node Sass by default
				],
			}
		],
	},
	externals: {
		React: 'react',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}

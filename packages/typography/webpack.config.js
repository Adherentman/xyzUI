const path = require('path')

module.exports = {
	mode: 'production',
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
					'css-loader', // translates CSS into CommonJS
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

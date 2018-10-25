module.exports = entryName => ({
	filename: 'webpack.config.js',
	contents: `const path = require('path')

module.exports = {
	mode: 'production',
	entry: './packages/${entryName}/index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: '${entryName}',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: ${/\.js$/},
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: ${/\.scss$/},
				use: [
					'style-loader',
					'css-loader?minimize&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
					'sass-loader'
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
`,
})

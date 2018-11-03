const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = {
	mode: 'production',
	entry: './packages/typography/index.ts',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: 'xyz-ui-typography',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					// disable type checker - we will use it in fork plugin
					transpileOnly: true,
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
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [new ForkTsCheckerWebpackPlugin()],
}

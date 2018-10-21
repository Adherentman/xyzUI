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
	externals: {
		React: 'react',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
}

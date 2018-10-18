const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		file: 'xyz-component',
		library: '',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
}

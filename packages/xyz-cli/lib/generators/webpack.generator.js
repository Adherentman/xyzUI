module.exports = (entryName, libraryName) => ({
	filename: 'webpack.config.js',
	contents: `const path = require('path')

module.exports = {
	mode: 'production',
	entry: './packages/${entryName}/index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: '${libraryName}',
		libraryTarget: 'umd',
	},
	externals: {
		React: 'react'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
}
`,
})

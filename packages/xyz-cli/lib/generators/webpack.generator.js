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
	externals: {
		React: 'react'
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
}
`,
})

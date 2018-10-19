module.exports = config => ({
	filename: 'webpack.config.js',
	contents: `const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		file: 'index.js',
		library: '${config}',
		libraryTarget: 'umd',
	},
	externals: {
		React: 'react'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
}
`,
})

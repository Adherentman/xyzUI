const path = require('path');

module.exports = {
	mode: 'production',
	entry: './packages/box/index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: '@xyz-ui/box',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: {
									browsers: [
										'last 2 versions',
										'Firefox ESR',
										'> 1%',
										'ie >= 9',
										'iOS >= 8',
										'Android >= 4',
									],
								},
							},
						],
						'@babel/preset-react',
					],
					plugins: ['emotion', '@babel/plugin-proposal-object-rest-spread'],
				},
				exclude: /node_modules/,
			},
		],
	},
	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
		},
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};

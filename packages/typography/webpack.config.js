// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './packages/typography/index.ts',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'index.js',
		library: 'xyz-ui-typography',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			// ts-loader: convert typescript (es6) to javascript (es6),
			// babel-loader: converts javascript (es6) to javascript (es5)
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env',
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
								}],
								'@babel/preset-react',
							],
							plugins: ['react-hot-loader/babel'],
						},
					},
					{
						loader: 'ts-loader',
						// options: {
						// 	transpileOnly: true,
						// },
					},
				],
			},
			// babel-loader for pure javascript (es6) => javascript (es5)
			{
				test: /\.(jsx?)$/,
				loaders: ['babel'],
				exclude: [/node_modules/],
			},
			{
				test: /\.scss$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					// creates style nodes from JS strings
					'css-loader?minimize&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]', // translates CSS into CommonJS
					'sass-loader', // compiles Sass to CSS, using Node Sass by default
				],
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
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [
		// new ForkTsCheckerWebpackPlugin()
		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
	],
};

const chalk = require('chalk')
const fs = require('fs-extra')

const { log, error } = console
const cwd = process.cwd()

const webpackFile = `const path = require('path')

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
`

async function writeWebpackConfigFile(componentName) {
	try {
		await fs.outputFile(
			`${cwd}/${componentName}/${componentName}.webpack.js`,
			webpackFile
		)
	} catch (err) {
		error(err)
	}
}
async function create(componentName) {
	log(chalk.green(`create ${componentName} Start!`))
	try {
		await fs.ensureDir(`${cwd}/${componentName}`)
		await writeWebpackConfigFile(componentName)
		log(chalk.cyan('Create success'))
	} catch (err) {
		error(err)
	}
}

module.exports = (...args) => create(...args).catch(err => error(err))

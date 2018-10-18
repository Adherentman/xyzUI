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

async function writePackageFile(componentName) {
	const newPkgData = {
		name: `@xyz-ui/${componentName}`,
		version: '0.0.1',
		repository: {
			type: 'git',
			url: 'git+https://github.com/Adherentman/xyzUI',
		},
		dependencies: {
			'prop-types': '^15.6.2',
		},
		peerDependencies: {
			react: '*',
		},
	}

	try {
		log(newPkgData)
		await fs.writeJson(`${cwd}/${componentName}/package.json`, newPkgData)
	} catch (err) {
		error(err)
	}
}

async function create(componentName) {
	log(chalk.green(`create ${componentName} Start!`))
	try {
		await fs.ensureDir(`${cwd}/${componentName}`)
		await writeWebpackConfigFile(componentName)
		await writePackageFile(componentName)
		log(chalk.cyan('Create success'))
	} catch (err) {
		error(err)
	}
}

module.exports = (...args) => create(...args).catch(err => error(err))

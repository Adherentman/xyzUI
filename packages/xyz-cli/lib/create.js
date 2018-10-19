const chalk = require('chalk')
const fsPro = require('fs-extra')
const { writeFile } = require('fs').promises
const pkgData = require('./generators/package.json.generator')
const webPackTpl = require('./generators/webpack.generator')

const { log, error } = console
const cwd = process.cwd()

// async function writeWebpackConfigFile(componentName) {
// 	try {
// 		await fs.outputFile(
// 			`${cwd}/${componentName}/${componentName}.webpack.js`,
// 			webpackFile
// 		)
// 	} catch (err) {
// 		error(err)
// 	}
// }

async function create(componentName) {
	const dirPath = `${cwd}/${componentName}`
	log(chalk.green(`create ${componentName} Start!`))
	try {
		await fsPro.ensureDir(dirPath)
		await writeFile(
			`${dirPath}/${webPackTpl().filename}`,
			webPackTpl(componentName).contents
		)
		await writeFile(
			`${dirPath}/${pkgData().filename}`,
			pkgData(componentName).contents
		)
		log(chalk.cyan('Create success'))
	} catch (err) {
		error(err)
	}
}

module.exports = (...args) => create(...args).catch(err => error(err))

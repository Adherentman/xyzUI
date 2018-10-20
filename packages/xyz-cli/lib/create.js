const fsExtra = require('fs-extra')
const fs = require('fs')
const { writeFile } = require('fs').promises
const chalk = require('chalk')
const inquirer = require('inquirer')
const pkgData = require('./generators/package.json.generator')
const webPackTpl = require('./generators/webpack.generator')
const logger = require('./logger')

const cwd = process.cwd()
const { log, error } = console

async function create(componentName) {
	const dirPath = `${cwd}/${componentName}`
	logger.info('Create', `create ${componentName} Start!`)
	try {
		if (fs.existsSync(dirPath)) {
			log()
			inquirer
				.prompt([
					{
						type: 'confirm',
						name: 'empty',
						message: "This directory isn't empty, empty it?",
						default: true,
					},
				])
				.then(answers => {
					if (!answers.empty) {
						process.exit(0)
					} else {
						log(chalk.bold.cyan('is emptying this directory...'))
						fsExtra.removeSync(dirPath)
						logger.info(
							'Create',
							`empty successful，create ${componentName} Start!`
						)
						fsExtra.ensureDirSync(dirPath)
					}
				})
		} else {
			await fsExtra.ensureDir(dirPath)
		}
		await writeFile(
			`${dirPath}/${webPackTpl().filename}`,
			webPackTpl(componentName).contents
		)
		await writeFile(
			`${dirPath}/${pkgData().filename}`,
			pkgData(componentName).contents
		)
		// logger.success('Create success')
	} catch (err) {
		error(err)
	}
}

module.exports = (...args) => create(...args).catch(err => error(err))

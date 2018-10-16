const chalk = require('chalk')
const fs = require('fs-extra')

const { log, error } = console
const cwd = process.cwd()

async function create(componentName) {
	log(chalk.green(`create ${componentName} Start!`))
	try {
		await fs.ensureDir(`${cwd}/${componentName}`)
		log(chalk.cyan('Create success'))
	} catch (err) {
		error(err)
	}
}

module.exports = (...args) =>
	create(...args).catch((err) => {
		error(err)
	})

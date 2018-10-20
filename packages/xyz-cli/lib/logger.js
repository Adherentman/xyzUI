const chalk = require('chalk')

const { log } = console

/* eslint func-names: ["error", "never"] */
exports.info = function(type, message) {
	log(`${chalk.bold.magenta(type)}: ${message}`)
}

exports.error = function(message) {
	log(chalk.red(message))
	process.exit(1)
}

exports.success = function(message) {
	log(chalk.green(message))
}

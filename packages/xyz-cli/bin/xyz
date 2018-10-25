#!/usr/bin/env node --no-warnings

const chalk = require('chalk')
const semver = require('semver')
const program = require('commander')
const requiredVersion = require('../package.json').engines.node

const { log } = console

function checkNodeVersion(wanted, id) {
	if (!semver.satisfies(process.version, wanted)) {
		log(
			chalk.red(`
			You are using Node ${process.version},
			but this version of ${id} requires Node ${wanted}.
			\nPlease upgrade your Node version.`)
		)
		process.exit(1)
	}
}

// 检查node版本
checkNodeVersion(requiredVersion, 'xyz-cli')

// 定义版本
program.version(require('../package').version).usage('<command> [options]')

program
	.command('create <component-name>')
	.description('create component template')
	.action((name) => {
		/* eslint-disable global-require */
		require('../lib/create')(name)
	})

program.on('--help', () => {
	log()
	log(
		`Run ${chalk.cyan(
			'xyz <command> --help'
		)} for detailed usage of given command.`
	)
	log()
})

program.commands.forEach(c => c.on('--help', () => log()))

program.parse(process.argv)

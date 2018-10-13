#!/usr/bin/env node

const chalk = require('chalk');
const semver = require('semver');
const program = require('commander');
const requiredVersion = require('../package.json').engines.node;
const { log, warn } = console;

function checkNodeVersion (wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, 'xyz-cli')

program
  .version(require('../package').version)
  .usage('<command> [options]')

program
  .command('create <component-name>')
  .description('create component template')

program.on('--help', () => {
  log()
  log(`  Run ${chalk.cyan(`xyz <command> --help`)} for detailed usage of given command.`)
  log()
})

program.commands.forEach(c => c.on('--help', () => log()))

program.parse(process.argv)
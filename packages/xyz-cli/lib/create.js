const fsExtra = require('fs-extra')
const fs = require('fs')
const inquirer = require('inquirer')
const logger = require('./logger')
const templateComponentFile = require('./generators/templateComponentFolder')

const cwd = process.cwd()
const { log, error } = console

async function create (componentName) {
  const dirPath = `${cwd}/${componentName}`

  logger.info('First：', `create ${componentName}!`)

  try {
    if (fs.existsSync(dirPath)) {
      log()
      inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'empty',
            message: "This directory isn't empty, empty it?"
          }
        ])
        .then(async (answers) => {
          if (!answers.empty) {
            process.exit(0)
          } else {
            logger.info('Second：', 'is emptying this directory...')
            await fsExtra.removeSync(dirPath)
            logger.info(
              'Third：',
              `empty successful，Start creating ${componentName} folder!`
            )
            await fsExtra.ensureDirSync(dirPath)
            await templateComponentFile(dirPath, componentName)
          }
        })
    } else {
      await fsExtra.ensureDir(dirPath)
      await templateComponentFile(dirPath, componentName)
    }
  } catch (err) {
    error(err)
  }
}

module.exports = (...args) => create(...args).catch(err => error(err))

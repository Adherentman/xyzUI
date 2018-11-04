const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')
const logger = require('../../utils/logger')
const components = require('../../components.json')

const { log } = console

Object.keys(components).forEach((key) => {
  const filePath = path.join(
    __dirname,
    `../../packages/${key}/webpack.config.js`
  )
  if (fs.existsSync(filePath)) {
    childProcess.execSync(
      `node_modules/.bin/webpack --config ${filePath} --env.dist=false`,
      { stdio: 'inherit' }
    )
    logger.info('Build Component', `${key} successful`)
    log()
    log()
  }
})

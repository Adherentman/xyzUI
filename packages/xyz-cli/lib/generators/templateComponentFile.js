const { writeFile } = require('fs').promises
const pkgData = require('./package.json.generator')
const webPackTpl = require('./webpack.generator')

const { error } = console

module.exports = async (dirPath, componentName) => {
  // webpack.config.js TemplateFile
  await writeFile(
    `${dirPath}/${webPackTpl().filename}`,
    webPackTpl(componentName).contents
  ).catch(err => error(err))
  // package.json TemplateFile
  await writeFile(
    `${dirPath}/${pkgData().filename}`,
    pkgData(componentName).contents
  ).catch(err => error(err))
}

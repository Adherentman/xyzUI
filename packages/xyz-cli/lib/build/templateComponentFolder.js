const { writeFile } = require('fs').promises
const fsExtra = require('fs-extra')
const path = require('path')
const pkgData = require('../generators/package.json.generator')
const webPackTpl = require('../generators/webpack.generator')
const componentTpl = require('../generators/componentFile.generator')
const componentStyleTpl = require('../generators/componentStyle.generator')

const cwd = process.cwd()
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

  // src Folder
  await fsExtra.ensureDir(path.resolve(cwd, `${componentName}/src`)).catch(err => error(err))

  // styles Folder
  await fsExtra.ensureDir(path.resolve(cwd, `${componentName}/styles`)).catch(err => error(err))

  // component TemplateFile
  await writeFile(
    `${dirPath}/src/${componentTpl(componentName).filename}`,
    componentTpl(componentName).contents
  ).catch(err => error(err))

  // componentStyle TemplateFile
  await writeFile(
    `${dirPath}/styles/${componentStyleTpl().filename}`,
    componentStyleTpl(componentName).contents
  ).catch(err => error(err))
}

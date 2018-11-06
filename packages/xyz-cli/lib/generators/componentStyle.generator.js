module.exports = config => ({
  filename: 'style.js',
  contents: `import { css } from 'emotion'

export const ${config}Style = {
  root: css()
}
`
})

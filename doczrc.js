import { css } from 'docz-plugin-css'

export default {
  title: 'Xyz-UI',
  description: 'UI library for React',
  repository: 'https://github.com/Adherentman/xyzUI',
  ordering: 'ascending',
  typescript: true,
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true
    })
  ]
}

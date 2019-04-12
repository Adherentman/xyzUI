import { css } from 'docz-plugin-css'

export default {
  title: 'Xyz-UI',
  description: 'UI library for React',
  repository: 'https://github.com/Adherentman/xyzUI',
  base: '/xyzUI',
  ordering: 'ascending',
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true
    })
  ]
}

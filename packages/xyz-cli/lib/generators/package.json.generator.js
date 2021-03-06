module.exports = config => ({
  filename: 'package.json',
  contents: `{
    "name": "@xyz-ui/${config}",
    "version": "0.0.1",
    "author": "xzh",
    "main": "./lib/index.js",
    "license": "MIT",
    "description": "The self used component library can provide suggestions if it is easy to use.",
    "keywords": [
      "react",
      "react-component",
      "xyz-ui"
    ],
    "repository": {
      "type": "git",
      "url": "git+https://github.com/Adherentman/xyzUI"
    },
    "dependencies": {
      "classnames": "^2.2.6",
      "emotion": "^9.2.12",
      "prop-types": "^15.6.2",
      "react-emotion": "^9.2.12"
    },
    "peerDependencies": {
      "react": ">16.5.2"
    },
    "engines": {
      "node": ">=8.0.0"
    }
  }
`
})

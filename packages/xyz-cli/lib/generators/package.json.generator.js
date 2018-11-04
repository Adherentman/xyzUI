module.exports = config => ({
  filename: 'package.json',
  contents: `{
		"name": "@xyz-ui/${config}",
		"version": "0.0.1",
		"main": "./lib/index.js",
		"module": "./index.ts",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/Adherentman/xyzUI"
		},
		"license": "MIT",
		"dependencies": {
			"classnames": "^2.2.6",
			"prop-types": "^15.6.2"
		},
		"peerDependencies": {
			"react": ">16.5.2"
		}
	}
`
})

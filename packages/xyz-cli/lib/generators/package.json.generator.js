module.exports = config => ({
	filename: 'package.json',
	contents: `{
		"name": "@xyz-ui/${config}",
		"version": "0.0.1",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/Adherentman/xyzUI"
		},
		"dependencies": {
			"prop-types": "^15.6.2"
		},
		"peerDependencies": {
			"react": "*"
		}
	}
`,
})

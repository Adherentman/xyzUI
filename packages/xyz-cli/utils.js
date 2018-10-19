// const fs = require('fs-extra')
const fs = require('fs')
// const { log } = console
// const cwd = process.cwd()

const utils = {
	writeFile(filename, data) {
		return new Promise((resolve, reject) => {
			fs.writeFile(filename, data, err => {
				if (err) reject(err)
			})
		})
	},
}

module.exports = utils

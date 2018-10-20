const fs = require('fs')

function emptyFs(path) {
	let files = []
	let dir = []
	if (fs.existsSync(path)) {
		files = fs.readdirSync(path)
		files.forEach(file => {
			const curPath = `${path}/${file}`
			if (fs.statSync(curPath).isDirectory()) {
				emptyFs(curPath)
			} else {
				fs.unlinkSync(curPath)
			}
		})
		dir = fs.readdirSync(path)
		dir.forEach(dirName => {
			fs.rmdirSync(`${path}/${dirName}`)
		})
	}
}

module.exports = {
	emptyFs,
}

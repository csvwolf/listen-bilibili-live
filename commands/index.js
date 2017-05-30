const fs = require('../libs/fs')
const path = require('path')

const files = fs.readdirSync(__dirname)
let commands = {}

module.exports = files.reduce((obj, file) => {
  const ext = path.extname(file)
  if (ext !== '.js') return obj
  if (file === 'index.js') return obj
  obj[path.basename(file, ext).toUpperCase()] = require(path.resolve(__dirname, file))
  return obj
}, {})

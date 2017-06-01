const { exec } = require('../libs/shell')
const path = require('path')

module.exports = async function(src) {
  return exec(`cp ${path.resolve(src, 'config.json')} ${path.resolve(__dirname, '../config.json')}`)
}

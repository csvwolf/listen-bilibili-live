const { exec } = require('../libs/shell')
const path = require('path')

module.exports = async function(dist) {
  return exec(`cp ${path.resolve(__dirname, '../config.json')} ${path.resolve(dist, 'config.json')}`)
}

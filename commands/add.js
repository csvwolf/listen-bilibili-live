const config = require('../config.json')
const fs = require('../libs/fs')
const path = require('path')

module.exports = async function(rooms) {
  config.rooms.push(...rooms)
  config.rooms = [ ...new Set(config.rooms) ]

  return await fs.writeFile(path.resolve(__dirname, '../config.json'), JSON.stringify(config))
}

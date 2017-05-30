const config = require('../config.json')
const fs = require('../libs/fs')
const path = require('path')

module.exports = async function(rooms) {
  let roomsSet = new Set(config.rooms)
  rooms.forEach(room => roomsSet.delete(room))
  config.rooms = [ ...roomsSet ]

  return await fs.writeFile(path.resolve(__dirname, '../config.json'), JSON.stringify(config))
}

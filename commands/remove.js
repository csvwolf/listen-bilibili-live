const config = require(`${process.cwd()}/config.json`)
const fs = require('../libs/fs')

module.exports = async function(rooms) {
  let roomsSet = new Set(config.rooms)
  rooms.forEach(room => roomsSet.delete(room))
  config.rooms = [ ...roomsSet ]

  return await fs.writeFile(`${process.cwd()}/config.json`, JSON.stringify(config))
}

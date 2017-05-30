const config = require(`${process.cwd()}/config.json`)
const fs = require('../libs/fs')

module.exports = async function(rooms) {
  config.rooms.push(...rooms)
  config.rooms = [ ...new Set(config.rooms) ]

  return await fs.writeFile(`${process.cwd()}/config.json`, JSON.stringify(config))
}

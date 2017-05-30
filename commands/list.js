const config = require(`${process.cwd()}/config.json`)

module.exports = function(subKey) {
  return subKey ? config[subKey] : config
}

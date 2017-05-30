const config = require('../config.json')

module.exports = function(subKey) {
  return subKey ? config[subKey] : config
}

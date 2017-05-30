const axios = require('axios')

module.exports = async function(roomid) {
  return await axios.get('https://api.live.bilibili.com/live/getInfo', {
    params: { roomid }
  });
}

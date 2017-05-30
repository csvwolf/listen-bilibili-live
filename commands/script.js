const fs = require('fs')
const path = require('path')
const sendMail = require('../src/send-mail')
const listenLive = require('../src/listen')
const { mail, rooms } = require(`${process.cwd()}/config.json`)
const logger = require('../src/logger')

module.exports = function() {
  rooms.forEach(LIVE_ID => {
    listenLive(LIVE_ID)
      .then(({ data }) => data.data)
      .then(data => {
        const status = require('../status.json')
        if (status.rooms[LIVE_ID] === data.LIVE_STATUS) {
          logger.info('not changed')
          return {}
        }
        status.rooms[LIVE_ID] = data.LIVE_STATUS
        logger.info('send mail...')
        fs.writeFile(path.resolve(process.cwd(), 'status.json'), JSON.stringify(status), () => '')
        return sendMail(mail, {
          subject: `你所监听的主播 ${data.ANCHOR_NICK_NAME} 状态改变`,
          html: `\
            <h3>${data.ANCHOR_NICK_NAME} 的直播 ${data.LIVE_STATUS === 'LIVE' ? '已开始' : '已结束' }</h3>
            <p>Title: ${data.ROOMTITLE}</p>
            <a href="https://live.bilibili.com/${LIVE_ID}">传送门</a>
          `
        })
      })
      .catch(e => logger.error(e))
  })
}


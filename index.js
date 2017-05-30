const sendMail = require('./send-mail');
const listenLive = require('./listen');
const mailConfig = require('./config.json').mail
const fs = require('fs')
const path = require('path')

const LIVE_ID = 691468

listenLive(LIVE_ID)
  .then(({ data }) => data.data)
  .then(data => {
    const status = require('./status.json')
    if (status.rooms[LIVE_ID] === data.LIVE_STATUS) {
      console.log(new Date(), 'not changed')
      return {}
    }
    status.rooms[LIVE_ID] = data.LIVE_STATUS
    console.log(new Date(), 'send mail...')
    fs.writeFile(path.resolve('.') + '/status.json', JSON.stringify(status), () => '')
    return sendMail(mailConfig, {
      subject: `你所监听的主播 ${data.ANCHOR_NICK_NAME} 状态改变`,
      html: `\
        <h3>${data.ANCHOR_NICK_NAME} 的直播 ${data.LIVE_STATUS === 'LIVE' ? '已开始' : '已结束' }</h3>
        <p>Title: ${data.ROOMTITLE}</p>
        <a href="https://live.bilibili.com/${LIVE_ID}">传送门</a>
      `
    })
  })
  .catch(e => console.log(e))

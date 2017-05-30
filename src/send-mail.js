const nodemailer = require('nodemailer')

const _sendMail = function(_transporter, mailOptions) {
  return new Promise((resolve, reject) => {
    _transporter.sendMail(mailOptions, (error, info) => {
      if (error) reject(error)
      resolve(info)
    })
  })
}

module.exports = async function(config, { subject, html, to }) {
  let transporter = nodemailer.createTransport({
    service: config.service,
    auth: config.auth
  })

  let mailOptions = {
    from: `"${config.from}" <${config.auth.user}>`,
    to: to || config.to,
    subject: subject || config.subject,
    html: html || config.html
  }

  return await _sendMail(transporter, mailOptions)
}

const inquirer = require('inquirer')
const { services } = require('./mail-services.json')
const fs = require('../libs/fs')

module.exports = async function() {
  let result = await inquirer.prompt([{
    type: 'list',
    name: 'mail.service',
    message: 'What Mail Service you want to use:',
    default: 'QQ',
    choices: services
  }, {
    type: 'input',
    name: 'mail.auth.user',
    message: 'Username:'
  }, {
    type: 'password',
    name: 'mail.auth.pass',
    message: 'Password:'
  }, {
    type: 'input',
    name: 'mail.from',
    message: 'The default user name:'
  }, {
    type: 'input',
    name: 'mail.to',
    message: 'The receiver email address:'
  }])

  result.rooms = []

  return await fs.writeFile(`${process.cwd()}/config.json`, JSON.stringify(result))
}



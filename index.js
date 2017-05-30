#!/usr/bin/env node

const program = require('commander')
const packageInfo = require('./package.json')
const CMD = require('./commands/index')

program
  .version(packageInfo.version)

program
  .command('init')
  .description('init the live config')
  .action(() => {
    CMD.INIT()
  })

program
  .command('add [roomids...]')
  .description('add roomids to listen(space to split)')
  .action(roomids => {
    CMD.ADD(roomids)
      .then(() => console.log('添加成功'))
  })

program
  .command('remove [roomids...]')
  .description('remove roomids(space to split)')
  .action(roomids => {
    CMD.REMOVE(roomids)
      .then(() => console.log('删除成功'))
  })

program
  .command('list [config]')
  .description('list config')
  .action(config => {
    console.log(CMD.LIST(config))
  })

program
  .command('run')
  .description('just run the listener once')
  .action(() => {
    CMD.SCRIPT()
  })

program
  .command('task <command>')
  .description('add task to crontab for minute monitor')
  .action(command => {
    CMD.TASK(command)
  })

program.parse(process.argv)

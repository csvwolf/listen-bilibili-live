module.exports = function(method) {
  require('crontab').load((err, crontab) => {
    if (err) throw err
    switch (method) {
      case 'create':
        crontab.create(`${process.execPath} ${path.resolve(__dirname, '../index.js')} run`).minute().every(1)
        console.log('注册完成')
        break
      case 'remove':
        crontab.remove({ command: `${process.execPath} ${path.resolve(__dirname, '../index.js')} run` })
        console.log('删除完毕')
        break
    }

    crontab.save()
  })
}

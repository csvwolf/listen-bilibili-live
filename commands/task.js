module.exports = function(method) {
  require('crontab').load((err, crontab) => {
    if (err) throw err
    switch (method) {
      case 'create':
        crontab.create('bili_live run').minute().every(1)
        console.log('注册完成')
        break
      case 'remove':
        crontab.remove({ command: 'bili_live run' })
        console.log('删除完毕')
        break
    }

    crontab.save()
  })
}

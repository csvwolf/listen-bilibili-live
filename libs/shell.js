const exec = require('child_process').exec

exports.exec = function(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) reject(error)
      resolve(stdout)
    })
  })
}

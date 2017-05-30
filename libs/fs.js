const fs = require('fs')

exports.writeFile = function(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(err)
      resolve()
    })
  })
}

exports.readdir = function(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

exports.readdirSync = fs.readdirSync

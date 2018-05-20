const fs = require('fs')

// 最初级回调函数解决异步问题
function readFile(cb) {
  fs.readFile('./test.json', (err, data) => {
    if (err) return cb(err)
    cb(null, data)
  })
}

readFile((err, data) => {
  if (!err) {
    data = JSON.parse(data)
    console.log('traditional-->', data.name)
  }
})

// 第二阶段:promise另辟蹊径
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

readFileAsync('./test.json')
  .then(data => {
    data = JSON.parse(data)
    console.log('Promise-->', data.name)
  })
  .catch(err => {
    console.error(err)
  })

// 第三阶段:co+generator+promise
const co = require('co')
const util = require('util')

co(function*() {
  let data = yield util.promisify(fs.readFile)('./test.json')
  data = JSON.parse(data)
  console.log('co-->', data.name)
})

// 第四阶段:async打通任督二脉
const readAsync = util.promisify(fs.readFile)
async function init() {
  let data = await readAsync('./test.json')
  data = JSON.parse(data)
  console.log('async-->', data.name)
}
init()

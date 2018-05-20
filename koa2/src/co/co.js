const co = require('co')
const fetch = require('node-fetch')

co(function*() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary

  console.log('co-->', summary)
})

/**
 *
 * @param {generator} 模拟co,在调用co时,代码被逐步执行
 */
function run(generator) {
  const iterator = generator()
  const it = iterator.next()
  const promise = it.value

  promise.then(data => {
    const it2 = iterator.next(data)
    const promise2 = it2.value
    promise2.then(data2 => {
      iterator.next(data2)
    })
  })
}

run(function*() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843')
  const movie = yield res.json()
  const summary = movie.summary

  console.log('run-->', summary)
})

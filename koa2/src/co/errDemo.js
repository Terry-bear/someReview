const co = require('co')
function* callName(...names) {
  /**
   * UnhandledPromiseRejectionWarning: TypeError: You may only yield a function,
   * promise, generator, array, or object, but the following object was passed: "undefined"
   */
  yield console.log(names[0])
  yield console.log(names[1])
  yield console.log(names[2])
  yield console.log(names[3])
  yield console.log(names[4])
  yield console.log('执行结束了~~~~~~~')
}

var names = ['terry', 'rose', 'jerry', 'monge', 'docker']

// callName(names)
co(callName(names))

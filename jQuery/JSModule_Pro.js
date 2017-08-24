(function () {
  // 私有属性
  var privateName = 'terry\'s privateName'
  // 操作数据的函数
  function eat() {
    console.log('eat by',privateName)
  }
  function sleep() {
    console.log('sleep by', privateName)
  }

  window.JSModule_Pro = {
    eat : eat,
    sleep : sleep
  }
})()

function myModule() {
  // 私有数据
  var myname = 'terry'
  function java() {
    console.log(myname,' is server coder!')
  }

  function javaScript() {
    console.log(myname,' is web coder!')
  }

  // 向外暴露对象，给外部使用的方法
  return {
    java : java,
    javaScript : javaScript
  }
}

//navigator & screen
var ua = navigator.userAgent
var isChrome = ua.index.Of('Chrome')
console.log('isChrome')

console.log(screen.width)
console.log(screen.height)

//location
console.log(location.href)
console.log(location.protocol)	// http https
console.log(location.pathname)	// 路径名
console.log(location.search)
console.log(location.hash)

//history
history.back()
history.forward()

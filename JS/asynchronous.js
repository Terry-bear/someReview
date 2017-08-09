//什么异步
console.log(100)
setTimeout(function(){
	console.log(200)
}, 1000)

console.log(300)


//-----------------
//ajax请求示例
console.log('start')
$.get('./data1/json',function (data1){
	console.log(data1)
})
console.log('end')


//-----------------
//img加载示例
console.log('start')
var img = document.createElement('img')
img.onload = function (){
	console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')


//-----------------
//关于setTimeout的笔试题
console.log(1)
setTimeout(function (){
	console.log(2)
}, 0)
console.log(3)
setTimeout(function (){
	console.log(4)
}, 1000)
console.log(5)
// 1 3 5 2 4
function F1(){
	var a = 100

	// 返回一个函数(函数作为返回值)
	return function(){
		console.log(a)	//自由变量，父作用域寻找
	}
}
//f1得到一个函数
var f1 = F1()
var a = 200
f1()	//100

//--------------
//1. 函数作为返回值
//2. 函数作为参数来传递


function F1(){
	var a = 100
	return function (){
		console.log(a)
	}
}

var f1 = F1()

function F2(fn){
	var a = 200
	fn()
}

F2(f1)	//100

//----------------
//穿件10个<a>标签，点击弹出对应序号
//错误的写法~
var i, a
for(i = 0;i < 10; i++){
	a = document.createElement('a')
	a.innerHTML = i + '<br>'
	a.addEventListener('click', function (e){
		e.preventDefault()
		alert(i)
	})
	document.body.appendChild(a)
}
//结果会使每次点击的a都是9，原因是没有闭包

//修改后
var i
for(i = 0;i < 10;i++){
	(function(i){
		var a = document.createElement('a')
		a.innerHTML = i + '<br>'
		a.addEventListener('click', function (e){
			e.preventDefault()
			alert(i)
		})
		document.body.appendChild(a)
	})(i)
}




//--------------------
//自执行函数：不用调用，只要定义完成，立即执行
(function (i){

}(i))
//闭包实际应用中主要用于封装变量，收敛变量
function isFirstLoad(){
	var _list = []
	return function (id){
		if(_list.indexOf(id) >= 0){
			return false
		} else {
			_list.push(id)
			return true
		}
	}
}

//使用
var firstLoad = isFirstLoad()
firstLoad(10)//true
firstLoad(10)//false
firstLoad(20)//true
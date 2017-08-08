//作用域
//无块级作用域
if(true){
	var name = 'terry'
}
console.log(name)

//函数和全局作用域
var a = 100
function fn(){
	var a = 200
	console.log('fn', a)
}
console.log('global', a)
fn()


//---------------------
//作用域链
var a1 = 100
function fn1(){
	var b =200

	// 当前作用域没有定义的变量，即“自由变量”
	console.log(a)

	console.log(b)
}
fn1()

//--
var a = 100
function F1(){
	var b = 200
 	function F2(){
 		var c = 300
 		console.log(a)
 		console.log(b)
 		//a和b是自由变量
 		console.log(c)
 	}
 	F2()
}
F1()
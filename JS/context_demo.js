//执行上下文
//范围：一段<script>或者一个函数
//全局：变量定义、函数声明
//函数：变量定义、函数声明、this、arguments
console.log(a)	//undefined
var a = 100

fn('terry')	//'terry' 23
function fn(name){
	age = 23
	console.log(name, age)
	var age
}

//------------------------------------
//函数声明和函数表达式
fn1()	//会执行下面的fn
function fn1(){
	console.log('这是一个函数声明，会被提出来')
}

fn2()	//会报错，首先程序会执行一个var fn2 = undefined，所以fn2 是undefined,而不是下面定义的函数
var fn2 = function(){
	console.log('这是一个函数表达式，顺序执行')
}

//---------------
//JS执行上下文声明周期
//1. 先执行arguments; 2. 再执行 function()函数声明；
//3. 再执行 var 变量赋值;

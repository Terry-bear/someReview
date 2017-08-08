//this	--> 要在执行时才能确认值，定义时无法确认
var a = {
	name:'A',
	fn: function(){
		console.log(this.name)
	}
}

a.fn()	//this === a 
a.fn.call({name:'B'})	this === {name:'B'}
var fn1 = a.fn
fn1()	//this === window

//作为构造函数执行
function Foo(name){
	this.name = name
	//return this 	可写可不写
}
var f = new Foo('terry')

//作为对象属性执行
var obj = {
	name:'A',
	printName:function(){
		console.log(this.name)
	}
}
obj.printName()

//作为普通函数执行
function fn(){
	console.log(this)	//this === window
}
fn()

//call apply bind
function fn1(name){
	alert(name)
	console.log(this)
}

fn1.call({x:10},'terry')	//this === {x:10}
fn1.apply({x:10},['terry'])	//数组

var fn2 = function (name){
	alert(name)
	console.log(this)
}.bind({y:200})	//注意：bind只能作用与函数表达式，不能作用于函数声明

fn2({x:10},'terry')




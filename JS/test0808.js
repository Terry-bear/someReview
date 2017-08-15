//typeof打印出来的值是字符串
console.log(typeof(typeof abc));//string
typeof undefined //‘undefined’
typeof 'abc' //‘string’
typeof 123 //’number‘
typeof true // ’boolean‘
typeof {}//’object‘
typeof console.log//'function'
typeof null//’object‘’-->特别注意

100 == '100' //true
0 == '' //true
null == undefined //ture

console.log(10 && 0) //0
console.log('' || 'abc')//abc
console.log(!window.abc)//true

//判断一个变量会被当做true还是false
var a = 100
console.log(!!a)


//问题：何时使用===何时使用==

if(obj.a == null){
	//这里相当于obj.a === null || obj.a === undefined ,简写
	//这是jquery源码中推荐的写法
}

var obj1 = {name: 'TOM'}
var obj2 = obj1
obj2.age = 12
console.log(obj1.age) //12
function fn(obj) {
  obj.name = 'A'
}
fn(obj1)
console.log(obj2.name)  //A

var a = {age: 12}
var b = a
a = {name: 'BOB', age: 13}
b.age = 14
console.log(b.age, a.name, a.age) //14 BOB 13

function fn2(obj) {
  obj = {age: 15}
}
fn2(a)  //当执行了fn2(a)函数后，fn2里面的{age: 15}已经被当做垃圾对象回收了
console.log(a.age, fn2().age) //12 12
//上面的例子可以参考下面这个例子更好理解
a = {name: 'terry', age: 12}
b = {age: 23}
function fn(obj) {
  console.log('赋值前', obj.name)
  obj = {name: 'jolie'}
  console.log('赋值后', obj.name)
}

fn(a) //赋值前terry 赋值后jolie

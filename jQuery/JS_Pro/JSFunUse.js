//函数在多层调用时，变量提升的运行顺序
var funHasName = function funOne() {
  console.log('funOne的第一层')
  return function (){
    console.log('funOne的第二层')
    // 此时调用第二层时返回的是undefined
  }
}
console.log(funNoName()())
function funNoName () {
  console.log('第一层')
  a = '第二层'
  return function () {
    return a
  }
}
console.log('funNoName一个括号时的调用:'+funNoName());
console.log('funNoName两个括号时的调用:'+funNoName()());
console.log('funHasNam一个括号时的调用：'+funHasName());
console.log('funHasName两个括号时的调用：'+funHasName()());

//打印结果
// JSFunUse.js:10 第一层
// JSFunUse.js:8 第二层
// JSFunUse.js:10 第一层
// JSFunUse.js:16 funNoName一个括号时的调用:function () {
//     return a
//   }
// JSFunUse.js:10 第一层
// JSFunUse.js:17 funNoName两个括号时的调用:第二层
// JSFunUse.js:3 funOne的第一层
// JSFunUse.js:18 funHasNam一个括号时的调用：function (){
//     console.log('funOne的第二层')
//   }
// JSFunUse.js:3 funOne的第一层
// JSFunUse.js:5 funOne的第二层
// JSFunUse.js:19 funHasName两个括号时的调用：undefined

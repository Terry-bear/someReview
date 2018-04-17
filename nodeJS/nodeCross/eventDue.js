/**
 * 等待事件队列执行之后调用的三个方法
 */
// 最后执行
setImmediate(() => {
  console.log('setImmediate');
})
// 第二执行
setTimeout(() => {
  console.log('setTimeout');
}, 0);
// 第一执行
process.nextTick(() => {
  console.log('nextTick');
})
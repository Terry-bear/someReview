/**
 * 第一个观察者订阅了多播 Observable
 * 多播 Observable 已连接
 * next 值 0 发送给第一个观察者
 * 第二个观察者订阅了多播 Observable
 * next 值 1 发送给第一个观察者
 * next 值 1 发送给第二个观察者
 * 第一个观察者取消了多播 Observable 的订阅
 * next 值 2 发送给第二个观察者
 * 第二个观察者取消了多播 Observable 的订阅
 * 多播 Observable 的连接已中断(底层进行的操作是取消订阅)
 */

var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);
var subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
// 这里我们应该调用 `connect()`，因为 `multicasted` 的第一个
// 订阅者关心消费值
subscriptionConnect = multicasted.connect();

setTimeout(() => {
  subscription2 = multicasted.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });
}, 600);

setTimeout(() => {
  subscription1.unsubscribe();
}, 1200);

// 这里我们应该取消共享的 Observable 执行的订阅，
// 因为此后 `multicasted` 将不再有订阅者
setTimeout(() => {
  subscription2.unsubscribe();
  subscriptionConnect.unsubscribe(); // 用于共享的 Observable 执行
}, 2000);

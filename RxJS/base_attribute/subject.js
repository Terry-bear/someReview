// *Subject 是一种特殊类型的 Observable
// *它允许将值多播给多个观察者，所以 Subject 是多播的
// *普通的 Observables 是单播的(每个已订阅的观察者都拥有 Observable 的独立执行)。

// ? 为subject添加两个observer
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);
// todo 输出-->
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

// ! 一些特殊的进阶类型
// !Subject：BehaviorSubject、ReplaySubject 和 AsyncSubject

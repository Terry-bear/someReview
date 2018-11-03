// *观察者订阅一个基础的 Subject，然后 Subject 订阅源 Observable 
var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);

// 在底层使用了 `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// 在底层使用了 `source.subscribe(subject)`:
multicasted.connect();

/**
 * multicast 操作符返回一个 Observable，它看起来和普通的 Observable 没什么区别，
 * 但当订阅时就像是 Subject 。multicast 返回的是 ConnectableObservable，
 * 它只是一个有 connect() 方法的 Observable 。
 * connect() 方法十分重要，它决定了何时启动共享的 Observable 执行。
 * 因为 connect() 方法在底层执行了 source.subscribe(subject)，所以它返回的是 Subscription，
 * 你可以取消订阅以取消共享的 Observable 执行。
 */

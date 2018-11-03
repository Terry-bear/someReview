// * Subject 的其中一个变体就是 BehaviorSubject，它有一个“当前值”的概念
// * 它保存了发送给消费者的最新值。
// * 并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。
var subject = new Rx.BehaviorSubject(0); // 0是初始值

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(3);

/**
 * todo 输出-->
 * observerA: 0
 * observerA: 1
 * observerA: 2
 * observerB: 2 BehaviorSubject观测到新的观察者订阅时,会立即接受当前值
 * observerA: 3
 * observerB: 3
 */

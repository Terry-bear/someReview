// * ReplaySubject 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。
// ? ReplaySubject 记录 Observable 执行中的多个值并将其回放给新的订阅者。
var subject = new Rx.ReplaySubject(3); // 为新的订阅者缓冲3个值

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(5);

/**
 * todo 输出-->
 * observerA: 1
 * observerA: 2
 * observerA: 3
 * observerA: 4
 * observerB: 2
 * observerB: 3
 * observerB: 4
 * observerA: 5
 * observerB: 5
 */

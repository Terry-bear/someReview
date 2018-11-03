// * AsyncSubject 只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者
var subject = new Rx.AsyncSubject();

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
subject.complete();

/**
 * todo 输出-->
 * observerA: 5
 * observerB: 5
 */

 // ! AsyncSubject 和 last() 操作符类似，因为它也是等待 complete 通知，以发送一个单个值。

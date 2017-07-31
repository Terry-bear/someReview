var c = 0;
function excu() {
	// 执行一个函数
	console.log('我可以得到通知的那个值为：'+c);
}
function plus(callback) {
	// 异步执行
	setTimeout(function () {
		// 匿名函数
		c += 1;
		callback();
	},1000)
}

plus(excu)
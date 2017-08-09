Date.now()
var dt = new Date()
dt.getTime()
dt.getFullYear()
dt.getMonth()
dt.getDate()
dt.getHours()
dt.getMinutes()
dt.getSeconds()
//都是从0开始




//--------------------
//数组API
//forEach	遍历所有元素
//every		判断所有元素是否都符合条件
//some		判断是否有至少一个元素符合条件
//sort		排序
//map		对元素重新组装，生成新数组
//filter	过滤符合条件的元素

var arr = [1, 2, 3]
arr.forEach(function (item, index){
	//遍历数组的所有元素
	console.log(index, item)
})


var arr = [1, 2, 3]
var result = arr.every(function (item, index){
	//用来判断所有的数组元素，都满足一个条件
	if(item < 4){
		return true
	}
})
console.log(result)


var arr = [1, 2, 3]
var result = arr.some(function (item, index){
	//用来判断所有的数组元素，只有一个满足条件即可
	if(item < 2){
		return true
	}
})
console.log(result)


var arr = [1, 4, 2, 5, 3]
var arr2 = arr.sort(function (a, b){
	//从小到大排序
	return a - b

	//从大到小排序
	//return b - a
})
console.log(arr2)


var arr = [1, 2, 3, 4]
var arr2 = arr.map(function (item, index){
	//将元素重新组装，并返回
	return '<b>' + item + '</b>'
})
console.log(arr2)


var arr = [1, 2, 3]
var arr2 = arr.filter(function (item, index){
	//通过某一个条件过滤数组
	if(item >= 2){
		return true
	}
})
console.log(arr2)


//对象API
var obj = {
	x: 100,
	y: 200,
	z: 300
}
var key
for(key in obj){
	//这里的	hasOwnProperty
	if(obj.hasOwnProperty(key)){
		console.log(key, obj[key])
	}
}
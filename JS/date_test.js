//--------------------------------
//获取2017-08-09格式的日期
function formatDate(dt){
	if(!dt){
		dt = new Date()
	}
	var year = dt.getFullYear()
	var month = dt.getMonth + 1
	var date = dt.getDate()
	if(month < 10){
		//强制类型转化
		month = '0' + month
	}
	if(date < 10){
		//强制类型转换
		date = '0' + date
	}
	//强制类型转化
	return year + '-' + month + '-' + date
}
var dt = new Date()
var formatDate = formatDate(dt)
console.log(formatDate)



//---------------------------------
//获取随机数，要求是长度一致的字符串格式
var random = Math.random()
var random = random + '0000000000'
var random = random.slice(0, 10)
console.log(random)




//---------------------------------
//写一个能遍历对象和数组的forEach函数
function forEach(obj, fn){
	var key
	if(obj instanceof Array){
		//准确判断是不是数组
		obj.forEach(function (item, index){
			fn(index, item)
		})
	} else {
		//不是数组就是对象
		for (key in obj) {
			fn(key, obj[key])
		}
	}
}
var arr = [1, 2, 3]
//注意下列参数顺序换了，为了和对象的key,value遍历一致
forEach(arr, function (index, item) {
	console.log(index, item)
})

var obj = {x: 100, y: 200}
forEach(obj, function (key, value){
	console.log(key, value)
})
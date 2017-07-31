var http = require('http')
var url = 'http://www.imooc.com/learn/348'
var cheerio = require('cheerio')
function filterChapters(html) {
	var $ = cheerio.load(html)
	var chapters = $('.learnchapters')

	// [{
	// 	chapterTitle:'',
	// 	videos:[
	// 		title: '',
	// 		id:''
	// 	]
	// }]

}

http.get(url, function (res) {
	// body...
	var html = ''

	res.on('data', function(data){
		html += data
	})

	res.on('end', function() {
		// body...
		filterChapters(html)
	})
}).on('error', function(){
	console.log('课程数据出错！~~')
})
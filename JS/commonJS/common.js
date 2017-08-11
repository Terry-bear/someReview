// util.js
module.exports = {
	getFormatDate: function (date, type){
		if(type === 1){
			return '2017-08-10'
		} else {
			return '201708010'
		}
	}
}


// a-util.js
var util = require('util.js')
module.exports = {
	aGetFormatDate: function(date){
		return util.getFormatDate(date, 1)
	}
}
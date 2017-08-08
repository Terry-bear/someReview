//原型链实例
function Elem(id){
	this.elem = document.getElementById(id)
}

Elem.prototype.html = function(val){
	var elem = this.elem
	if(elem){
		elem.innerHTML = val
		return this	//链式操作	
	}else{
		return elem.innerHTML
	}
}

Elem.prototype.on = function(type, fn){
	var elem = this.elem
	elem.addEventListener(type, fn)
	return this
}

var div1 = new Elem('div1')
console.log(div1.html())

div1.html('<a>terry so handsome</a>')
div1.on('click', function(){
	alert('you are my honey!~~~~')
})

//链式操作的应用
div1.html('<a>terry so handsome</a>').on('click',function(){
	alert('you are my honey!~~~~')
}).html('<p>javascript</p>')
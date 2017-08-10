//编写一个通用的时间监听函数
//描述事件冒泡流程
//对于一个无限下拉加载图片的页面，如何给每个图片添加绑定事件


//通用事件绑定
var btn = document.getElementById('btn')
btn.addEventListener('click', function (event){
	console.log('clicked')
})

function bindEvent(elem, type, fn){
	elem.addEventListener(type, fn)
}

var a = document.getElementById('link1')
bindEvent(a, 'click', function(e){
	e.preventDefault()	//	阻止默认行为
	alert('clicked')
})

//通用事件绑定进阶
function bindEvent(elem, type, selector, fn){
	if(fn == null){
		fn == selector
		selector = null
	}
	elem.addEventListener(type, function (e){
		var target
		if(selector){
			target = e.target
			if(target.matches(selector)){
				fn.call(target, e)
			}
		} else {
			fn(e)
		}
	})
}
//减少对DOM的操作来加快浏览器渲染速度
var listNode = document.getElementById('list')

// 要插入10个li标签
var frag = document.createDocumentFragment()
var x, li
for(i = 0; i < 10; i++){
	li = document.createElement('li')
	li.innerHTML = 'List item' + i
	frag.appendChild(li)
}

list.appendChild(frag)




//事件节流
var textarea = document.getElementById('text')
var timeoutId
textarea.addEventListener('keyup', function（){
	if(timeoutId){
		clearTimeout(timeoutId)
	}
	timeoutId = setTimeout(function(){
		// 触发change事件
	}, 100)
})
var div1 = document.getElementById('div1')
//添加新节点
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1)	//添加新创建的元素
//	移动已有节点
var p2 = document.getElementById('p2')
div1.appendChild(p2)

//获取父元素和子元素
var div1 = document.getElementById('div1')
var parent = div1.parentElement

var child = div1.childNodes
div1.removeChild(child[0])
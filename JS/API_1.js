var div1 = document.getElementsById('div1')
var divList = document.getElementsByTagName('div')
console.log(divList.lenght)
console.log(divList[0])

//property
var containerList = document.getElementsByClassName('.container')
var pList = document,querySelectorAll('p')
var p = pList[0]
console.log(p.style.width)	//获取样式
p.style.width = '100px'		//修改样式
console.log(p.className)	//获取class
p.className = 'p1'			//修改class

//获取nodeName 和 nodeType
console.log(p.nodeName)
console.log(p.nodeType)

//Attribute
var pList = document.querySelectorAll('p')
var p = pList[0]
p.getAttribute('data-name')
p.getAttribute('data-name', 'terry')
p.getAttribute('style')
p.getAttribute('style', 'font-size:30px;')
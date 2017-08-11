#### 从输入url到得到html的详细过程
`window.onload` 和 `DOMContentLoaded` 的区别
`window.addEventListener('load', function(){
	//页面的全部资源加载完才会执行，包括图片、视频等
})`
`document.addEventListener('DOMContentLoaded', function(){
	//DOM 渲染完即可执行，此时图片、视频还可能没有加载完
})`


##### 加载资源的形式
--输入url（或跳转页面）加载html

--加载html中的静态资源
`<script></script>`


##### 加载一个资源的过程
--浏览器根据DNS服务器得到域名的IP地址
--向这个IP的机器发送http请求
--服务器收到、处理并返回http请求
--浏览器得到返回内容


##### 浏览器渲染页面的过程
--根据HTML结构生成DOM Tree
--根据CSS生成CSSOM
--将DOM和CSSOM整合形成RenderTree
--根据`RenderTree`开始渲染和展示
--遇到`<script>`时，会执行并阻塞渲染

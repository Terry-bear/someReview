# 小程序template模板
	1. <block>配合wx.for循环嵌套template模板使用
	2. 在使用template做循环时,传值要在template模板上写入data="{{item}}"
	3. 模板复用时,样式需导入父级样式中,用@import进行相对路径的导入
	4. 在template模板的data="{{item}}"中,如果使用data="{{...item}}"则可以平铺遍历,template模板中可以直接取值

# 小程序缓存Storage的用法
	1. Storage最大不能超过10MB;

# Swiper效果轮播图

### 如何设置轮播图的样式
	在设置轮播图的样式的时候,如果在image标签里面设置宽高,swiper默认样式会覆盖.
	swiper标签由<swiper>和<swiper-item>组成,<swiper-item>是<swiper>的子集,
	在设置<swiper-item>的标签样式时,需要直接设置<swiper>的样式,<swiper-item>直接继承<swiper>
	<swiper-item>仅可放在<swiper>里面,宽高自动设置成100%

### 小程序页面渲染的顺序
	1. onLoad: 页面加载
	一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
	2. onShow: 页面显示
	每次打开页面都会调用一次。
	3. onReady: 页面初次渲染完成
	一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
	对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
	4. onHide: 页面隐藏
	当navigateTo或底部tab切换时调用。
	5. onUnload: 页面卸载
	当redirectTo或navigateBack的时候调用。

### 小程序事件
	1. 见小程序页面渲染顺序的第四和第五项
	2. 小程序跳转属性可以加入function,分别是success,fail,complete,分别代表跳转的三种状态

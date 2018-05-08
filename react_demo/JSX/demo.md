## 虚拟 DOM

1.  React 提供了一些 API 来创建一种 `特别` 的一般 js 对象
    1.  var element = React.createElement('h1', {id:'myTitle'}, 'hello';
    2.  上面创建的就是一个简单的虚拟 DOM 对象
2.  虚拟 DOM 对象最终都会被 React 转换为真实的 DOM
3.  我们编码时基本只需要操作 react 的虚拟 DOM 相关数据, react 会转换为真实 DOM 变化而更新界面

## JSX

1.  全称: JavaScript XML
2.  react 定义的一种类似于 XML 的 JS 扩展语法: XML+JS
3.  作用: 用来创建 react 虚拟 DOM(元素对象
    1.  var ele = \<h1>Hello JSX! \</h1>;
    2.  注意 1: 它不是字符串, 也不是 HTML/XML 标签
    3.  注意 2: 它最终产生的就是一个 JS 对象
4.  标签名任意: HTML 标签或其它标签
5.  标签属性任意: HTML 标签属性或其它
6.  基本语法规则
    1.  遇到 <开头的代码, 以标签的语法解析: html 同名标签转换为 html 同名元素, 其它标签需要特别解析
    2.  遇到以 { 开头的代码，以 JS 的语法解析: 标签中的 js 代码必须用{}包含
7.  babel.min.js 的作用
    1.  浏览器的 js 引擎是不能直接解析 JSX 语法代码的, 需要 babel 转译为纯 JS 的代码才能运行
    2.  只要用了 JSX，都要加上 type="text/babel", 声明需要 babel 来处理

## 渲染虚拟 DOM(元素

1.  语法: ReactDOM.render(virtualDOM, containerDOM :
2.  作用: 将虚拟 DOM 元素渲染到真实容器 DOM 中显示
3.  参数说明
    1.  参数一: 纯 js 或 jsx 创建的虚拟 dom 对象
    2.  参数二: 用来包含虚拟 DOM 元素的真实 dom 元素对象(一般是一个 div

## 创建虚拟 DOM 的 2 种方式:

1.  纯 JS(一般不用:
    React.createElement('h1', {id:'myTitle'}, title
2.  JSX:


    ```
    <h1 id='myTitle'>{title}</h1>
    ```

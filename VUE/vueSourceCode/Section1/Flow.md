## Flow
> flow-->静态类型检查工具

## Flow 的工作方式
### 通常类型检查分成2中种方式:
* **类型推断:**通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型。
* **类型注解:**事先注释好我们期待的类型，Flow 会基于这些注释来判断。

#### 类型推断
```
/*@flow*/

function split(str) {
  return str.split(' ')
}

split(11)
```
>Flow 检查上述代码后会报错，因为函数 split 期待的参数是字符串，而我们输入了数字。

#### 类型注释
源代码

```
/*@flow*/

function add(x, y){
  return x + y
}

add('Hello', 11)
```

添加注解后

```
/*@flow*/

function add(x: number, y: number): number {
  return x + y
}

add('Hello', 11)
```

>一种类似typeScript的写法

>更多内容参考typescript

## Flow在源码中的应用
在 Vue.js 的主目录下有 `.flowconfig` 文件， 它是 Flow 的配置文件，感兴趣的同学可以看官方文档。这其中的 `[libs]` 部分用来描述包含指定库定义的目录，默认是名为 `flow-typed` 的目录。
这里 `[libs]` 配置的是 `flow`，表示指定的库定义都在 flow 文件夹内。我们打开这个目录，会发现文件如下：

```
flow
├── compiler.js        # 编译相关
├── component.js       # 组件数据结构
├── global-api.js      # Global API 结构
├── modules.js         # 第三方库定义
├── options.js         # 选项相关
├── ssr.js             # 服务端渲染相关
├── vnode.js           # 虚拟 node 相关
```



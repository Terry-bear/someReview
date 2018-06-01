## 计算属性方法
### computed(computed vs methods)
1. 定义在计算属性中的方法和定义在methods方法中没有区别;
2. 然而，不同的是**计算属性是基于它们的依赖进行缓存的。**。
3. 计算属性只有在它的相关依赖发生改变时才会重新求值。
4. 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

### computed(computed vs wacth)
1. watch很容易造成滥用,使用时需要小心.
```
watch使用时
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

```
computed计算方法
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

### 计算属性的中setter
1. 计算属性只提供了getter方法
2. 你可以这么定义
```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

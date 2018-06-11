## JS中迭代方法
### forEach
>forEach让数组中的每一个元素做一件事情
>arr.forEach(function(param){})

### map
>map让数组通过某种计算或者函数产生一个新数组
>map是对原有数组的一次深拷贝,并使每一个元素执行一次函数方法
>var newArr = arr.map(function(param){return param})

### filter
>filter筛选出数组中符合函数条件的元素,并组成新数组
>filter先筛选,后组装
>var newArr = arr.filter(function(param){return param > 3})

### reduce
>reduce让数组中的前一项和后一项执行定义的函数方法,并累计最终值
>var result = arr.reduce(function(before, after){ return before + after})

### every (not important)
>every用法和本身一样
>在自定义的函数方法中是否符合返回值
>var result = arr.every(function(before, after){ return before === null})


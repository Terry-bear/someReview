/**
 * JS 实现深拷贝的方法
 * 第一种 valueCopy, 浅拷贝,值引用,当引用对象改变,影响被引用对象的值
 * 第二种 JSONCopy, 深拷贝,在对象中如果有函数的情况,会将函数去掉
 * 第三种 deepCopy, 实现真正的Obj深拷贝,可以拷贝所有的Obj
 */
var obj = {
    name: 'zh',
    age: 123,
    info: 'i\'m not happy',
    Fn: (name) => {
        console.log('This is a function!'+ name)
    }
}
var valueCopy = obj
var JSONCopy = JSON.parse(JSON.stringify(obj))
var cache = []
function find (list, f) {
    return list.filter(f)[0]
}
function deepCopy (obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })

    return copy
}

let copyObj = deepCopy(obj, cache)
copyObj.name = 'terry'
obj.name = 'tony'
console.log('obj->', obj, '\ncopyObj->', copyObj, '\nvalueCopy->', valueCopy, '\nJSONCopy->', JSONCopy)

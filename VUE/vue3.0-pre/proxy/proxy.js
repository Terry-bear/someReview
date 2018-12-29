// 取代object.defineProperty
// ! 数组在vue中深度监听是需要附加deep属性的
// ? 在性能的实现上,如果能遍历每个对象属性的值,可以大大提高性能和操作

// * proxy是ES6中的新特性,vue2.0没有使用的原因是对浏览器的兼容性欠缺
// * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问
// * 都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

// todo >> 对proxy做一个简单的demo
/**
 * todo target是用Proxy包装的被代理对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
        handler是一个对象，其声明了代理target 的一些操作，其属性是当执行一个操作时定义代理的行为的函数。
        p是代理后的对象。当外界每次对 p 进行操作时，就会执行 handler 对象上的一些方法。
 */
let p = new Proxy(target, handler);

// todo Proxy共有13种劫持操作，handler代理的一些常用的方法有如下几个：
/**
 * get :读取
 * set: 修改
 * 
 * has: 判断对象是否有该属性
 * construct: 构造函数
 */

 // * 用Proxy来定义一个对象的get和set，作为一个基础demo
 let = obj{};
 let handler = {
   get(target, property){
     console.log(`${property}被读取!~`)
     return property in target ? target[property] : 3;
   },
   set(target, property, value){
    console.log(`${property}被设置为${value}~!~`)
    target[property] = value
   }
 }
 let p = new Proxy(obj, handler);
 p.name = 'tom' // ! name 被设置成 tom
 p.age = 3 // ! age 被读取为 3

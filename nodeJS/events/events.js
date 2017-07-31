/**
 * Created by terry on 31/07/2017.
 */
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

function GodnessKiss(who) {
    console.log(who + '得到了女神的吻！')
}

life.on('get things',  function (who) {
    console.log(who + '得到了经验卷轴。')
})
life.on('get things',  function (who) {
    console.log(who + '得到了圣物。')
})
life.on('get things',  function (who) {
    console.log(who + '得到了捕获夹。')
})
life.on('get things',  function (who) {
    console.log(who + '得到了王者水晶。')
})
life.on('get things',  function (who) {
    console.log(who + '得到了药水。')
})
life.on('get things',  function (who) {
    console.log(who + '得到了钥匙。')
})
life.on('get things',  GodnessKiss)

//对一个事件不要超过10个监听器

//设置最大监听
life.setMaxListeners(11)

//移除监听
life.removeListener('get things',GodnessKiss)
// life.removeAllListeners()
life.emit('get things', 'terry')
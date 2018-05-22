const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()

/**
 *
 * @param {*} ctx 上下文
 * @param {*} next 回调方法
 *
 * 每一个await next()方法都是等下一个函数执行完毕以后,才继续向下执行的
 */
const mid1 = async (ctx, next) => {
  ctx.type = 'text/html:chatset=utf-8'
  await next()
}
const mid2 = async (ctx, next) => {
  ctx.body = 'Hi'
  await next()
  ctx.body = ctx.body + ' this is terryzh'
}
const mid3 = async (ctx, next) => {
  ctx.body = `${ctx.body} KOA2`
  await next()
}

/**
 * @method logger() koa的日志组件
 *  <-- GET /
 *  --> GET / 200 10ms 23b
 */
app.use(logger())

app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(2333)

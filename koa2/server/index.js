const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('ctx.href', ctx.href)
  console.log('ctx.path', ctx.path)
  console.log('ctx.url', ctx.url)
  console.log('ctx.method', ctx.method)
  ctx.body = 'hi,girl!'
})

app.listen(2333)

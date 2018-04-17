/**
 * argv
 * argv0
 * execArgv
 * execPath
 * 
 * process 相关
   执行命令：
   node --inspect argv.js --test a=1 b=2
 */

const { argv, argv0, execArgv, execPath } = process

argv.forEach(item => {
  console.log(item)
})

console.log(argv0)

console.log(execArgv)

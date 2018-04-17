// 规整path路径
const { normalize } = require('path')
// console.log(normalize('usr/bin//local'))

// 拼接path路径
const { join } = require('path')
// console.log(join('usr', 'local', 'host'))

// 相对路径解析成绝对路径
const { resolve } = require('path')
// console.log(resolve('./'))

// 查看文件名、文件所在文件夹、扩展名
const { basename, dirname, extname } = require('path')
// const file = 'usr/local/bin/hello.txt'
// basename = 'hello.txt'
// dirname = 'usr/local/bin'
// extname= '.txt'

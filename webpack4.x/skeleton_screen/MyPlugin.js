MyPlugin.prototype.apply = function (compiler) {
  console.log('compiler', compiler)

  compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, cb) => {
      // todo new vue还没有加载时候的index.html样式
      console.log(htmlData.html)

      // todo 预加载的skeleton screen
      htmlData.html = htmlData.html.replace(
        `<div id="app"></div>`,
        `your skeleton screen code`
      )

      // ? 第一个参数是error的捕获
      cb(null, htmlData)
    })
  }
  )
}

module.exports = MyPlugin

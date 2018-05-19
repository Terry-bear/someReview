const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin') //清除之前打包的文件

module.exports = {
  entry: './src/js/entry.js', //入口文件配置
  output: {
    //出口/输出的配置
    filename: 'bundle.js',
    // publicPath : 'dist/js/', //设置为index.html提供资源服务的时候带有强制性
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  //其他参数
  // mode: 'development',    webpack4.0
  devServer: {
    //contentBase: '' //webpack-dev-server默认于服务根路径下的index.html.contentBase可以自定义目录位置
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}

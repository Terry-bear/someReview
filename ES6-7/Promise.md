### Promise基本用法总结
#### 在小程序中,封装了request的API
  ```
  /**
 * 发送请求,graphQL
 * @param httpsPromisify
 * @argument options 调用wx.request方法
 */
function httpsPromisify(options) {
  options = options || {}
  return new Promise((resolve, reject) => {
    options.success = resolve
    options.fail = reject
    wx.request(options)
  })
}
  ```
### 用Promise包裹wx.request
```
 httpsPromisify({
      url: 'http://172.16.105.200:8084/graphql',
      method: 'POST',
      header: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      data: queryJSON
    }).then(
      (value) => {
        console.log('成功调用的值-->',value.data.data)
      }
    ).catch(
      (err) => {
        console.error(err)
      }
    )
```

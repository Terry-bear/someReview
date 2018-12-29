// 渲染todolist列表
const Render = {
  // 初始化
  init: function(arr) {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement('li')
      li.textContent = arr[i]
      fragment.appendChild(li)
    }
    list.appendChild(fragment)
  },
  addList: function(val) {
    const li = document.createElement('li')
    li.textContent = val
    list.appendChild(li)
  }
}

// proxy to add Todolist

const arr = []
// 监听数组
const newArr = new Proxy(arr, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    console.log(target, key, value, receiver)
    if (key !== 'length') {
      Render.addList(value)
    }
    return Reflect.set(target, key, value, receiver)
  }
})

// 初始化
window.onload = function() {
  Render.init(arr)
}

btn.addEventListener('click', function() {
  newArr.push(parseInt(newObj.text))
})

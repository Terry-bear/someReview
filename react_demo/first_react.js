import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    let { arr } = this.props
    return (
      <div>
        {arr.map((index, item) => {
          return <Welcome />
        })}
      </div>
    )
  }
}

// 定义一个组件
function Welcome() {
  return <h2>welcome xxx</h2>
}

let arr = ['terrzh', 'koa', 'express', 'react']

ReactDOM.render(<App arr={arr} />, document.getElementById('example'))

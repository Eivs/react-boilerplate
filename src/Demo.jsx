import React, { Component } from 'react'

class Demo extends Component {
  state = {
    conut: 0,
    test: 'Helo World!'
  }

  handlePlus = () => {
    this.setState(state => ({conut: state.conut + 1}))
  }

  handleMinus = () => {
    this.setState(state => {
      return { conut: state.conut - 1 }
    })
  }

  render () {
    const { conut, test } = this.state
    return (
      <div>
        <h2>{test}</h2>
        <h1>{conut}</h1>
        <div>
          <button onClick={this.handlePlus}>+</button>
          <button onClick={this.handleMinus}>-</button>
        </div>
      </div>
    )
  }
}

export default Demo

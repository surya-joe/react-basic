import React, { Component } from 'react'
import UpdatedCompo from './HocCountFun'

class ClickCounter extends Component {
    
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>Clicked-{count}-Times</button>
      </div>
    )
  }
}

export default UpdatedCompo(ClickCounter,2) 


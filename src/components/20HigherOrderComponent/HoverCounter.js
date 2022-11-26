import React, { Component } from 'react'
import UpdatedCompo from './HocCountFun'

class HoverCounter extends Component {
 
  render() {
    const { count, incrementCount, name } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}> {name}  Hover { count } Times</h2>
      </div>
    )
  }
}

export default UpdatedCompo(HoverCounter,10) 

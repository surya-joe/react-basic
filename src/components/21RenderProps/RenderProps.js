import React, { Component } from 'react'

class RenderProps extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name(false)}</h2>
      </div>
    )
  }
}

export default RenderProps
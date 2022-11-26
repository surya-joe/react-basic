import React, { Component } from 'react'

class RegularCompo extends Component {
  render() {
    console.log('Regular component')
    return (
      <div> 
        <h3> Regular Component </h3>
        <p>{ this.props.name }</p>
      </div>
    )
  }
}

export default RegularCompo
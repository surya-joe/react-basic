import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {
  // type-2
  static contextType=UserContext
  render() {
    return (
      <div>
        Component-B context {this.context}
        <ComponentC />
      </div>
    )
  }
  
}
// type-1
// ComponentB.contextType = UserContext

export default ComponentB
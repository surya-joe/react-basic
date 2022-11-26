import React, { Component } from 'react'
import InputRefClass from './InputRefClass'

export class FocusInputClass extends Component {
    constructor(props) {
      super(props)
    
      this.parentRef = React.createRef()
    }

    clickHandler = () => {
        this.parentRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <h2>Focus Input in class component</h2>
        <InputRefClass ref={this.parentRef}/>
        <button onClick={this.clickHandler}>Focus-Input</button>
      </div>
    )
  }
}

export default FocusInputClass
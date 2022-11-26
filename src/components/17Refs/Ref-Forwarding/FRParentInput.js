import React, { Component } from 'react'
import { FRInut } from './FRInut'

class FRParentInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <h2>Parent Ref</h2>
        <FRInut ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus-Input</button>
      </div>
    )
  }
}

export default FRParentInput
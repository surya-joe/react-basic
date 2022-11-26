import React, { Component } from 'react'

class InputRefClass extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()

    }

    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <h2>InputRefClass</h2>
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}

export default InputRefClass
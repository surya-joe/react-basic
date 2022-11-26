import React, { Component } from 'react'

class FocusInput extends Component {
    constructor(props) {
      super(props)

      this.inputRef = React.createRef()
    
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    handleSubmit = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <h2>Focus Input</h2>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default FocusInput
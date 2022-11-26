import React, { Component } from 'react'

class MessageClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome Visitor'
      }
    }
    
    handleChange () {
        this.setState(
          {
            message: 'Thank You!'
          }
        )
    }

  render() {
    return (
      <div>
        <h2> {this.state.message} </h2>
        <button onClick={ () => this.handleChange() }>
            Change-Message
        </button>
      </div>
    )
  }
}

export default MessageClass
import React, { Component } from 'react'

class ClickEventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome'
      }
    //   Binding the event handler in constructor
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState(
    //         {
    //             message: 'Thank You.'
    //         }
    //     )
    //     console.log(this)
    // }

    // Method-4
    // Function expression in arrow function 
    clickHandler = () => {
        this.setState(
            {
                message: 'Thank You.'
            }
        )
    }

  render() {
    return (
      <div>
        <h2>Click Event Binding</h2>
        <p>
            { this.state.message }
        </p>

        {/* Method-1 */}
        {/* Bind method */}
        {/* <button onClick={ this.clickHandler.bind(this) }> */}

        {/* Method-2 */}
        {/* Arrow function that is a function call  */}
        {/* <button onClick={ () => this.clickHandler() }> */}

        {/* Method-3 */}
        {/* Binding the event handler in constructor */}
        {/* <button onClick={ this.clickHandler }> */}
        
        {/* Function expression in arrow function  */}
        <button onClick={ this.clickHandler }>
            Event-Bind
        </button>
      </div>
    )
  }
}

export default ClickEventBind
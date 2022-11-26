import React, { Component } from 'react'

class RenderPropsCounter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
        console.log('constructor')
    }
  
    incrementCount = () => {
        this.setState(
            prevState => {
            return { count: prevState.count + 1 }
            }
        )
    }
  render() {
    return (
      <div>
        <h2>Render props Common function</h2>
        { this.props.render(this.state.count, this.incrementCount )}
      </div>
    )
  }
}

export default RenderPropsCounter


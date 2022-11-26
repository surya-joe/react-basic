import React, { Component } from 'react'

class CounterClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    incrementCount() {
        // this.setState(
        //     {
        //        count: this.state.count + 1     
        //     }, () => {
        //       console.log('callback function', this.state.count)
        //     }
        // )
        // console.log('call before the setState invoked', this.state.count)

        this.setState(
          (prevState) => (
            {
              count: prevState.count + 1
            }
          )
        )
    }
  render() {
    return (
      <div>
        <h2> Count - {this.state.count} </h2>
        <button onClick={ () => this.incrementCount() }>Increment</button>
      </div>
    )
  }
}

export default CounterClass
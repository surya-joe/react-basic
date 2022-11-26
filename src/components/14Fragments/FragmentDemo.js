import React, { Component } from 'react'

class FragmentDemo extends Component {
  render() {
    return (
    //   <div>
    //     <h1> FragmentDemo </h1>
    //   </div>
    <React.Fragment>
        <h1> FragmentDemo </h1>
        <p>Dom element with React.Fragment</p>
    </React.Fragment>
    )
  }
}

export default FragmentDemo
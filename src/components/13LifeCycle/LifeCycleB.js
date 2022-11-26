import React, { Component } from 'react'

class LifeCycleB extends Component {

    // Method-1
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Surya'
      }
      console.log('lifecycle B constructor')
    }

    // Method-2
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null 
    }
    // Method-4
    componentDidMount() {
        console.log('lifeCycle B ComponentDidMount')
    }

    // Method-3
  render() {
    console.log('LifeCycle B render')
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB
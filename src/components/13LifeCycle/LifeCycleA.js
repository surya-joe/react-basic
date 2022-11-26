import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    // Method-1
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Surya'
      }
      console.log('lifecycle A constructor')
    }

    // Method-2
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null 
    }
    // Method-4
    componentDidMount() {
        console.log('lifeCycle A ComponentDidMount')
    }

    componentDidUpdate(){
        console.log('lifeCycle A ComponentDidUpdate')
        return true 
    }

    get

    // Method-3
  render() {
    console.log('LifecycleA render')
    return (
      <div>
           <p>LifeCycleA</p> 
            <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
import React, { Component } from 'react'

class UpdatingLifeCycleMethodB extends Component {

    // Method-1
    static getDerivedStateFromProps(props, state){
        console.log('UpdatingLifeCycleMethod B getDerivedStateFromProps')
        return null 
    }

    // Method-?
    componentDidMount() {
        console.log('UpdatingLifeCycleMethod B ComponentDidMount')
    }

    // Method-2
    shouldComponentUpdate(){
        console.log('UpdatingLifeCycleMethod B ComponentDidUpdate')
        return true 
    }

    // Method-4
    getSnapshotBeforeUpdate(PrevProps, prevState){
        console.log(' getSnapshotBeforeUpdate B')
        return null
    }

    // Method-5
    componentDidUpdate(){
        console.log('componentDidUpdate B')
    }


    // Method-3
  render() {
    console.log('UpdatingLifeCycleMethodMethod B render')
    return (
      <div>
           <p>UpdatingUpdatingLifeCycleMethodMethod B</p> 
      </div>
    )
  }
}

export default UpdatingLifeCycleMethodB
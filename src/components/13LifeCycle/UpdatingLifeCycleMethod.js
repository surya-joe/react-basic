import React, { Component } from 'react'
import UpdatingLifeCycleMethodB from './UpdatingLifeCycleMethodB'

class UpdatingLifeCycleMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Surya'
      }
    }

    // Method-1
    static getDerivedStateFromProps(props, state){
        console.log('UpdatingLifeCycleMethod A getDerivedStateFromProps')
        return null 
    }

    // Method-?
    componentDidMount() {
        console.log('UpdatingLifeCycleMethod A ComponentDidMount')
    }

    // Method-2
    shouldComponentUpdate(){
        console.log('UpdatingLifeCycleMethod A ComponentDidUpdate')
        return true 
    }

    // Method-4
    getSnapshotBeforeUpdate(PrevProps, prevState){
        console.log(' getSnapshotBeforeUpdate A')
        return null
    }

    // Method-5
    componentDidUpdate(){
        console.log('componentDidUpdate A')
    }

    changeState = () => {
        this.setState(
            {
                name: 'Joe'
            }
        )
    }

    // Method-3
  render() {
    console.log('UpdatingLifeCycleMethodMethod A render')
    return (
      <div>
           <p>UpdatingUpdatingLifeCycleMethodMethod A</p> 
           <p>{this.state.name}</p>
           <button onClick={this.changeState}>Change-Name</button>
            <UpdatingLifeCycleMethodB />
      </div>
    )
  }
}

export default UpdatingLifeCycleMethod
import React, { Component } from 'react'

class GreetDestructurePropsClass extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         place: 'Quience'
      }
    }
    render() {
        const { name, identity } = this.props 
        const { place } = this.state
        
        return(
            <>
                <p> {name} is {identity} from {place} </p>
            </>
        )
    }
}

export default GreetDestructurePropsClass
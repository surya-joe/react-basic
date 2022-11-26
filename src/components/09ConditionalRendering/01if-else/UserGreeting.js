import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

    render() {
        if(this.state.isLoggedIn){
            return(
                <p> Welcome Surya </p>
            )
        } else {
            return(
                <p> Welcome Guest </p>
            )
        }
    }
}

export default UserGreeting
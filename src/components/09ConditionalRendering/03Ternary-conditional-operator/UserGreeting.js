import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

    render() {
        return(
            this.state.isLoggedIn ? <> Welcome BraveStone </> : <> Welcome Guest </>
        )
    }
}

export default UserGreeting
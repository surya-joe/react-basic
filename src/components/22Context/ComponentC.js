import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {
            props => {
                return (
                    <div>
                        Hello {props}
                    </div>
                )
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentC
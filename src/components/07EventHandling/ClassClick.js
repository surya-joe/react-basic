import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Class button Clicked')
    }

  render() {
    return (
      <div>
        <h2>Class Click Event</h2>
        <button onClick={ this.clickHandler }>
            Class-Click-Event
        </button>
      </div>
    )
  }
}

export default ClassClick
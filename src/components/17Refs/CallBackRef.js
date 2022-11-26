import React, { Component } from 'react'

class CallBackRef extends Component {
    constructor(props) {
      super(props)

        this.cbRef = null
        
        this.setCbRef = (element) => {
          this.cbRef = element 
        }
    }

    componentDidMount(){
      if(this.cbRef){
          this.cbRef.focus()
      }
    }

  render() {
    return (
      <div>
        <h2>Callback Ref</h2>
        <input type='text' ref={this.setCbRef} />
      </div>
    )
  }
}

export default CallBackRef
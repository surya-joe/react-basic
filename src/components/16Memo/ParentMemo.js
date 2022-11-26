import React, { PureComponent } from 'react'
import MemoCompo from './MemoCompo'

class ParentMemo extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'steve'
      }
    }

    // componentDidMount() {
    //     setInterval(
    //         () => { this.setState( { name: 'Roger' } ) },
    //         2000
    //     )
    // }
    componentDidMount(){
        setInterval(()=>{
            this.setState(
                { name:'surya' }
            )
        },2000)
    }

  render() {
    console.log('--------------------------------------Parent component-------------------------------')
    return (
      <div>
        <h2> Parent Component </h2>
        <MemoCompo  name={this.state.name} />
      </div>
    )
  }
}

export default ParentMemo
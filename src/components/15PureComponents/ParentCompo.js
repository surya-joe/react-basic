import React, { PureComponent } from 'react'
import PureCompDemo from './PureCompDemo'
import RegularCompo from './RegularCompo'

class ParentCompo extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Surya'
      }
    }

    componentDidMount() {
        setInterval(
            () => { this.setState( { name: 'SuryaJoe' } ) },
            2000
        )
    }
  render() {
    console.log('--------------------------------------Parent component-------------------------------')
    return (
      <div>
        <h2> Parent Component </h2>
        <RegularCompo name={this.state.name} />
        <PureCompDemo name={this.state.name} />
      </div>
    )
  }
}

export default ParentCompo
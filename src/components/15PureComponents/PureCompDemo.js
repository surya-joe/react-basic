import React, { PureComponent } from 'react'

class PureCompDemo extends PureComponent {
  render() {
    console.log('Pure component')
    return (
      <div>
        <h3> Pure Component </h3>
        <p>{ this.props.name }</p>
      </div>
    )
  }
}

export default PureCompDemo
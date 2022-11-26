import React, { Component } from 'react'

class HoverCounterRP extends Component {

  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hover-{count}-Times</h2>
      </div>
    )
  }
}

export default HoverCounterRP

// import React, { Component } from 'react'

// class RenderPropsCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//         count : 0
//         }
//     }
//     incrementCount = () => {
//         this.setState(prevState => {
//             return {count : prevState.count + 1}
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.render(this.state.count, this.incrementCount)}
//             </div>
//         )
//     }
// }
// export default RenderPropsCounter
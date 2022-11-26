import React, { Component } from 'react'

class GreetClassProps extends Component{
    render() {
        return(
            <>
                <h2>{this.props.name} a.k.a {this.props.identity} </h2>
                {this.props.children}
            </>
        )
    }
}

export default GreetClassProps
import React from "react";

// Create a functionality that apply specific task(counter) to more then one components
// this function accept component as argument and returns enhanced function.
const UpdatedCompo = (OriginalCompo, incNum) => {
    class NewCompo extends React.Component{

        constructor(props) {
            super(props)
        
            this.state = {
            count : 0
            }
        }

        incrementCount = () => {
            this.setState(
                (prevState) => {
                    return {count: prevState.count + incNum}
                }
            )
        }

        render(){
            console.log('name as props', this.props.name)
            return (
                <OriginalCompo
                    count={this.state.count}
                    incrementCount = { this.incrementCount }
                    { ...this.props }
                />
            )    
        }
    }
    return NewCompo
}

export default UpdatedCompo
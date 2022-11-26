import React, { Component } from 'react'
import axios from 'axios'

class InputForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userId: '',
        title: '',
        comment: ''
      }
    }
    changeHandler = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.setState)
        // axios.post(url, data-to-be-sent)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(
                r => {
                    console.log(r)
                }
            )
            .catch(
                e => {
                    console.log(e)
                }
            )
    }
    
  render() {
    const { userId, title, comment } = this.state 
    return (
      <div>
        <h2>Input data using POST Request</h2>
        <form onSubmit={this.submitHandler}>
            <input 
                type='text'
                name='userId'
                value={userId}
                onChange={this.changeHandler}
            />
            <input 
                type='text'
                name='title'
                value={title}
                onChange={this.changeHandler}
            />
            <input 
                type='text'
                name='comment'
                value={comment}
                onChange={this.changeHandler}
            />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default InputForm
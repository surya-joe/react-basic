import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userName: '',
        comment: '',
        topic: 'React'
      }
    }

    handleChange = (event) => {
        this.setState(
            { userName: event.target.value }
        )
    }

    handleCommentChange = (e) => {
        this.setState(
            { comment: e.target.value }
        )
    }

    handleTopicChange = (e) => {
        this.setState(
            { topic: e.target.value }
        )
    }

    handleSubmit = (e) => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        e.preventDefault()
    }

  render() {
    const { userName, comment, topic } = this.state
    return (
      <div>
        <h2> Form Component </h2>
        
        <form onSubmit={ this.handleSubmit }>

           <div>
                <label>UserName : </label>
                <input 
                    type='text' 
                    value={userName}
                    onChange={ this.handleChange }
                />
           </div>

           <div>
                <label>Comment : </label>
                <textarea
                    value={comment}
                    onChange={this.handleCommentChange}
                ></textarea>
           </div>

           <div>
                <label>Topic : </label>
                <select
                    value={topic}
                    onChange={ this.handleTopicChange }
                >
                    <option value='Aeact'> React </option>
                    <option value='Angular'> Angular </option>
                    <option value='Vue'> Vue </option>
                </select>
           </div> 

           <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
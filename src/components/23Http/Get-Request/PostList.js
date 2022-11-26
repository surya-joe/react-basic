import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[],
        errorMsg: ''
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                (response) => {
                  console.log(response)
                  this.setState(
                    { posts: response.data }
                  )
                }
            )
            .catch(
              (error) => {
                this.setState( 
                  { errorMsg:'Error retriving data!' } 
                )
                console.log(error)
              }
            )
    }
  render() {
    const { posts, errorMsg } = this.state
    return (
      <div>
        <h2>List fo Posts</h2>
        {
          posts.length ?
          posts.map( post => <div key={post.id}> {post.id}, { post.title } </div> ):
          null
        }
        { errorMsg }
      </div>
    )
  }
}

export default PostList
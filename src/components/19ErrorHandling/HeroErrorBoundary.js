import React, { Component } from 'react'

    class HeroErrorBoundary extends Component {
        constructor(props) {
        super(props)
        
        this.state = {
            hasError:false
        }
        }
        
        static getDerivedStateFromError(error){
            return {
                hasError:true
            }
        }

        componentDidCatch(error, info){
            console.log(error);
            console.log('info-',info);
        }

        render() {
            if(this.state.hasError){
                return <h1>Smonething went wrong</h1>
            }
            return this.props.children
        }
    }

    export default HeroErrorBoundary
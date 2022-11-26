import React from 'react'
import './style.css'

export const ConditionalStyle = (props) => {
    const checkClassName = props.primary ? 'primary' : 'secondary' 
  return (
    <div>
      <p className={checkClassName}>
        Conditional Style
      </p>
    </div>
  )
}

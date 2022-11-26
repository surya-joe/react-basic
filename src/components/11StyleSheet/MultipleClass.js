import React from 'react'
import './style.css'

export const MultipleClass = (props) => {
    const checkClassName = props.secondary ? 'secondary' : '' 
  return (
    <div>
      <p className={ `${checkClassName} font-xl` }>
        Multiple Class Style
      </p>
    </div>
  )
}

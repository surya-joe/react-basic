import React from 'react'

export const GreetProps = (props) => {
  return (
    <div>
        <h2>Welcome {props.name} a.k.a {props.identity}</h2>
        {props.children }
    </div>
  )
}

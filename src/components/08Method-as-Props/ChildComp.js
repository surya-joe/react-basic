import React from 'react'

export const ChildComp = (props) => {
  return (
    <div>
        <h2>Child Component Button</h2>
        <button onClick={
            () => props.greetHandler('Child') 
        }>
            Greet-Parent
        </button>
    </div>
  )
}

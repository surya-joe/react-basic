import React from 'react'

export const FunctionClick = () => {

  const clickHandler = () => {
      console.log('Function button clicked')
  }

  return (
    <div>
        <h2> Function Click Event</h2>
        <button onClick={ clickHandler }>
            Click-Event-Handle
        </button>
    </div>
  )
}

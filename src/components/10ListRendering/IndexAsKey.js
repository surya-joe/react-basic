import React from 'react'

export const IndexAsKey = () => {
  const names = ['Captain', 'Steve', 'Roger', 'Steve']
  const nameList = names.map( 
    (name, index) => (
      <p key={index}> {index}, {name} </p>
    )
  )
  names.push('new')
  console.log(names)

  return (
    <div>
      <>
        Index as key method only works for static array(which is never to be changed)
      </>
      <h2>Index as Key</h2>
      { nameList }
    </div>
  )
}

import React from 'react'

export const Person = props => {
  const { person } = props
  return (
    <div>
        <p>{person.id}, I am {person.name}, working as {person.skill} developer</p>
    </div>
  )
}

import React from 'react'
import { Person } from './Person'

export const NameList = () => {

    const names = ['Tony', 'Steve', 'Thor']
    const nameList =  names.map( name => <h2 key={name}>{ name }</h2> )

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'clark',
            age: 32,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Veu'
        }
    ]
    const personList = persons.map(
        // pass each person as props to parent component
        (person) => <Person key={person.id} person={person} />
    )
            
  return (
    <div>
        <h2> Array using Map() </h2>
        {/* <p>{ names[0] }</p>
        <p>{ names[1] }</p>
        <p>{ names[2] }</p> */}

        { nameList }
        { personList }
    </div>
  )
}

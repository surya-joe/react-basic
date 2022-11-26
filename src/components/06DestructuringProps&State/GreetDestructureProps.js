import React from 'react'

// // method-1
// // destructuring in the parameters 
// export const GreetDestructureProps = ( {name, identity} ) => {
//   return (
//     <div>
//         <h2>Destructure Props</h2>
//         <h3> {name} a.k.a {identity} </h3>
//     </div>
//   )
// }

// method-2 
// destructuring inside function Body
export const GreetDestructureProps = ( props ) => {
  const { name, identity } = props 
  return (
    <div>
        <h2>Destructure Props</h2>
        <h3> {name} a.k.a {identity} </h3>
    </div>
  )
}
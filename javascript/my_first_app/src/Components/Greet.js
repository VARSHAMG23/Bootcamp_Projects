import React from 'react'

const Greet=props=> {
  console.log(props)
  return (
    <div><h1>Name:{props.name}</h1>
    <h1> Marks:{props.marks}</h1>
    </div>
  )
}

export default Greet

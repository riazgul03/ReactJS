import React, { useEffect, useState } from 'react'

function FunctionEffect() {
  let [count, setCount]= useState( 0 )
     
     useEffect( () =>{
        console.log("Hello I am Effect = " + count)
     })
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Update State</button>
    </div>
  )
}

export default FunctionEffect
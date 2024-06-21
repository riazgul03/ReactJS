import React from 'react'
import Student from './Student'

function Students() {
    // const students = ["Adil","Kumar","Prem","Zain"]
    // const numbers = [2,4,6,8];
    // const result = numbers.map(num => <h1>{num = num *2}</h1>)
  const students =[
    {
        name:"Ali",
        age:23
    },
    {
        name:"Kumar",
        age:25
    },
    {
        name:"Prem",
        age:27
    }
  ]
    return (
    <div>
    {students.map(std =><Student std={std}/>)}
    {/* {result} */}
        {/* {students.map(std => <h1>{std}</h1>)}; */}
       {/* {numbers.map(num => <h1>{num = num * 2}</h1>)} */}
    </div>
  )
}

export default Students
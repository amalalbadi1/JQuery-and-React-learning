import React, { useState } from 'react'
import axios from 'axios'
export default function About() {
    const[data,setData]=useState([])
  return (
  <>
  <button onClick={user}>get data</button>
  <ul>
   <ul>
    {data.map((user)=><li>{user.name}</li>)}
   </ul>
  </ul>
  
  </>
  )
  function user(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response.data)
        setData(response.data)
      
    })
  }
}

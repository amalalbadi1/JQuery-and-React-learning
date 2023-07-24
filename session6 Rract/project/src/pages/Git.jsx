import React, { useState } from 'react'
import axios from 'axios'
export default function Git() {
    const[data,setData]=useState("")
  return (
    <>
    <button onClick={git}>get img </button>
    <img src={data}/>
    
    
    </>
  )
  function git(){
    axios.get("https://api.github.com/users/devmohamedamr").then((response)=>{
        console.log(response.data.avatar_url)
        setData(response.data.avatar_url)
      
    })
  }
}

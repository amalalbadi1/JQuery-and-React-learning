import React, { useState } from 'react'

export default function Counter() {
    let [nem,setNem]=useState(0)
  return (
    <>
    <h1>count is :{nem}</h1>
    <button class="btn btn-success" onClick={increment}>increment</button>
    <button class="btn btn-danger" onClick={decrement}>decrement</button>
    </>
  )
  function increment(){
    setNem(++nem)
  }
  function decrement(){
    setNem(--nem)
  }
}

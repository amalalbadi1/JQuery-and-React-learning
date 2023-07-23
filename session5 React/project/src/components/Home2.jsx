


import React, { useState } from 'react'
import User from './User'
export default function Home2() {
    const[user,setUser]=useState([
        {title:"title1",desc:"backend course"},
        {title:"title 2",desc:"frontend course"},
        {title:"title 3",desc:"backend course"},

        
    ])
  return (
    <>
    <div className='container'>
               <div className='row'>
                   {user.map((user)=> <User title={user.title} desc={user.desc} /> )}
               </div>
           </div>
    
   </>
  )
}

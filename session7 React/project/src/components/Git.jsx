import React, { useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
export default function Git() {
  const {register,handleSubmit} = useForm()
  const [git,setGit] = useState([])
return (
  <>
      <form className='form-group' onSubmit={handleSubmit(getAccount)}>
          <input type='text' {...register("user")} placeholder='enter your account' />
          <input type='submit' value='send' />
      </form>

      <img src={git.avatar_url} />
      <h1>{git.name}</h1>
  </>
)

function getAccount(data){
  axios.get(`https://api.github.com/users/${data.user}`).then((resp)=>{
      console.log(resp.data)
      setGit(resp.data)
  })
}
}
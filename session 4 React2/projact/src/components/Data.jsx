import React, { Component } from 'react'

export default class Data extends Component {
constructor(){
    super()
    this.state={
        user: ['amal',"misa",'shakha','hoor'],
       number:[1,2,3,4]
    }
}

  render() {
    let{number}=this.state
    return (
    <>
    <ul>{this.state.user.map((u)=><li>{u}</li>)}</ul>
    <ul>{number.map((n)=><li>{n}</li>)}</ul>
    
    </>
    )
  }
}

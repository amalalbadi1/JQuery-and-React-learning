import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(){
        super()
        this.state={
            name:"Amal"
        }
    }
  render() {
    return (
      <div>
        <button> {this.state.name}</button>
        
      </div>
    )
  }
}

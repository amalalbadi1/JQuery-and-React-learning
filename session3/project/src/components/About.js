import React, { Component } from 'react'

export default class About extends Component {
constructor(){
    super()
    this.state={
        from:"oman"
    }
}

  render() {
    return (
      <h1>{this.state.from}</h1>
    )
  }
}

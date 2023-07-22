import React, { Component } from 'react'

export default class Parcon extends Component {
  render() {
    return (
        <>
        <div className='box'>
            <img src={this.props.img} />
            <div className='circle'></div>
            
           <h5>{this.props.name}</h5>
        </div>



<div className='person'>
            <div className='person-img'>
            <div className='person-social'></div>

            <img src={this.props.img} />
            </div>
            <div className='person-info'>
                <h2>amal albadi</h2>
                <h3>full stack developer</h3>
            </div>
        </div>
        
        <div className='tab'>
        <div className='cir'>

        </div>
        </div>
    </>
    )
  }
}

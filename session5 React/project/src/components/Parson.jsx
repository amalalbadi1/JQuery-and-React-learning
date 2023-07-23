import React, { Component } from 'react'
import img from '../img1.jpg.webp'
import img2 from '../img2.jpg.webp'
import img3 from '../img3.jpg.webp'

export default class parson extends Component {
  render() {
    return (
      <>
      <div className='person'>
            <img src={img} />
            <div className='person-social'></div>
            <div className='person-info'></div>
        </div>
        
      </>
    )
  }
}

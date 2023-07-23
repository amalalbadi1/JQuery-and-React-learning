import React, { Component } from 'react'
import Card from './Card'
import img1 from '../img1.jpg.webp'
import img2 from '../img2.jpg.webp'
import img3 from '../img3.jpg.webp'
import User from './User'

export default class Home extends Component {

    constructor(){
        super()
        this.state={
            cards:[
                {title:"title1",desc:"backend course"},
                {title:"title 2",desc:"frontend course"},
                {title:"title 3",desc:"backend course"},

            ]
        }
        
    }
  render() {
    return (
      <>
       {/* <div className='container'>
                <div className='row'>
                    {this.state.cards.map((card)=> <Card title={card.title} desc={card.desc} /> )}
                </div>
            </div> */}
     
{/*     
    <User title="title1" desc="backend course"/>
     <User title="title2" desc="frontend  course"/>
     <User title="title3" desc="backend course"/>
       */}



      </>
    )
  }
}

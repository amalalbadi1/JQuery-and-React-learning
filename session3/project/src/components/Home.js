import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            color:"red",
            age:26
        }
    }
  render() {
    return (
      <>
<header>
<a href="#" class="logo"></a>
<div class="bx bx-menu"  id="menu-icon"></div>
<ul class="navbar">
    <li><a href="#Home">Home</a></li>
    <li><a href="#About">About me</a></li>
    <li><a href="#services">my Projects</a></li>
    <li><a href="#portfolio">my portfolio</a></li>
    <li><a href="#contact">contact</a></li>
</ul>
</header>


<section class="home" id="home">
    <div class="home-text">
        <h4>Hello</h4>
        <h1>I,M AMAL Al <span> badi</span></h1>
        <h3>full stak Develope</h3>
        <a href="#" class="btn">Hire me</a>
    </div>
 </section>


    
      </>
    )
  }
}

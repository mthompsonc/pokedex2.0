import React, {Component} from 'react';
import poke from './../pokelogo.png';
import './style.css'

class Logo extends Component{
  render(){
    return(
      <img src={poke} alt="logo" className="logo" />
    )
  }
}

export default Logo;
import React, {Component} from 'react';
import poke from './../../pokelogo.png';

class PokeInfo extends Component{
  render(){
    return(
      <img src={poke} alt="logo" />
    )
  }
}

export default PokeInfo;
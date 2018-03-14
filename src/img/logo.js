import React, {Component} from 'react';
import poke from './pokelogo.png';
import './style.css'

const Logo= ()=> (
  <img src={poke} alt="logo" className="logo" />
);

export default Logo;
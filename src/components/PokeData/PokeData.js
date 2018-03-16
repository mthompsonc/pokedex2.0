import React, { Component } from 'react';
import ActionPoke from './../PokeClick'


const url= 'http://pokeapi.salestock.net/api/v2/pokemon/';
const pikachu= 'pikachu';
const charmander= 'charmander';
const squirtle= 'squirtle';
const bulbasaur= 'bulbasaur';


  const PokeClick = () => {
    console.log('hola')
    this.setState({
      name: 'Hola',
    })
  }

class Pokemon extends Component {
    constructor ({poke}) {
    // invoca métodos existenes de un padre (data1, data2)
    super();
    // toma el estado del componente en ese punto de tiempo
    // set.state los puede setear y entregarle datos nuevos
    this.state = {
      name: null,
      id: null,
      img: null,
      abilities: null,
      types: null,
      height: null,
      weight: null,

    }
    console.log('Constructor');
  }

    /* this.setState({
      city: 'Santiago',
      data: data2
    }) */


  componentWillMount() {
    // console.log('ComponentWillMount');
    fetch(`${url}${pikachu}`)
    .then(data => {
      console.log(data);
      return data.json();
    })
    .then(poke_data => {
      const data = poke_data
      this.setState({name: poke_data.name, height: poke_data.height, weight: poke_data.weight, img: poke_data.sprites.front_shiny});
      console.log(this.state.name);
    })
  }


  render() {
    return (
      <div onClick={this.pokeClick}>
      <img src={this.state.img}/>
      <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default Pokemon;
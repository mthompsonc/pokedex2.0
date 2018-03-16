import React, { Component } from 'react';

const url= 'http://pokeapi.salestock.net/api/v2/pokemon/';
const bulbasaur= 'bulbasaur';

class Bulbasaur extends Component {
    constructor ({poke}) {
    super();
    this.state = {
      name: null,
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

    

  componentWillMount() {
    fetch(`${url}${bulbasaur}`)
    .then(data => {
      console.log(data);
      return data.json();
    })
    .then(poke_data => {
      const data = poke_data
      this.setState({
        name: poke_data.name,
        height: poke_data.height,
         weight: poke_data.weight,
         img: poke_data.sprites.front_shiny,
         abilities: poke_data.abilities.map(el => {return el.ability.name}),
         types: data.types.map(el => {return el.ability.name}),
       });
      console.log(this.state.name);
    })
  }
  render() {
    return (
      <div>
      <img src={this.state.img}/>
      <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default Bulbasaur;
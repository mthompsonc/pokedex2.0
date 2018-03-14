import React, { Component } from 'react';


class Pokemon extends Component {
    constructor ({city}) {
    // invoca métodos existenes de un padre (data1, data2)
    super();
    // toma el estado del componente en ese punto de tiempo
    // set.state los puede setear y entregarle datos nuevos
    this.state = {
      name: null,
      description: null,
      height: null,
      weight: null,
      img: null,
      habitat: null,
      evolution: null,

    }
    console.log('Constructor');
  }

    /* this.setState({
      city: 'Santiago',
      data: data2
    }) */

  componentWillMount() {
    // console.log('ComponentWillMount');
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/2/`)
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
      <div>
      <img src={this.state.img}/>
      </div>
    );
  }
}

export default Pokemon;

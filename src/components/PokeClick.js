import React, { Component } from 'react';

function ActionPoke() {
class pokeClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      id: null,
      img: null,
      abilities: null,
      types: null,
      height: null,
      weight: null,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      name: this.props.name,
      id: this.props.id,
      img: this.props.sprites.front_shiny,
      abilities: this.props.abilities.map(el => {return el.ability.name}),
      types: this.props.types.map(el => {return el.type.name}),
      height: this.props.height,
      weight: this.props.weight,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
      <img src={this.state.img}/>
      <h2>{this.state.name}</h2>
      <p>{this.state.height}</p>
      <p>{this.state.weight}</p>
      <ul>{this.state.abilities.map(el => <li key={this.state.id + el}>{el}</li>)}</ul>
      <ul>{this.state.types.map(el => <li key={this.state.id + el}>{el}</li>)}</ul>
      </div>
    );
  }
}

  }
export default ActionPoke
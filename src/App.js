import React, { Component } from 'react';
import logo from './Pokeball-Icon.png';
import './App.css';
import Pokemon from './components/Pokemon'
import Logo from './img/logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <img src={logo} className="isologo" alt="logo" />
          <h1 className="App-title">Welcome to Pokedex-React</h1>
        </header>
        <Pokemon/>
      </div>
        
    );
  }
}

export default App;

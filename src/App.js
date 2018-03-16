import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import logo from './components/PokeImg/Pokeball';
import './App.css';
import Pikachu from './components/PokeData/PokePikachu';
import Bulbasaur from './components/PokeData/PokeBulbasaur';
import Togepi from './components/PokeData/PokeTogepi';
import Charmander from './components/PokeData/PokeCharmander';
import Squirtle from './components/PokeData/PokeSquirtle';
import Eevee from './components/PokeData/PokeEevee';
import Logo from './components/PokeImg/PokeLogo';
import Pokeball from './components/PokeImg/Pokeball';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <Grid>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Logo />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Pokeball />
                </Col>
              </Row>
            </Grid>
          </header>
        </div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Pikachu />
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Bulbasaur />
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Togepi />
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Charmander />
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Squirtle />
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}>
              <Eevee />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
        
    );
  }
}

/*
          <Row>
            <Col xs={12} sm={12} md={3} lg={3}>
            </Col>
          </Row>
*/

export default App;

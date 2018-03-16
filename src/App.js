import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import logo from './components/PokeImg/Pokeball';
import './App.css';
import PokeData from './components/PokeData/PokeData';
import Logo from './components/PokeImg/PokeLogo';
import Pokeball from './components/PokeImg/Pokeball';
import ActionPoke from './components/PokeClick'


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
            <Col xs={12} sm={12} md={3} lg={3}>
            <PokeData />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
            <pokeClick />
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

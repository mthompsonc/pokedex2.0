import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import logo from './img/Pokeball-Icon.png';
import './App.css';
import Pokemon from './components/PokeData/index.js'
import Logo from './img/logo';

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
                  <img src={logo} className="isologo" alt="logo" />
                </Col>
              </Row>
            </Grid>
          </header>
        </div>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3}>
            <Pokemon />
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

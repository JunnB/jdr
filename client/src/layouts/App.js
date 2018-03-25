import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Home from '../containers/HomeContainer';
import Header from '../layouts/Header';
import Game from '../containers/GameContainer';
import Layout from '../layouts/Layout';
import Character from '../containers/CharacterContainer';
import { Grid, Row } from 'react-bootstrap';
//   callApi(`/api/hello`)
//     .then(res => this.setState({ response: res.express }))
//     .catch(err => console.log(err));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Grid>
            <Layout />
            <Row className="show-grid">
              <Header />
            </Row>
            <Row className="">
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/game" render={() => <Game />} />
              <Route exact path="/character" render={() => <Character />} />
            </Row>
          </Grid>
        </Router>
      </Provider>
    );
  }
}

export default App;

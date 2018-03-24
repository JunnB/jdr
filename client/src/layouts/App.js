import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Home from '../components/Home';
import Header from '../layouts/Header';
import Game from '../containers/Game';
import Layout from '../layouts/Layout'
import Character from '../containers/Character';

//   callApi(`/api/hello`)
//     .then(res => this.setState({ response: res.express }))
//     .catch(err => console.log(err));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Layout/>
            <Header />
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/game" render={() => <Game />} />
            <Route exact path="/character" render={() => <Character />} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

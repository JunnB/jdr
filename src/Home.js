import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_ROOT } from './config/api-config';

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(`${API_ROOT}/api/hello`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // Propose au joueur de créer un personnage
  goToForm() {
    if (!this.props.characterCreated) {
      return (
        <Link className="App-btn" to={'/character'}>
          Créer un personnage
        </Link>
      );
    }
  }

  // Propose au joueur de poursuivre la partie
  goToGame() {
    if (this.props.characterCreated) {
      return (
        <Link className="App-btn" to={'/game'}>
          Continuer la partie
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
        {this.goToForm()}
        {this.goToGame()}
      </div>
    );
  }
}

export default Home;

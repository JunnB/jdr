import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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
        <p className="App-intro">Bienvenue dans ce JDR</p>
        {this.goToForm()}
        {this.goToGame()}
      </div>
    );
  }
}

export default Home;

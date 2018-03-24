import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
  // Propose au joueur de créer un personnage
  goToForm() {
    if (!this.props.character.characterCreated) {
      return (
        <Link className="App-btn" to={'/character'}>
          Créer un personnage
        </Link>
      );
    }
  }

  // Propose au joueur de poursuivre la partie
  goToGame() {
    if (this.props.character.characterCreated) {
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
        <p className="App-intro">Bienvenue dans le JDR</p>
        {this.goToForm()}
        {this.goToGame()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.character
  };
}
export default connect(mapStateToProps)(Home);

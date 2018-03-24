import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkButton from '../layouts/LinkButton';

class Home extends Component {
  // Propose au joueur de créer un personnage
  goToForm() {
    if (!this.props.character.characterCreated) {
      return (
        <LinkButton
          to={'/character'}
          label='Créer un personnage'
          className="App-btn"
        />
      );
    }
  }

  // Propose au joueur de poursuivre la partie
  goToGame() {
    if (this.props.character.characterCreated) {
      return (
        <LinkButton
          to={'/game'}
          label='Continuer la partie'
          className="App-btn"
        />
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

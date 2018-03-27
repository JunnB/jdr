import React, { Component } from 'react';
import LinkButton from '../components/shared/LinkButton';
import GenericBlock from '../components/shared/GenericBlock'

class Home extends Component {
  // Propose au joueur de créer un personnage
  goToForm() {
    if (!this.props.character.characterCreated) {
      return (
        <LinkButton
          to={'/character'}
          label="Créer un personnage"
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
          label="Continuer la partie"
          className="App-btn"
        />
      );
    }
  }

  render() {
    return (
      <GenericBlock defaultOpen className='allScreenHeight' title='Bienvenue dans ta plus grande Aventure'>
          <img alt='' src='https://steemitimages.com/0x0/https://extraordinaryaly.files.wordpress.com/2016/03/presstar3.gif?w=276&h=274' className='' />
          {this.goToForm()}
          {this.goToGame()}
      </GenericBlock>
    );
  }
}

export default Home;

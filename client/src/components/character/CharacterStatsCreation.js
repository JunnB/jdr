import React, { Component } from 'react';
import { generateCharacter } from '../../services/Services.js';
import LinkButton from '../shared/LinkButton';

class CharacterStatsCreation extends Component {
  onClick = event => {
    event.preventDefault();
    var character = generateCharacter(this.props.character);
    this.props.createCharacter(character);
  };

  // Renvoie un lien vers le jeu une fois le personnage créé
  displayPlay() {
    if (
      this.props.character.characterCreated &&
      this.props.character.submitted
    ) {
      return (
        <LinkButton style={{marginLeft: 10}} className="App-btn" to={'/game'} label="Jouer"/>
      );
    }
  }

  render() {
    return (
      <div>
        <p>
          <b>Nom : {this.props.character.name}</b>
        </p>
        <p>
          <b>Force : {this.props.character.strenght}</b>
        </p>
        <p>
          <b>Santé : {this.props.character.health}</b>
        </p>
        <p>
          <b>Chance : {this.props.character.luck}</b>
        </p>
        <button className="App-btn" onClick={event => this.onClick(event)}>
          Générer
        </button>
        {this.displayPlay()}
      </div>
    );
  }
}

export default CharacterStatsCreation;

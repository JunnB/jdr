import React, { Component } from 'react';
import { generateCharacter } from '../../services/Services.js';

class CharacterStatsCreation extends Component {
  onClick = event => {
    event.preventDefault();
    var character = generateCharacter(this.props.character);
    this.props.createCharacter(character);
  };

  render() {
    return (
      <div>
        <p>Attribuer de nouvelles caractéristiques :</p>
        <button className="App-btn" onClick={event => this.onClick(event)}>
          Générer
        </button>
        <p>Force : {this.props.character.strenght}</p>
        <p>Santé : {this.props.character.health}</p>
        <p>Chance : {this.props.character.luck}</p>
      </div>
    );
  }
}

export default CharacterStatsCreation;

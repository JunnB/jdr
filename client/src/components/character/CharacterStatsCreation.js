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
      </div>
    );
  }
}

export default CharacterStatsCreation;

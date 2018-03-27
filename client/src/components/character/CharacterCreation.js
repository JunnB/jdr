import React, { Component } from 'react';
import CharacterStatsCreation from './CharacterStatsCreation';
import { saveCharacter } from '../../services/Services.js';
import GenericBlock from '../shared/GenericBlock';

class CharacterCreation extends Component {
  // Affiche un message d'erreur s'il n'y a pas de nom renseigné
  displayWarning() {
    if (this.props.character.submitted && !this.props.character.name) {
      return <p> Vous devez renseigner un nom !</p>;
    }
  }

  // Affiche le formulaire de génération des caracs une fois le nom renseigné
  displayCarac() {
    if (this.props.character.submitted && this.props.character.name) {
      return (
        <CharacterStatsCreation
          createCharacter={character => this.props.createCharacter(character)}
          character={this.props.character}
        />
      );
    } else {
      if (this.props.character.tmpName) {
      } else {
        return <h4>Pas de personnage :(</h4>;
      }

      return (
        <h4>
          Mon personnage sera <b>{this.props.character.tmpName}</b>
        </h4>
      );
    }
  }

  inputOnChange = event => {
    this.props.saveTmpName({ tmpName: event.target.value });
  };

  saveCharacterName = event => {
    event.preventDefault();
    saveCharacter(
      this.props.character.tmpName,
      this.props.character.strenght,
      this.props.character.health,
      this.props.character.luck
    );
    this.props.saveCharacterName(this.props.character.tmpName);
  };

  render() {
    // console.log(this.props.character);
    // console.log(this.props.characterBis);
    return (
      <div className="App">
        <form className="App-form">
          <div className="App-form-group">
            <GenericBlock defaultOpen={true} title='Attribuer de nouvelles caractéristiques'>
              {this.displayCarac()}
            </GenericBlock>
            <div className="allScreenHeight">
              <label htmlFor="name">Nom du personnage :</label>
              <input
                htmlFor="name"
                id="name"
                type="text"
                value={this.props.character.tmpName}
                onChange={this.inputOnChange}
                placeholder="John Snow"
                autocomplete="off"
              />
              <button
                className="App-btn"
                onClick={event => {
                  this.saveCharacterName(event);
                }}
              >
                Nommer
              </button>
              {this.displayWarning()}
              <div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CharacterCreation;

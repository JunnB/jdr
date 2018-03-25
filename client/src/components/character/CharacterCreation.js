import React, { Component } from 'react';
import CharacterStatsCreation from './CharacterStatsCreation';
import { Link } from 'react-router-dom';
import { saveCharacter } from '../../services/Services.js';

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
    }
  }

  // Renvoie un lien vers le jeu une fois le personnage créé
  displayPlay() {
    if (
      this.props.character.characterCreated &&
      this.props.character.submitted
    ) {
      return (
        <Link className="App-btn" to={'/game'}>
          Jouer
        </Link>
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
            <label htmlFor="name">Nom du personnage :</label>
            <input
              htmlFor="name"
              id="name"
              type="text"
              value={this.props.character.tmpName}
              onChange={this.inputOnChange}
              placeholder="John Doe"
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
            {this.displayCarac()}
            {this.displayPlay()}
          </div>
        </form>
      </div>
    );
  }
}

export default CharacterCreation;

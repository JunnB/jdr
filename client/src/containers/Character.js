import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCharacter,generateCharacter } from '../services/Services.js';
import { updateCharacter } from '../actions/actions';

class Character extends Component {
  // Affiche un message d'erreur s'il n'y a pas de nom renseigné
  getWarning() {
    if (this.props.character.submitted && !this.props.character.name) {
      return <p> Vous devez renseigner un nom !</p>;
    }
  }

  // Affiche le formulaire de génération des caracs une fois le nom renseigné
  getCarac() {
    if (this.props.character.submitted && this.props.character.name)
      return (
        <div>
          <p>Attribuer de nouvelles caractéristiques :</p>
          <button
            className="App-btn"
            onClick={event => this.createCharacter(event)}
          >
            Générer
          </button>
          <p>Force : {this.props.character.strenght}</p>
          <p>Santé : {this.props.character.health}</p>
          <p>Chance : {this.props.character.luck}</p>
        </div>
      );
  }

  // Renvoie un lien vers le jeu une fois le personnage créé
  getPlay() {
    if (this.props.character.characterCreated && this.props.character.submitted) {
      return (
        <Link className="App-btn" to={'/game'}>
          Jouer
        </Link>
      );
    }
  }

  // Génération aléatoire des caractéristiques
  createCharacter(event) {
    event.preventDefault();
    var character = generateCharacter(this.props.character);
    this.props.dispatch(updateCharacter(character));
  }

  // Transfert de la valeur temporaire à la valeur finale
  submitForm = event => {
    event.preventDefault();
    var character = Object.assign({}, this.props.character);
    character.name = this.props.character.tmpName
    character.submitted = true
    saveCharacter(character.tmpName,character.strenght,character.health,character.luck);
    this.props.dispatch(updateCharacter(character));
  };

  // Sauvegarde de l'entrée saisie dans l'input
  handleChange = event => {
    var character = Object.assign({}, this.props.character);
    character.tmpName = event.target.value
    this.props.dispatch(updateCharacter(character));
  };

  render() {
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
              onChange={event => this.handleChange(event)}
              placeholder="John Doe"
            />
            <button
              className="App-btn"
              onClick={event => this.submitForm(event)}
            >
              Nommer
            </button>
            {this.getWarning()}
            {this.getCarac()}
            {this.getPlay()}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.character
  };
}
export default connect(mapStateToProps)(Character);

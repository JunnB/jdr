import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Game from './Game';
import Character from './Character.jsx';
import { randomDice, saveCharacter, deleteCharacter } from './Services.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterCreated: false,
      name: '', //Nom du personnage
      tmpName: '', //Nom temporaire
      strenght: 0, //Force du personnage
      health: 0, //Santé du personnage,
      luck: 0 //Santé du personnage
    };
  }

  // Chargement du personnage
  componentDidMount() {
    const name = localStorage.getItem('name');
    const strenght = localStorage.getItem('strenght');
    const health = localStorage.getItem('health');
    const luck = localStorage.getItem('health');

    if (
      name !== null &&
      strenght !== null &&
      health !== null &&
      luck !== null
    ) {
      this.setState({
        characterCreated: true,
        name,
        strenght: parseInt(strenght, 10),
        health: parseInt(health, 10),
        luck: parseInt(luck, 10)
      });
    }
  }

  // Génération aléatoire des caractéristiques
  createCharacter(event) {
    event.preventDefault();
    const strenght = randomDice(7, 12);
    const health = randomDice(14, 24);
    const luck = randomDice(14, 24);

    this.setState({
      characterCreated: true,
      strenght: strenght,
      health: health,
      luck: luck
    });

    saveCharacter(this.state.name, strenght, health, luck);
  }

  // Supprime les données du state et du local storage
  restartGame() {
    this.setState({
      characterCreated: false,
      name: '',
      tmpName: '',
      strenght: 0,
      health: 0,
      luck: 0
    });

    deleteCharacter();
  }

  // Sauvegarde de l'entrée saisie dans l'input
  handleChange = event => {
    this.setState({ tmpName: event.target.value });
  };

  // Transfert de la valeur temporaire à la valeur finale
  submitForm = event => {
    event.preventDefault();
    this.setState({ name: this.state.tmpName });
    saveCharacter(
      this.state.tmpName,
      this.state.strenght,
      this.state.health,
      this.state.luck
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Header restartGame={() => this.restartGame()} />
          <Route
            exact
            path="/"
            render={() => (
              <Home characterCreated={this.state.characterCreated} />
            )}
          />
          <Route
            exact
            path="/game"
            render={() => (
              <Game
                name={this.state.name}
                strenght={this.state.strenght}
                health={this.state.health}
                luck={this.state.luck}
              />
            )}
          />
          <Route
            exact
            path="/character"
            render={() => (
              <Character
                characterCreated={this.state.characterCreated}
                name={this.state.name}
                tmpName={this.state.tmpName}
                strenght={this.state.strenght}
                health={this.state.health}
                luck={this.state.luck}
                handleChange={event => this.handleChange(event)}
                submitForm={event => this.submitForm(event)}
                createCharacter={event => this.createCharacter(event)}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Stats from '../../containers/StatsContainer.js';
const chapters = require('../../story.json').chapters;

class Game extends Component {
  // Chargement de la position
  componentDidMount() {
    const position = localStorage.getItem('position');
    if (position) {
      this.props.updatePosition(position);
    }
  }

  // Change la position du personnage
  changePosition(id) {
    this.props.updatePosition(id);
    localStorage.setItem('position', id);
  }

  // Propose le choix du prochain chapitre au joueur
  hasChoice() {
    return (
      <div>
        {chapters[this.props.game.position].next.map((choices, i) => {
          return (
            <button
              className="App-btn App-btn-yellow"
              key={i}
              onClick={() => this.changePosition(choices.id)}
            >
              {choices.text}
            </button>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Stats/>
        <div className="App-game">
          <p>{chapters[this.props.game.position].text}</p>
          <div className="App-choices">{this.hasChoice()}</div>
        </div>
      </div>
    );
  }
}

export default Game;

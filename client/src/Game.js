import React, { Component } from 'react';
import Stats from './Stats.js';

const chapters = require('./story.json').chapters;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'start'
    };
  }

  // Chargement de la position
  componentDidMount() {
    const position = localStorage.getItem('position');
    if (position) {
      this.setState({ position });
    }
  }

  // Change la position du personnage
  changePosition(id) {
    this.setState({ position: id });
    localStorage.setItem('position', id);
  }

  // Propose le choix du prochain chapitre au joueur
  hasChoice() {
    return (
      <div>
        {chapters[this.state.position].next.map((choices, i) => {
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
        <Stats
          name={this.props.name}
          strenght={this.props.strenght}
          health={this.props.health}
          luck={this.props.luck}
        />

        <div className="App-game">
          <p>{chapters[this.state.position].text}</p>
          <div className="App-choices">{this.hasChoice()}</div>
        </div>
      </div>
    );
  }
}

export default Game;

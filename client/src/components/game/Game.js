import React, { Component } from 'react';
import Stats from '../../containers/StatsContainer.js';
import Inventory from '../../containers/InventoryContainer.js';
import RestartButton from '../../containers/RestartButtonContainer';
import GenericBlock from '../shared/GenericBlock';

class Game extends Component {
  // Chargement de la position
  componentDidMount() {
    const title = localStorage.getItem('title');
    if (title) {
      this.props.fetchStory(title);
    } else {
      this.props.fetchStory(this.props.game.story.title);
    }
  }

  // Change la position du personnage
  changePosition(title) {
    this.props.fetchStory(title);
    localStorage.setItem('title', title);
  }

  displayRestartButton() {
    return <RestartButton />;
  }
  displayChoices() {
    return (
      <div>
        {this.props.game.story.next.map((choices, i) => {
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
  // Propose le choix du prochain chapitre au joueur
  hasChoice() {
    if (this.props.game.story.next && this.props.game.story.next.length > 0) {
      return this.displayChoices();
    } else {
      return this.displayRestartButton();
    }
  }

  displayStoryMedia(){
    var media = ''
    if(this.props.game.story.media && this.props.game.story.media.url){
      if(this.props.game.story.media.type === 'image' ){
        media = <img src={this.props.game.story.media.url} className="storyImage img-fluid" alt="Responsive image"/>
      }
      if(this.props.game.story.media.type === 'video' ){
        media = <iframe className="storyVideo" src={this.props.game.story.media.url + '?autoplay=1'} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      }
    }
    return(media)
  }
  render() {
    return (
      <div>
        <GenericBlock title='Status du personnage'>
          <Stats />
        </GenericBlock>
        <GenericBlock title='Inventaire du personnage'>
          <Inventory />
        </GenericBlock>
        <GenericBlock defaultOpen={true} allScreenHeight={true} title='Mon Aventure'>
          <div className="App-game">
            {this.displayStoryMedia()}
            <p style={{fontSize: 20}}>{this.props.game.story.text}</p>
            <div className="App-choices">{this.hasChoice()}</div>
          </div>
        </GenericBlock>
      </div>
    );
  }
}

export default Game;

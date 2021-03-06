import React, { Component } from 'react';
import Stats from '../../containers/StatsContainer.js';
import Inventory from '../../containers/InventoryContainer.js';
import RestartButton from '../../containers/RestartButtonContainer';
import GenericBlock from '../shared/GenericBlock';
import { Grid, Row, Col } from 'react-bootstrap';

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

  displayStoryMedia() {
    var media = '';
    if (this.props.game.story.media && this.props.game.story.media.url) {
      if (this.props.game.story.media.type === 'image') {
        media = (
          <img
            src={this.props.game.story.media.url}
            className="storyImage img-fluid"
            alt=""
          />
        );
      }
      if (this.props.game.story.media.type === 'video') {
        media = (
          <iframe
            title={this.props.game.story.title}
            className="storyVideo"
            src={this.props.game.story.media.url + '?autoplay=1'}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        );
      }
    }
    return media;
  }

  renderCharAttrs() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={6}>
            <GenericBlock
              xs={10}
              xsOffset={2}
              noGrid
              title="Status du personnage"
            >
              <Stats />
            </GenericBlock>
          </Col>
          <Col sm={6}>
            <GenericBlock
              xs={10}
              xsOffset={0}
              noGrid
              title="Inventaire du personnage"
            >
              <Inventory />
            </GenericBlock>
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        {this.renderCharAttrs()}
        <GenericBlock
          fluid
          xs={10}
          xsOffset={1}
          defaultOpen
          className="allScreenHeight"
          title="Mon Aventure"
        >
          <div className="App-game">
            <Col sm={5} className="vcenter">
              {this.displayStoryMedia()}
            </Col>
            <Col sm={7} className="vcenter">
              <h3>{this.props.game.story.resume}</h3>
              <p style={{ fontSize: 20 }}>{this.props.game.story.text}</p>
              <div className="App-choices">{this.hasChoice()}</div>
            </Col>
          </div>
        </GenericBlock>
      </div>
    );
  }
}

export default Game;

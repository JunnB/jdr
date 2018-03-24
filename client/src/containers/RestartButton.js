import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteCharacter} from '../services/Services.js';
import ConfirmModal from '../layouts/ConfirmModal'
import { restartCharacter } from '../actions/actions';
import '../App.css';

class RestartButton extends Component {
  // Supprime les données du state et du local storage
  restartGame() {
    deleteCharacter();
    this.props.dispatch(restartCharacter());
  }

  render() {
    return (
      <ConfirmModal
        title='Recommencer'
        content='Êtes-vous sûr de vouloir recommencer ? Votre progression ne sera pas sauvegardée.'
        redirect_to={'/'}
        onValidation={() => this.restartGame()}
        btnModalLabel='Recommencer'
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.character
  };
}
export default connect(mapStateToProps)(RestartButton);

// index.js
import * as actionTypes from './ActionTypes';

function characterRestarted(){
    return {
        type: actionTypes.CHARACTER_RESTARTED
    }
}

function characterUpdated(character){
    return {
        type: actionTypes.CHARACTER_UPDATED,
        character: character
    }
}

function modalToogled(modal){
    return {
        type: actionTypes.MODAL_TOOGLED,
        modal: modal
    }
}

export function toogleModal(modal){
    return dispatch => {
        dispatch(modalToogled(modal));
    }
}

export function updateCharacter(character){
    return dispatch => {
        dispatch(characterUpdated(character));
    }
}

export function restartCharacter(){
  return dispatch => {
      dispatch(characterRestarted());
  }
}

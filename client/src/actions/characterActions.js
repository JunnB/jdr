import * as actionTypes from './ActionTypes';

function characterRestarted(){
    return {
        type: actionTypes.CHARACTER_RESTARTED
    }
}

function characterNameSaved(tmpName){
    return {
        type: actionTypes.CHARACTER_NAME_SAVED,
        character: {
          submitted: true,
          tmpName: tmpName
      }
    }
}

function characterUpdated(character){
    return {
        type: actionTypes.CHARACTER_UPDATED,
        character: character
    }
}

export function saveCharacterName(tmpName){
    return dispatch => {
        dispatch(characterNameSaved(tmpName));
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

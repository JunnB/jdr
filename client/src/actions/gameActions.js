import * as actionTypes from './ActionTypes';
import {callApi} from '../services/Services'

function storyUpdated(story){
    return {
        type: actionTypes.STORY_UPDATED,
        story: story
    }
}

function gameRestarted(){
    return {
        type: actionTypes.GAME_RESTARTED
    }
}

export function updateStory(story){
    return dispatch => {
        dispatch(storyUpdated(story));
    }
}

export function restartGame(){
    return dispatch => {
        dispatch(gameRestarted());
    }
}

export function fetchStory(title = 'start'){
  return dispatch => {
        return callApi(`/api/stories/${title}`)
          .then(data => {
            dispatch(storyUpdated(data));
          })
          .catch(err => console.log(err));
    }
}

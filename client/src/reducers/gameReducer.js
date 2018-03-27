import * as actionTypes from '../actions/ActionTypes';

var initialState = {
  story: {
    title: 'start',
    resume: "Début de l'Aventure",
    text: '',
    next: [],
    media: {
      type: '',
      url: ''
    }
  }
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.STORY_UPDATED:
      updated['story'] = action.story;
      return updated;
    case actionTypes.GAME_RESTARTED:
      return initialState;
    default:
      return state;
  }
};

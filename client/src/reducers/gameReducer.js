import * as actionTypes from '../actions/ActionTypes';

var initialState = {
    position: 'start'
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.POSITION_UPDATED:
      updated['position'] = action.position;
      return updated;
    default:
      return state;
  }
};

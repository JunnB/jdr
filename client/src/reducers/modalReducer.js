import * as actionTypes from '../actions/ActionTypes';

var initialState = {
   show: false
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);
  // console.log(updated['modal']['show']);
  switch (action.type) {
    case actionTypes.MODAL_TOOGLED:
      updated['show'] = action.show;
      // console.log(updated['modal']['show']);
      return updated;
    default:
      return state;
  }
};

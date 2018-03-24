import * as actionTypes from '../actions/ActionTypes';

var initialState = {
  modal: { show: false }
};

export default (state = initialState, action) => {
  console.log(state);
  var updated = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.MODAL_TOOGLED:
      updated['modal'] = action.modal;
      return updated;
    default:
      return state;
  }
};

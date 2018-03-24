import * as actionTypes from '../actions/ActionTypes';

var initialState = {
  modal: { show: false }
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.MODAL_TOOGLED:
      updated['modal'] = action.modal;
      return updated;
    default:
      return state;
  }
};

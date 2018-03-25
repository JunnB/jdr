import * as actionTypes from './ActionTypes';

function positionUpdated(position){
    return {
        type: actionTypes.POSITION_UPDATED,
        position: position
    }
}

export function updatePosition(position){
    return dispatch => {
        dispatch(positionUpdated(position));
    }
}

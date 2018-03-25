import * as actionTypes from './ActionTypes';

function modalToogled(show){
    return {
        type: actionTypes.MODAL_TOOGLED,
        show: show
    }
}

export function toogleModal(show){
    return dispatch => {
        dispatch(modalToogled(show));
    }
}

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

function panelToogled(show){
    return {
        type: actionTypes.PANEL_TOOGLED,
        panel_show: show
    }
}

export function tooglePanel(show){
    return dispatch => {
        dispatch(panelToogled(show));
    }
}

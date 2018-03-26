import { connect } from 'react-redux';
import {deleteCharacter} from '../services/Services.js';
import ConfirmModal from './ConfirmModalContainer'
import { restartCharacter } from '../actions/characterActions';
import { restartGame } from '../actions/gameActions';

function mapDispatchToProps(dispatch) {
  return {
    onValidation: () => {
      deleteCharacter();
      dispatch(restartCharacter());
      dispatch(restartGame());
    },
  };
}

function mapStateToProps(state) {
  return {
    title:'Recommencer',
    content:'Êtes-vous sûr de vouloir recommencer ? Votre progression ne sera pas sauvegardée.',
    redirect_to: '/',
    btnModalLabel:'Recommencer',
    character: state.character.character
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal);

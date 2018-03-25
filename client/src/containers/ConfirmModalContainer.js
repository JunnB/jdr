import { connect } from 'react-redux';
import { toogleModal } from '../actions/modalActions';
import ConfirmModal from '../components/shared/ConfirmModal';
function mapDispatchToProps(dispatch) {
  return {
    handleClose: () => {
      dispatch(toogleModal(false));
    },
    handleShow: () => {
      dispatch(toogleModal(true));
    },
    handleSave: () => {
      dispatch(toogleModal(false));
    }
  };
}
function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal);

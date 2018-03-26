import { connect } from 'react-redux';
import { tooglePanel } from '../actions/modalActions';
import GenericPanel from '../components/shared/GenericPanel';

function mapDispatchToProps(dispatch) {
  return {
    openPanel: () => {
      dispatch(tooglePanel(false));
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
)(GenericPanel);

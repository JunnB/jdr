import { connect } from 'react-redux';
import Stats from '../components/game/Stats'
function mapStateToProps(state) {
  return {
    character: state.character
  };
}
export default connect(mapStateToProps)(Stats);

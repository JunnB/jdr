import { connect } from 'react-redux';
import Home from '../layouts/Home'

function mapStateToProps(state) {
  return {
    character: state.character
  };
}
export default connect(mapStateToProps)(Home);

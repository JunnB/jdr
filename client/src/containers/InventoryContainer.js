import { connect } from 'react-redux';
import Inventory from '../components/game/Inventory'
function mapStateToProps(state) {
  return {
    inventory: state.inventory
  };
}
export default connect(mapStateToProps)(Inventory);

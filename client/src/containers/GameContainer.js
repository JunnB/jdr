import { connect } from 'react-redux';
import { updateCharacter,saveCharacterName } from '../actions/characterActions';
import { updatePosition } from '../actions/gameActions';
import Game from '../components/game/Game';

function mapDispatchToProps(dispatch) {
  return {
    updatePosition: position => {
      dispatch(updatePosition(position));
    }
  };
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);

import { connect } from 'react-redux';
import { fetchStory } from '../actions/gameActions';
import Game from '../components/game/Game';

function mapDispatchToProps(dispatch) {
  return {
    fetchStory: (title) => {
      dispatch(fetchStory(title))
    }
  };
}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);

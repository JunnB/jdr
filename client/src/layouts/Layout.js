import { Component } from 'react';
import { connect } from 'react-redux';
import { updateCharacter } from '../actions/characterActions';
import { getCurrentCharacter } from '../services/Services.js';
class Layout extends Component {
  // Chargement du personnage
  componentDidMount() {
    var character = getCurrentCharacter();
    if (character) {
      this.props.dispatch(updateCharacter(character));
    }
  }

  render() {
    return '';
  }
}

function mapStateToProps(state) {
  return {
    character: state.character.character
  };
}
export default connect(mapStateToProps)(Layout);

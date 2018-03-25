import { connect } from 'react-redux';
import { updateCharacter,saveCharacterName } from '../actions/characterActions';
import CharacterCreation from '../components/character/CharacterCreation';

function mapDispatchToProps(dispatch) {
  return {
    createCharacter: character => {
      dispatch(updateCharacter(character));
    },
    saveCharacterName: (tmpName) => {
      dispatch(saveCharacterName(tmpName));
    },
    saveTmpName:(character) => {
      dispatch(updateCharacter(character));
    }
  };
}

function mapStateToProps(state) {
  return {
    character: state.character
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreation);

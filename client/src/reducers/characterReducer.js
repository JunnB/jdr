import * as actionTypes from '../actions/ActionTypes';

var initialState = {
    submitted: false,
    characterCreated: false,
    name: '', //Nom du personnage
    tmpName: '', //Nom temporaire
    strenght: 0, //Force du personnage
    health: 0, //Santé du personnage,
    luck: 0, //Santé du personnage
    inventory: {
      weapons: [
        {
        name: 'Epée',
        dmg: 3,
        durability: 5
      }
      ],
      spells: [
        {
          name: 'Boule de feu',
          dmg: 5,
          durability: 3
        }
      ],
      items: [
        {
          name: 'Potion de soin',
          type: 'heal',
          heal: 5,
          quantity: 3
        }
      ],
    }
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CHARACTER_UPDATED:
      updated = action.character;
      return updated;
    case actionTypes.CHARACTER_NAME_SAVED:
      updated['submitted'] = action.character.submitted;
      updated['name'] = action.character.tmpName;
      return updated;
    case actionTypes.CHARACTER_RESTARTED:
      return initialState;
    default:
      return state;
  }
};

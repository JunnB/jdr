import * as actionTypes from '../actions/ActionTypes';
var initialState = {
      weapons: [
        {
        title: 'Epée',
        dmg: 3,
        durability: 5
      }
      ],
      spells: [
        {
          title: 'Boule de feu',
          dmg: 5,
          durability: 3
        }
      ],
      items: [
        {
          title: 'Potion de soin',
          type: 'heal',
          heal: 5,
          quantity: 3
        }
      ]
};

export default (state = initialState, action) => {
  var updated = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.WEAPON_DURABILITY_UPDATED:
      updated['weapons'] = action.weapons;
      return updated;
    default:
      return state;
  }
};

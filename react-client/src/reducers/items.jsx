import * as types from '../constants/actionTypes';

const itemsDefault = [ 'toy', 'hat', 'bat'];

const items = (state = itemsDefault, action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS':
      return action.itms;
    default:
      return state;
  }
};

export default items;
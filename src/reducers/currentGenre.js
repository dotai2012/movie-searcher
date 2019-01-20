import { SET_CURRENT_GENRE } from '../actions/type';

export default function (state = null, action) {
  switch (action.type) {
    case SET_CURRENT_GENRE:
      return action.payload;
    default:
      return state;
  }
}

import { SET_CURRENT_PAGE } from '../actions/type';

export default function (state = 1, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
}

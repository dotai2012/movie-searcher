import { FETCH_MOVIES } from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.total_pages;
    default:
      return state;
  }
}

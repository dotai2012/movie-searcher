import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload.results;
    case FETCH_MOVIE:
      return [action.payload];
    default:
      return state;
  }
}

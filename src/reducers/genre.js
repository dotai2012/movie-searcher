import { FETCH_GENRES } from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_GENRES:
      return [{ id: null, name: 'All' }, ...action.payload];
    default:
      return state;
  }
}

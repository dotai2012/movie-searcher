import { combineReducers } from 'redux';
import Movie from './movie';
import Genre from './genre';
import CurrentPage from './currentPage';
import CurrentGenre from './currentGenre';
import TotalPages from './totalPages';

const rootReducer = combineReducers({
  movie: Movie,
  genre: Genre,
  totalPages: TotalPages,
  currentPage: CurrentPage,
  currentGenre: CurrentGenre,
});

export default rootReducer;

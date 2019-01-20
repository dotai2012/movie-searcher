import axios from 'axios';
import moment from 'moment';
import qs from 'qs';
import {
  FETCH_MOVIES, FETCH_MOVIE, FETCH_GENRES, SET_CURRENT_GENRE, SET_CURRENT_PAGE,
} from './type';
import { baseUrl, apiKey } from '../config/key';

const currentTime = moment();
const targetTime = currentTime.clone().subtract(2, 'months');

const fetchMovies = (genres, page = 1) => (dispatch) => {
  const query = qs.stringify({
    api_key: apiKey,
    'primary_release_date.lte': currentTime.format('YYYY-MM-DD'),
    'primary_release_date.gte': targetTime.format('YYYY-MM-DD'),
    with_genres: genres,
    page,
  });
  axios.get(`${baseUrl}/discover/movie?${query}`)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data,
      });
    });
};

const fetchMovie = id => (dispatch) => {
  const query = qs.stringify({
    api_key: apiKey,
  });
  axios.get(`${baseUrl}/movie/${id}?${query}`)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data,
      });
    });
};

const fetchGenres = () => (dispatch) => {
  axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
    .then((res) => {
      dispatch({
        type: FETCH_GENRES,
        payload: res.data.genres,
      });
    });
};

const setCurrentGenre = genre => (dispatch) => {
  dispatch({
    type: SET_CURRENT_GENRE,
    payload: genre,
  });
};

const setCurrentPage = page => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
};

export {
  fetchMovies, fetchMovie, fetchGenres, setCurrentGenre, setCurrentPage,
};

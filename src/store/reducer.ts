import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Config} from '../consts';
import {films} from '../mocks/films';
import {changeGenre, filteredMoviesByGenre, setGenres} from './action';
import {Film} from '../types/film.type';

type InitialState = {
  isAuth: string;
  movies: Film[];
  genres: string[];
  activeGenre: string;
}

const initialState: InitialState = {
  isAuth: AuthorizationStatus.NoAuth,
  movies: films,
  genres: [],
  activeGenre: Config.DEFAULT_GENRE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(filteredMoviesByGenre, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    });
});
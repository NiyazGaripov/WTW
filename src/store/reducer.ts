import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Config} from '../consts';
import {films} from '../mocks/films';
import {changeGenre, filteredMoviesByGenre, loadFilms, resetNumberOfFilmsShown, showMoreMovies} from './action';
import {Film} from '../types/film.type';

type InitialState = {
  authorizationStatus: string;
  movies: Film[];
  genres: string[];
  activeGenre: string;
  numberOfFilmsShown: number;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  movies: films,
  genres: ['All genres', ...new Set(films.map((movie) => movie.genre))],
  activeGenre: Config.DEFAULT_GENRE,
  numberOfFilmsShown: Config.NUMBER_OF_FILMS_SHOWN,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(filteredMoviesByGenre, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(showMoreMovies, (state) => {
      state.numberOfFilmsShown += Config.NUMBER_OF_FILMS_SHOWN;
    })
    .addCase(resetNumberOfFilmsShown, (state) => {
      state.numberOfFilmsShown = Config.NUMBER_OF_FILMS_SHOWN;
    })
    .addCase(loadFilms, (state, action) => {
      state.movies = action.payload;
    });
});

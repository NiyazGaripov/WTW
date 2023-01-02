import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Config} from '../consts';
import {
  changeGenre,
  filteredMoviesByGenre,
  loadFavoriteFilms,
  loadFilms,
  loadPromoFilm,
  requireAuthorization,
  resetNumberOfFilmsShown,
  setGenres,
  showMoreMovies
} from './action';
import {Film} from '../types/film.type';

type InitialState = {
  authorizationStatus: string;
  movies: Film[];
  promoFilm: Film | Record<string, never>;
  favoriteMovies: Film[];
  genres: string[];
  activeGenre: string;
  numberOfFilmsShown: number;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  movies: [],
  promoFilm: {},
  favoriteMovies: [],
  genres: [],
  activeGenre: Config.DEFAULT_GENRE,
  numberOfFilmsShown: Config.NUMBER_OF_FILMS_SHOWN,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    })
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
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteMovies = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Config} from '../consts';
import {
  changeGenre,
  filteredMoviesByGenre,
  loadComments,
  loadFavoriteFilms,
  loadFilms,
  loadMovie,
  loadPromoFilm,
  loadSimilarMovies,
  requireAuthorization,
  resetNumberOfFilmsShown,
  setGenres,
  setUserData,
  showMoreMovies
} from './action';
import {Film} from '../types/film.type';
import {getFilteredFilms} from '../utils/get-filtered-films';
import {User} from '../types/user.type';
import {Comment} from '../types/comment.type';

type InitialState = {
  authorizationStatus: string;
  user: User | Record<string, never>;
  movies: Film[];
  movie: Film | Record<string, never>;
  promoFilm: Film | Record<string, never>;
  favoriteMovies: Film[];
  genres: string[];
  activeGenre: string;
  numberOfFilmsShown: number;
  filteredMovies: Film[];
  comments: Comment[];
  similarMovies: Film[];
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {},
  movies: [],
  movie: {},
  promoFilm: {},
  favoriteMovies: [],
  genres: [],
  activeGenre: Config.DEFAULT_GENRE,
  numberOfFilmsShown: Config.NUMBER_OF_FILMS_SHOWN,
  filteredMovies: [],
  comments: [],
  similarMovies: [],
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
      state.filteredMovies = getFilteredFilms(action.payload, state.movies);
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
    .addCase(loadMovie, (state, action) => {
      state.movie = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteMovies = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

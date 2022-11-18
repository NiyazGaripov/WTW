import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../consts';
import {films} from '../mocks/films';
import {changeGenre, filteredMoviesByGenre} from './action';

const initialState = {
  isAuth: AuthorizationStatus.NoAuth,
  genre: 'All genres',
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filteredMoviesByGenre, (state, action) => {
      state.films = action.payload;
    });
});

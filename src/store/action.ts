import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film.type';

export const changeGenre = createAction<string>('common/changeGenre');
export const filteredMoviesByGenre = createAction<Film[]>('common/filteredMoviesByGenre');
export const showMoreMovies = createAction<void>('common/showMoreMovies');
export const resetNumberOfFilmsShown = createAction<void>('common/resetNumberOfFilmsShown');
export const loadFilms = createAction<Film[]>('data/loadFilms');

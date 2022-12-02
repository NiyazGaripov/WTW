import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film.type';

export const changeGenre = createAction<string>('common/changeGenre');
export const filteredMoviesByGenre = createAction<Film[]>('common/filteredMoviesByGenre');

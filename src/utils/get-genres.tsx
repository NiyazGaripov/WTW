import {Film} from '../types/film.type';

export const getGenres = (movies: Film[]): string[] => ['All genres', ...new Set(movies.map((movie) => movie.genre))];

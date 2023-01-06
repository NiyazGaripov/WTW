import {Film} from '../types/film.type';

export const getFilteredFilms = (genre: string, movies: Film[]): Film[] => {
  if (genre === 'All genres') {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

import {useEffect} from 'react';
import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {filteredMoviesByGenre, resetNumberOfFilmsShown, setGenres} from '../../store/action';
import {Film} from '../../types/film.type';
import {ShowMore} from '../../components/show-more/show-more';

const getFilteredFilms = (genre: string, movies: Film[]): Film[] => {
  if (genre === 'All genres') {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

const getGenres = (movies: Film[]): string[] => ['All genres', ...new Set(movies.map((movie) => movie.genre))];

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const {movies, activeGenre, numberOfFilmsShown} = useAppSelector((state) => state);
  const filteredFilms = getFilteredFilms(activeGenre, movies);
  const showedFilms = filteredFilms.slice(0, numberOfFilmsShown);
  const film = filteredFilms[0];

  useEffect(() => {
    dispatch(resetNumberOfFilmsShown());
    dispatch(filteredMoviesByGenre(filteredFilms));
    dispatch(setGenres(getGenres(movies)));
  }, [activeGenre]);

  return (
    <>
      <SvgSprite/>
      {film && <FilmCard film={film}/>}
      <div className="page-content">
        {
          movies.length ?
            <Catalog films={showedFilms}>
              <GenresList/>
              {((filteredFilms.length - showedFilms.length) > 0) && <ShowMore/>}
            </Catalog> :
            <div>Loading...</div>
        }
        <Footer/>
      </div>
    </>
  );
}

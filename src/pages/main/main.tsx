import {useEffect} from 'react';
import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {filteredMoviesByGenre, resetNumberOfFilmsShown} from '../../store/action';
import {Film} from '../../types/film.type';
import {films} from '../../mocks/films';
import {ShowMore} from '../../components/show-more/show-more';

const getFilteredFilms = (genre: string, movies: Film[]): Film[] => {
  if (genre === 'All genres') {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const {activeGenre, numberOfFilmsShown} = useAppSelector((state) => state);
  const filteredFilms = getFilteredFilms(activeGenre, films);
  const showedFilms = filteredFilms.slice(0, numberOfFilmsShown);
  const film = filteredFilms[0];

  useEffect(() => {
    dispatch(resetNumberOfFilmsShown());
    dispatch(filteredMoviesByGenre(filteredFilms));
  }, [activeGenre]);

  return (
    <>
      <SvgSprite/>
      {film && <FilmCard film={film}/>}
      <div className="page-content">
        {
          films.length ?
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

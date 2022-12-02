import {useEffect} from 'react';
import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {filteredMoviesByGenre} from '../../store/action';
import {Film} from '../../types/film.type';
import {films} from '../../mocks/films';

const getFilms = (genre: string, movies: Film[]): Film[] => {
  if (genre === 'All genres') {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const {activeGenre} = useAppSelector((state) => state);
  const filteredFilms = getFilms(activeGenre, films);
  const film = filteredFilms[0];

  useEffect(() => {
    dispatch(filteredMoviesByGenre(filteredFilms));
  }, [activeGenre]);

  return (
    <>
      <SvgSprite/>
      {film && <FilmCard film={film}/>}
      <div className="page-content">
        <Catalog films={filteredFilms}>
          <GenresList/>
        </Catalog>
        <Footer/>
      </div>
    </>
  );
}

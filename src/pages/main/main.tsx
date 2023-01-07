import {useEffect} from 'react';
import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {filteredMoviesByGenre, resetNumberOfFilmsShown} from '../../store/action';
import {ShowMore} from '../../components/show-more/show-more';

export function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const numberOfFilmsShown = useAppSelector((state) => state.numberOfFilmsShown);
  const filteredMovies = useAppSelector((state) => state.filteredMovies);
  const showedFilms = filteredMovies.slice(0, numberOfFilmsShown);

  useEffect(() => {
    dispatch(resetNumberOfFilmsShown());
    dispatch(filteredMoviesByGenre(activeGenre));
  }, [dispatch, activeGenre, movies]);

  return (
    <>
      <SvgSprite/>
      <FilmCard/>
      <div className="page-content">
        {
          movies.length ?
            <Catalog films={showedFilms}>
              <GenresList/>
              {((filteredMovies.length - showedFilms.length) > 0) && <ShowMore/>}
            </Catalog> :
            <div>Loading...</div>
        }
        <Footer/>
      </div>
    </>
  );
}

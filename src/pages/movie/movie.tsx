import {Outlet} from 'react-router-dom';
import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Footer} from '../../components/footer/footer';
import {Header} from '../../components/header/header';
import {NavigationList} from '../../components/navigation-list/navigation-list';
import {FilmShortDescription} from '../../components/film-short-description/film-short-description';
import {FilmInfo} from '../../components/film-info/film-info';
import {Catalog} from '../../components/catalog/catalog';
import {useAppSelector} from '../../hooks';

export function Movie(): JSX.Element {
  const movie = useAppSelector((state) => state.movie);
  const movies = useAppSelector((state) => state.movies);
  const relatedFilms = movies.filter((film) => movie.genre === film.genre);

  return (
    <>
      <SvgSprite/>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.backgroundImage} alt={movie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <FilmShortDescription
              name={movie.name}
              genre={movie.genre}
              releaseYear={movie.released}
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <FilmInfo
            name={movie.name}
            posterImage={movie.posterImage}
            isBigPoster
          >
            <div className="film-card__desc">
              <NavigationList/>
              <Outlet/>
            </div>

          </FilmInfo>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          films={relatedFilms}
          className='catalog--like-this'
        />
        <Footer/>
      </div>
    </>
  );
}

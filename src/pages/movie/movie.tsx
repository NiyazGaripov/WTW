import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Footer} from '../../components/footer/footer';
import {Header} from '../../components/header/header';
import {NavigationList} from '../../components/navigation-list/navigation-list';
import {FilmShortDescription} from '../../components/film-short-description/film-short-description';
import {FilmInfo} from '../../components/film-info/film-info';
import {Film} from '../../types/film.type';
import {Catalog} from '../../components/catalog/catalog';
import {FilmOverview} from '../../components/film-overview/film-overview';

type Props = {
  films: Film[];
};

export function Movie({films}: Props): JSX.Element {
  const film = films[0];

  return (
    <>
      <SvgSprite/>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <FilmShortDescription
              name={film.name}
              genre={film.genre}
              releaseYear={film.released}
            />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <FilmInfo
            name={film.name}
            posterImage={film.posterImage}
            isBigPoster
          >
            <div className="film-card__desc">
              <NavigationList/>

              <FilmOverview film={film}/>
            </div>

          </FilmInfo>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          films={films}
          className='catalog--like-this'
        />
        <Footer/>
      </div>
    </>
  );
}

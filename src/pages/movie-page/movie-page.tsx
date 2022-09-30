import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Footer} from '../../components/footer/footer';
import {Header} from '../../components/header/header';
import {NavigationList} from '../../components/navigation-list/navigation-list';
import {FilmShortDescription} from '../../components/film-short-description/film-short-description';
import {FilmInfo} from '../../components/film-info/film-info';
import {FilmRating} from '../../components/film-rating/film-rating';
import {Film} from '../../types/film.type';
import {Catalog} from '../../components/catalog/catalog';

type Props = {
  film: Film
};

export function MoviePage({film}: Props): JSX.Element {
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
          >
            <div className="film-card__desc">
              <NavigationList/>

              <FilmRating
                rating={film.rating}
                scoresCount={film.scoresCount}
              />

              <div className="film-card__text">
                <p>{film.description}</p>

                <p className="film-card__director"><strong>Director: {film.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {film.starring}</strong>
                </p>
              </div>
            </div>

          </FilmInfo>
        </div>
      </section>

      <div className="page-content">
        <Catalog className='catalog--like-this'/>
        <Footer/>
      </div>
    </>
  );
}

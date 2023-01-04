import {Header} from '../header/header';
import {FilmShortDescription} from '../film-short-description/film-short-description';
import {FilmInfo} from '../film-info/film-info';
import {useAppSelector} from '../../hooks';

export function FilmCard(): JSX.Element {
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const {name, posterImage, backgroundImage, genre, released} = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="film-card__wrap">
        <FilmInfo
          name={name}
          posterImage={posterImage}
        >
          <FilmShortDescription
            name={name}
            genre={genre}
            releaseYear={released}
          />
        </FilmInfo>
      </div>
    </section>
  );
}

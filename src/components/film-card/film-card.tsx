import {Header} from '../header/header';
import {FilmShortDescription} from '../film-short-description/film-short-description';
import {FilmInfo} from '../film-info/film-info';
import {Film} from '../../types/film.type';

type Props = {
  film: Film;
};

export function FilmCard({film}: Props): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="film-card__wrap">
        <FilmInfo
          name={film.name}
          posterImage={film.posterImage}
        >
          <FilmShortDescription
            name={film.name}
            genre={film.genre}
            releaseYear={film.released}
          />
        </FilmInfo>
      </div>
    </section>
  );
}

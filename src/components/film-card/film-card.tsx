import {Header} from '../header/header';
import {FilmShortDescription} from '../film-short-description/film-short-description';
import {FilmInfo} from '../film-info/film-info';

export function FilmCard(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="film-card__wrap">
        <FilmInfo
          name='The Grand Budapest Hotel'
          posterImage='img/the-grand-budapest-hotel-poster.jpg'
        >
          <FilmShortDescription
            name='The Grand Budapest Hotel'
            genre='Drama'
            releaseYear='2014'
          />
        </FilmInfo>
      </div>
    </section>
  );
}

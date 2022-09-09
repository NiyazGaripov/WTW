import {GenresList} from '../genres-list/genres-list';
import {films} from '../../consts';
import {SmallFilmCard} from '../small-film-card/small-film-card';

export function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList/>

      <div className="catalog__films-list">
        {
          films.map((film) => (
            <SmallFilmCard
              key={film.name}
              name={film.name}
              posterImage={film.posterImage}
            />
          ))
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

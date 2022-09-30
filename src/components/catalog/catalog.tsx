import {PropsWithChildren} from 'react';
import {films} from '../../consts';
import {SmallFilmCard} from '../small-film-card/small-film-card';

type Props = PropsWithChildren<{
  className?: string;
}>;

export function Catalog({children, className}: Props): JSX.Element {
  const isRelatedFilms = !!className;

  return (
    <section className={`catalog ${className}`}>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {
        isRelatedFilms && <h2 className="catalog__title">More like this</h2>
      }

      {children}

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

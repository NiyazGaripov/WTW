import {PropsWithChildren, useState} from 'react';
import {SmallFilmCard} from '../small-film-card/small-film-card';
import {Film} from '../../types/film.type';

type Props = PropsWithChildren<{
  films: Film[];
  className?: string;
}>;

export function Catalog({children, films, className}: Props): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
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
              onCardEnter={() => setActiveCardId(film.id)}
              onCardLeave={() => setActiveCardId(null)}
            />
          ))
        }
      </div>
      {activeCardId}

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

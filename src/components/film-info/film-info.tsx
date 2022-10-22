import {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  name: string,
  posterImage: string,
  isBigPoster?: boolean,
}>;

export function FilmInfo({children, name, posterImage, isBigPoster = false}: Props): JSX.Element {
  return (
    <div className="film-card__info">
      <div className={`film-card__poster ${isBigPoster && 'film-card__poster--big'}`}>
        <img src={posterImage} alt={name} width="218" height="327"/>
      </div>

      {children}
    </div>
  );
}

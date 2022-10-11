import {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  name: string,
  posterImage: string,
}>;

export function FilmInfo({children, name, posterImage}: Props): JSX.Element {
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={posterImage} alt={name} width="218" height="327"/>
      </div>

      {children}
    </div>
  );
}

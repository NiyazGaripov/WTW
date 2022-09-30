import {Controls} from '../controls/controls';

type Props = {
  name: string,
  genre: string,
  releaseYear: number,
}

export function FilmShortDescription({name, genre, releaseYear}: Props): JSX.Element {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{releaseYear}</span>
      </p>

      <Controls/>
    </div>
  );
}

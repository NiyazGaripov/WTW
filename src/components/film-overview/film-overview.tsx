import {FilmRating} from '../film-rating/film-rating';
import {useAppSelector} from '../../hooks';

export function FilmOverview(): JSX.Element {
  const movie = useAppSelector((state) => state.movie);

  return (
    <>
      <FilmRating
        rating={movie.rating}
        scoresCount={movie.scoresCount}
      />

      <div className="film-card__text">
        <p>{movie.description}</p>

        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {movie.starring}</strong>
        </p>
      </div>
    </>
  );
}

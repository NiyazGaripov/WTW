import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks';

export function Controls(): JSX.Element {
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const favoriteMoviesCount = favoriteMovies.length;

  return (
    <div className="film-card__buttons">
      <Link
        to={AppRoute.Player}
        className="btn btn--play film-card__button"
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>

      <Link
        to={AppRoute.MyList}
        className="btn film-card__button"
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        {authorizationStatus === AuthorizationStatus.Auth && <span className="film-card__count">{favoriteMoviesCount}</span>}
      </Link>

      {authorizationStatus === AuthorizationStatus.Auth && <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

export function Controls(): JSX.Element {
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
        <span className="film-card__count">9</span>
      </Link>

      <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
    </div>
  );
}

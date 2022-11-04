import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type Props = {
  name: string;
  posterImage: string;
  onCardEnter?: () => void;
  onCardLeave?: () => void;
};

export function SmallFilmCard({name, posterImage, onCardEnter, onCardLeave}: Props): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
    >
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

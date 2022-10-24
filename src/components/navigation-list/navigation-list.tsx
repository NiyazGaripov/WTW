import {NavLink} from 'react-router-dom';

export function NavigationList(): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <NavLink to={'/overview'} className="film-nav__link">Overview</NavLink>
        </li>
        <li className="film-nav__item">
          <NavLink to={'/details'} className="film-nav__link">Details</NavLink>
        </li>
        <li className="film-nav__item">
          <NavLink to={'/reviews'} className="film-nav__link">Reviews</NavLink>
        </li>
      </ul>
    </nav>
  );
}

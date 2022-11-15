import {Link, useLocation} from 'react-router-dom';
import {TABS} from '../../consts';

export function NavigationList(): JSX.Element {
  const {pathname} = useLocation();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          TABS.map((tab) =>
            (
              <li key={tab} className={`film-nav__item ${pathname.includes(tab.toLowerCase()) && 'film-nav__item--active'}`}>
                <Link to={tab.toLowerCase()} className="film-nav__link">{tab}</Link>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
}

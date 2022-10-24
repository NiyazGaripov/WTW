import {Logo} from '../logo/logo';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type Props = {
  placeUse?: string;
}

export function Header({placeUse}: Props): JSX.Element {
  const isUserPage = placeUse === 'my-list';
  const isLogin = placeUse === 'login';
  const isAddReview = placeUse === 'add-review';

  return (
    <header className={`page-header film-card__head ${(isUserPage || isLogin) && 'user-page__head'}`}>
      <Logo/>

      {isUserPage && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>}
      {isLogin && <h1 className="page-title user-page__title">Sign in</h1>}
      {
        isAddReview &&
        <Breadcrumbs
          filmName="The Grand Budapest Hotel"
          path="film-page.html"
        />
      }

      {
        !isLogin &&
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.Login} className="user-block__link">Sign out</Link>
          </li>
        </ul>
      }
    </header>
  );
}

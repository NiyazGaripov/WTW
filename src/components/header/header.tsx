import React from 'react';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {Logo} from '../logo/logo';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks';

type Props = {
  placeUse?: string;
}

export function Header({placeUse}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {avatarUrl} = useAppSelector((state) => state.user);
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies);
  const isLogin = placeUse === 'login';
  const isUserPage = placeUse === 'my-list';
  const isAddReview = placeUse === 'add-review';
  const handleSignOutClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className={`page-header film-card__head ${(isUserPage || authorizationStatus === AuthorizationStatus.NoAuth) && 'user-page__head'}`}>
      <Logo/>

      {isUserPage && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteMovies.length}</span></h1>}
      {(authorizationStatus === AuthorizationStatus.NoAuth && isLogin) && <h1 className="page-title user-page__title">Sign in</h1>}
      {
        isAddReview && <Breadcrumbs/>
      }

      <ul className="user-block">
        { authorizationStatus === AuthorizationStatus.Auth &&
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link
                to={AppRoute.Login}
                className="user-block__link"
                onClick={handleSignOutClick}
              >
                Sign out
              </Link>
            </li>
          </>}
        { (authorizationStatus === AuthorizationStatus.NoAuth && !isLogin) && <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>}
      </ul>
    </header>
  );
}

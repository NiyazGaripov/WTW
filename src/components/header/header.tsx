import {Logo} from '../logo/logo';

export function Header(): JSX.Element {
  const isUserPage = false;
  const isLogin = false;
  const isAddReview = false;

  return (
    <header className={`page-header film-card__head ${isUserPage && 'user-page__head'}`}>
      <Logo/>

      {/*TODO add condition for MyList and Login pages*/}
      {isUserPage && <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>}
      {isLogin && <h1 className="page-title user-page__title">Sign in</h1>}
      {
        isAddReview &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
      }

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Film} from '../../types/film.type';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {films} from '../../mocks/films';
import {comments} from '../../mocks/comments';
import {Main} from '../../pages/main/main';
import {Login} from '../../pages/login/login';
import {MyList} from '../../pages/my-list/my-list';
import {AddReview} from '../../pages/add-review/add-review';
import {Player} from '../../pages/player/player';
import {NotFound} from '../../pages/not-found/not-found';
import {PrivateRoute} from '../private-route/private-route';
import {Movie} from '../../pages/movie/movie';
import {FilmOverview} from '../film-overview/film-overview';
import {FilmDetails} from '../film-details/film-details';
import {FilmReviews} from '../film-reviews/film-reviews';

const favoriteFilms = films.filter((film: Film) => film.isFavorite);

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={favoriteFilms}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={<Movie films={films}/>}
        >
          <Route
            path="overview"
            element={<FilmOverview film={films[0]}/>}
          />
          <Route
            path="details"
            element={<FilmDetails film={films[0]}/>}
          />
          <Route
            path="reviews"
            element={<FilmReviews comments={comments}/>}
          />
        </Route>
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReview
              name={films[0].name}
              posterImage={films[0].posterImage}
              backgroundImage={films[0].backgroundImage}
            />
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={films[0]}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

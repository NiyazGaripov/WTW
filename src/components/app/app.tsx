import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../consts';
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
            <PrivateRoute>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={<Movie/>}
        >
          <Route
            path="overview"
            element={<FilmOverview/>}
          />
          <Route
            path="details"
            element={<FilmDetails/>}
          />
          <Route
            path="reviews"
            element={<FilmReviews comments={comments}/>}
          />
        </Route>
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

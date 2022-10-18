import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, films} from '../../consts';
import {Main} from '../../pages/main/main';
import {Login} from '../../pages/login/login';
import {MyList} from '../../pages/my-list/my-list';
import {AddReview} from '../../pages/add-review/add-review';
import {Player} from '../../pages/player/player';
import {NotFound} from '../../pages/not-found/not-found';
import {PrivateRoute} from '../private-route/private-route';
import {Movie} from '../../pages/movie/movie';

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
          element={<MyList/>}
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={<Movie film={films[0]}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview name='Johnny English' backgroundImage='img/johnny-english.jpg'/>}
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

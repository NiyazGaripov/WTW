import {Route, Routes} from 'react-router-dom';
import {AppRoute, films} from '../../consts';
import {Main} from '../../pages/main/main';
import {Login} from '../../pages/login/login';
import {MyList} from '../../pages/my-list/my-list';
import {Film} from '../../pages/film/film';
import {AddReview} from '../../pages/add-review/add-review';
import {Player} from '../../pages/player/player';
import {NotFound} from '../../pages/not-found/not-found';

export function App(): JSX.Element {
  return (
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
        path={AppRoute.Movie}
        element={<Film film={films[0]}/>}
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
  );
}

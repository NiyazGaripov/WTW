import {Link} from 'react-router-dom';
import {genres} from '../../consts';

export function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map(({ name, path}) =>
          (
            <li
              key={name}
              className="catalog__genres-item catalog__genres-item--active"
            >
              <Link to={path} className="catalog__genres-link">{name}</Link>
            </li>
          )
        )
      }
    </ul>
  );
}

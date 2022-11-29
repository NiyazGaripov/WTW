import {Link} from 'react-router-dom';
import {GENRES} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre} from '../../store/action';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const {activeGenre} = useAppSelector((state) => state);

  return (
    <ul className="catalog__genres-list">
      {
        GENRES.map(({ name, path}) =>
          (
            <li
              key={name}
              className={`catalog__genres-item ${activeGenre === name && 'catalog__genres-item--active'}`}
            >
              <Link
                to={`?genre=${path}`}
                className="catalog__genres-link"
                onClick={() => dispatch(changeGenre(name))}
              >
                {name}
              </Link>
            </li>
          )
        )
      }
    </ul>
  );
}

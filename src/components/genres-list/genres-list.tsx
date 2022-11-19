import {Link} from 'react-router-dom';
import {GENRES} from '../../consts';
import {useAppDispatch} from '../../hooks';
import {changeGenre} from '../../store/action';

type Props = {
  activeGenre: string;
}

export function GenresList({activeGenre}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        GENRES.map(({ name, path}) =>
          (
            <li
              key={name}
              className={`catalog__genres-item ${activeGenre === path && 'catalog__genres-item--active'}`}
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

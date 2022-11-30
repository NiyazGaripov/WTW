import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre} from '../../store/action';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const {activeGenre, genres} = useAppSelector((state) => state);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li
              key={genre}
              className={`catalog__genres-item ${activeGenre === genre && 'catalog__genres-item--active'}`}
            >
              <Link
                to={`?genre=${genre}`}
                className="catalog__genres-link"
                onClick={() => dispatch(changeGenre(genre))}
              >
                {genre}
              </Link>
            </li>
          )
        )
      }
    </ul>
  );
}

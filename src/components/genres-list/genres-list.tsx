import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, resetNumberOfFilmsShown} from '../../store/action';

export function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const genres = useAppSelector((state) => state.genres);
  const handleLinkGenreClick = (genre: string) => {
    dispatch(changeGenre(genre));
    dispatch(resetNumberOfFilmsShown());
  };

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
                onClick={() => handleLinkGenreClick(genre)}
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

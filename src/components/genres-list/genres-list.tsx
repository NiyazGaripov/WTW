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
              <a href={path} className="catalog__genres-link">{name}</a>
            </li>
          )
        )
      }
    </ul>
  );
}

import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

export function Breadcrumbs(): JSX.Element {
  const {id, name} = useAppSelector((state) => state.movie);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}/overview`} className="small-film-card__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">Add review</span>
        </li>
      </ul>
    </nav>
  );
}

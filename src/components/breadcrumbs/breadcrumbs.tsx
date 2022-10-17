import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type Props = {
  filmName: string;
  path: string;
}

export function Breadcrumbs({filmName, path}: Props): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={path} className="breadcrumbs__link">{filmName}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={AppRoute.AddReview} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

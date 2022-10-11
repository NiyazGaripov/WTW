type Props = {
  filmName: string;
  path: string;
}

export function Breadcrumbs({filmName, path}: Props): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href={path} className="breadcrumbs__link">{filmName}</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

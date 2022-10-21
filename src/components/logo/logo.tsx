import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type Props = {
  isLightLogo?: boolean;
}

export function Logo({isLightLogo = false}: Props): JSX.Element {
  return (
    <Link to={AppRoute.Main} className={`logo__link ${isLightLogo && 'logo__link--light'}`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

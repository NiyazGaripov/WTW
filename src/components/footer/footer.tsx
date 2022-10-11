import {Logo} from '../logo/logo';

export function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Logo/>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

import {Link} from 'react-router-dom';
import styles from './not-found.module.css';
import {AppRoute} from "../../consts";

export function NotFound(): JSX.Element {
  return (
    <section className={`page--gray ${styles.wrapper}`}>
      <h1 className={styles.title}> Error 404. Page not found</h1>

      <Link to={AppRoute.Main} className={styles.link}>Back to home page</Link>
    </section>
  );
}

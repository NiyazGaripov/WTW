import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player';
import styles from './small-film-card.module.css';
import {Film} from '../../types/film.type';

type Props = {
  film: Film;
  isPlaying: boolean;
  onCardEnter?: () => void;
  onCardLeave?: () => void;
};

export function SmallFilmCard({film, isPlaying, onCardEnter, onCardLeave}: Props): JSX.Element {
  const {id, name, posterImage, videoLink, previewVideoLink} = film;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
    >
      {
        isPlaying && <VideoPlayer isPlaying={isPlaying} videoLink={videoLink} previewVideoLink={previewVideoLink}/>
      }
      <Link to={`/films/${id}/overview`} className={`small-film-card__image ${styles.block}`}>
        <img
          src={posterImage}
          alt={name}
          width="280"
          height="175"
        />
      </Link>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}/overview`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

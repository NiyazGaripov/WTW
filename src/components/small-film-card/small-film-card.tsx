import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player';
import styles from './small-film-card.module.css';

type Props = {
  id: number;
  name: string;
  posterImage: string;
  isPlaying: boolean;
  videoLink: string;
  previewVideoLink: string;
  onCardEnter?: () => void;
  onCardLeave?: () => void;
};

export function SmallFilmCard({id, name, posterImage, isPlaying, videoLink, previewVideoLink, onCardEnter, onCardLeave}: Props): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
    >
      {
        isPlaying ?
          <VideoPlayer isPlaying={isPlaying} videoLink={videoLink} previewVideoLink={previewVideoLink}/> :
          <Link to={`/films/${id}`} className={`small-film-card__image ${styles.block}`}>
            <img
              src={posterImage}
              alt={name}
              width="280"
              height="175"
            />
          </Link>
      }
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

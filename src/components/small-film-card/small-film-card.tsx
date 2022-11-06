import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {VideoPlayer} from '../video-player/video-player';

type Props = {
  name: string;
  posterImage: string;
  isPlaying: boolean;
  videoLink: string;
  previewVideoLink: string;
  onCardEnter?: () => void;
  onCardLeave?: () => void;
};

export function SmallFilmCard({name, posterImage, isPlaying, videoLink, previewVideoLink, onCardEnter, onCardLeave}: Props): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
    >
      {
        isPlaying ?
          <VideoPlayer isPlaying={isPlaying} videoLink={videoLink} previewVideoLink={previewVideoLink}/> :
          <div className="small-film-card__image">
            <img
              src={posterImage}
              alt={name}
              width="280"
              height="175"
            />
          </div>
      }
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

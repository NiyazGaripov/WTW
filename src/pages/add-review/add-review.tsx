import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Header} from '../../components/header/header';
import {ReviewForm} from '../../components/review-form/review-form';

type Props = {
  name: string;
  posterImage: string;
  backgroundImage: string;
};

export function AddReview({name, posterImage, backgroundImage}: Props): JSX.Element {
  return (
    <>
      <SvgSprite/>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header placeUse="add-review"/>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>
        </div>
        <ReviewForm/>
      </section>
    </>
  );
}

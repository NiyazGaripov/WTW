import {useAppSelector} from '../../hooks';
import {Review} from '../review/review';

export function FilmReviews(): JSX.Element {
  const comments = useAppSelector((state) => state.comments);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.map((comment) => (
            <Review
              key={comment.id}
              comment={comment}
            />
          ))
        }
      </div>
    </div>
  );
}

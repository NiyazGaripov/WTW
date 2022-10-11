import {Comment} from "../../types/comment.type";
import {Review} from "../review/review";

type Props = {
  comments: Comment[];
};

export function FilmReviews({comments}: Props): JSX.Element {
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

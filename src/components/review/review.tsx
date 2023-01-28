import {Comment} from '../../types/comment.type';
import {formatCommentDate} from '../../utils/date';

type Props = {
  comment: Comment;
};

export function Review({comment}: Props): JSX.Element {
  const commentDate = formatCommentDate(comment.date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={commentDate}>{commentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

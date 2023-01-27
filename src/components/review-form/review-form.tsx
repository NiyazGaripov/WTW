import {RatingFormControl} from '../rating-form-control/rating-form-control';
import {FormEvent} from 'react';
import {RATINGS} from '../../consts';
import {useAppDispatch} from '../../hooks';
import {useFormField} from '../../hooks/useFormField';
import {addNewCommentAction} from '../../store/api-actions';

enum ReviewLength {
  MIN = 50,
  MAX = 400
}

type Props = {
  id: number;
}

export function ReviewForm({id}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const rating = useFormField('',{ allowEmpty: true });
  const comment = useFormField('',{ allowEmpty: true, minLength: ReviewLength.MIN, maxLength: ReviewLength.MAX,});

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(addNewCommentAction({
      id: id,
      comment: comment.value,
      rating: Number(rating.value),
    }));
    rating.reset();
    comment.reset();
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              RATINGS.map(({value, title}) =>
                (
                  <RatingFormControl
                    key={value}
                    value={value}
                    title={title}
                    onFormFieldChange={rating.onChange}
                    currentValue={Number(rating.value)}
                  />
                )
              )
            }
          </div>
        </div>

        <p style={{fontSize: '14px'}}>The comment must contain at least {ReviewLength.MIN} and no more than {ReviewLength.MAX} characters</p>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="comment"
            placeholder="Review text"
            value={comment.value}
            onChange={comment.onChange}
          >
          </textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!rating.valid.inputValid || !comment.valid.inputValid}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

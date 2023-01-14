import {RatingFormControl} from '../rating-form-control/rating-form-control';
import {ChangeEvent, useState} from 'react';

enum ReviewLength {
  MIN = 50,
  MAX = 400
}

export function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '0',
    review: '',
  });

  const handleFormFieldChange = (name: string, value: number | string) => {
    setFormData({...formData, [name]: value});
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingFormControl/>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review"
            id="review"
            placeholder="Review text"
            value={formData.review}
            onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {
              const {name, value} = evt.target;
              handleFormFieldChange(name, value);
            }}
          >
          </textarea>

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={
                formData.rating === '0' &&
                (formData.review.length < ReviewLength.MIN || formData.review.length > ReviewLength.MAX)
              }
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

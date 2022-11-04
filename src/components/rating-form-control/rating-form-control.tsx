import {Rating} from '../../types/rating.type';

type Props = {
  ratings: Rating[];
};

export function RatingFormControl({ratings}: Props): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratings.map((rating) =>
            (
              <div key={rating.id}>
                <input
                  className="rating__input"
                  id={rating.id}
                  type="radio"
                  name="rating"
                  value={rating.value}
                />
                <label
                  className="rating__label"
                  htmlFor={rating.id}
                >
                  {rating.title}
                </label>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

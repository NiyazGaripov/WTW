import {RATINGS} from '../../consts';

export function RatingFormControl(): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          RATINGS.map((rating) =>
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

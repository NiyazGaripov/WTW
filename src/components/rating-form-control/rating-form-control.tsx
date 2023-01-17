import {ChangeEvent} from 'react';

type Props = {
  value: number;
  title: string;
  onFormFieldChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  currentValue: number;
}
export function RatingFormControl({value, title, onFormFieldChange, currentValue}: Props): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        onChange={onFormFieldChange}
        checked={value === currentValue}
      />
      <label
        className="rating__label"
        htmlFor={`star-${value}`}
        title={title}
      >
        {title}
      </label>
    </>
  );
}

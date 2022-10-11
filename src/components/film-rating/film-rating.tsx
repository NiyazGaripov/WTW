type Props = {
  rating: number,
  scoresCount: number,
}

type FilmRatingMap = {
  [x: string]: string,
  0: string,
  3: string,
  5: string,
  8: string,
  10: string,
};

const FILM_RATING_MAP: FilmRatingMap = {
  0: 'Bad',
  3: 'Normal',
  5: 'Good',
  8: 'Very good',
  10: 'Awesome',
};

const getLevelFromRating = (rating: number, levelMap: FilmRatingMap) => {
  const levels = Object.keys(levelMap).reverse();

  for (const level of levels) {
    if (rating >= parseInt(level, 10)) {
      return levelMap[level];
    }
  }

  return '';
};

export function FilmRating({rating, scoresCount}: Props): JSX.Element {
  return (
    <div className="film-rating">
      <div className="film-rating__score">{rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getLevelFromRating(rating, FILM_RATING_MAP)}</span>
        <span className="film-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
}

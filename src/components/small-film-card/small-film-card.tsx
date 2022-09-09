type Props = {
  name: string;
  posterImage: string;
};

export function SmallFilmCard({name, posterImage}: Props): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

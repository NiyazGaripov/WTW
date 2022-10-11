import {SvgSprite} from "../../components/svg-sprite/svg-sprite";
import {Header} from "../../components/header/header";

type Props = {
  name: string;
  backgroundImage: string;
};

export function AddReview({name, backgroundImage}: Props): JSX.Element {
  return (
    <>
      <SvgSprite/>
      <section className="film-card film-card--full">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>
      </section>
    </>
  );
}

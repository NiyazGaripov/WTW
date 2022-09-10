import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';

export function Main(): JSX.Element {
  return (
    <>
      <SvgSprite/>
      <FilmCard/>
      <div className="page-content">
        <Catalog/>
        <Footer/>
      </div>
    </>
  );
}

import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {films} from '../../consts';

export function Main(): JSX.Element {
  return (
    <>
      <SvgSprite/>
      <FilmCard film={films[0]}/>
      <div className="page-content">
        <Catalog>
          <GenresList/>
        </Catalog>
        <Footer/>
      </div>
    </>
  );
}

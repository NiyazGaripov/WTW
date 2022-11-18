import {useSearchParams} from 'react-router-dom';
import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {FilmCard} from '../../components/film-card/film-card';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {films} from '../../mocks/films';

export function Main(): JSX.Element {
  const [searchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || 'all';

  return (
    <>
      <SvgSprite/>
      <FilmCard film={films[0]}/>
      <div className="page-content">
        <Catalog films={films}>
          <GenresList activeGenre={activeGenre}/>
        </Catalog>
        <Footer/>
      </div>
    </>
  );
}

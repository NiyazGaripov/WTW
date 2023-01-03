import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Catalog} from '../../components/catalog/catalog';
import {useAppSelector} from '../../hooks';

export function MyList(): JSX.Element {
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies);

  return (
    <div className="user-page">
      <SvgSprite/>
      <Header placeUse="my-list"/>
      <Catalog films={favoriteMovies}/>
      <Footer/>
    </div>
  );
}

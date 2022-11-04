import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Catalog} from '../../components/catalog/catalog';
import {Film} from '../../types/film.type';

type Props = {
  films: Film[];
}

export function MyList({films}: Props): JSX.Element {
  return (
    <div className="user-page">
      <SvgSprite/>
      <Header placeUse="my-list"/>
      <Catalog films={films}/>
      <Footer/>
    </div>
  );
}

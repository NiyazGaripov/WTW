import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Catalog} from '../../components/catalog/catalog';

export function MyList(): JSX.Element {
  return (
    <>
      <SvgSprite/>
      <Header/>
      <Catalog/>
      <Footer/>
    </>
  );
}

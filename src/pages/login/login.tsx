import {SvgSprite} from '../../components/svg-sprite/svg-sprite';
import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {LoginForm} from '../../components/login-form/login-form';

export function Login(): JSX.Element {
  return (
    <div className="user-page">
      <SvgSprite/>
      <Header placeUse="login"/>
      <div className="sign-in user-page__content">
        <LoginForm/>
      </div>
      <Footer/>
    </div>
  );
}

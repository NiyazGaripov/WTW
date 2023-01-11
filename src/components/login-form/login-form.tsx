import {FormEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {useFormField} from '../../hooks/useFormField';
import {loginAction} from '../../store/api-actions';

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const email = useFormField('',{ allowEmpty: true, isEmail: true });
  const password = useFormField('',{ allowEmpty: true, minLength: 2, isPassword: true });

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(loginAction({ email: email.value, password: password.value }));
  };

  return (
    <form className="sign-in__form" onSubmit={handleFormSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            required
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          { (email.isDirty && email.valid.allowEmpty) && <p style={{color: 'red'}}>The field cannot be empty</p> }
          { (email.isDirty && email.valid.emailError) && <p style={{color: 'red'}}>Enter a valid email address</p> }
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            required
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          { (password.isDirty && password.valid.allowEmpty) && <p style={{color: 'red'}}>The field cannot be empty</p> }
          { (password.isDirty && password.valid.passwordError) && <p style={{color: 'red'}}>Password must consist of at least one letter and one number</p> }
          { (password.isDirty && password.valid.minLengthError) && <p style={{color: 'red'}}>The password must be at least 2 characters long</p> }
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          disabled={!email.valid.inputValid || !password.valid.inputValid}
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

import {useEffect, useState} from 'react';

const isValidEmail = (email: string) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const isValidPassword = (password: string) => String(password)
  .toLowerCase()
  .match(
    /[a-zA-Z]+[0-9]|[0-9]+[a-zA-z]/
  );

export type Validator = {
  allowEmpty?: boolean;
  isEmail?: boolean;
  isPassword?: boolean;
  minLength?: number;
};

export function useValidation(value: string, validators: Validator) {
  const [allowEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validator in validators) {
      switch (validator) {
        case 'allowEmpty':
          setEmpty(!value);
          break;
        case 'isEmail':
          setEmailError(!isValidEmail(value));
          break;
        case 'isPassword':
          setPasswordError(!isValidPassword(value));
          break;
        case 'minLength':
          setMinLengthError(value.length < validators[validator]!);
          break;
      }
    }
  }, [value, validators]);

  useEffect(() => {
    setInputValid(!(allowEmpty || emailError || passwordError || minLengthError));
  }, [allowEmpty, emailError, passwordError, minLengthError]);

  return { allowEmpty, emailError, passwordError, minLengthError, inputValid };
}

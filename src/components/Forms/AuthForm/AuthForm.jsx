import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/authOperations';
import * as yup from 'yup';

import {
  Buttons,
  Custom,
  FormAuth,
  Input,
  Label,
  StyleForm,
  TextForm,
} from './AuthForm.styled';
import { AuthGoogle } from './AuthGoogle';
import StyledButtonLog from 'components/Buttons/ButtonsLog.styled';

const shema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required(),
});
const initialValues = {
  email: '',
  password: '',
};
export const AuthForm = () => {
  const dispatch = useDispatch();
  const [button, setButton] = useState(null);

  const handleClick = e => {
    switch (e.target.name) {
      case 'login':
        console.log(true);
        return setButton(true);
      case 'register':
        console.log(false);
        return setButton(false);
      default:
        console.log('no');
        return;
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!button) {
      console.log('register');
      dispatch(register(values));
      return;
    }
    console.log('login');
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shema}
      onSubmit={handleSubmit}
    >
      <FormAuth>
        <AuthGoogle />
        <StyleForm>
          <TextForm>
            Or log in using an email and password, <br /> after registering:
          </TextForm>
          <label htmlFor="Email">
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="off"
            />
            <ErrorMessage name="email" component={Custom} />
          </label>
          <label>
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            <ErrorMessage name="password" component={Custom} />
          </label>
        </StyleForm>
        <Buttons>
          <StyledButtonLog onClick={handleClick} name="login" type="login">
            Log in
          </StyledButtonLog>
          <StyledButtonLog
            onClick={handleClick}
            name="register"
            type="register"
            style={{ marginRight: 0 }}
          >
            Registration
          </StyledButtonLog>
        </Buttons>
      </FormAuth>
    </Formik>
  );
};

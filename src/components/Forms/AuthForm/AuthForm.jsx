import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {
  Buttons,
  Custom,
  FormAuth,
  Input,
  Label,
  LogIn,
  Register,
  StyleForm,
  TextForm,
} from './AuthForm.styled';
import { AuthGoogle } from './AuthGoogle';

const shema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required(),
});
const initialValues = {
  email: '',
  password: '',
};
export const AuthForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <LogIn name="login" type="submit">
            Log in
          </LogIn>
          <Register type="submit">Registration</Register>
        </Buttons>
      </FormAuth>
    </Formik>
  );
};

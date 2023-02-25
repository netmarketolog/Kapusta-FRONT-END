// import { ButtonMain } from 'components/Buttons/ButtonMain';
// import Button from 'components/Buttons/Buttons';
import { Container } from 'components/Container/Container';
import { AuthForm } from 'components/Forms/AuthForm/AuthForm';
// import styled from 'styled-components';

// const TestStyled = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const AuthPage = () => {
  //   const testing = e => {
  //     e.preventDefault();
  //   };
  return (
    // <TestStyled>
    <Container>
      {/* <Button name="login" handleAction={testing}>
          Login
        </Button>
        <Button name="register" handleAction={testing}>
          Register
        </Button>
        <Button name="white" handleAction={testing}>
          Input
        </Button>
        <Button name="confirm" handleAction={testing}>
          Confirmation
        </Button> */}

      <AuthForm></AuthForm>
      {/* <ButtonMain></ButtonMain> */}
    </Container>
    // </TestStyled>
  );
};

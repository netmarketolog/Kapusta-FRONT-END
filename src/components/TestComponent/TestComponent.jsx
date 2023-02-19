import { BackToMain } from 'components/BackToMain/BackToMain';
import Button from 'components/Buttons/Buttons';
import { AuthForm } from 'components/Forms/AuthForm/AuthForm';
import styled from 'styled-components';

const TestStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestComponent = () => {
  const testing = e => {
    e.preventDefault();
  };
  return (
    <TestStyled>
      <Button name="login" handleAction={testing}>
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
      </Button>
      <AuthForm></AuthForm>
      <BackToMain></BackToMain>
    </TestStyled>
  );
};

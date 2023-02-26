import { ButtonMain } from 'components/Buttons/ButtonMain';
import Button from 'components/Buttons/Buttons';
import { ContainerAuth } from 'components/Container/ContainerAuth';

import { HomePages } from 'components/Home/HomePage';
import styled from 'styled-components';

import { Expenses } from 'components/Expenses/Expenses';

export const TestComponent = () => {
  const handleClear = () => {};

  return (
    <TestStyled>
      <ContainerAuth>
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
        <Button name="clear" handleAction={handleClear}>
          CLEAR
        </Button>
        <Expenses></Expenses>

        <ButtonMain></ButtonMain>
      </ContainerAuth>
      <HomePages></HomePages>
    </TestStyled>
  );
};
export default TestComponent;

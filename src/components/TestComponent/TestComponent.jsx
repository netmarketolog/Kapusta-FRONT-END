import Button from 'components/Buttons/Buttons';
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
        Войти
      </Button>
      <Button name="register" handleAction={testing}>
        регистрация
      </Button>
      <Button name="confirmation" handleAction={testing}>
        Подтвердить
      </Button>
      <Button name="balance" handleAction={testing}>
        баланс/любая
      </Button>
    </TestStyled>
  );
};

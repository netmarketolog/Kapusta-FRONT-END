import { ButtonMain } from 'components/Buttons/ButtonMain';
import Button from 'components/Buttons/Buttons';
import { ContainerAuth } from 'components/Container/ContainerAuth';

import { HomePages } from 'components/Home/HomePage';
import styled from 'styled-components';

const TestStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestComponent = () => {
  const testing = e => {
    e.preventDefault();
  };
  // const [formData, setFormData] = useState({
  //   description: '',
  //   category: '',
  //   sum: '',
  // });

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

        <ButtonMain></ButtonMain>
      </ContainerAuth>
      <HomePages></HomePages>
    </TestStyled>
  );
};
export default TestComponent;

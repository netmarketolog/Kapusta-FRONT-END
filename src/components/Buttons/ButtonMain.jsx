import logo from '../../images/icons/main.svg';
import { ButtonMainContainer, StyledLink, Text } from './ButtonMain.styled';

export const ButtonMain = () => {
  return (
    <ButtonMainContainer>
      <nav>
        <StyledLink to="/">
          <img src={logo} alt="logo" />
          <Text>Main menu</Text>
        </StyledLink>
      </nav>
    </ButtonMainContainer>
  );
};

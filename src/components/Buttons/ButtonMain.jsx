import logo from '../../images/icons/main.svg';
import { StyledLink, Text } from './ButtonMain.styled';

export const ButtonMain = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">
          <img src={logo} alt="logo" />
          <Text>Main menu</Text>
        </StyledLink>
      </nav>
    </div>
  );
};

import PropTypes from 'prop-types';
import StyledButton from './Button.styled';
import { BTN_NAME } from '../../utils/constants';

function Button({ name, handleAction, children }) {
  return (
    <StyledButton type={name} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf([
    BTN_NAME.REGISTER,
    BTN_NAME.LOGIN,
    BTN_NAME.ORANGE,
    BTN_NAME.WHITE,
    BTN_NAME.CONFIRM,
  ]),
  disabled: PropTypes.bool,
  handleAction: PropTypes.func,
};

export default Button;

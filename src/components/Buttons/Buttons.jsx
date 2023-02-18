import PropTypes from 'prop-types';
import StyledButton from './Button.styled';
import { BTN_TYPE } from '../../utils/constants';

function Button({ name, disabled = false, handleAction, children }) {
  return (
    <StyledButton type={name} disabled={disabled} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf([
    BTN_TYPE.REGISTER,
    BTN_TYPE.CONFIRMATION,
    BTN_TYPE.BALANCE_ENTRY,
  ]),
  disabled: PropTypes.bool,
  handleAction: PropTypes.func,
};

export default Button;

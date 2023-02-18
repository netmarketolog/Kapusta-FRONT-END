import StyledButton from './Button.styled';

function Button({ name, handleAction, children }) {
  return (
    <StyledButton type={name} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}

export default Button;

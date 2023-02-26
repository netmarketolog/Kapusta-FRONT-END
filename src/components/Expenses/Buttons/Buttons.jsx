import {StyledButton} from './Button.styled';

export function Button({ name, handleAction, children }) {
  return (
    <StyledButton type={name} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}


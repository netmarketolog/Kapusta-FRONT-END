import { StyledButton } from './Button.styled';

export function Button({ style, name, handleAction, children }) {
  return (
    <StyledButton style={style} type={name} onClick={handleAction}>
      {children}
    </StyledButton>
  );
}

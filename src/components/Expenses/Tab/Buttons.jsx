import StyledTabButton from './Button.styled';

function TabButton({ name, handleAction, children }) {
  return (
    <StyledTabButton type={name} onClick={handleAction}>
      {children}
    </StyledTabButton>
  );
}

export default TabButton;

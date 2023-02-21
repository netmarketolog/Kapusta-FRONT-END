import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  background-color: #f6f7fb;
  width: 122px;
  height: 40px;
  border-radius: 26px;
  filter: drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2));

  @media screen and (min-width: 768px) {
    width: 120px;
  }
`;

export const StyleG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const TextForm = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: start;
  color: #52555f;
`;

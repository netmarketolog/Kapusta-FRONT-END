import styled from 'styled-components';

export const Link = styled.a`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const Text = styled.p`
  font-size: 10px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
    margin-left: 16px;
  } ;
`;
export const Sum = styled.div`
  display: flex;
  flex-direction: row;
`;

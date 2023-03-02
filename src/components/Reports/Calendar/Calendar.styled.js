import styled from 'styled-components';

export const Wrap = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 42px;
    right: 32px;
    width: 150px;
  }
  @media screen and (min-width: 1280px) {
    top: 42px;
    right: 123px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  margin-bottom: 5px;
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnArrow = styled.button`
  cursor: pointer;
  width: 25px;
  height: 15px;

  justify-content: center;
  align-items: center;
  display: flex;

  background-color: transparent;
  border: none;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    transform: scale(2, 0.7);
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  width: 98px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;

export const ReportList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px 0px;

  margin: 0 auto;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 40px 15px;
  }
`;

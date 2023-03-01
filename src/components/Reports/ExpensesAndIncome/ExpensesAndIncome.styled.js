import styled from 'styled-components';

export const Section = styled.div`
  margin: 0 auto;
  border-radius: 30px;
  background-color: #ffffff;

  width: 100%;
  /* margin-top: 20px; */
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 20px 0;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1034px;
    margin-bottom: 37px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 625px;
    margin: 0 auto;
  }
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

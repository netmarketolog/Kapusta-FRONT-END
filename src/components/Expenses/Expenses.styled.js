import styled from 'styled-components';

export const TitleItem = styled.div`
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #000000;
  padding: 0 8px;
  text-transform: uppercase;
`;
export const Title = styled.div`
  @media screen and (min-width: 768px) {
    height: 40px;
    align-items: center;
    display: grid;
    font-size: 13px;
    font-weight: normal;
    color: #52555f;
    border-bottom: 2px solid #f4f6fb;
    grid-template-columns: 89px 142px 199px 107px 87px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: #f4f6fb;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 126px 168px 216px 117px 119px;
    height: 38px;
  }
`;
export const Container = styled.div`
  @media screen and (min-width: 768px) {
    width: 624px;
    margin-left: 40px;
  }

  @media screen and (min-width: 1200px) {
    width: 746px;
    margin-left: 32px;
  }
`;
export const Scrollbar = styled.div`
  overflow: auto;
  height: 342px;
  border-radius: 2px;
`;

export const BudgetList = styled.div`
  margin: 0;
  position: relative;
  border-left: 2px solid #f4f6fb;
  border-right: 2px solid #f4f6fb;
`;
export const Item = styled.div`
  height: 38px;
  grid-template-columns: 126px 168px 216px 117px 119px;
  align-items: center;
  display: grid;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  border-bottom: 2px solid #f4f6fb;
`;
export const Form = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  height: 44px;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
  }
`;
export const DatePicker = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ConteinerGeneral = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 704px;
    height: 616px;
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1200px) {
    width: 1098px;
    height: 579px;
    padding-top: 32px;
  }
`;
export const MainContainer = styled.div`
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
export const Cont = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 48px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    padding-top: 60px;
  }
`;
export const ButtonCont = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 32px;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    padding-top: 0px;
  }
`;
export const ContForm = styled.div`
  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

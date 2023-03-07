import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ExpIncContainer = styled.div`
  display: flex;
  position: relative;
  width: 280px;
  height: 85px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  justify-content: center;

  ::after {
    content: '';
    display: block;
    position: absolute;
    left: 140px;
    top: 7px;
    width: 1px;
    height: 70px;
    background-color: #e0e5eb;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 704px;
    height: 50px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    ::after {
      content: '';
      left: 352px;
      height: 36px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 1034px;
    ::after {
      content: '';
      left: 517px;
    }
  }
`;

export const ExpContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }
`;
export const IncContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-left: 20px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  text-align: center;
  color: #52555f;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 15px;
  }
`;

export const ExpInc = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  text-align: center;
  letter-spacing: 0.04em;
  color: #e53935;
`;

import styled from 'styled-components';

export const TabExInContainer = styled.div`
  display: block;
  width: 320px;
  margin: auto;
  @media screen and (min-width: 768px) {
    display: block;
    width: 624px;
  }

  @media screen and (min-width: 1280px) {
    width: 746px;
  }
`;

export const Scrollbar = styled.div`
  overflow-y: scroll;
  height: 342px;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f4f6fb;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff751d;
    border-radius: 2px;
    height: 130px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  @media screen and (min-width: 768px) {
    height: 40px;
    grid-template-columns: 90px 140px 200px 100px 80px;
    align-items: center;
    text-align: center;
    display: grid;
    font-size: 13px;
    font-weight: normal;
    color: #52555f;
    border-bottom: 2px solid #f4f6fb;
    border-right: 2px solid #f4f6fb;
    border-left: 2px solid #f4f6fb;
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    height: 38px;
    grid-template-columns: 130px 160px 210px 110px 120px;
  }
`;
export const DescriptionStyle = styled.p`
  font-weight: 700;
  color: #52555F;
  display: flex;
`
export const Plug = styled.div`
  height: 38px;
  grid-template-columns: 130px 160px 210px 110px 120px;
  align-items: center;
  text-align: center;
  display: grid;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  border-bottom: 2px solid #f4f6fb;
  border-right: 2px solid #f4f6fb;
  border-left: 2px solid #f4f6fb;
`;

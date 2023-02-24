import styled from 'styled-components';

export const TabExInContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 230px;
  }

  @media screen and (min-width: 1200px) {
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
    background: #FF751D;
    border-radius: 2px;
    height: 130px;
}
`;

// export const TitleContainer = styled.div`
//   background: #f5f6fb;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   padding: 12px 77px;
//   margin-bottom: 2px;

//   @media screen and (min-width: 1200px) {
//     margin-bottom: 4px;
//   }
// `;

// export const Text = styled.p`
//   text-align: center;
//   font-weight: 700;
//   font-size: 12px;
//   line-height: 14px;
//   text-transform: uppercase;
//   color: #000000;
// `;

export const Item = styled.li`
  height: 38px;
  grid-template-columns: 126px 168px 216px 117px 119px;
  align-items: center;
  text-align:center;
  display: grid;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  border-bottom: 2px solid #f4f6fb;
  border-right: 2px solid #f4f6fb;
  border-left: 2px solid #f4f6fb;
  
`;

export const Plug = styled.div`
  height: 38px;
  grid-template-columns: 126px 168px 216px 117px 119px;
  align-items: center;
  text-align:center;
  display: grid;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  border-bottom: 2px solid #f4f6fb;
  border-right: 2px solid #f4f6fb;
  border-left: 2px solid #f4f6fb;
`;

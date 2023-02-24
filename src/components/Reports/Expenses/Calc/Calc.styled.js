import styled from 'styled-components';

export const CalcS = styled.input`
  width: 280px;
  height: 44px;
  background-color: transparent;
  border-top-right-radius: 25px;
//   border-bottom-right-radius: 25px;
  padding-left: 19px;
  margin-right:32px;
  outline: none;
  border: 2px solid #C7CCDC;
//   border-right: 1px solid #C7CCDC;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  :hover {
    outline: none;
    border: 2px solid #C7CCDC;
    
  }
  @media screen and (min-width: 768px) {
    width: 186px;
    border-bottom-right-radius: 0px;
    border: 2px solid #f5f6fb;
  }

  @media screen and (min-width: 1200px) {
    width: 121px;
    border-left: 1px #C7CCDC;
  }
`;

// export const IconCalc = styled.img`
//     background-image: url('../../../../images/icons/calculator.png');
//     width: 20px;
//     height: 20px;
//     background-size: cover;
//     // fill: #52555F;
//     // padding-right: 10px;
//     position: absolute;
//     z-index: 1;
// `;

// export const ContCalk = styled.img`
//     displey: flex;
// `;
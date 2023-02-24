import styled from 'styled-components';

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (min-width: 320px) {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: 104px;
    display: flex;
    align-items: center;
<<<<<<< Updated upstream
    // justify-content: center;
    margin: 0 auto;
    margin-left: 32px;
//     width: 714px;
// `;
export const IconDate = styled.img`
    background-image: url('../../../../images/icons/calendar.png');
    width: 20px;
    height: 20px;
    background-size: cover;
    fill: #52555F;
    padding-right: 10px;
=======
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 30px;
    margin-right: 30px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 23px;
    margin-left: 0;
  }
>>>>>>> Stashed changes
`;


export default DateWrapper
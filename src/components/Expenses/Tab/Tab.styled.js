import styled from 'styled-components';

export const StyledButtonExpenses = styled.text`
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #FF751D;

`;

export const StyledButtonIncome = styled.text`
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #000000;

`;

export const TabConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 316px;
        @media screen and (min-width: 768px) {
        width: 276px;
        }
        @media screen and (min-width: 1200px) {
        width: 276px;
        }
`;
export const TitleConteinerExpenses = styled.div`
    background: #FEFEFE;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 40px;
    width: 98px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const TitleConteinerIncome = styled.div`
    background: #FAFBFD;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 40px;
    width: 98px;
    padding-left: 20px;
    padding-right: 20px;
`;
export const WrapConteiner = styled.div`
display: flex;
`;
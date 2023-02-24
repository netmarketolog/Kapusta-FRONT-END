import styled from 'styled-components';

//desktop

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
    height: 38px;
    align-items: center;
    display: grid;
    font-size: 13px;
    font-weight: normal;
    color: #52555f;
    border-bottom: 2px solid #f4f6fb;
    grid-template-columns: 126px 168px 216px 117px 119px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: #f4f6fb;
    
`;
export const Container = styled.div`
    width: 746px;
    margin-left: 32px;
    
`;
export const Scrollbar = styled.div`
    // display: block;
    overflow: auto;
    height: 342px;
    // width: 6px;
    // background-color: #FF751D;
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
    padding-top: 32px;
`;
export const DatePicker = styled.div`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 20px;
`;
export const ConteinerGeneral = styled.div`
    width: 1098px;
    height: 579px;
    background: #FFFFFF;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
`;
export const Cont = styled.div`
    display: flex;
    padding-top: 60px;
`;
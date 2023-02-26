import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        margin: 0 auto;
        margin-left: 40px;
    }
    
    @media screen and (min-width: 1200px) {
        margin-left: 32px;
    }
`;
export const IconDate = styled.img`
    background-image: url('../../../../images/icons/calendar.png');
    width: 20px;
    height: 20px;
    background-size: cover;
    fill: #52555F;
    // padding-right: 10px;
`;


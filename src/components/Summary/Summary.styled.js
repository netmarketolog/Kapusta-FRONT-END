import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 230px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const TitleContainer = styled.div`
  background: #f5f6fb;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 12px 77px;
  margin-bottom: 2px;
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #000000;
`;

export const Item = styled.li`
  background: #f5f6fb;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
  padding: 12px 20px 10px 22px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
`;
// export const SummaryContainer = styled.div`

// `;

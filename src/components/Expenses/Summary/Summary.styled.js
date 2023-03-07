import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 230px;
    margin-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    display: block;
    width: 213px;
    margin-left: 75px;
    margin-top: 0px;
  }
`;

export const TitleContainer = styled.div`
  background: #f5f6fb;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 12px 77px;
  margin-bottom: 2px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 4px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #000000;
`;

export const Item = styled.li`
  background: #f5f6fb;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
  padding: 13px 20px 11px 22px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  :last-child {
    border-bottom-right-radius: 20px;
    margin-bottom: 0px;
  }
`;

export const Plug = styled.div`
  background: #f5f6fb;
  padding: 20px 20px 18px 22px;
  margin-bottom: 2px;
  :last-child {
    border-bottom-right-radius: 20px;
    margin-bottom: 0px;
  }
`;

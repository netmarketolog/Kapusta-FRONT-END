import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ReportsLink = styled(NavLink)`
  display: flex;
  align-items: baseline;
  justify-content: center;

  margin-bottom: 43px;
  fill: '#52555F';
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;
  color: rgba(82, 85, 95, 0.7);

  transition-property: color fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #ff751d;
    fill: #ff751d;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ReportsText = styled.span`
  margin-right: 20px;
`;

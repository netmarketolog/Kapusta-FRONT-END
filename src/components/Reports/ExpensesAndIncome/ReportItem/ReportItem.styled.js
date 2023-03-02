import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ReportItemButton = styled.li`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  width: 92px;
  border-bottom: 1px solid #e0e5eb;

  @media screen and (min-width: 768px) {
    border-bottom: none;
    padding-bottom: 0px;
    width: 90px;
  }
`;

export const Sum = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #52555f;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const ButtonReport = styled(NavLink)`
  cursor: pointer;
  height: 60px;
  max-width: 60px;
  padding: 0;

  background-color: transparent;
  border: none;
  margin-bottom: 5px;
  fill: #071f41;

  &:hover > div {
    background-color: #ffdac0;
    transform: scale(1.1);
  }

  &:focus,
  &:hover svg {
    transform: scale(1.1);
    fill: #ff751d;
  }

  /* &.active {
    svg {
      transform: scale(1.1);
      fill: #ff751d;
    }
    > div {
      background-color: #ffdac0;
      transform: scale(1.1);
    }
  } */

  & > div {
    z-index: -1;
    display: block;
    width: 59px;
    height: 46px;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

    background-color: #f5f6fb;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 5px;
  }

  & > svg {
    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;

    fill: #071f41;
  }
`;

export const Type = styled.p`
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #52555f;
`;

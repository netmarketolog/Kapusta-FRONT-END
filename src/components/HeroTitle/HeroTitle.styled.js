import styled from 'styled-components';

import logo from '../../images/bgs/logoBgMobile.svg';
import logoTab from '../../images/bgs/logoBgTab.svg';
import logoDesc from '../../images/bgs/logoBgDesc.svg';

export const HeroLogo = styled.div`
  margin-top: 120px;
  margin-left: 170px;
  width: 183px;
  height: 63px;
  @media screen and (min-width: 768px) {
    width: 306px;
    height: 100px;
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 139px;
  }
`;

export const HeroTitl = styled.svg`
  width: 183px;
  height: 46px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 306px;
    height: 77px;
    background-image: url(${logoTab});
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 120px;
    background-image: url(${logoDesc});
  }
`;

export const HeroText = styled.h1`
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #52555f;
  padding-left: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.18em;
    padding-left: 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 70px;
  }
`;

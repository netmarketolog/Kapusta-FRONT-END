import styled from 'styled-components';

import logo from '../../images/bgs/logoBgMobile.svg';
import logoTab from '../../images/bgs/logoBgTab.svg';
import logoDesc from '../../images/bgs/logoBgDesc.svg';

export const HeroLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: 183px;
  height: 63px;
  margin: 50px auto 80px auto;

  @media screen and (min-width: 768px) {
    width: 307px;
    height: 101px;
    margin: 80px auto;
  }
  @media screen and (min-width: 1280px) {
    width: 377px;
    height: 139px;
    margin-right: 157px;
    margin-bottom: 80px;
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
  line-height: 1.15;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #52555f;
  padding-left: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 0.18em;
    padding-left: 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 70px;
  }
`;

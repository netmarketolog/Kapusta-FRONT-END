import styled from 'styled-components';

import img from '../../../images/bgs/kapustaMob.svg';
import imgTab from '../../../images/bgs/kapustaTab.svg';
import imgBot from '../../../images/bgs/kapustaNob-bottom.svg';
import imgTabBot from '../../../images/bgs/kapustaTab-bottom.svg';

export const BgIcon = styled.svg`
  position: fixed;
  z-index: -1;
  top: 104px;
  right: 0;
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 49px;
  height: 89px;
  @media screen and (min-width: 768px) {
    top: 84px;
    right: 0;
    background-image: url(${imgTab});
    background-repeat: repeat;
    width: 100%;
    height: 232px;
  }
`;
export const BgIconBottom = styled.svg`
  position: fixed;
  z-index: -1;
  bottom: -3px;
  left: 10%;
  background-image: url(${imgBot});
  background-repeat: no-repeat;
  width: 83px;
  height: 89px;
  @media screen and (min-width: 768px) {
    background-image: url(${imgTabBot});
    width: 183px;
    height: 142px;
    bottom: 76px;
    left: 13%;
    @media screen and (min-width: 1280px) {
      bottom: 50px;
      left: 17%;
    }
  }
`;

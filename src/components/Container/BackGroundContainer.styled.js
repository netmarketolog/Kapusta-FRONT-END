import styled from 'styled-components';

export const Image = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid transparent;
  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-image: url('../../../images/bgs-svg/bcgImageBottom.svg');
    background-position: right 10% bottom;
  }
  @media screen and (min-width: 1280px) {
    background-size: contain;
    background-image: url('../../images/bgs-svg/bcgImage.svg');
    background-position: right bottom;
  }
`;
export const Container = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 286px;
  border-radius: 0 0 0 45px;
  background-color: #f2f5fc;
  @media screen and (min-width: 768px) {
    height: 526px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

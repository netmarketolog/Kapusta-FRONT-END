import styled from 'styled-components';
import IconBG from './bgi.png';

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    max-width: 704px;
    height: 422px;
    border-radius: 30px;
    padding: 50px 35px 44px;
    margin: 0 auto;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }

  @media screen and (min-width: 1280px) {
    max-width: 1034px;
  }
`;

export const Section = styled.ul`
  box-sizing: border-box;

  margin: 0 auto;
  max-width: 450px;
  padding: 52px 30px 52px 20px;
  list-style: none;
  color: #52555f;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 635px;
    max-width: none;
    height: 328px;
    padding: 0 15px;
    background-image: url(${IconBG});
    background-position-y: -2px;
    background-size: cover;
  }

  @media screen and (min-width: 1280px) {
    width: 758px;
    padding: 0 76px;
  }
`;

export const Item = styled.li`
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 15px;
  background-color: #fed9bf;
  animation: left 500ms;

  @keyframes left {
    0% {
      width: 0;
    }
    100% {
      width: width;
    }
  }

  &:not(:last-child) {
    margin-bottom: 36px;
  }
  &:nth-child(3n + 1) {
    background-color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0;

    animation: up 500ms;

    @keyframes up {
      0% {
        height: 0;
      }
      100% {
        height: height;
      }
    }

    width: 38px;

    font-size: 12px;
    line-height: 14px;
    &:not(:last-child) {
      margin-right: 25px;
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.span`
  @media screen and (min-width: 768px) {
    width: 60px;
    text-align: center;
    position: absolute;
    bottom: -21px;
    left: -11px;
  }
`;

export const Sum = styled.span`
  @media screen and (min-width: 768px) {
    width: 60px;
    text-align: center;
    position: absolute;
    top: -25px;
    right: -11px;
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 767.99px) {
    position: absolute;
    bottom: 19px;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: calc(100% + 10px);
    min-width: 80px;
    font-size: 10px;
    line-height: 12px;
  }
`;

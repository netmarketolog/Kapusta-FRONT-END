import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormAuth = styled(Form)`
  position: absolute;
  left: 50%;
  top: -84px;
  transform: translate(-50%, 0);
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  padding: 40px 18px 53px 18px;
  width: 300px;
  height: 525px;
  background-color: #fff;
  box-shadow: 5px 10px 20px 5px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  text-align: center;
  @media screen and (min-width: 768px) {
    z-index: 4;
    width: 426px;
    height: 552px;
    /* top: -64%; */
    padding: 50px 85px 53px 85px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 117px;
    /* top: -409px; */
    left: 75%;
  }
`;
export const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    align-items: center;
  } ;
`;
export const Input = styled(Field)`
  display: flex;
  width: 240px;
  height: 52px;
  align-items: center;

  background: #f6f7fb;
  border-radius: 30px;
  border: none;
`;
export const Custom = styled.div`
  color: tomato;
  font-size: 10px;
`;
export const Label = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0 12px 0;
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
`;
export const Button = styled.button`
  width: 116px;
  height: 44px;
  border-radius: 16px;
  border: none;
  :hover {
    background-color: red;
  }
`;
export const LogIn = styled.button`
  width: 116px;
  height: 44px;
  border-radius: 16px;
  border: none;
  background: #ff751d;
  color: white;
  :hover {
    background-color: red;
  }
`;
export const TextForm = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: start;
  color: #52555f;
`;

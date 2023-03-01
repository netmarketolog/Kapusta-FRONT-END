import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 40px 20px 40px 20px;
  width: 280px;
  height: 496px;
  background-color: #fff;
  box-shadow: 5px 10px 20px 5px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    width: 426px;
    height: 552px;
    padding: 56px 83px 56px 83px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    margin: 117px 91px 125px 0;
  }
`;
export const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;
export const Input = styled(Field)`
  display: flex;
  width: 240px;
  height: 52px;
  background: #f6f7fb;
  border-radius: 30px;
  border: none;
  padding-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #a6abb9;

  @media screen and (min-width: 768px) {
    width: 259px;
    height: 52px;
  }
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
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextForm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #52555f;
`;

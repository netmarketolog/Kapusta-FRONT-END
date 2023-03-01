// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import {
  BtnArrow,
  ReportList,
  Section,
  Switcher,
  Title,
  Wrap,
} from './ExpensesAndIncome.styled';
import Icons from '../../../images/icons/spriteReportsSvg.svg';
import { ReportItem } from './ReportItem/ReportItem';

export const ExpensesAndIncome = ({
  report,
  changeOperation,
  setCategory,
  operation,
}) => {
  return (
    <Section>
      <Wrap>
        <Switcher>
          <BtnArrow onClick={changeOperation}>
            <svg width="8" height="15">
              <use href={`${Icons}#icon-arrow-left`}></use>
            </svg>
          </BtnArrow>
          <Title>
            {operation === 'expense' ? 'EXPENSES' : operation.toUpperCase()}
          </Title>
          <BtnArrow onClick={changeOperation}>
            <svg width="8" height="15">
              <use href={`${Icons}#icon-arrow-right`}></use>
            </svg>
          </BtnArrow>
        </Switcher>
        <ReportList>
          {report.map(({ total, name }) => (
            <ReportItem
              key={name}
              total={total}
              name={name.toUpperCase()}
              setCategory={setCategory}
            />
          ))}
        </ReportList>
      </Wrap>
    </Section>
  );
};

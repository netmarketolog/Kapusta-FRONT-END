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
  changeOperation,
  setCategory,
  operation,
  report,
  category,
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
          {report.length !== 0
            ? report.map(({ total, name }) => (
                <ReportItem
                  key={name}
                  total={total}
                  name={name}
                  setCategory={setCategory}
                  category={category}
                />
              ))
            : ''}
        </ReportList>
      </Wrap>
    </Section>
  );
};

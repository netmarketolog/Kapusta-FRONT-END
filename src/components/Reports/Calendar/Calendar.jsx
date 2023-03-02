import { BtnArrow, Switcher, Text, Title, Wrap } from './Calendar.styled';
import Icons from '../../../images/icons/spriteReportsSvg.svg';
// import { PropTypes } from 'prop-types';
//      <CalendarReport month={month} year={year} changeDate={changeDate} />

export const CalendarReport = ({
  month = 'MARCH',
  year = '2023',
  changeDate,
}) => {
  return (
    <Wrap>
      <Text>Current Texteriod:</Text>
      <Switcher>
        <BtnArrow onClick={() => changeDate('inc')}>
          <svg width="8" height="15">
            <use href={`${Icons}#icon-arrow-left`}></use>
          </svg>
        </BtnArrow>
        <Title>{`${month} ${year}`}</Title>
        <BtnArrow onClick={() => changeDate('dec')}>
          <svg width="8" height="15">
            <use href={`${Icons}#icon-arrow-right`}></use>
          </svg>
        </BtnArrow>
      </Switcher>
    </Wrap>
  );
};

// CalendarReport.propTypes = {
//   month: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
// };

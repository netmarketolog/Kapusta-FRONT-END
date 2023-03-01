import {
  ReportItemButton,
  Sum,
  Wrapper,
  ButtonReport,
  Type,
} from './ReportItem.styled';
import Icons from '../../../../images/icons/spriteReportsSvg.svg';

export const ReportItem = ({ name, total, setCategory }) => {
  return (
    <ReportItemButton>
      <Sum>{total}</Sum>
      <Wrapper>
        <ButtonReport onClick={() => setCategory(name)} name={name}>
          <svg width="60" height="60">
            <use href={`${Icons}#icon-${name}`}></use>
          </svg>
          <div>{name}</div>
        </ButtonReport>
      </Wrapper>
      <Type></Type>
    </ReportItemButton>
  );
};

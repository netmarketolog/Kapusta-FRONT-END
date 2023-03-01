import {
  ReportItemButton,
  Sum,
  Wrapper,
  ButtonReport,
  Type,
} from './ReportItem.styled';
import Icons from '../../../../images/icons/spriteReportsSvg.svg';

export const ReportItem = ({ name, total, setCategory }) => {
  console.log(name);
  return (
    <ReportItemButton>
      <Sum>{total}</Sum>
      <Wrapper>
        <ButtonReport onClick={() => setCategory(name)} name={name}>
          <svg width="60" height="60">
            <use href={`${Icons}#icon-${name.toLowerCase()}`}></use>
          </svg>
          <div></div>
        </ButtonReport>
      </Wrapper>
      <Type>{name}</Type>
    </ReportItemButton>
  );
};

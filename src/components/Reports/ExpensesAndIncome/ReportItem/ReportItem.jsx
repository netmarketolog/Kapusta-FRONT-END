import {
  ReportItemButton,
  Sum,
  Wrapper,
  ButtonReport,
  Type,
} from './ReportItem.styled';
import Icons from '../../../../images/icons/spriteReportsSvg.svg';
import { nanoid } from 'nanoid';

export const ReportItem = ({ name, total, setCategory }) => {
  return (
    <ReportItemButton key={nanoid()}>
      <Sum>{total}</Sum>
      <Wrapper>
        <ButtonReport onClick={() => setCategory(name)} name={name}>
          <svg width="60" height="60">
            <use
              href={`${Icons}#icon-${
                (name === 'Communal, communication' && 'communal') ||
                (name === 'Sports, hobbies' && 'sports') ||
                (name === 'Add. income' && 'add-income') ||
                name.toLowerCase()
              }`}
            ></use>
          </svg>
          <div></div>
        </ButtonReport>
      </Wrapper>
      <Type>{name}</Type>
    </ReportItemButton>
  );
};

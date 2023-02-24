import { arr } from 'components/Reports/Diagram/arr';
import { Diagram } from 'components/Reports/Diagram/Diagram';

export const ReportPage = () => {
  return (
    <>
      <Diagram stats={arr} />
    </>
  );
};

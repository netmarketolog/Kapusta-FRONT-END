import { arr } from 'components/Reports/Diagram/arr';
import { Diagram } from 'components/Reports/Diagram/Diagram';

const ReportPage = () => {
  return (
    <>
      <Diagram stats={arr} />
    </>
  );
};
export default ReportPage;

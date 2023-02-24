import React from 'react';
import { useLocation } from 'react-router';
import { ReportsLink, ReportsText } from './ReportsBtn.styled';

import { ReactComponent as ReportsSvg } from '../../../images/icons/ReportsSvg.svg';

export const ReportsBtn = () => {
  const location = useLocation();

  return (
    <ReportsLink to="/reports" state={{ from: location }}>
      <ReportsText>Reports</ReportsText>
      <ReportsSvg />
    </ReportsLink>
  );
};

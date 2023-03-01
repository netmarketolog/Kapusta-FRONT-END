import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Item, Section, Span, Sum, Title } from './Diagram.styled';

export const Diagram = ({ stats }) => {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);

  const onResize = () => {
    setWidthScreen(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', () => onResize());
    return window.removeEventListener('resize', () => onResize());
  }, []);
  let max;
  if (stats && stats[0]) {
    max = stats[0].total;
  }
  return (
    <Box>
      <Section>
        {stats?.slice(0, 10).map(item => {
          return (
            <Item
              key={item.name}
              style={
                widthScreen < 768
                  ? { width: `${(item.total * 100) / max}%` }
                  : { height: `${(item.total * 100) / max}%` }
              }
            >
              <Span>
                <Title>{item.name}</Title>
                <Sum>{item.total?.toLocaleString()} UAH</Sum>
              </Span>
            </Item>
          );
        })}
      </Section>
    </Box>
  );
};

Diagram.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

import { format, fromUnixTime } from 'date-fns';
import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ date, text }) => (
  <>
    <p data-for={text} data-tip={format(fromUnixTime(date), 'dd/MM/yyyy')}>
      {text}
    </p>
    <ReactTooltip id={text} delayShow={1000} effect="solid" />
  </>
);

export default Tooltip;

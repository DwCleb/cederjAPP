/**
 * TooltipHelp component
 *
 * @author: Cleber
 */

import React from 'react';
import Tooltip from 'react-native-dw-tooltip';
import { colors, metrics } from 'themes';
import { scale } from 'themes/metrics';


const TooltipHelp = (props) => {
  const {
    input,
    label,
  } = props;

  const size = input
    ? { textAlign: 'justify' }
    : { left: scale(60), right: scale(10), textAlign: 'justify' };

  return (
    <Tooltip
      label={label}
      overlayStyle={{ backgroundColor: colors.overlay }}
      tooltipContainerStyle={size}
    />
  );
};

TooltipHelp.defaultProps = {
  input: false,
  label: '',
};

export default TooltipHelp;

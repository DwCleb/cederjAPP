/**
 * Main menu
 *
 * @author: Cleber
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';
import TooltipHelp from 'components/TooltipHelp';

const PageHeader = (props) => {
  const {
    title,
    label,
  } = props;
  return (
    <View style={styles.subjectTitleView}>
      <Text style={styles.subjectTitle}>
        {title}
      </Text>
      {label
        && <TooltipHelp label={label} />
      }
    </View>
  );
};

TooltipHelp.defaultProps = {
  title: '',
  label: undefined,
};

export default PageHeader;

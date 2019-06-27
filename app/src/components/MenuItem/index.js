import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from 'themes';

const MenuItem = (props) => {
  const {
    title,
    icon,
    onPress,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress()} activeOpacity={0.8} style={styles.iconContainer}>
        <Icon name={(Platform.OS === 'ios') ? `ios-${icon}` : `md-${icon}`} size={25} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

MenuItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,

  onPress: PropTypes.func.isRequired,
};

export default MenuItem;

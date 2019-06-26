/**
 * Perfil
 *
 * @author: Cleber
 */

import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import styles from './styles';

const Button = (props) => {
  const {
    isLoading,
    disabled,
    onPress,
    title,
    blank,
  } = props;

  return (
    <TouchableOpacity
      style={blank ? styles.blankButton : styles.button}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {isLoading
        ? <ActivityIndicator size="small" color="#FFF" />
        : (
          <Text style={blank ?  styles.blankText : styles.buttonText}>
            {title}
          </Text>
        )
      }
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: () => {},
  title: 'Click',
  disabled: false,
  isLoading: false,
  blank: false,
};

export default Button;

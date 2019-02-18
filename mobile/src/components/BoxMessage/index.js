import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BoxMessage = (props) => {
  const { isVisible, message } = props;
  return (
    <View>
      { isVisible
        ? (
          <View style={styles.messageView}>
            <Text style={styles.messageText}>
              {message}
            </Text>
          </View>
        )
        : <Text />
      }
    </View>
  );
};

BoxMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default BoxMessage;

import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { colors } from 'themes';
import styles from './styles';
const NotificationCard = (props) => {
  const {
    title,
    subtitle,
    date,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.notificationContainer}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginHorizontal: 10 }}>
            <Icon name={(Platform.OS === 'ios') ? 'ios-notifications-outline' : 'md-notifications-outline'} size={28} color={colors.primary} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.notificationTitle}>
              {title}
            </Text>
            <Text style={styles.notificationSubtitle}>
              {subtitle}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationCard;

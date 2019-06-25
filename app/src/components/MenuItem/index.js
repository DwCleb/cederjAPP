import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MenuItem extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,

    onPress: PropTypes.func.isRequired,
  };

  render() {
    const {
      navigation,
      title,
      icon,
      onPress,
    } = this.props;

    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onPress()} activeOpacity={0.8} style={styles.iconContainer}>
          <Icon name={icon} size={25} color="#F00" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }
}

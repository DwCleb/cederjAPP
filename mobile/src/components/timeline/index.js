import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors, metrics } from 'styles';
import Utils from 'utils/utils';
import styles from './styles';


export default class Timeline extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
    item: PropTypes.shape({}).isRequired,
  };

  getName() {
    const { item } = this.props;
    const letters = /^[0-9()]+$/;
    const name = (letters.test(item.origin)) ? item.destination : item.origin;
    return name;
  }

  valueColor = () => {
    const { item } = this.props;
    const color = (item.type == 'c') ? 'rgba(46,125,50 ,1)' : colors.danger;
    return color;
  }

  goToDetails = () => {
    const { navigation, item } = this.props;
    navigation.navigate('StatementDetails', { item });
  }

  render() {
    const { navigation, item } = this.props;
    return (
      <TouchableOpacity onPress={() => this.goToDetails()} activeOpacity={0.8} style={styles.container}>
        <View style={styles.timeContainer}>
          <View style={styles.timeBG}>
            <Text style={styles.timeText}>{Utils.dateFormat(item.data, 3)}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{item.operation}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{this.getName()}</Text>
          </View>
        </View>
        <View style={styles.valueContainer}>
          <Text style={[styles.valueText, { color: this.valueColor(item.value) }]}>
            R$
            { Utils.decimal((item.value)) }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

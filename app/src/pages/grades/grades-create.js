/**
 * Perfil
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import styles from './styles';

class GradesCreate extends Component {
  static navigationOptions = {
    title: 'Criar nota',
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>
            GradesCreate
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...UserActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GradesCreate);

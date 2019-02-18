/**
 * Main menu
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
}  from 'react-native';
import { SafeAreaView, NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import OneSignal from 'react-native-onesignal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import MenuItem from 'components/MenuItem';
import Utils from 'utils/utils';
import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'CEDERJ APP',
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { user } = this.props;
    OneSignal.setExternalUserId(user.data.id_usuario);
  }

  componentDidMount() {
  }

  signOut = () => {
    const { signOut, navigation } = this.props;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' }),
      ],
    });
    signOut();
    navigation.dispatch(resetAction);
  }

  navigateOnPress(route) {
    const { navigation } = this.props;
    navigation.navigate(route);
  }

  render() {
    const {
      navigation,
      user,
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>{`Olá, ${user.data.nome.split(' ')[0]}`}</Text>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} bounces={false}>
          <MenuItem navigation={navigation} onPress={() => this.signOut()} route="" icon="sign-out" title="Sair" />
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);

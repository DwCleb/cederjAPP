/**
 * Perfil
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from 'components/PageHeader';

class NotificationCreate extends Component {
  static navigationOptions = {
    title: 'Calendário',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-calendar' : 'md-calendar'} size={28} color={tintColor} />,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Notificações"
          label={'Programe notificações para te lembrar estudar, de entregas de AD e dias da AP.\nVocê pode configurar as noticações de forma recorrente, diária ou semanal.'}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCreate);

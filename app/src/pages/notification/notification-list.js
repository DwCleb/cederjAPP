/**
 * Perfil
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Platform,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from 'components/PageHeader';
import Button from 'components/Button';
import NotificationList from 'components/NotificationList';

const notificationList = [
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
  {
    title: 'Estudar FAC',
    subtitle: 'Aula 03',
    isRecurrence: false,
    recurrence: {
      repeatType: '',
      repeatHour: '',
      repeatDay: '',
    },
    date: '2019-07-10 19:30',
    isActivity: true,
  },
];

class NotificationCreate extends Component {
  static navigationOptions = {
    title: 'Calendário',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-calendar' : 'md-calendar'} size={28} color={tintColor} />,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Calendário"
          label={'Programe notificações para te lembrar estudar, de entregar a AD e dias da AP.\nVocê também pode configurar as noticações de forma recorrente: diária ou semanal.'}
        />
        <View style={styles.buttonView}>
          <Button
            title="Cadastrar notificação"
            onPress={() => { }}
          />
        </View>
        <NotificationList data={notificationList} />
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

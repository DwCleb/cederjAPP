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
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from 'components/PageHeader';
import styles from './styles';

class SubjectCreate extends Component {
  static navigationOptions = {
    title: 'Cadastrar',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-add' : 'md-add'} size={40} color={tintColor} />,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Cadastrar Disciplina"
          label="Cadastre disciplinas que você está inscrito nesse semestre, de acordo com o seu curso."
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

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate);

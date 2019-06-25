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
import styles from './styles';
import PageHeader from 'components/PageHeader';

class ArchivedList extends Component {
  static navigationOptions = {
    title: 'Arquivados',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-archive' : 'md-archive'} size={28} color={tintColor} />,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Arquivados"
          label="Aqui ficam as disciplinas que você arquivou. O arquivamento pode ser feito você já terminou a disciplina ou trancou a mesma."
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

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedList);

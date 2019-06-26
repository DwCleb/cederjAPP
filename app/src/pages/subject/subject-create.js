/**
 * Perfil
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  View,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from 'components/PageHeader';
import InputText from 'components/InputText';
import Button from 'components/Button';
import styles from './styles';

class SubjectCreate extends Component {
  static navigationOptions = {
    title: 'Cadastrar',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-add' : 'md-add'} size={40} color={tintColor} />,
  }

  state = {
    subject: '',
    subjectList: [],
  }

  render() {
    const { subjectList } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Cadastrar Disciplina"
          label="Cadastre disciplinas que você está inscrito nesse semestre, de acordo com o seu curso."
        />
        <View style={styles.form}>
          <InputText
            title="Disciplinas"
            value={subjectList}
            onChangeText={subject => this.setState({ subject })}
            tooltip="Cadastre uma disciplina em que vocês esteja inscrito e lance suas notas para saber seu status."
            picker
          />
          <Button
            title="Cadastrar disciplina"
            onPress={() => {}}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate);

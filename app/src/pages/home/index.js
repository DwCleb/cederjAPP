/**
 * Main menu
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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import SubjectList from 'components/SubjectList';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';

const subjectList = [

  {
    title: 'FAC',
    grade: 80,
    status: 'recovery',
  },
  {
    title: 'POO',
    grade: 60,
    status: 'aproved',
  },
  {
    title: 'Modelagem da informação',
    grade: 75,
    status: 'reproved',
  },
  {
    title: 'Álgebra Linear',
    grade: 55,
    status: 'open',
  },
  {
    title: 'FAC',
    grade: 80,
    status: 'recovery',
  },
  {
    title: 'POO',
    grade: 60,
    status: 'aproved',
  },
  {
    title: 'Modelagem da informação',
    grade: 75,
    status: 'reproved',
  },
  {
    title: 'Álgebra Linear',
    grade: 55,
    status: 'open',
  },
  {
    title: 'FAC',
    grade: 80,
    status: 'recovery',
  },
  {
    title: 'POO',
    grade: 60,
    status: 'aproved',
  },
  {
    title: 'Modelagem da informação',
    grade: 75,
    status: 'reproved',
  },
  {
    title: 'Álgebra Linear',
    grade: 55,
    status: 'open',
  },
  {
    title: 'FAC',
    grade: 80,
    status: 'recovery',
  },
  {
    title: 'POO',
    grade: 60,
    status: 'aproved',
  },
  {
    title: 'Modelagem da informação',
    grade: 75,
    status: 'reproved',
  },
  {
    title: 'Álgebra Linear',
    grade: 55,
    status: 'open',
  },
];

class Home extends Component {
  static navigationOptions = {
    title: 'Início',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-home' : 'md-home'} size={28} color={tintColor} />,
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  render() {
    const {
      navigation,
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Olá, Cleber!</Text>
        </View>
        <PageHeader
          title="Disciplinas"
          label={'Aqui é a lista das disciplinas que você se cadastrou.\nEntenda as cores dos cartões:\nAzul - Falta notas para fechar o semestre.\nLaranha - Você está na AP3.\nVerde - Você está provado.\nVermelho - Você está reprovado.'}
        />
        {subjectList.length < 1
          ? (
            <View style={styles.buttonView}>
              <Button
                title="Cadastrar disciplina"
                onPress={() => navigation.navigate('SubjectCreate')}
              />
            </View>
          )
          : (
            <SubjectList data={subjectList} />
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

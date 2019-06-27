/**
 * Perfil
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  ScrollView,
  Platform,
  View,
} from 'react-native';
import { SafeAreaView, NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import MenuItem from 'components/MenuItem';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import PageHeader from 'components/PageHeader';
import InputText from 'components/InputText';
import Button from 'components/Button';

class Profile extends Component {
  static navigationOptions = {
    title: 'Perfil',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-person' : 'md-person'} size={28} color={tintColor} />,
  }

  state = {
    name: '',
    email: '',
    branches: [],
    courses: [],
    course: '',
    branch: '',
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://raw.githubusercontent.com/DwCleb/cederjAPP/master/app/src/services/mock/api.json')
      .then(res => res.json())
      .then(json => this.setState({
        branches: json.branches,
        courses: json.courses,
      }));
  };

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

  update = () => {
    console.tron.log(this.state);
  }

  render() {
    const {
      name,
      email,
      branches,
      courses,
    } = this.state;
    const { user } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Meu Perfil"
          label="Aqui ficam as suas informações, desde nome até qual poló vocês pertence. Você pode alterar os dados a qualquer momento.
          Lembre-se que determinados dados só serão exibidos de acordo com o seu curso, como as disciplinas para cadastro."
        />
        <ScrollView
          contentContainerStyle={styles.inputsStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <InputText
            title="Nome completo"
            placeholder="Nome"
            value={name}
            onChangeText={name => this.setState({ name })}
            tooltip="Seu nome completo, ou nome e sobrenome."
          />
          <InputText
            title="E-mail"
            keyboardType="email-address"
            placeholder="E-mail"
            value={email}
            onChangeText={email => this.setState({ email })}
            tooltip="Seu endereço de e-mail, válido."
          />
          <InputText
            title="Poló"
            value={branches}
            onChangeText={branch => this.setState({ branch: branches[branch] })}
            tooltip="O poló que vocês está inscrito."
            picker
          />
          <InputText
            title="Curso"
            value={courses.map(course => course.name)}
            onChangeText={course => this.setState({ course: courses[course].name })}
            tooltip="O curso o qual você está matriculado."
            picker
          />

          <Button
            title="Salvar alterações"
            onPress={() => this.update()}
          />
          <View style={styles.footerButton}>
            <MenuItem
              onPress={() => this.signOut()}
              icon="settings"
              title="Alterar senha"
            />
            <MenuItem
              onPress={() => this.signOut()}
              icon="warning"
              title="Reportar erro"
            />
            <MenuItem
              onPress={() => this.signOut()}
              icon="log-out"
              title="Sair"
            />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

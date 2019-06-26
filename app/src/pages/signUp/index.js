/**
 * Page for signUp Municipe
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Linking,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import InputText from 'components/InputText';
import Button from 'components/Button';
import Utils from 'utils/utils';
import styles from './styles';

class SignUp extends Component {
  static navigationOptions = {
    title: 'Cadastro',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
    insertUser: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    login: '',
    password: '',
    branch: [],
    course: [],
    cityId: '',
    stateId: '',
    message: null,
    loading: false,
    areaCode: '',
    profileId: 0,
    telephone: '',
    errorMessage: null,
    // Facebook data
    fbId: '',
    fbToken: '',
  }

  componentDidMount() {
    const { navigation } = this.props;
    const fbData = navigation.getParam('fbData', {});
    const fbId = (fbData.id != undefined) ? fbData.id : '';
    const fbToken = (fbData.accessToken != undefined) ? fbData.accessToken : '';
    this.setState({
      fbId,
      fbToken,
      name: (fbData.name != undefined) ? fbData.name : '',
      email: (fbData.email != undefined) ? fbData.email : '',
    });
    this.dropdownCities = React.createRef();
    this.fetchCities();
  }

  fetchCities = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`)
      .then(res => res.json())
      .then(json => this.setState({
        cities: json,
      }));
  };

  signUp = async () => {
    this.setState({ loading: true});
    const { insertUser, signIn, cleanUserMessage } = this.props;
    const {
      name,
      email,
      login,
      password,
      branch,
      course,
    } = this.state;

    this.setState({ login: email });

    let response = true;
    let errorMessage = null;

    try {
      // console.tron.log(this.state);
      // console.tron.log('empty');
      if (!this.isEmpty()) return false;
      // console.tron.log('pass');
      if (!Utils.validatePassword(password)) {
        errorMessage = 'Informe uma senha com mais de 4 dígitos.';
        response = false;
      }
      // console.tron.log('email');
      if (!Utils.validateEmail(email)) {
        errorMessage = 'Informe o E-mail corretamente.';
        response = false;
      }
      // console.tron.log('nome');
      if (!Utils.validateName(name)) {
        errorMessage = 'Informe o Nome corretamente, com mais de 2 caracteres.';
        response = false;
      }
      // console.tron.log('erros');
      if (!response) {
        this.setState({ errorMessage, loading: false });
        return false;
      }
      // cadastro
      // console.tron.log('cadas');
      await insertUser(this.state);
      await cleanUserMessage();
      setTimeout(() => {
        signIn(login, password, false);
      }, 1250);
      this.setState({ loading: false });
      return true;
    } catch (error) {
      return false;
    }
  }

  signIn = async () => {
    const { signIn } = this.props;
    const { login, password } = this.state;
    await signIn(login, password);
  }

  showSMessage = () => {
    const { user } = this.props;
    console.tron.log('alert');
    Alert.alert(
      'Atenção',
      user.message,
      [
        { text: 'Ok', onPress: () => this.dismissSMessage() },
      ],
      { cancelable: false },
    );
  }

  dismissSMessage =  () => {
    const { user, cleanUserMessage, signIn } = this.props;
    const { login, password } = this.state;
    this.setState({ errorMessage: null });
    if (user.message.indexOf('sucesso') !== -1) {
      console.tron.log('dismiss message');
      signIn(login, password);
    }
  }
  
  isEmpty() {
    const fields = this.state;
    let status = true;
    for (let index in fields) {
      if ((index !== 'errorMessage') && (fields[index] != undefined)) {
        if (
          (fields[index].length < 1)
          && (index !== 'fbId')
          && (index !== 'fbToken')
          && (index !== 'loading')
          && (index !== 'profileId')
          && (index !== 'cities')
          && (index !== 'states')
          ) {
            let field;
            if(index === 'name') field = 'Nome Completo';
            else if(index === 'email') field = 'E-mail';
            else if(index === 'cityId') field = 'Cidade';
          
            this.setState({ errorMessage: `O campo ${field} precisa ser preenchido.`, loading: false });
            status = false;
          break;
        }
      }
    }

    return status;
  }

  showErrorMessage() {
    const { errorMessage } = this.state;
    Alert.alert(
      '',
      errorMessage,
      [
        { text: 'OK', onPress: () => this.dismissErrorMessage() },
      ],
      { cancelable: false },
    );
  }

  dismissErrorMessage() {
    this.setState({ errorMessage: null });
  }

  render() {
    const {
      name,
      email,
      branch,
      course,
      password,
      errorMessage,
    } = this.state;
    const { user } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        {/* verifica mensagem de erro */}
        { errorMessage
          && this.showErrorMessage()
        }
        { !!user.message && this.showSMessage() }
        {/* { user.createLogin && this.signIn() } */}
        <View style={styles.form}>
          {/* campo do nome completo */}
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
            title="Confirmar E-mail"
            keyboardType="email-address"
            placeholder="E-mail"
            value={email}
            onChangeText={email => this.setState({ email })}
            tooltip="Seu endereço de e-mail, válido."
          />
          <InputText
            title="Senha"
            secureTextEntry
            placeholder="Senha"
            value={password}
            onChangeText={password => this.setState({ password })}
            tooltip="Seu senha."
          />
          <InputText
            title="Confirmar Senha"
            secureTextEntry
            placeholder="Senha"
            value={password}
            onChangeText={password => this.setState({ password })}
            tooltip="Sua senha."
          />
          <InputText
            title="Poló"
            value={branch}
            onChangeText={branch => this.setState({ branch })}
            tooltip="O poló que vocês está inscrito."
            picker
          />
          <InputText
            title="Curso"
            value={course}
            onChangeText={course => this.setState({ course })}
            tooltip="O curso o qual você está matriculado."
            picker
          />
          {/* área do link de termos de uso e politica de privacidade */}
          <View style={styles.link}>
            <Text style={styles.linkText}>
              Ao prosseguir você estará de acordo com os
            </Text>
            <Text
              style={styles.linkTextAccess}
              onPress={() => Linking.openURL('')}
            >
              Termos de Uso e Politíca de Privacidade.
            </Text>
          </View>
          {/* botão de cadastro */}
          <Button
            title="Cadastrar"
            onPress={this.signUp}
          />
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  user: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

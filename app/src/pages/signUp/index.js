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
import { TextInputMask } from 'react-native-masked-text';
import ModalDropdown from 'react-native-modal-dropdown';
import { StackActions, NavigationActions } from 'react-navigation';
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
    cities: [],
    states: [],
    cityId: '',
    stateId: '',
    message: null,
    loading: false,
    areaCode: '',
    profileId: 0,
    password: '',
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
      areaCode,
      password,
      telephone,
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
      cities,
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
        <View>
          {/* campo do nome completo */}
          <Text style={styles.inputTitle}> Nome Completo </Text>
          <TextInput
            style={styles.input}
            value={name}
            name="name"
            placeholder="José da Silva Almeida"
            autoCorrect={false}
            onChangeText={name => this.setState({ name })}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
          />
          {/* campo de E-mail */}
          <Text style={styles.inputTitle}> E-mail </Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="E-mail"
            autoCorrect={false}
            onChangeText={email => this.setState({ email })}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
          />
          {/* campo da senha */}
          <Text style={styles.inputTitle}> Senha </Text>
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={password => this.setState({ password })}
            autoCapitalize="none"
            secureTextEntry
            underlineColorAndroid="transparent"
          />
          {/* campo de seleção de cidade */}
          <Text style={styles.inputTitle}> Cidade </Text>
          <ModalDropdown
            ref={this.dropdownCities}
            style={styles.pickerStyle}
            options={cities.map(city => `${city.nome}`)}
            textStyle={styles.pickerTextStyle}
            defaultValue="Selecione a cidade"
            dropdownStyle={styles.pickerDropdownStyle}
            dropdownTextStyle={styles.pickerDropdownTextStyle}
            dropdownTextHighlightStyle={styles.pickerDropdownTextHighlightStyle}
            showsVerticalScrollIndicator={false}
            onSelect={ (index) => {
              this.setState({
                cityId: cities[index].id,
              });
            }
            }
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
          <TouchableOpacity
            style={styles.button}
            onPress={ () => this.signUp() }
            activeOpacity={0.8}
            disabled={user.isLoading}
          >
            { user.isLoading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text style={styles.buttonText}> Cadastrar </Text>
            }
          </TouchableOpacity>

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

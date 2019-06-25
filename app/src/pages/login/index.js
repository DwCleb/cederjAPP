/**
 * Page for Login user called municipe
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import styles from './styles';
import InputText from 'components/InputText';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    login: '',
    password: '',
  }

  signIn = () => {
    const { navigation } = this.props;
    // const { signIn } = this.props;
    // const { login, password } = this.state;

    // if (login === '' || password === '') {
    //   alert('Preencha todos os campos');
    //   return false;
    // }

    // signIn(login, password);
    // return true;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Menu' }),
      ],
    });
    navigation.dispatch(resetAction);
  }

  signInNavigation = () => {
    const { navigation } = this.props;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Menu' }),
      ],
    });
    navigation.dispatch(resetAction);
  }

  fbLogin = async () => {
    // console.tron.log(this.props);
    const { facebookLogin } = this.props;

    const response = await facebookAuth();
    // console.tron.log(response);

    if (response.error) return false;

    this.setState({
      fbData: response.user,
    });

    facebookLogin(response.user.id);

    return true;
  }

  fbSignUp = () => {
    const { facebookSignUp, navigation } = this.props;
    const { fbData } = this.state;
    navigation.navigate('SignUp', {
      fbData,
    });
    facebookSignUp();
  }

  render() {
    const {
      login,
      password,
    } = this.state;
    const { navigation, user } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        {user.isLogged && this.signInNavigation()}
        {user.fbSignUp && this.fbSignUp()}
        <View>
          <View style={styles.logoImage}>
            <Image
              source={require('images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
              alignSelf="center"
            />
          </View>
          {/* <Text style={styles.title}>Login</Text> */}
          <InputText
            title="E-mail"
            keyboardType="numeric"
            placeholder="E-mail"
            value={login}
            onChangeText={login => this.setState({ login })}
          />
          <InputText
            title="Senha"
            secureTextEntry
            placeholder="Senha"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
            activeOpacity={0.8}
            disabled={user.isLoading || user.isFbLoading}
          >
            {user.isLoading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text style={styles.buttonText}> Entrar </Text>
            }
          </TouchableOpacity>

          {/* Facebook Login */}
          {/* <TouchableOpacity
            style={styles.facebookButton}
            onPress={this.fbLogin}
            activeOpacity={0.8}
            disabled={user.isLoading || user.isFbLoading}
          >
            { user.isFbLoading
              ? <ActivityIndicator size="small" color="#FFF" />
              : (
                <Text>
                  <Icon name="facebook-official" size={28} style={styles.facebookIcon} />
                  <Text style={styles.facebookButtonText}> Entrar com Facebook </Text>
                </Text>
              )
            }
          </TouchableOpacity> */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.singUpButton}
            title="Cadastre-se"
            onPress={() => {
              navigation.navigate('SignUp', { name: 'SignUp' });
            }}
          >
            <Text style={styles.signUpButtonText}> Cadastre-se </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

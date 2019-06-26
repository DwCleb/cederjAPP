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
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import styles from './styles';
import InputText from 'components/InputText';
import Button from 'components/Button';

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

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Menu' }),
      ],
    });
    navigation.dispatch(resetAction);
  }

  signUp = () => {
    const { navigation } = this.props;

    navigation.navigate('SignUp', { name: 'SignUp' });
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
          <Button
            title="Entrar"
            onPress={this.signIn}
          />
          <Button
            title="Cadastre-se"
            onPress={this.signUp}
            blank
          />
        </View>
      </ScrollView >
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

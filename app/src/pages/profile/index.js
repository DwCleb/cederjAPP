/**
 * Perfil
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import MenuItem from 'components/MenuItem';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import PageHeader from 'components/PageHeader';
import InputText from 'components/InputText'

class Profile extends Component {
  static navigationOptions = {
    title: 'Perfil',
    tabBarIcon: ({ tintColor }) => <Icon name={(Platform.OS === 'ios') ? 'ios-person' : 'md-person'} size={28} color={tintColor} />,
  }

  state = {
    name: '',
    email: '',
    branch: '',
    course: '',
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

  render() {
    const {
      name,
      email,
      branch,
      course,
    } = this.state;
    const { user } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <PageHeader
          title="Perfil"
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

          <TouchableOpacity
            style={styles.button}
            onPress={ () => this.signUp() }
            activeOpacity={0.8}
            disabled={user.isLoading}
          >
            { user.isLoading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text style={styles.buttonText}> Salvar alterações </Text>
            }
          </TouchableOpacity>
          <MenuItem onPress={() => this.signOut()} route="" icon="sign-out" title="Sair" />
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

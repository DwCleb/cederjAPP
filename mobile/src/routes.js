import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from 'pages/login';
import SignUp from 'pages/signUp';
import Main from 'pages/main';
import { colors } from 'styles';

const MainNavigator = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Main: { screen: Main },
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
  },
});

const Routes = MainNavigator;
export default Routes;

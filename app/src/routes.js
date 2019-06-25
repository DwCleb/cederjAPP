import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import Login from 'pages/login';
import SignUp from 'pages/signUp';
import Home from 'pages/home';
import SubjectCreate from 'pages/subject/subject-create';
import Profile from 'pages/profile';
import Notification from 'pages/notification/notification-list';
import Archived from 'pages/archived/archived-list';
import { colors } from 'themes';

const MenuNavigator = TabNavigator({
  Home: { screen: Home },
  Notification: { screen: Notification },
  SubjectCreate: { screen: SubjectCreate },
  Archived: { screen: Archived },
  Profile: { screen: Profile },
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: colors.white,
    inactiveTintiColor: colors.whiteTransparent,
    style: {
      backgroundColor: colors.primary,
    },
    indicatorStyle: {
      backgroundColor: colors.danger,
      height: 8,
    },
  },
});

const MainNavigator = StackNavigator({
  SignUp: { screen: SignUp },
  Login: { screen: Login },
  Menu: { screen: MenuNavigator, navigationOptions: { title: 'Diário do Estudante' } },
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

const Routes = MainNavigator;
export default Routes;

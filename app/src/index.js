import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import {
  YellowBox,
  StatusBar,
} from 'react-native';

import 'config/reactotron';
import store from 'store';
import Routes from 'routes';
import { colors } from 'themes';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: jumpToIndex(...) is deprecated', '']);

export default class App extends Component {
  componentWillMount() {
    OneSignal.init('');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    // console.tron.log('Notification received: ', notification);
  }

  onOpened(result) {
    // console.tron.log('Message: ', result.notification.payload.body);
    // console.tron.log('Data: ', result.notification.payload.additionalData);
    // console.tron.log('isActive: ', result.notification.payload.isAppInFocus);
    // console.tron.log('Result: ', result);
  }

  onIds(device) {
    // console.tron.log('Device Info', device);
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
          <Routes />
        </Fragment>
      </Provider>
    );
  }
}

import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  modal: {
    padding: 0,
    width: metrics.screen.width,
    height: metrics.screen.height,
    margin: 0,
  },

  buttonBack: {
    width: metrics.screen.width,
    height: 50,
    backgroundColor: colors.darker,
    borderColor: colors.danger,
    borderWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBack: {
    color: colors.light,
  },

});

export default styles;

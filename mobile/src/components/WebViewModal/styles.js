import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  modal: {
    padding: 0,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    margin: 0,
  },

  buttonBack: {
    width: metrics.screenWidth,
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

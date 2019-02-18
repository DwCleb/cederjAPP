import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },

  logoImage: {
    flex: 10,
    justifyContent: 'center', // horizontal
    alignItems: 'center', // vertical
    flexDirection: 'row',
    marginBottom: metrics.baseMargin * 6,
  },

  logo: {
    width: metrics.screenWidth,
    height: 150,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
    marginBottom: metrics.baseMargin,
  },

  button: {
    backgroundColor: colors.darker,
    borderRadius: metrics.baseRadius,
    height: 50,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

  facebookButton: {
    backgroundColor: colors.facebook,
    borderRadius: metrics.baseRadius,
    height: 50,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  facebookButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 15,
  },

  facebookIcon: {
    marginRight: 20,
    color: colors.white,
  },

  signUpButton: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.light,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButtonText: {
    marginTop: metrics.baseMargin,
    color: colors.light,
    textAlign: 'center',
  },

});

export default styles;

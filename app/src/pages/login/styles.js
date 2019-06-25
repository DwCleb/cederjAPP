import { StyleSheet } from 'react-native';

import { metrics, colors } from 'themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteTransparent,
    padding: metrics.base.padding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: metrics.base.margin,
  },

  logoImage: {
    flex: 10,
    justifyContent: 'center', // horizontal
    alignItems: 'center', // vertical
    flexDirection: 'row',
    marginBottom: metrics.base.margin * 6,
  },

  logo: {
    width: metrics.screen.width,
    height: 150,
  },

  input: {
    backgroundColor: colors.white,
    borderColor: colors.darkTransparent,
    borderRadius: metrics.base.radius,
    borderWidth: 0.3,
    height: 40,
    marginBottom: metrics.base.margin,
    paddingHorizontal: metrics.base.padding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.base.radius,
    height: 50,
    marginTop: metrics.base.margin,
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
    borderRadius: metrics.base.radius,
    height: 50,
    marginTop: metrics.base.margin,
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
    marginTop: metrics.base.margin,
    backgroundColor: colors.light,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButtonText: {
    marginTop: metrics.base.margin,
    color: colors.darkTransparent,
    textAlign: 'center',
  },

});

export default styles;
import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'themes';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: metrics.base.padding * 2,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  form: {
    marginVertical: metrics.base.margin,
  },

  scroll: {
    backgroundColor: colors.white,
  },

  title: {
    ...general.title,
  },

  inputTitle: {
    ...general.inputTitle,
  },

  input: {
    ...general.input,
  },

  inputHalf: {
    ...general.inputHalf,
  },

  inputDDD: {
    ...general.inputDDD,
  },

  inputTelephone: {
    ...general.inputTelephone,
  },

  button: {
    ...general.button,
    marginTop: metrics.base.margin * 3,
    marginBottom: metrics.base.margin * 2,
  },

  link: {
    ...general.link,
    marginBottom: metrics.base.margin,
  },

  linkText: {
    ...general.linkText,
  },

  linkTextAccess: {
    ...general.linkTextAccess,
  },

  buttonText: {
    ...general.buttonText,
  },

  signUpButton: {
    marginTop: metrics.base.margin * 4,
    backgroundColor: colors.light,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpButtonText: {
    marginTop: metrics.base.margin,
    color: colors.light,
    textAlign: 'center',
  },

  pickerStyle: {
    ...general.pickerStyle,
  },

  pickerTextStyle: {
    ...general.pickerTextStyle,
  },

  pickerDropdownStyle: {
    ...general.pickerDropdownStyle,
  },

  pickerDropdownTextStyle: {
    ...general.pickerDropdownTextStyle,
  },

  pickerDropdownTextHighlightStyle: {
    ...general.pickerDropdownTextHighlightStyle,
  },

});

export default styles;

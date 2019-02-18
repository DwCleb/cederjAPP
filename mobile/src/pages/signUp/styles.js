import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding * 2,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'stretch',
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
    marginTop: metrics.baseMargin * 3,
    marginBottom: metrics.baseMargin * 2,
  },

  link: {
    ...general.link,
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
    marginTop: metrics.baseMargin * 4,
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

  pickerStyle:{
    ...general.pickerStyle,
  },

  pickerTextStyle:{
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

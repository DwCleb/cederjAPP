import { Platform } from 'react-native';
import colors from './colors';
import metrics from './metrics';

export default {
  pickerStyle: {
    width: metrics.screenWidth * 0.8,
  },

  pickerTextStyle:{
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    padding: 10,
    paddingHorizontal: metrics.basePadding,
  },

  pickerDropdownStyle: {
    width: metrics.screenWidth * 0.8,
    borderWidth: 1,
    borderColor: colors.light,
  },

  pickerDropdownTextStyle: {
    fontSize: 15,
    color: colors.dark,
  },

  pickerDropdownTextHighlightStyle: {
    backgroundColor: colors.primary,
    color: colors.white,
  },

  title: {
    textAlign: 'center',
    color: colors.darker,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screenWidth * 0.8,
  },

  inputHalf: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screenWidth * 0.34,
    left: -metrics.basePadding,
    marginHorizontal: metrics.basePadding,
  },

  inputDDD: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screenWidth * 0.20,
    left: -(metrics.basePadding - 15),
    marginHorizontal: metrics.basePadding - 15,
  },

  inputTelephone: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screenWidth * 0.59,
    left: -metrics.basePadding * 0.8,
    marginHorizontal: metrics.basePadding - 10,
  },

  inputTitle: {
    fontSize: 15,
    color: colors.dark,
    marginTop: metrics.baseMargin,
  },

  inputSubtitle: {
    fontSize: 9,
    color: colors.dark,
    marginTop: metrics.baseMargin - 10,
    textAlign: 'center',
  },

  link: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },

  linkText: {
    fontSize: 10,
    color: colors.dark,
    textAlign: 'center',
  },

  linkTextAccess: {
    color: 'blue',
    fontSize: 10,
    textAlign: 'center',
  },

  button: {
    backgroundColor: colors.darker,
    borderRadius: metrics.baseRadius,
    height: 50,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth * 0.8,
  },

  buttonHalf: {
    backgroundColor: colors.darker,
    borderRadius: metrics.baseRadius,
    height: 50,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth * 0.34,
    paddingHorizontal: metrics.basePadding,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

  messageView: {
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: metrics.basePadding * 1.2,
    borderRadius: metrics.baseRadius * 2,
    borderColor: colors.light,
    justifyContent: 'center',
    alignSelf: 'center',
    width: metrics.screenWidth * 0.7,
    height: 100,
    marginTop: metrics.baseMargin * 2,
  },

  messageText: {
    textAlign: 'center',
    color: colors.darker,
    fontSize: 15,
  },
};

import { Platform } from 'react-native';
import colors from './colors';
import metrics from './metrics';
import { scale } from 'react-native-dw-tooltip/app/theme/metrics';

export default {
  pickerStyle: {
    width: metrics.screen.width * 0.8,
  },

  pickerTextStyle:{
    fontSize: 15,
    borderWidth: scale(0.1),
    borderColor: colors.darkTransparent,
    borderRadius: metrics.base.radius,
    padding: 10,
    paddingHorizontal: metrics.base.padding,
  },
  
  pickerDropdownStyle: {
    width: metrics.screen.width * 0.789,
    borderWidth: 1,
    borderColor: colors.darkTransparent,
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
    marginBottom: metrics.base.margin,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.base.radius,
    height: 40,
    paddingHorizontal: metrics.base.padding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screen.width * 0.8,
  },

  inputHalf: {
    backgroundColor: colors.white,
    borderRadius: metrics.base.radius,
    height: 40,
    paddingHorizontal: metrics.base.padding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screen.width * 0.34,
    left: -metrics.base.padding,
    marginHorizontal: metrics.base.padding,
  },

  inputDDD: {
    backgroundColor: colors.white,
    borderRadius: metrics.base.radius,
    height: 40,
    paddingHorizontal: metrics.base.padding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screen.width * 0.20,
    left: -(metrics.base.padding - 15),
    marginHorizontal: metrics.base.padding - 15,
  },

  inputTelephone: {
    backgroundColor: colors.white,
    borderRadius: metrics.base.radius,
    height: 40,
    paddingHorizontal: metrics.base.padding,
    borderWidth: 1,
    borderColor: colors.light,
    width: metrics.screen.width * 0.59,
    left: -metrics.base.padding * 0.8,
    marginHorizontal: metrics.base.padding - 10,
  },

  inputTitle: {
    fontSize: 15,
    color: colors.dark,
    marginTop: metrics.base.margin,
  },

  inputSubtitle: {
    fontSize: 9,
    color: colors.dark,
    marginTop: metrics.base.margin - 10,
    textAlign: 'center',
  },

  link: {
    marginTop: metrics.base.margin * 2,
    alignSelf: 'center',
    paddingHorizontal: metrics.base.padding * 2,
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
    backgroundColor: colors.primary,
    borderRadius: metrics.base.radius,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonHalf: {
    backgroundColor: colors.primary,
    borderRadius: metrics.base.radius,
    height: 50,
    marginTop: metrics.base.margin,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screen.width * 0.34,
    paddingHorizontal: metrics.base.padding,
  },
  
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

  messageView: {
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: metrics.base.padding * 1.2,
    borderRadius: metrics.base.radius * 2,
    borderColor: colors.light,
    justifyContent: 'center',
    alignSelf: 'center',
    width: metrics.screen.width * 0.7,
    height: 100,
    marginTop: metrics.base.margin * 2,
  },

  messageText: {
    textAlign: 'center',
    color: colors.darker,
    fontSize: 15,
  },
};

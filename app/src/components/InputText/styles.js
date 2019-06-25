import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'themes';
import { scale } from 'themes/metrics';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.whiteTransparent,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.base.padding * 2,
  },

  titleView: {
    flexDirection: 'row',
    marginBottom: metrics.base.margin / 3,
  },

  input: {
    backgroundColor: colors.white,
    borderColor: colors.darkTransparent,
    borderRadius: metrics.base.radius,
    borderWidth: scale(0.3),
    height: 40,
    marginBottom: metrics.base.margin,
    paddingHorizontal: metrics.base.padding,
  },

  title: {
    color: colors.darkTransparent,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
  },


  pickerStyle: {
    borderWidth: scale(0.3),
    backgroundColor: colors.white,
    borderColor: colors.darkTransparent,
    borderRadius: metrics.base.radius,
    marginBottom: metrics.base.margin,
    width: '100%',
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

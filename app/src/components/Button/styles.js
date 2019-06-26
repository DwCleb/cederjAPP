import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'themes';

const styles = StyleSheet.create({
  button: {
    ...general.button,
    marginTop: metrics.base.margin / 2,
  },

  buttonText: {
    ...general.buttonText,
  },

  blankButton: {
    ...general.button,
    backgroundColor: colors.transparent,
    marginVertical: metrics.base.margin,
  },

  blankText: {
    ...general.buttonText,
    color: colors.darkTransparent,
  },
});

export default styles;

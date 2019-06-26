import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  inputsStyle: {
    paddingHorizontal: metrics.base.padding * 2,
  },

  button: {
    ...general.button,
    marginTop: metrics.base.margin / 2,
  },

  buttonText: {
    ...general.buttonText,
  },
});

export default styles;

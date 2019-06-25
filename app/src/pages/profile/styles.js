import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  inputsStyle: {
    padding: metrics.base.padding,
  },

  button: {
    ...general.button,
    marginTop: metrics.base.margin,
  },

  buttonText: {
    ...general.buttonText,
  },
});

export default styles;

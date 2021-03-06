import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'themes';

const styles = StyleSheet.create({
  button: {
    ...general.button,
    marginTop: metrics.base.margin / 2,
  },

  buttonText: {
    ...general.buttonText,
  },

  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
  },

  form: {
    marginVertical: metrics.base.margin,
    paddingHorizontal: metrics.base.padding * 2,
  },

});

export default styles;

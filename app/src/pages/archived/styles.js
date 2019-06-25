import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
  },

  helloContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.darkGrey,
    padding: metrics.base.padding / 2,
    width: metrics.screen.width,
  },

  helloText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;

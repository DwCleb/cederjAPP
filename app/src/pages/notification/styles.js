import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-start',
  },

  buttonView: {
    paddingHorizontal: metrics.base.padding * 2,
    paddingBottom: metrics.base.padding / 2,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
  },
  scrollView: {
    width: metrics.screen.width,
  },

  scrollViewContentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: metrics.base.margin / 2,
    paddingBottom: metrics.base.padding,
  },
});

export default styles;

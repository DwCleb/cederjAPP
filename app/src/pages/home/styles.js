import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';
import { scale } from '../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  scrollView: {
    width: metrics.screen.width,
  },

  subjectTitleView: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: metrics.base.margin,
    marginVertical: metrics.base.margin,
    flexDirection: 'row',
  },

  subjectTitle: {
    fontSize: scale(22),
    fontWeight: 'bold',
  },

  scrollViewContentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },

  helloContainer: {
    backgroundColor: colors.darkGrey,
    padding: metrics.base.padding / 2,
    width: metrics.screen.width,
    alignItems: 'flex-start',
  },

  balanceContainer: {
    backgroundColor: colors.grey,
    padding: metrics.base.padding / 2,
    width: metrics.screen.width,
    alignItems: 'flex-start',
  },

  helloText: {
    fontSize: 14,
    textAlign: 'center',
  },

  balanceText: {
    fontSize: 20,
    textAlign: 'center',
  },

  balanceTitle: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default styles;

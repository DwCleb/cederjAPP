import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  scrollView: {
    width: metrics.screenWidth,
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
    padding: metrics.basePadding / 2,
    width: metrics.screenWidth,
    alignItems: 'flex-start',
  },

  balanceContainer: {
    backgroundColor: colors.grey,
    padding: metrics.basePadding / 2,
    width: metrics.screenWidth,
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

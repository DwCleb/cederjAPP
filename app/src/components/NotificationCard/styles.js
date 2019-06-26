import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';
import { scale } from '../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  notificationContainer: {
    borderBottomColor: colors.darkTransparent,
    borderRightColor: colors.transparent,
    borderTopColor: colors.transparent,
    borderWidth: scale(0.25),
    padding: metrics.base.padding * 0.9,
    width: metrics.screen.width,
  },

  notificationTitle: {
    color: colors.darker,
    fontSize: scale(16),
    fontWeight: 'bold',
    marginHorizontal: metrics.base.margin,
  },

  notificationSubtitle: {
    color: colors.darkerTransparent,
    fontSize: scale(12),
    marginHorizontal: metrics.base.margin,
  },

});

export default styles;

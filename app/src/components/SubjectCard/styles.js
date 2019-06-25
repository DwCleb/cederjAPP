import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';
import { scale } from '../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  grade: {
    fontSize: scale(22),
    fontWeight: 'bold',
  },

  finalGrade: {
    fontSize: scale(10),
  },

  subjectContainer: {
    borderBottomColor: colors.darkTransparent,
    borderLeftColor: colors.dead,
    borderLeftWidth: scale(8),
    borderRightColor: colors.darkTransparent,
    borderTopColor: colors.darkTransparent,
    borderWidth: scale(0.3),
    padding: metrics.base.padding * 0.9,
    width: metrics.screen.width,
  },

  subjectTitle: {
    color: colors.darker,
    fontSize: scale(16),
    fontWeight: 'bold',
    marginHorizontal: metrics.base.margin,
  },

});

export default styles;

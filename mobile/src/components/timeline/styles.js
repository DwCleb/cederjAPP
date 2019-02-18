import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderBottomColor: colors.lighter,
    borderBottomWidth: 1,
  },

  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    height: '100%',
    // backgroundColor: colors.danger,
  },

  contentContainer: {
    flexWrap: 'wrap',
    flex: 8,
    flexDirection: 'column',
    // backgroundColor: colors.light,
  },

  titleContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 2,
    paddingHorizontal: 2,
    flex: 1,
    // backgroundColor: colors.primary,
  },

  descriptionContainer: {
    flexWrap: 'wrap',
    paddingTop: 2,
    paddingHorizontal: 2,
    // backgroundColor: colors.secondary,
    flex: 1,
  },

  valueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.success,
    flex: 3,
    height: '100%',
  },

  timeBG: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius * 2,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  line: {
    width: 2,
    marginBottom: -2,
    // backgroundColor: colors.black,
  },

  timeText: {
    fontSize: 14,
    color: colors.lighter,
  },

  titleText: {
    fontSize: 12,
    color: colors.darker,
  },

  descriptionText: {
    fontSize: 12,
    color: colors.dark,
  },

  valueText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default styles;

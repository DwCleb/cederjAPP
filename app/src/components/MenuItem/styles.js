import { StyleSheet } from 'react-native';
import { colors, metrics } from 'themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.light,
    borderWidth: 1,
    borderRadius: metrics.base.radius * 10,
    padding: 10,
    width: 60,
    height: 60,
  },

  title: {
    marginTop: 5,
    color: colors.dark,
    fontSize: 14,
    width: 70,
    textAlign: 'center',
  },
});

export default styles;

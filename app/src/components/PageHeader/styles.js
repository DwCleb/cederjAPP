import { StyleSheet } from 'react-native';
import { metrics } from 'themes';
import { scale } from '../../themes/metrics';

const styles = StyleSheet.create({
  subjectTitleView: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: metrics.base.margin,
    marginVertical: metrics.base.margin * 0.8,
    flexDirection: 'row',
  },

  subjectTitle: {
    fontSize: scale(18),
    fontWeight: 'bold',
  },

});

export default styles;

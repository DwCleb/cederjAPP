import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on iPhone 6 screen
const guidelineBaseWidth = 375;

export const scale = size => (width / guidelineBaseWidth) * size;

const screen = {
  width: width < height ? width : height,
  height: width < height ? height : width,
};

const base = {
  margin: scale(20),
  padding: scale(20),
  radius: scale(5),
};

// Used via metrics.
export default {
  screen,
  base,
};

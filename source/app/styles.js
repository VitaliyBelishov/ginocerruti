import { Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

const mixins = {
  color: {
    white: '#fff',
    orange: '#ffd700cc',
  },
  indent: {
    mini: 2,
    small: 4,
    middle: 6,
    medial: 8,
    doubleMiddle: 12,
    medium: 14,
    default: 16,
    big: 32,
  },
};

export default mixins;

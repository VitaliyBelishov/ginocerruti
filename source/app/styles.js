import { Dimensions, Platform } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const IS_IOS = Platform.OS === 'ios';
export const PIXEL_RATIO_BORDER = IS_IOS ? 0.5 : 1;

const mixins = {
  color: {
    white: '#fff',
    orange: '#ffd700cc',
    green: '#069C3B',
    grayBorder: '#e5e5e5',
    greyBorderInput: '#e0e0e0',
    grayText: '#4c4c4c',
    red: '#F90001',
    dark: '#363636',
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
  font: {
    smallFont: 12,
    defaultFont: 15,
    bigFont: 17,
    largeFont: 24,
  },
};

export default mixins;

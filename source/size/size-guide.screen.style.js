import { StyleSheet } from 'react-native';
import mixins, { DEVICE_WIDTH } from '../app/styles.js';

const styles = StyleSheet.create({
  scrollView: {
  },
  image: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH,
  },
  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: mixins.color.orange,
    alignSelf: 'flex-start',
  },
  titleText: {
    marginBottom: mixins.indent.middle,
    fontSize: 30,
    fontWeight: '400',
  },
});

export default styles;

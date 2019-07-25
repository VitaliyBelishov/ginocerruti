import { StyleSheet } from 'react-native';
import mixins, { DEVICE_WIDTH } from '../app/styles.js';

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: mixins.indent.doubleMiddle,
    backgroundColor: mixins.color.white,
  },
  image: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH,
  },
  titleView: {
    marginVertical: mixins.indent.default,
    borderBottomWidth: 1,
    borderBottomColor: mixins.color.orange,
    alignSelf: 'flex-start',
  },
  titleText: {
    marginBottom: mixins.indent.middle,
    fontSize: 30,
    fontWeight: '400',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: mixins.indent.medial,
    paddingHorizontal: mixins.indent.big,
  },
  buttonText: {
    fontSize: mixins.indent.medium,
  },
  collectionsContainter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mixins.indent.doubleMiddle,
  },
  collectionsText: {
    fontSize: 18,
  },
  calculateContainer: {
    // marginTop: mixins.indent.middle,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  marginRight: {
    marginRight: mixins.indent.medial,
  },
  marginRightDefault: {
    marginRight: 18,
  },
  inputContainer: {
    marginTop: mixins.indent.doubleMiddle,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: mixins.color.greyBorderInput,
    marginVertical: 0,
  },
  inputWrap: {
    flex: 1,
  },
  inputWrapMiddle: {
    flex: 1,
    marginHorizontal: mixins.indent.medial,
  },
  buttonCal: {
    marginTop: mixins.indent.medial,
    paddingVertical: mixins.indent.default,
    borderRadius: 5,
  },
  buttonTextCal: {
    color: mixins.color.white,
    fontSize: mixins.font.defaultFont,
  },
  swithText: {
    fontSize: mixins.font.smallFont,
    color: mixins.color.grayText,
  },
  calculateText: {
    fontSize: mixins.font.default,
  },
  calculateResultTextBold: {
    fontWeight: '500',
  },
});

export default styles;

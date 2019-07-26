import { StyleSheet } from 'react-native';
import mixins, { DEVICE_WIDTH } from '../app/styles.js';

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: mixins.indent.doubleMiddle,
    backgroundColor: mixins.color.white,
  },
  image: {
    marginTop: mixins.indent.default,
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
    borderColor: mixins.color.greyBorderInput,
    borderWidth: 1,
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
    fontSize: mixins.font.bigFont,
  },
  calculateResultTextBold: {
    fontWeight: '500',
  },
  errorText: {
    color: mixins.color.red,
  },
  headingCalculate: {
    color: mixins.color.dark,
    fontSize: 18,
    paddingVertical: mixins.indent.medial,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calculateSectionsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: mixins.indent.middle,
    borderRadius: 1,
  },
  sectionLeft: {
    flexShrink: 0,
  },
  sectionText: {
    color: mixins.color.grayText,
    fontSize: mixins.font.bigFont,
  },
  ginoSize: {
    marginTop: mixins.indent.middle,
    width: DEVICE_WIDTH / 3,
    height: DEVICE_WIDTH / 3,
    backgroundColor: mixins.color.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ginoSizeText: {
    color: mixins.color.dark,
    fontSize: 50,
    fontWeight: 'bold',
  },
  sectionRight: {
    paddingLeft: mixins.indent.big,
    alignItems: 'center',
  },
  giniSizeRusult: {
    color: mixins.color.dark,
    fontSize: 35,
    fontWeight: 'bold',
  },
  sectionRightWrap: {
    flex: 1,
    justifyContent: 'space-between',
  },
  safeAreaModal: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  doubleFlex: {
    flexShrink: 0,
  },
  headerModalContainer: {
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: mixins.color.greyBorderInput,
  },
  textModalHeader: {
    textAlign: 'center',
    fontSize: 18,
  },
  textModalHeaderClose: {
    textAlign: 'center',
  },
  sectionModal: {
    height: 40,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  activeSectionModal: {
    backgroundColor: mixins.color.orange,
  }
});

export default styles;

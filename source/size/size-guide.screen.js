import React, { useState, Fragment, useRef, useEffect } from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  Switch,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../form/button.js';
import InputText from '../form/input-text.js';
import { sizes, sizesList, collections, collectionsList } from '../size/size.const.js';

import mixins, { IS_IOS } from '../app/styles.js';
import styles from './size-guide.screen.style.js';

const TitleText = props => (
  <View style={styles.titleView}>
    <Text style={styles.titleText}>
      {props.text}
    </Text>
  </View>
);

const SizeGuide = () => {
  const [sizeOption, setSizeOption] = useState('sm');
  const [calculateSize, setCalculateSize] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [userCountry, setUserCountry] = useState();
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => setUserCountry(DeviceInfo.getDeviceCountry()), []);

  const getSizeByOption = value => {
    if (sizeOption === 'sm') return value;
    return (value / 2.54).toFixed(2);
  }

  const validate = () => {
    setErrorMessage([]);
    const bustFloat = parseFloat(bust);
    const waistFloat = parseFloat(waist);
    const hipsFloat = parseFloat(hips);
    let message = [];
    if (!bustFloat) {
      message = message.concat('Bust is required');
    } else {
      const bustFirstSize = getSizeByOption(sizes.bust.gino[sizesList[0]]);
      if (bustFloat < bustFirstSize) {
        message = message.concat(
          `Bust please enter a value greater than or equal to ${bustFirstSize}.`
        );
      }
      const bustLastSize = getSizeByOption(
        sizes.bust.gino[sizesList[sizesList.length - 1]]
      );
      if (bustFloat > bustLastSize) {
        message = message.concat(
          `Bust please enter a value less than or equal to ${bustLastSize}.`
        );
      }
    }

    if (!waistFloat) {
      message = message.concat('Waist is required');
    } else {
      const waistFirstSize = getSizeByOption(sizes.waist.gino[sizesList[0]]);
      if (waistFloat < waistFirstSize) {
        message = message.concat(
          `Waist please enter a value greater than or equal to ${waistFirstSize}.`
        );
      }
      const waistLastSize = getSizeByOption(
        sizes.waist.gino[sizesList[sizesList.length - 1]]
      );
      if (waistFloat > waistLastSize) {
        message = message.concat(
          `Waist please enter a value less than or equal to ${waistLastSize}.`
        );
      }
    }

    if (!hipsFloat) {
      message = message.concat('Hips is required');
    } else {
      const hipsFirstSize = getSizeByOption(sizes.hips.gino[sizesList[0]]);
      if (hipsFloat < hipsFirstSize) {
        message = message.concat(
          `Hips please enter a value greater than or equal to ${hipsFirstSize}.`
        );
      }
      const hipsLastSize = getSizeByOption(
        sizes.hips.gino[sizesList[sizesList.length - 1]]
      );
      if (hipsFloat > hipsLastSize) {
        message = message.concat(
          `Hips please enter a value less than or equal to ${hipsLastSize}.`
        );
      }
    }

    if (message.length) {
      setErrorMessage(message);
      return false;
    }
    return true;
  }

  const calculate = () => {
    setCalculateSize('');
    Keyboard.dismiss();
    if (validate()) {
      const bustFloat = parseFloat(bust);
      const waistFloat = parseFloat(waist);
      const hipsFloat = parseFloat(hips);
      let maxSize = '';
      sizesList.map(size => {
        if (bustFloat >= getSizeByOption(sizes.bust.gino[size])) {
          maxSize = size;
        }
        if (waistFloat >= getSizeByOption(sizes.waist.gino[size])) {
          maxSize = size;
        }
        if (hipsFloat >= getSizeByOption(sizes.hips.gino[size])) {
          maxSize = size;
        }
        return size;
      });
      if (maxSize) setCalculateSize(maxSize);
    }
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <KeyboardAwareScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid
        >
          <Fragment>
            <TitleText text="Whats my size ?" />
            <View style={styles.collectionsContainter}>
              <Text style={styles.collectionsText}>
                Please select collection:
              </Text>
              <Button
                whiteBordered
                style={styles.button}
                onPress={() => {}}
              >
                <Text style={styles.buttonText}>Evening Wear</Text>
              </Button>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../src/image/size-guide.jpg')}
              />
            </View>
            <TitleText text="Size calculator" />
            <View style={styles.calculateContainer}>
              <Text style={styles.calculateText}>
                {`Using size chart: ${collectionsList.map(id => collections[id].name).join(', ')}`}
              </Text>
              <View style={styles.switchContainer}>
                <Text style={styles.marginRight}>cm</Text>
                <Switch
                  value={sizeOption === 'inches'}
                  style={styles.marginRight}
                  trackColor={{
                    false: mixins.color.green,
                    true: mixins.color.green,
                  }}
                  thumbColor={IS_IOS ? null : mixins.color.white}
                  ios_backgroundColor={mixins.color.green}
                  onValueChange={res => setSizeOption(res ? 'inches' : 'sm')}
                />
                <Text style={styles.marginRight}>inches</Text>
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrap}>
                  <Text style={styles.swithText}>Bust</Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Bust"
                    value={bust}
                    onChange={text => {
                      setCalculateSize('');
                      setBust(text);
                    }}
                    keyboardType="numeric"
                    returnKeyType={IS_IOS ? 'done' : 'next'}
                    maxLength={6}
                  />
                </View>
                <View style={styles.inputWrapMiddle}>
                  <Text style={styles.swithText}>Waist</Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Waist"
                    value={waist}
                    onChange={text => {
                      setCalculateSize('');
                      setWaist(text);
                    }}
                    keyboardType="numeric"
                    returnKeyType={IS_IOS ? 'done' : 'next'}
                    maxLength={6}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <Text style={styles.swithText}>Hips</Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Hips"
                    value={hips}
                    onChange={text => {
                      setCalculateSize('');
                      setHips(text);
                    }}
                    returnKeyType="done"
                    keyboardType="numeric"
                    maxLength={6}
                  />
                </View>
              </View>
              {
                calculateSize ? (
                  <Fragment>
                    <Text style={styles.headingCalculate}>
                      You recomendendet size:
                    </Text>
                    <View style={styles.calculateSectionsWrap}>
                      <View style={styles.sectionLeft}>
                        <Text style={styles.sectionText}>
                          Gino size
                        </Text>
                        <View style={styles.ginoSize}>
                          <Text style={[styles.ginoSizeText, calculateSize.length === 4 && { fontSize: 30 }]}>
                            {calculateSize}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.sectionRight}>
                        <View style={styles.sectionRightWrap}>
                          <View>
                            <Text style={styles.sectionText}>
                              UK
                            </Text>
                            <Text style={styles.giniSizeRusult}>
                              {sizes.UK.gino[calculateSize]}
                            </Text>
                          </View>
                          {
                            userCountry && sizes[userCountry] ? (
                              <View>
                                <Text style={styles.sectionText}>
                                  {userCountry}
                                </Text>
                                <Text style={styles.giniSizeRusult}>
                                  {sizes[userCountry].gino[calculateSize]}
                                </Text>
                              </View>
                            ) : null
                          }
                        </View>
                      </View>
                    </View>
                  </Fragment>
                ) : null
              }
              {
                errorMessage.map(error => (
                  <Text style={styles.errorText}>
                    {error}
                  </Text>
                ))
              }
              <Button
                style={styles.buttonCal}
                success
                onPress={calculate}
              >
                <Text style={styles.buttonTextCal}>
                  Calculate
                </Text>
              </Button>
              <TitleText text="Size Charts" />
            </View>
          </Fragment>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

export default SizeGuide;

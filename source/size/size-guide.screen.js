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
  const [weist, setWeist] = useState('');
  const [hips, setHips] = useState('');
  const [userCountry, setUserCountry] = useState();
  const [errorMessage, setErrorMessage] = useState([]);
  const bustRef = useRef(null);
  const weistRef = useRef(null);
  const hipsRef = useRef(null);

  useEffect(() => setUserCountry(DeviceInfo.getDeviceCountry()), []);

  const convertSmToInches = value => {
    if (sizeOption === 'sm') return value;
    return (value / 2.54).toFixed(2);
  }

  const validate = () => {
    setErrorMessage([]);
    const bustFloat = parseFloat(bust);
    const weistFloat = parseFloat(weist);
    const hipsFloat = parseFloat(hips);
    let message = [];
    if (!bustFloat) {
      message = message.concat('Bust is required');
    }
    const bustFirstSize = convertSmToInches(sizes.bust.gino[sizesList[0]]);
    if (bustFloat && bustFloat < bustFirstSize) {
      message = message.concat(
        `Bust please enter a value greater than or equal to ${bustFirstSize}.`
      );
    }
    const bustLastSize = convertSmToInches(
      sizes.bust.gino[sizesList[sizesList.length - 1]]
    );
    if (bustFloat && bustFloat > bustLastSize) {
      message = message.concat(
        `Bust please enter a value less than or equal to ${bustLastSize}.`
      );
    }

    if (!weistFloat) {
      message = message.concat('Weist is required');
    }
    const weistFirstSize = convertSmToInches(sizes.weist.gino[sizesList[0]]);
    if (weistFloat && weistFloat < weistFirstSize) {
      message = message.concat(
        `Weist please enter a value greater than or equal to ${weistFirstSize}.`
      );
    }
    const weistLastSize = convertSmToInches(
      sizes.weist.gino[sizesList[sizesList.length - 1]]
    );
    if (weistFloat && weistFloat > weistLastSize) {
      message = message.concat(
        `Weist please enter a value less than or equal to ${weistLastSize}.`
      );
    }

    if (!hipsFloat) {
      message = message.concat('Hips is required');
    }
    const hipsFirstSize = convertSmToInches(sizes.hips.gino[sizesList[0]]);
    if (hipsFloat && hipsFloat < hipsFirstSize) {
      message = message.concat(
        `Hips please enter a value greater than or equal to ${hipsFirstSize}.`
      );
    }
    const hipsLastSize = convertSmToInches(
      sizes.hips.gino[sizesList[sizesList.length - 1]]
    );
    if (hipsFloat && hipsFloat > hipsLastSize) {
      message = message.concat(
        `Hips please enter a value less than or equal to ${hipsLastSize}.`
      );
    }

    if (message.length) {
      setErrorMessage(message);
      return false;
    }
    return true;
  }

  const calculate = () => {
    setCalculateSize();
    Keyboard.dismiss();
    if (validate()) {
      const bustFloat = parseFloat(bust);
      const weistFloat = parseFloat(weist);
      const hipsFloat = parseFloat(hips);
      let maxSize = '';
      sizesList.map(size => {
        if (bustFloat >= convertSmToInches(sizes.bust.gino[size])) {
          maxSize = size;
        }
        if (weistFloat >= convertSmToInches(sizes.weist.gino[size])) {
          maxSize = size;
        }
        if (hipsFloat >= convertSmToInches(sizes.hips.gino[size])) {
          maxSize = size;
        }
        return size;
      });
      if (maxSize) setCalculateSize(maxSize);
    }
  };

  const _focusNextField = (nextField, nameField) => {
    if (
      nextField &&
      nextField.current &&
      nextField.current.refs &&
      nextField.current.refs[nameField]
    ) {
      nextField.current.refs[nameField].focus();
    }
  }

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
                  />
                </View>
                <View style={styles.inputWrapMiddle}>
                  <Text style={styles.swithText}>Weist</Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Weist"
                    value={weist}
                    onChange={text => {
                      setCalculateSize('');
                      setWeist(text);
                    }}
                    keyboardType="numeric"
                    returnKeyType={IS_IOS ? 'done' : 'next'}
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
                  />
                </View>
              </View>
              {
                calculateSize ? (
                  <View style={styles.inputWrap}>
                    <Text style={styles.calculateText}>
                      Your size is:
                      <Text style={styles.calculateResultTextBold}>
                        {` ${calculateSize}`}
                      </Text>
                    </Text>
                    <Text style={styles.calculateText}>
                      Your UK Size is:
                      <Text style={styles.calculateResultTextBold}>
                        {` ${sizes.UK.gino[calculateSize]}`}
                      </Text>
                    </Text>
                    {
                      userCountry && sizes[userCountry] ? (
                        <Text style={styles.calculateText}>
                          {`Your ${userCountry} Size is:`}
                          <Text style={styles.calculateResultTextBold}>
                            {` ${sizes[userCountry].gino[calculateSize]}`}
                          </Text>
                        </Text>
                      ) : null
                    }
                  </View>
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

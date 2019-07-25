import React, { useState, Fragment, useRef } from 'react';
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
import { sizes, sizesList } from '../size/size.const.js';

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
  const bustRef = useRef(null);
  const weistRef = useRef(null);
  const hipsRef = useRef(null);

  const convertSmToInches = value => {
    if (sizeOption === 'sm') return value;
    return (value / 2.54).toFixed(2);
  }

  const calculate = () => {
    Keyboard.dismiss();
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
                <Text style={styles.buttonText}>
                  Evening Wear
                </Text>
              </Button>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: 'https://ginocerruti.com/img/gc-size-guide.jpg' }}
              />
            </View>
            <TitleText text="Size calculator" />
            <View style={styles.calculateContainer}>
              <Text style={styles.calculateText}>
                Using size chart: Bridesmaids, Evening Wear, Prom Dresses,Lenovia Bridal ,LENOVIA VIP
              </Text>
              <View style={styles.switchContainer}>
                <Text style={styles.marginRight}>
                  cm
                </Text>
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
                <Text style={styles.marginRight}>
                  inches
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrap}>
                  <Text style={styles.swithText}>
                    Bust
                  </Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Bust"
                    value={bust}
                    onChange={text => setBust(text)}
                    keyboardType="numeric"
                    returnKeyType={IS_IOS ? 'done' : 'next'}
                    ref={bustRef}
                    name="bustRef"
                    {...(IS_IOS ? {} : { onSubmitEditing: () => _focusNextField(weistRef, 'weistRef')})}
                  />
                </View>
                <View style={styles.inputWrapMiddle}>
                  <Text style={styles.swithText}>
                    Weist
                  </Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Weist"
                    value={weist}
                    onChange={text => setWeist(text)}
                    keyboardType="numeric"
                    returnKeyType={IS_IOS ? 'done' : 'next'}
                    ref={weistRef}
                    name="weistRef"
                    {...(IS_IOS ? {} : { onSubmitEditing: () => _focusNextField(hipsRef, 'hipsRef')})}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <Text style={styles.swithText}>
                    Hips
                  </Text>
                  <InputText
                    styleInputInner={styles.input}
                    placeholder="Hips"
                    value={hips}
                    onChange={text => setHips(text)}
                    returnKeyType="done"
                    keyboardType="numeric"
                    ref={hipsRef}
                    name="hipsRef"
                    onSubmitEditing={calculate}
                  />
                </View>
              </View>
              {
                calculateSize ? (
                  <View style={{ flex: 1 }}>
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
                  </View>
                ) : null
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

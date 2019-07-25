import * as React from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  SafeAreaView,
  ScrollView,
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

class SizeGuide extends React.Component {
  state = {
    sizeOption: 'sm',
    bust: '',
    weist: '',
    hips: '',
    calculateSize: '',
  };

  onChangeSizeOption = option => this.setState({ sizeOption: option, calculateSize: '' });

  onChangeText = (text, key) => this.setState({ [key]: text, calculateSize: '' });

  convertSmToInches = value => {
    if (this.state.sizeOption === 'sm') return value;
    return (value / 2.54).toFixed(2);
  }

  calculate = () => {
    Keyboard.dismiss();
    const bust = parseFloat(this.state.bust);
    const weist = parseFloat(this.state.weist);
    const hips = parseFloat(this.state.hips);
    let maxSize = '';
    sizesList.map(size => {
      if (bust >= this.convertSmToInches(sizes.bust.gino[size])) {
        maxSize = size;
      }
      if (weist >= this.convertSmToInches(sizes.weist.gino[size])) {
        maxSize = size;
      }
      if (hips >= this.convertSmToInches(sizes.hips.gino[size])) {
        maxSize = size;
      }
      return size;
    });
    if (maxSize) this.setState({ calculateSize: maxSize });
  };

  _focusNextField(nextField) {
    if (this.refs[nextField] && this.refs[nextField].refs && this.refs[nextField].refs[nextField]) {
      this.refs[nextField].refs[nextField].focus();
    }
  }


  render() {
    const { sizeOption, bust, weist, hips, calculateSize } = this.state;
    console.log('sizeOption =>', sizeOption);
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <KeyboardAwareScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            enableOnAndroid
          >
            <React.Fragment>
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
                    onValueChange={res => this.onChangeSizeOption(res ? 'inches' : 'sm')}
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
                      onChange={text => this.onChangeText(text, 'bust')}
                      keyboardType="numeric"
                      returnKeyType={IS_IOS ? 'done' : 'next'}
                      ref="bust"
                      name="bust"
                      {...(IS_IOS ? {} : { onSubmitEditing: () => this._focusNextField('weist')})}
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
                      onChange={text => this.onChangeText(text, 'weist')}
                      keyboardType="numeric"
                      returnKeyType={IS_IOS ? 'done' : 'next'}
                      ref="weist"
                      name="weist"
                      {...(IS_IOS ? {} : { onSubmitEditing: () => this._focusNextField('hips')})}
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
                      onChange={text => this.onChangeText(text, 'hips')}
                      returnKeyType="done"
                      keyboardType="numeric"
                      ref="hips"
                      name="hips"
                      onSubmitEditing={this.calculate}
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
                  onPress={this.calculate}
                >
                  <Text style={styles.buttonTextCal}>
                    Calculate
                  </Text>
                </Button>
                <TitleText text="Size Charts" />
              </View>
            </React.Fragment>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

export default SizeGuide;

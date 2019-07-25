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

  onChangeSizeOption = parameter => this.setState({ sizeOption: parameter });
  onChangeText = (text, key) => this.setState({ [key]: text });

  calculate = () => {
    const bust = parseFloat(this.state.bust);
    const weist = parseFloat(this.state.weist);
    const hips = parseFloat(this.state.hips);
    let maxSize = '';
    sizesList.map(size => {
      if (bust - sizes.bust[size] >= 0) {
        maxSize = size;
      }
      if (weist - sizes.weist[size] >= 0) {
        maxSize = size;
      }
      if (hips - sizes.hips[size] >= 0) {
        maxSize = size;
      }
      return size;
    });
    if (maxSize) this.setState({ calculateSize: maxSize });
  };

  convertSizeOption = () => {

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
                      returnKeyType="done"
                      keyboardType="numeric"
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
                      returnKeyType="done"
                      keyboardType="numeric"
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
                          {` ${sizes.UK[calculateSize]}`}
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

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
    sizeParameter: 'sm',
  };

  onChangeSizeParameter = parameter => this.setState({ sizeParameter: parameter });
  onChangeText = (text, key) => this.setState({ [key]: text });

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <KeyboardAwareScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
            keyboardShouldPersistTaps="handled"
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
                <Text style={styles.collectionsText}>
                  Using size chart: Bridesmaids, Evening Wear, Prom Dresses,Lenovia Bridal ,LENOVIA VIP
                </Text>
                <View style={styles.switchContainer}>
                  <Text style={styles.marginRight}>
                    cm
                  </Text>
                  <Switch
                    value={this.state.sizeParameter === 'sm'}
                    style={styles.marginRightDefault}
                    onChange={() => this.onChangeSizeParameter('sm')}
                  />
                  <Text style={styles.marginRight}>
                    inches
                  </Text>
                  <Switch
                    value={this.state.sizeParameter === 'inches'}
                    style={styles.marginRight}
                    onChange={() => this.onChangeSizeParameter('inches')}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.inputWrap}>
                    <InputText
                      styleInputInner={styles.input}
                      placeholder="Bust"
                      value={this.state.bust}
                      onChange={text => this.onChangeText(text, 'bust')}
                      returnKeyType="done"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputWrapMiddle}>
                    <InputText
                      styleInputInner={styles.input}
                      placeholder="Weist"
                      value={this.state.weist}
                      onChange={text => this.onChangeText(text, 'weist')}
                      returnKeyType="done"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputWrap}>
                    <InputText
                      styleInputInner={styles.input}
                      placeholder="Hips"
                      value={this.state.hips}
                      onChange={text => this.onChangeText(text, 'hips')}
                      returnKeyType="done"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <Button
                  // whiteBordered
                  style={styles.buttonCal}
                  success
                  onPress={() => {}}
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

import React, { Fragment } from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import styles from './size-guide.screen.style.js';

const TitleText = props => (
  <View style={styles.titleView}>
    <Text style={styles.titleText}>
      {props.text}
    </Text>
  </View>
);

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Fragment>
            <TitleText text="Whats my size ?" />
            <View>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: 'https://ginocerruti.com/img/gc-size-guide.jpg' }}
              />
            </View>
            <TitleText text="Size calculator" />
          </Fragment>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;

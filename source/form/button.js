/* @flow */
import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import mixins, { PIXEL_RATIO_BORDER } from '../app/styles.js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: mixins.indent.middle,
  },
  orange: {
    backgroundColor: mixins.color.orange,
  },
  success: {
    backgroundColor: mixins.color.green,
  },
  whiteBordered: {
    backgroundColor: mixins.color.white,
    borderWidth: PIXEL_RATIO_BORDER,
    borderColor: mixins.color.grayBorder,
  },
  secondary: {
    backgroundColor: mixins.color.graphite,
  },
  disable: {
    backgroundColor: mixins.color.grayBorder,
  },
  progressWrap: {
    position: 'absolute',
    zIndex: 1,
  },
});

type Props = {
  onPress: Function,
  children: React.Node,
  style?: StyleObj,
  orange?: boolean,
  whiteBordered?: boolean,
  success?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  isProgress?: boolean,
}

export default function Button(props: Props) {
  const {
    children,
    style,
    onPress,
    orange,
    whiteBordered,
    success,
    secondary,
    disabled,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.9}
      disabled={disabled}
      style={
        [
          styles.container,
          orange && styles.orange,
          whiteBordered && styles.whiteBordered,
          success && styles.success,
          secondary && styles.secondary,
          disabled && styles.disable,
          style,
        ]
      }
    >
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  style: {},
  orange: false,
  success: false,
  secondary: false,
  disabled: false,
  isProgress: false,
};

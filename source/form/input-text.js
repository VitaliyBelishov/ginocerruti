// @flow
import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import mixins, { PIXEL_RATIO_BORDER } from '../app/styles.js';

type Props = {|
  label?: string,
  style?: StyleObj,
  styleInputInner?: StyleObj,
  onChange: (value: Key) => void | Promise<void>,
  onFocus?: () => void,
  onBlur?: () => void,
  placeholder?: string,
  value: Key,
  autoFocus?: boolean,
  autoCorrect?: boolean,
  multiline?: boolean,
  numberOfLines?: number,
  children?: React.Node,
  maxLength?: number,
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad' | /* All platform */
    'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'name-phone-pad' |
    'decimal-pad' | 'twitter' | 'web-search' | /* iOS Only */
    'visible-password' /* Android */,
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send' | /* All platform */
    'none' | 'previous' | /* Android */
    'default' | 'emergency-call' | 'google' | 'join' | 'route' | 'yahoo',
  editable?: boolean,
  autoCapitalize?: 'characters' | /* all characters. */
    'words' | /* first letter of each word. */
    'sentences' | /* first letter of each sentence (default). */
    'none', /* don't auto capitalize anything. */
  onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void,
  name: string,
  secureTextEntry?: boolean,
  textContentType?: 'oneTimeCode',
|};

type State = {|
  value: Key,
|};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: mixins.indent.small,
    borderColor: mixins.color.grayLight,
    paddingVertical: mixins.indent.medial + mixins.indent.mini,
    minHeight: 42,
  },
  multilineWrap: {
    alignItems: 'flex-start',
    // minHeight: 80,
  },
  multiline: {
    paddingTop: mixins.indent.small,
  },
  label: {
    color: mixins.color.dark,
    paddingLeft: mixins.indent.small,
    fontSize: mixins.font.defaultFont,
  },
  input: {
    paddingHorizontal: mixins.indent.medial,
    flex: 1,
    paddingVertical: 0,
  },
});

export default class TextInputForm extends React.Component<Props, State> {
  state = { value: this.props.value };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value && nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (this.state.value !== nextState.value || nextProps.editable !== this.props.editable) {
      return true;
    }
    return false;
  }

  render() {
    const {
      onChange,
      onFocus,
      onBlur,
      label = '',
      style,
      styleInputInner = {},
      placeholder,
      autoFocus = false,
      multiline = false,
      autoCorrect = true,
      numberOfLines = 1,
      children = null,
      maxLength,
      keyboardType = 'default',
      returnKeyType = 'done',
      editable = true,
      autoCapitalize = 'sentences',
      onSubmitEditing,
      name,
      secureTextEntry = false,
    } = this.props;
    const atr = onSubmitEditing ? { onSubmitEditing } : {};
    return (
      <View style={[styles.container, multiline && styles.multilineWrap, style]}>
        {
          label ? (
            <Text style={[styles.label, multiline && styles.multiline]}>
              {label}
:
            </Text>
          ) : null
        }
        <TextInput
          ref={name}
          style={[styles.input, styleInputInner]}
          value={String(this.state.value || '')}
          placeholder={placeholder}
          multiline={multiline}
          autoFocus={autoFocus}
          numberOfLines={numberOfLines}
          autoCorrect={keyboardType === 'email-address' ? false : autoCorrect}
          placeholderTextColor={mixins.color.grayLight}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChangeText={text => {
            this.setState({ value: text }, () => {
              if (onChange) onChange(text);
            });
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          returnKeyType={returnKeyType}
          editable={editable}
          autoCapitalize={keyboardType === 'email-address' ? 'none' : autoCapitalize}
          secureTextEntry={secureTextEntry}
          {...atr}
        />
        {children}
      </View>
    );
  }
}

/**
 * Text input component
 * @author: Cleber
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import TooltipHelp from 'components/TooltipHelp';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';

const InputText = (props) => {
  const {
    option,
    picker,
    input,
    tooltip,
    title,
    value,
    onChangeText,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    autoCorrect,
    keyboardType,
    underlineColorAndroid,
    inputStyle,
    secureTextEntry,
  } = props;
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {title}
        </Text>
        {tooltip
          && (<TooltipHelp label={tooltip} input={input} />)
        }
      </View>
      {picker
        ? (
          <ModalDropdown
            style={styles.pickerStyle}
            options={value.length > 0 && value}
            textStyle={styles.pickerTextStyle}
            defaultValue={placeholder}
            dropdownStyle={styles.pickerDropdownStyle}
            dropdownTextStyle={styles.pickerDropdownTextStyle}
            dropdownTextHighlightStyle={styles.pickerDropdownTextHighlightStyle}
            showsVerticalScrollIndicator={false}
            onSelect={onChangeText}
          />
        )
        : (
          <TextInput
            secureTextEntry={secureTextEntry}
            style={[styles.input, inputStyle]}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeText}
            underlineColorAndroid={underlineColorAndroid}
          />
        )
      }
    </View>
  );
};

InputText.defaultProps = {
  option: [],
  picker: false,
  input: false,
  value: '',
  onChangeText: () => { },
  placeholder: '',
  placeholderTextColor: 'rgba(0, 0, 0, 0.3)',
  keyboardType: 'default',
  autoCapitalize: 'none',
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
  secureTextEntry: false,
  tooltip: undefined,
};

export default InputText;

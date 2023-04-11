import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {MainInputProps} from './types';
import styles from './styles';

export const MainInput: FC<MainInputProps> = ({
  onChangeText,
  title,
  placeholder,
  height,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.input, {height}]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

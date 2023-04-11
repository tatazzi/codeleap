import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {MainButtonProps} from './types';
import styles from './styles';

export const MainButton: FC<MainButtonProps> = ({
  children,
  backgroundColor,
  onPress,
  color,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor, borderColor}]}>
      <Text style={[styles.buttonText, {color}]}> {children}</Text>
    </TouchableOpacity>
  );
};

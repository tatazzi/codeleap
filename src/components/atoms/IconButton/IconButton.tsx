import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {IconButtonProps} from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  iconSize,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={iconName} size={iconSize} color={color} />
    </TouchableOpacity>
  );
};

import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {CreatePostProps} from './types';
import styles from './styles';
import {MainButton} from '../../atoms';
import {theme} from '../../../theme';

export const CreatePost: FC<CreatePostProps> = ({
  onPress,
  children,
  bgColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's on your mind</Text>
      {children}
      <View style={styles.buttonContainer}>
        <MainButton
          color={theme.colors.white}
          borderColor={bgColor}
          onPress={onPress}
          backgroundColor={bgColor}>
          Create
        </MainButton>
      </View>
    </View>
  );
};

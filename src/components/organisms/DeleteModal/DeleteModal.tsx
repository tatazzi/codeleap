import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {DeleteModalProps} from './types';
import {MainButton} from '../../atoms';
import {theme} from '../../../theme';
import styles from './style';

export const DeleteModal: FC<DeleteModalProps> = ({
  onDeletePress,
  onCancelPress,
}) => {
  return (
    <View>
      <Text style={styles.modalText}>
        Are you sure you want to delete this item?
      </Text>
      <View style={styles.modalDeleteContent}>
        <MainButton
          color={theme.colors.white}
          borderColor={theme.colors.red}
          onPress={onDeletePress}
          backgroundColor={theme.colors.red}>
          Delete
        </MainButton>
        <MainButton
          color={theme.colors.black}
          borderColor={theme.colors.black}
          onPress={onCancelPress}
          backgroundColor={theme.colors.white}>
          Cancel
        </MainButton>
      </View>
    </View>
  );
};

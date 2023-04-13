import React, {FC} from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';
import {MainModalProps} from './types';

export const MainModal: FC<MainModalProps> = ({visible, onClose, children}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>{children && children}</View>
      </View>
    </Modal>
  );
};

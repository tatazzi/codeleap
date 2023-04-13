import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {EditModalProps} from './types';
import {MainInput} from '../../molecules';
import {MainButton} from '../../atoms';
import {theme} from '../../../theme';
import styles from './styles';

export const EditModal: FC<EditModalProps> = ({
  onEditPress,
  onCancelPress,
  post,
}) => {
  const [editedTitle, setEditedTitle] = useState(post?.title);
  const [editedContent, setEditedContent] = useState(post?.content);
  return (
    <View>
      <Text style={styles.modalText}>Edit item</Text>
      <MainInput
        value={editedTitle}
        placeholder="Hello world"
        title="Title"
        onChangeText={setEditedTitle}
      />
      <MainInput
        value={editedContent}
        height={60}
        placeholder="Content here"
        title="Content"
        onChangeText={setEditedContent}
      />
      <View style={styles.modalDeleteContent}>
        <MainButton
          color={theme.colors.white}
          borderColor={theme.colors.green}
          onPress={() =>
            onEditPress({
              title: editedTitle,
              content: editedContent,
            })
          }
          backgroundColor={theme.colors.green}>
          Save
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
